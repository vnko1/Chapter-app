"use client";

import { FC, useState, useEffect } from "react";

import { IconsEnum } from "@/types";
import { Icon, Button } from "@/components";

import { MenuTogglerProps } from "./MenuToggler.type";
import styles from "./MenuToggler.module.scss";

const MenuToggler: FC<MenuTogglerProps> = ({
  isActive = false,
  classNames,
  onClick,
}) => {
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    setActiveState(isActive);
  }, [isActive]);

  function handleClick() {
    const updatedValue = !activeState;
    setActiveState(updatedValue);
    onClick(updatedValue);
  }

  return (
    <Button
      classNames={`${styles["menu-toggler"]} ${classNames}`}
      onClick={handleClick}
      variant="text"
      aria-label="Toggler button"
    >
      <Icon
        icon={activeState ? IconsEnum.Close : IconsEnum.Menu}
        className={styles["menu-toggler__icon"]}
        color="#000000"
      />
    </Button>
  );
};

export default MenuToggler;
