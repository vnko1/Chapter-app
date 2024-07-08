import { Dispatch, MutableRefObject, SetStateAction } from "react";

export type ImageFieldProps = {
  setPreviews: Dispatch<SetStateAction<string[]>>;
  id: string;
  name: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  disabled?: boolean;
  classNames?: string;
};
