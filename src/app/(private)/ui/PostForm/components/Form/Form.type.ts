import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "../../validationSchema";

export type FormProps = {
  setShowPreview: Dispatch<SetStateAction<boolean>>;
  previews?: string[];
} & UseFormReturn<FormValues>;
