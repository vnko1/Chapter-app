"use client";
import React, { FC } from "react";
import cn from "classnames";

import { Icon } from "@/components";
import { ButtonProps } from "./Button.type";
import styles from "./Button.module.scss";

const Button: FC<ButtonProps> = ({
  children,
  size = "normal",
  color = "primary",
  variant = "contained",
  fullWidth = false,
  type = "button",
  isLoading,
  icon,
  iconSize = 32,
  alignIcon,
  classNames,
  ...props
}) => {
  const variantClassNames = cn({
    [styles["btn--outlined"]]: variant === "outlined",
    [styles["btn--contained"]]: variant === "contained",
    [styles["btn--text"]]: variant === "text",
    [styles["btn--error"]]: variant === "error",
    [styles["btn--positive"]]: variant === "positive",
  });

  const sizeClassNames = cn({
    [styles["btn--small"]]: size === "small",
    [styles["btn--normal"]]: size === "normal",
    [styles["btn--large"]]: size === "large",
  });

  const colorClassNames = cn({
    [styles["btn--primary"]]: color === "primary",
    [styles["btn--secondary"]]: color === "secondary",
  });

  const alignIconClassNames = cn({
    [styles["btn--icon-left"]]: alignIcon === "left",
    [styles["btn--icon-right"]]: alignIcon === "right",
  });

  const baseClassNames = cn(
    styles["btn"],
    variantClassNames,
    sizeClassNames,
    colorClassNames,
    alignIconClassNames,
    {
      [styles["btn--loading"]]: isLoading,
    },
    {
      [styles["btn--full-width"]]: fullWidth,
    },
    classNames
  );

  return (
    <button {...props} className={baseClassNames} type={type}>
      {icon && <Icon icon={icon} size={iconSize} />}
      {children}
    </button>
  );
};

export default Button;
