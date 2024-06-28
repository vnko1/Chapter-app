import React, { FC } from "react";
import { Button } from "@/components";
import { IconsEnum, OuterLinksEnum } from "@/types";
import { GoogleAuthProps } from "./GoogleAuth.type";
import styles from "./GoogleAuth.module.scss";

const GoogleAuth: FC<GoogleAuthProps> = ({
  text = "Enter with google",
  iconSize = 24,
  buttonSize = "small",
  buttonColor = "secondary",
  buttonVariant = "outlined",
  classNames,
}) => {
  return (
    <Button
      classNames={`${styles["oauth-btn"]} ${classNames}`}
      fullWidth
      variant={buttonVariant}
      color={buttonColor}
      size={buttonSize}
      iconSize={iconSize}
      aria-label="Google oAuth button"
      icon={IconsEnum.Google}
      href={OuterLinksEnum.GOOGLE_CB}
    >
      <span>{text}</span>
    </Button>
  );
};

export default GoogleAuth;
