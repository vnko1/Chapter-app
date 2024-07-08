import React, { FC, useEffect, useRef } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IconsEnum } from "@/types";
import { Button, Icon, ImageField, TextField } from "@/components";

import { FormProps } from "./Form.type";
import { FormValues, postSchema } from "./validationSchema";
import styles from "./Form.module.scss";
import { Carousel } from "nuka-carousel";
import CarouselImage from "../CarouselImage/CarouserImage";

const Form: FC<FormProps> = ({ text, title, files, previews, setPreviews }) => {
  const imageFieldRef = useRef<HTMLInputElement | null>(null);
  const methods = useForm<FormValues>({
    values: { text, title, images: files },
    resolver: zodResolver(postSchema),
    mode: "onChange",
  });

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { isDirty, isValid },
  } = methods;

  const images: Array<File> | undefined = watch("images");

  useEffect(() => {
    return () => {
      setValue("images", []);
    };
  }, [setValue]);

  const handleImageFieldClick = () => {
    imageFieldRef.current?.click();
  };

  const onSubmit: SubmitHandler<FormValues> = (formValues) => {
    console.log("🚀 ~ formValues:", formValues);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
        <ImageField id="images" name="images" inputRef={imageFieldRef} />
        <button
          type="button"
          className={styles["image-button"]}
          onClick={handleImageFieldClick}
        >
          <Icon
            size={24}
            icon={IconsEnum.Gallery}
            removeInlineStyle
            className="stroke-primary-default-light  dark:stroke-primary-default-dark"
          />
          <span>.png, .jpg, .gif</span>
        </button>
        <Carousel
          showArrows={images && images.length > 2}
          scrollDistance={280}
          wrapMode="wrap"
        >
          {(images && images.length ? images : previews).map((image, index) => (
            <CarouselImage
              images={images}
              key={index}
              image={image}
              alt="post image"
              width={280}
              height={172}
              classNames="min-h-[172px] min-w-[280px]"
              setValue={setValue}
              setPreviews={setPreviews}
            />
          ))}
        </Carousel>
        <TextField
          id="title"
          name="title"
          label="Add a title"
          aria-label="Title input field"
        />
        <Button
          type="submit"
          aria-label="Form submit button"
          classNames={styles["form__button"]}
          fullWidth
          size="large"
          disabled={!isValid || !isDirty}
        >
          Confirm
        </Button>
      </form>
    </FormProvider>
  );
};

export default Form;
