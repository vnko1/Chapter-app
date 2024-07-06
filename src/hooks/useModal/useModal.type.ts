import { Dispatch, SetStateAction } from "react";

export type UseModalProps = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};
