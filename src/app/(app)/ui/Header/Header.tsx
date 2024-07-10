import { FC } from "react";

import { Logo, ThemeToggler } from "..";

import styles from "./Header.module.scss";

const Header: FC = async () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        <Logo />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
