"use client";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Image from "next/image";
import { Carousel } from "nuka-carousel";
import { useFormContext } from "react-hook-form";

import { Icon } from "@/components";

import { ImageFieldProps } from "./ImageField.type";
import styles from "./ImageField.module.scss";
import { CarouselImage } from "./components";

const ImageField: FC<ImageFieldProps> = ({
  name,
  id,
  inputRef,
  previews = [],
  alt = "",
  classNames,
  previewClassNames,
  disabled,
  width,
  height,
  icon,
  iconClassNames,
  iconSize,
  iconButtonClassNames,
  multiple,
  imageClassNames,
}) => {
  const { register, setValue, getValues } = useFormContext();
  const values = getValues(name);
  const { ref: registerRef, ...rest } = register(name);
  const [preview, setPreview] = useState<string[]>(previews);

  useEffect(() => {
    if (Array.isArray(values)) {
      setPreview(values.map((value) => URL.createObjectURL(value)));
    }
  }, [values]);

  useEffect(() => {
    if (previews.length) setPreview(previews);
  }, [previews]);

  const handleUploadedFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    const filesList = event.target.files;
    const files = Array.from(filesList);
    setValue(name, files);
    setPreview(files.map((file) => URL.createObjectURL(file)));
    event.target.value = "";
  };

  const handleIconClick = () => {
    setValue(name, null);
    setPreview([]);
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
          <div className="relative">
            <Carousel showArrows="hover" scrollDistance={width} wrapMode="wrap">
              {preview.map((src) => (
                <CarouselImage
                  key={src}
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  classNames={imageClassNames}
                />
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageField;
