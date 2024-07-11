import { IModal } from "@/types";
import { Dispatch, SetStateAction } from "react";

export type MenuProps = IModal & {
  setIsActiveMenu?: Dispatch<SetStateAction<boolean>>;
};
