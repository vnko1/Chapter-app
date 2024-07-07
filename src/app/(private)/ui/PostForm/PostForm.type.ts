import { IModal } from "@/types";

export type PostFormProps = {
  postId?: string;
  title?: string;
  text?: string;
  imageUrl?: string | null;
} & IModal;
