import { InputHTMLAttributes } from "react";

export type PasswordFieldProps = {
  id: string;
  name: string;
  label?: string;
  strength?: boolean;
  classNames?: string;
  strengthMessage?: string;
  helperText?: string;
  size?: "small" | "normal" | "large";
  helperLink?: {
    text: string;
    href: string;
  };
} & Partial<Omit<InputHTMLAttributes<HTMLInputElement>, "type">>;

export enum TypePasswordStrength {
  WEAK = "weak",
  OKAY = "okay",
  STRONG = "strong",
}
