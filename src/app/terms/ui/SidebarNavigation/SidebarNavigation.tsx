"use client";
import { FC } from "react";
import cn from "classnames";

import { useNavigation } from "@/context";

import { Navigation } from "..";
import styles from "./SidebarNavigation.module.scss";

const SidebarNavigation: FC = () => {
  const { isActiveMenu } = useNavigation();
  return (
    <div
      className={cn(styles["sidebar-navigation"], {
        [styles["active"]]: isActiveMenu,
      })}
    >
      <Navigation />
    </div>
  );
};

export default SidebarNavigation;
