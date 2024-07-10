import { ReactNode } from "react";
import { IModal } from "@/types";

export type ModalProps = {
  children: ReactNode;
  side?: "lSideSwipe" | "rSideSwipe";
} & IModal;
