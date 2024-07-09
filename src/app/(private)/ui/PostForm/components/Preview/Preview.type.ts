import { IModal, PostForm } from "@/types";
import { Dispatch, SetStateAction } from "react";

export type PreviewProps = {
  postForm: PostForm;
  previews: string[];
  postId?: string;
  setShowPost: Dispatch<SetStateAction<boolean>>;
  setPostForm: Dispatch<SetStateAction<PostForm>>;
} & Pick<IModal, "close">;
