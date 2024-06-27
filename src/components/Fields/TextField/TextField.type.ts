import { InputHTMLAttributes } from "react";
import { IconsEnum } from "@/types";

export type TextFieldProps = {
  id: string;
  name: string;
  classNames?: string;
  label?: string;
  showSuccessIcon?: boolean;
  additionalLabel?: string;
  customErrorMessage?: string | null;
  size?: "small" | "normal" | "large";
  fullWidth?: boolean;
  leftIcon?: IconsEnum;
  rightIcon?: IconsEnum;
  iconSize?: number;
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
