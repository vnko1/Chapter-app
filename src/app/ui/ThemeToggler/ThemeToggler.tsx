"use client";
import React, { FC } from "react";
import cn from "classnames";

import { useThemeToggler } from "@/hooks";

import styles from "./ThemeToggler.module.scss";
import { Icon } from "@/components";
import { IconsEnum } from "@/types";

const ThemeToggler: FC = () => {
  const { toggleTheme, getCurrentTheme } = useThemeToggler();

  const onClick = () => {
    toggleTheme();
  };

  const baseClassNames = cn(
    styles["button"],
    getCurrentTheme() ? styles["light"] : styles["dark"]
  );
  return (
    <button onClick={onClick} className={baseClassNames}>
      {getCurrentTheme() ? (
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
