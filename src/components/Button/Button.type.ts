import { ButtonHTMLAttributes } from "react";
import { IconsEnum } from "@/types";

type ButtonVariantType =
  | "outlined"
  | "contained"
  | "text"
  | "error"
  | "positive";
type ButtonSizeType = "small" | "normal" | "large";
type ButtonColorType = "primary" | "secondary";
type AlignIconType = "left" | "right";

export type ButtonProps = {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  alignIcon?: AlignIconType;
  classNames?: string;
  fullWidth?: boolean;
  isLoading?: false;
  icon?: IconsEnum;
  iconSize?: number;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
