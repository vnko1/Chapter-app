import React, { FC } from "react";
import Image from "next/image";

import { CarouselImageProps } from "./CarouselImage.type";
import styles from "./CarouselImage.module.scss";
import { Icon } from "@/components";
import { IconsEnum } from "@/types";

const CarouselImage: FC<CarouselImageProps> = ({
  image,
  alt,
  classNames,
  images,
  setValue,
  setPreviews,
  ...props
}) => {
  const onDelete = () => {
    if (typeof image === "string") {
      setPreviews((previews) =>
        previews.filter((preview) => preview !== image)
      );
    } else if (images) {
      const filteredImages = images.filter(
        (imageToDelete) => imageToDelete.name !== image.name
      );
      setValue("images", filteredImages);
    }
  };
  return (
    <div className={`${styles["thumb"]} ${classNames}`}>
      <button className={styles["button"]}>
        <Icon
          icon={IconsEnum.Trash}
          size={32}
          removeInlineStyle
          className="fill-error-primary-light dark:fill-error-primary-dark"
          onClick={onDelete}
        />
      </button>
      <Image
        src={typeof image === "string" ? image : URL.createObjectURL(image)}
        {...props}
        alt={alt}
        style={{ objectFit: "cover", width: "auto" }}
      />
    </div>
  );
};

export default CarouselImage;
