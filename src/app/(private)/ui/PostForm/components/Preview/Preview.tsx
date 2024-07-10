import React, { FC, useState } from "react";
import { Carousel } from "nuka-carousel";

import { Button } from "@/components";
import { CustomError } from "@/services";
import { addPost, changePost } from "@/lib/actions";

import { CarouselImage } from "..";

import { PreviewProps } from "./Preview.type";
import styles from "./Preview.module.scss";

const Preview: FC<PreviewProps> = ({
  postForm,
  previews,
  postId,
  setShowPost,
  setPostForm,
  close,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { images, text, title } = postForm;

  const handleEditClick = () => {
    setShowPost(false);
  };

  const reset = () => {
    setPostForm({ text: "", title: "", images: [] });
    setShowPost(false);
    close();
  };

  const handleAddPost = async () => {
    const { images, text, title } = postForm;
    const fd = new FormData();
    if (text) fd.append("text", text);
    if (title) fd.append("title", title);
    if (images)
      images.forEach((image) => fd.append("images", image, image.name));

    setIsLoading(true);
    try {
      const res = await addPost(fd);
      if (res?.isError) throw new CustomError(res.error);
      reset();
    } catch (error) {
      if (error instanceof CustomError) {
        setError(error.errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditPost = async (postId: string) => {
    const fd = new FormData();
    if (text) fd.append("text", text);
    if (title) fd.append("title", title);
    if (images)
      images.forEach((image) => fd.append("images", image, image.name));
    setIsLoading(true);
    try {
      const res = await changePost({ postId, data: fd });
      if (res?.isError) throw new CustomError(res.error);
      reset();
    } catch (error) {
      if (error instanceof CustomError) {
        setError(error.errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onHandlePublish = async () => {
    if (postId) return await handleEditPost(postId);
    return await handleAddPost();
  };

  return (
    <div className={styles["preview"]}>
      <Carousel
        showArrows={images && images.length > 2}
        scrollDistance={280}
        wrapMode="wrap"
      >
        {(images && images.length ? images : previews).map((image, index) => (
          <CarouselImage
            key={index}
            image={image}
            alt="post image"
            width={280}
            height={172}
            classNames="min-h-[172px] min-w-[280px]"
          />
        ))}
      </Carousel>
      <div className={styles["preview__text"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["text"]}>{text}</p>
      </div>
      <div className={styles["buttons"]}>
        <Button
          classNames={styles["button--mob"]}
          variant="contained"
          fullWidth
          onClick={onHandlePublish}
          isLoading={isLoading}
        >
          Publish
        </Button>
        <Button
          classNames={styles["button--mob"]}
          variant="outlined"
          fullWidth
          onClick={handleEditClick}
        >
          Edit
        </Button>
        <Button
          classNames={styles["button--desc"]}
          variant="contained"
          size="large"
          fullWidth
          isLoading={isLoading}
          onClick={onHandlePublish}
        >
          Publish
        </Button>
        <Button
          classNames={styles["button--desc"]}
          variant="outlined"
          size="large"
          fullWidth
          onClick={handleEditClick}
        >
          Edit
        </Button>
      </div>
      {error && (
        <p
          className={`${styles["error"]} text-error-primary-light dark:text-error-primary-dark`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Preview;
