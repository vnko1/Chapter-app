import { ButtonHTMLAttributes } from "react";
import { IconsEnum } from "@/types";

type ButtonColorType = "primary" | "secondary";
type ButtonVariantType = "outlined" | "contained" | "text";
type ButtonSizeType = "small" | "medium" | "large";
type AlignIconType = "left" | "right";

export type ButtonProps = {
  classNames?: string;
  isLoading?: false;
  icon?: IconsEnum;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
