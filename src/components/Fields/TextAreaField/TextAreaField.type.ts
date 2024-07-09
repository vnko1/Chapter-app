import { TextareaHTMLAttributes } from "react";
import { IconsEnum } from "@/types";

export type TextAreaFieldProps = {
  id: string;
  name: string;
  classNames?: string;
  label?: string;
  size?: "small" | "normal" | "large";
  fullWidth?: boolean;
  icon?: IconsEnum;
  iconSize?: number;
  iconClassNames?: string;
  inputClassNames?: string;
} & Partial<TextareaHTMLAttributes<HTMLTextAreaElement>>;
