"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";

import { useNavigationToggler } from "@/context";
import { LinksEnum } from "@/types";

import { MenuToggler, ThemeToggler } from "@/app/ui";

import { Avatar } from "..";

import { ProfileHeaderProps } from "./ProfileHeader.type";
import styles from "./ProfileHeader.module.scss";

function getPathName(pathName: string) {
  if (pathName === LinksEnum.HOME || pathName.startsWith(LinksEnum.DASHBOARD))
    return "Dashboard";
  if (pathName === LinksEnum.SEARCH) return "Search";
  return "";
}

const ProfileHeader: FC<ProfileHeaderProps> = () => {
  const { isActiveMenu, setIsActiveMenu } = useNavigationToggler();
  const pathName = usePathname();

  return (
    <header
      className={`${styles["profile-header"]} bg-bg-primary-light dark:bg-bg-primary-dark`}
    >
      <div className={styles["profile-header__container"]}>
        <MenuToggler
          isActive={isActiveMenu}
          classNames={styles["profile-header__menu-toggler"]}
          onClick={() => setIsActiveMenu && setIsActiveMenu(!isActiveMenu)}
        />
        <p className={styles["profile-header__title"]}>
          {getPathName(pathName)}
        </p>
        <div className={styles["profile-header__opt-side"]}>
          <ThemeToggler />
          <Avatar />
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
