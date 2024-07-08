import { Dispatch, SetStateAction } from "react";

export interface IModal {
  setVisible: Dispatch<SetStateAction<boolean>>;
  setActive: Dispatch<SetStateAction<boolean>>;
  close: () => void;
  active: boolean;
  visible: boolean;
  classNames?: string;
  activeClassNames?: string;
  axis?: "clientX" | "clientY";
  touchDistinction?: number;
  screenDimension?: number;
  enableSwipe?: boolean;
}
