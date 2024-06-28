import { MutableRefObject, RefObject } from "react";
import { IModal } from "@/types";

export type UseSwipeProps = {
  lSideSwipe?: () => void;
  rSideSwipe?: () => void;
  nodeRef?: MutableRefObject<null> | RefObject<HTMLDivElement>;
} & Pick<
  IModal,
  "axis" | "touchDistinction" | "screenDimension" | "enableSwipe"
>;
