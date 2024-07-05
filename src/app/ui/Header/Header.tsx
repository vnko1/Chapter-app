import { FC } from "react";

import { ThemeToggler } from "..";

import styles from "./Header.module.scss";

const Header: FC = async () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
