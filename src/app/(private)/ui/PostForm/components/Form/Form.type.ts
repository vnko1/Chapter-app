import { Dispatch, SetStateAction } from "react";

export type FormProps = {
  title: string;
  text: string;
  files: Array<File>;
  setText: Dispatch<SetStateAction<string>>;
  setFiles: Dispatch<SetStateAction<Array<File>>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setShowPost: Dispatch<SetStateAction<boolean>>;
  setPreviews: Dispatch<SetStateAction<Array<string>>>;
  previews: Array<string>;
};
