"use client";
import React, { ChangeEvent, FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { ImageFieldProps } from "./ImageField.type";
import styles from "./ImageField.module.scss";

const ImageField: FC<ImageFieldProps> = ({
  setPreviews,
  name,
  id,
  inputRef,
  classNames,
  disabled,
}) => {
  const { register, setValue, getValues } = useFormContext();
  const values = getValues(name);
  const { ref: registerRef, ...rest } = register(name);

  useEffect(() => {
    if (Array.isArray(values)) {
      setPreviews(values.map((value) => URL.createObjectURL(value)));
    }
  }, [setPreviews, values]);

  const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const filesList = event.target.files;
    const files = Array.from(filesList);
    setValue(name, files);
    setPreviews(files.map((file) => URL.createObjectURL(file)));
    event.target.value = "";
  };

  return (
    <div className={`${styles["picture-field"]} ${classNames}`}>
      <input
        {...rest}
        type="file"
        multiple
        id={id}
        ref={(el) => {
          registerRef(el);
          inputRef.current = el;
        }}
        onChange={handleUploadedFile}
        className={styles["picture-field__input"]}
        accept="image/*"
        aria-label="Image upload field"
        disabled={disabled}
      />
    </div>
  );
};

export default ImageField;
