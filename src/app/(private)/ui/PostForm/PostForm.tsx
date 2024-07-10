"use client";
import React, { FC } from "react";

import { Modal } from "@/components";
import { usePost } from "@/hooks";

import { Form, Preview, Profile } from "./components";
import { PostFormProps } from "./PostForm.type";
import styles from "./PostForm.module.scss";

const PostForm: FC<PostFormProps> = ({ title, text, previews, ...props }) => {
  const postFormMethods = usePost({
    postTitle: title,
    postText: text,
    postPreviews: previews,
  });

  return (
    <Modal {...props} classNames={styles["modal"]}>
      <div
        className={`${styles["menu"]} bg-bg-primary-light dark:bg-bg-primary-dark`}
      >
        <Profile {...props} />
        {postFormMethods.showPost ? (
          <Preview
            {...postFormMethods}
            previews={previews || []}
            close={props.close}
          />
        ) : (
          <Form {...postFormMethods} />
        )}
      </div>
    </Modal>
  );
};

export default PostForm;
