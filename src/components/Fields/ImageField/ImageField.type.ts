import { MutableRefObject } from "react";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import { IconsEnum } from "@/types";

export type ImageFieldProps = {
  name: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  previews?: string[];
  alt?: string;
  classNames?: string;
  previewClassNames?: string;
  disabled?: boolean;
  placeholder?: PlaceholderValue;
  sizes?: string;
  id: string;
  width: number;
  height: number;
  iconButtonClassNames?: string;
  iconClassNames?: string;
  iconSize?: number;
  icon?: IconsEnum;
  multiple?: boolean;
};
