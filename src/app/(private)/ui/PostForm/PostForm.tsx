"use client";
import React, { FC } from "react";

import { Modal } from "@/components";

import { PostFormProps } from "./PostForm.type";
import styles from "./PostForm.module.scss";
import { Profile } from "./components";

const PostForm: FC<PostFormProps> = ({ ...props }) => {
  return (
    <Modal {...props} classNames={styles["modal"]}>
      <div
        className={`${styles["menu"]} bg-bg-primary-light dark:bg-bg-primary-dark`}
      >
        <Profile {...props} />
      </div>
    </Modal>
  );
};

export default PostForm;
