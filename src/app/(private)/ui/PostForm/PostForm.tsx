"use client";
import React, { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

import { Icon, Modal } from "@/components";
import { default_avatar } from "@/utils";
import { IconsEnum } from "@/types";
import { useProfileContext } from "@/context";

import { Form, Preview } from "./components";
import { PostFormProps } from "./PostForm.type";
import { FormValues, postSchema } from "./validationSchema";
import styles from "./PostForm.module.scss";

const PostForm: FC<PostFormProps> = ({
  imageUrl,
  text,
  title,
  postId,
  ...props
}) => {
  const { user } = useProfileContext();
  const [showPreview, setShowPreview] = useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(postSchema),
    values: { title: title || "", text: text || "", image: null },
    mode: "onChange",
  });

  const { getValues, reset } = methods;

  return (
    <Modal
      {...props}
      classNames={styles["modal"]}
      activeClassNames={styles["active"]}
    >
      <div
        className={`${styles["body"]} bg-bg-primary-light dark:bg-bg-primary-dark md:border-line-primary-light md:dark:border-line-primary-dark`}
      >
        <div className={styles["top-wrapper"]}>
          <button onClick={() => props.close()}>
            <Icon
              icon={IconsEnum.Close}
              size={32}
              removeInlineStyle
              className={`${styles["close-icon--desc"]} stroke-primary-default-light dark:stroke-primary-default-dark`}
            />
            <Icon
              icon={IconsEnum.Arrow_left}
              size={24}
              removeInlineStyle
              className={`${styles["close-icon--mob"]} stroke-primary-default-light dark:stroke-primary-default-dark`}
            />
          </button>
          <div className={styles["body__user"]}>
            <div className={styles["user__avatar"]}>
              <Image
                src={user?.avatarUrl || default_avatar}
                alt="avatar"
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <p className={styles["user__nickname"]}>{user?.nickName}</p>
          </div>
        </div>
        {/*

        <div className={styles["body__content"]}>
          <FormProvider {...methods}>
            {showPreview ? (
              <Preview
                close={props.close}
                reset={reset}
                values={getValues()}
                setShowPreview={setShowPreview}
                postId={postId}
              />
            ) : (
              <Form
                setShowPreview={setShowPreview}
                previewUrl={imageUrl}
                {...methods}
              />
            )}
          </FormProvider>
        </div> */}
      </div>
    </Modal>
  );
};

export default PostForm;
