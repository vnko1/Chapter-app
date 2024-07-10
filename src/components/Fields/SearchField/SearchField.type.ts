import { InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export type SearchFieldProps = {
  control: Control<{ query: string }>;
  handleSearch: (term: string) => void;
  classNames?: string;
  size?: "small" | "normal" | "large";
} & Partial<InputHTMLAttributes<HTMLInputElement>>;
