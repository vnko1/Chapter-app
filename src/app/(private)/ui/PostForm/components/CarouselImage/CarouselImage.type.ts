import { Dispatch, SetStateAction } from "react";
import { UseFormSetValue } from "react-hook-form";

export type CarouselImageProps = {
  image: File | string;
  alt: string;
  width: number;
  height: number;
  images?: Array<File>;
  classNames?: string;
  setValue: UseFormSetValue<{ images?: File[] }>;
  setPreviews: Dispatch<SetStateAction<Array<string>>>;
};
