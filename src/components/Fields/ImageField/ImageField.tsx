"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

import { Icon } from "@/components";

import { ImageFieldProps } from "./ImageField.type";
import styles from "./ImageField.module.scss";

const ImageField: FC<ImageFieldProps> = ({
  name,
  id,
  inputRef,
  previewUrl = null,
  alt = "",
  classNames,
  previewClassNames,
  placeholder,
  disabled,
  sizes = "",
  width,
  height,
  icon,
  iconClassNames,
  iconSize,
  iconButtonClassNames,
  multiple,
}) => {
  const { register, setValue, getValues } = useFormContext();

  const value = getValues(name);

  const { ref: registerRef, ...rest } = register(name);

  const [preview, setPreview] = useState<null | string>(previewUrl);

  useEffect(() => {
    if (value) setPreview(URL.createObjectURL(value));
  }, [value]);

  useEffect(() => {
    if (previewUrl) setPreview(previewUrl);
  }, [previewUrl]);

  const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const files = event.target.files;
    console.log("🚀 ~ handleUploadedFile ~ files:", files);
    // const file = event.target.files[0];
    // setValue(name, file);
    // const urlImage = URL.createObjectURL(file);
    // setPreview(urlImage);
    // event.target.value = "";
  };

  const handleIconClick = () => {
    setValue(name, null);
    setPreview(null);
  };

  return (
    <div className={`${styles["picture-field"]} ${classNames}`}>
      <input
        type="file"
        multiple={multiple}
        id={id}
        {...rest}
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
      {preview && (
        <div
          className={`${styles["picture-field__image"]} ${previewClassNames}`}
        >
          {icon && (
            <button onClick={handleIconClick} className={iconButtonClassNames}>
              <Icon
                size={iconSize}
                icon={icon}
                removeInlineStyle
                className={iconClassNames}
              />
            </button>
          )}
          <Image
            alt={alt}
            src={preview}
            placeholder={placeholder}
            sizes={sizes}
            width={width}
            height={height}
          />
        </div>
      )}
    </div>
  );
};

export default ImageField;
