"use client";

import { FC, useState, useEffect } from "react";

import { IconsEnum } from "@/types";
import { Icon, Button } from "@/components";

import { MenuTogglerProps } from "./MenuToggler.type";

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
      classNames={classNames}
      onClick={handleClick}
      variant="text"
      aria-label="Toggler button"
    >
      <Icon
        icon={activeState ? IconsEnum.Close : IconsEnum.Menu}
        className="stroke-primary-default-light dark:stroke-primary-default-dark"
        removeInlineStyle
        size={24}
      />
    </Button>
  );
};

export default MenuToggler;
