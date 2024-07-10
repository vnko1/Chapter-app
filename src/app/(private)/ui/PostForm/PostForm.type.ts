import { IModal } from "@/types";

export type PostFormProps = {
  previews?: string[];
  title?: string;
  text?: string;
  postId?: string;
} & IModal;
