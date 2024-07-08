import React, { FC } from "react";
import Image from "next/image";
import { CarouselImageProps } from "./CarouselImage.type";
import styles from "./CarouselImage.module.scss";

const CarouselImage: FC<CarouselImageProps> = ({
  classNames,
  alt,
  ...props
}) => {
  return (
    <div className={`${styles["thumb"]} ${classNames}`}>
      <Image {...props} alt={alt} />
    </div>
  );
};

export default CarouselImage;
