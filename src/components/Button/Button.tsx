"use client";
import React, { FC } from "react";
import cn from "classnames";

import { Icon } from "@/components";
import { ButtonProps } from "./Button.type";
import "./Button.scss";
import Link from "next/link";

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
  href,
  ...props
}) => {
  const variantClassNames = cn({
    ["btn--contained"]: variant === "contained",
    ["btn--outlined"]: variant === "outlined",
    ["btn--text"]: variant === "text",
  });

  const sizeClassNames = cn({
    ["btn--small"]: size === "small",
    ["btn--normal"]: size === "normal",
    ["btn--large"]: size === "large",
  });

  const colorClassNames = cn({
    ["btn--primary"]: color === "primary",
    ["btn--secondary"]: color === "secondary",
    ["btn--error"]: color === "error",
    ["btn--positive"]: color === "positive",
  });

  const alignIconClassNames = cn({
    ["btn--icon-left"]: alignIcon === "left",
    ["btn--icon-right"]: alignIcon === "right",
  });

  const baseClassNames = cn(
    "btn",
    variantClassNames,
    sizeClassNames,
    colorClassNames,
    alignIconClassNames,
    {
      ["btn--loading"]: isLoading,
    },
    {
      ["btn--full-width"]: fullWidth,
    },
    classNames
  );

  if (href)
    return (
      <Link href={href} className={baseClassNames}>
        {icon && <Icon icon={icon} size={iconSize} />}
        {children}
      </Link>
    );
  return (
    <button {...props} className={baseClassNames} type={type}>
      {icon && <Icon icon={icon} size={iconSize} />}
      {children}
    </button>
  );
};

export default Button;
