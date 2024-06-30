import React, { FC } from "react";
import { Button } from "@/components";
import { IconsEnum, OuterLinksEnum } from "@/types";

import styles from "./GoogleAuth.module.scss";

const GoogleAuth: FC = () => {
  return (
    <Button
      classNames={styles["google-btn"]}
      fullWidth
      variant="outlined"
      iconSize={24}
      aria-label="Google oAuth button"
      icon={IconsEnum.Google}
      href={OuterLinksEnum.GOOGLE_CB}
    >
      Enter with google
    </Button>
  );
};

export default GoogleAuth;
