import { ButtonHTMLAttributes } from "react";
import { IconsEnum } from "@/types";

type ButtonVariantType = "outlined" | "contained" | "text";

type ButtonSizeType = "small" | "normal" | "large";
type ButtonColorType = "primary" | "secondary" | "error" | "positive";
type AlignIconType = "left" | "right";

export type ButtonProps = {
  size?: ButtonSizeType;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
  alignIcon?: AlignIconType;
  classNames?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  icon?: IconsEnum;
  iconSize?: number;
  href?: string;
  iconClassNames?: string;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
