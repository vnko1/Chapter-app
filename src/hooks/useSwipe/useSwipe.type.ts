import { MutableRefObject, RefObject } from "react";
import { IModal } from "@/types";

export type UseSwipeProps = {
  lSwipe?: () => void;
  rSwipe?: () => void;
  nodeRef?: MutableRefObject<null> | RefObject<HTMLDivElement>;
} & Pick<
  IModal,
  "axis" | "touchDistinction" | "screenDimension" | "enableSwipe"
>;
