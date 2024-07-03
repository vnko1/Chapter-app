"use client";
import { FC } from "react";

import { useNavigation } from "@/context";

import { Logo, MenuToggler } from "@/app/ui";

import styles from "./Header.module.scss";

const Header: FC = () => {
  const { isActiveMenu, setIsActiveMenu } = useNavigation();

  return (
    <header className={styles["profile-header"]}>
      <div className={styles["profile-header__container"]}>
        <MenuToggler
          isActive={isActiveMenu}
          classNames={styles["profile-header__menu-toggler"]}
          onClick={() => setIsActiveMenu && setIsActiveMenu(!isActiveMenu)}
        />
        <Logo classNames={styles["profile-header__logo-name"]} />
      </div>
    </header>
  );
};

export default Header;
