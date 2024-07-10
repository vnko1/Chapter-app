import { Dispatch, SetStateAction } from "react";

export type EmailFormProps = {
  setEmail: Dispatch<SetStateAction<null | string>>;
  setUserId: Dispatch<SetStateAction<string>>;
};
