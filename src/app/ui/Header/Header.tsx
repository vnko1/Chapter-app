import { FC } from "react";

import { Logo } from "..";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        <Logo darkTheme />
      </div>
    </header>
  );
};

export default Header;
