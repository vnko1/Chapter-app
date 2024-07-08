import { Dispatch, MutableRefObject, SetStateAction } from "react";

export type ImageFieldProps = {
  setFiles?: Dispatch<SetStateAction<Array<File>>>;
  id: string;
  name: string;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  disabled?: boolean;
  classNames?: string;
};
