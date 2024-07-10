"use client";
import React, { FC } from "react";
import cn from "classnames";

import { Icon } from "@/components";
import { IconsEnum } from "@/types";
import styles from "./ThemeToggler.module.scss";
import { useThemeProviderContext } from "@/context";

const ThemeToggler: FC = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeProviderContext();

  const onClick = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const baseClassNames = cn(
    styles["button"],
    !isDarkTheme ? styles["light"] : styles["dark"]
  );
  return (
    <button onClick={onClick} className={baseClassNames}>
      {!isDarkTheme ? (
        <>
          <Icon
            icon={IconsEnum.Light_bulb}
            size={36}
            removeInlineStyle
            className={styles["dark-icon"]}
          />
          Light
        </>
      ) : (
        <>
          Dark
          <Icon
            icon={IconsEnum.Light_bulb}
            size={36}
            removeInlineStyle
            className={styles["light-icon"]}
          />
        </>
      )}
    </button>
  );
};

export default ThemeToggler;
