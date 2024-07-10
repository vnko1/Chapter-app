import { PostForm } from "@/types";
import { Dispatch, SetStateAction } from "react";

export type FormProps = {
  postForm: PostForm;
  setPostForm: Dispatch<SetStateAction<PostForm>>;
  previews: Array<string>;
  setPreviews: Dispatch<SetStateAction<Array<string>>>;
  setShowPost: Dispatch<SetStateAction<boolean>>;
};
