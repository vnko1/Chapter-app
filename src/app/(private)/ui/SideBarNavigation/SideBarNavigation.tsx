"use client";
import React, { FC } from "react";
import cn from "classnames";

import "./SideBarNavigation.scss";
import { useNavigationToggler } from "@/context";
const SideBarNavigation: FC = () => {
  const { isActiveMenu, setIsActiveMenu } = useNavigationToggler();
  return (
    <div className={cn("sidebar-nav", { ["active"]: isActiveMenu })}>
      SideBarNavigation
    </div>
  );
};

export default SideBarNavigation;
