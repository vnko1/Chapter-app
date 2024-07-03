"use client";
import { FC } from "react";

import { useNavigationToggler } from "@/context";

import { Logo, MenuToggler } from "@/app/ui";

import { ProfileHeaderProps } from "./ProfileHeader.type";

import styles from "./ProfileHeader.module.scss";

const ProfileHeader: FC<ProfileHeaderProps> = () => {
  const { isActiveMenu, setIsActiveMenu } = useNavigationToggler();

  return (
    <header className={styles["profile-header"]}>
      <div className={styles["profile-header__container"]}>
        <MenuToggler
          isActive={isActiveMenu}
          classNames={styles["profile-header__menu-toggler"]}
          onClick={() => setIsActiveMenu && setIsActiveMenu(!isActiveMenu)}
        />
        <Logo classNames={styles["profile-header__logo-name"]} />
        <div className={styles["profile-header__auth-side"]}>
          {/* <Avatar
            src={user?.avatarUrl || null}
            alt="user avatar"
            classNames={styles["profile-header__user-avatar"]}
          /> */}
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
