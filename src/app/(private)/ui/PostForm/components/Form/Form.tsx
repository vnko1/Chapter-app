"use client";
import React, { FC, useRef } from "react";

import { FormProps } from "./Form.type";
import styles from "./Form.module.scss";

import {
  Button,
  // TextAreaField,
  TextField,
  ImageField,
  Icon,
} from "@/components";
import { IconsEnum } from "@/types";

const Form: FC<FormProps> = (props) => {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const { handleSubmit, setShowPreview, previewUrl } = props;

  const onSubmit = () => {
    setShowPreview(true);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles["form"]}>
      <button
        className={styles["form__image-btn"]}
        type="button"
        onClick={() => {
          imageRef.current?.click();
        }}
      >
        <Icon icon={IconsEnum.Gallery} size={48} />
        <span>.png, .jpg, .gif</span>
      </button>
      <ImageField
        multiple
        width={280}
        height={172}
        id="image"
        name="image"
        inputRef={imageRef}
        previewClassNames={styles["preview"]}
        previewUrl={previewUrl}
      />
      {/* <TextField
        id="title"
        name="title"
        label="Add a title"
        classNames={styles["form__title"]}
        aria-label="Title input field"
      /> */}
      {/* <TextAreaField
        id="text"
        name="text"
        placeholder="Add a text"
        aria-label="Caption textarea field"
      /> */}
      <Button
        type="submit"
        fullWidth
        aria-label="Form submit button"
        classNames={styles["form__button"]}
      >
        Confirm
      </Button>
    </form>
  );
};

export default Form;
