import { FC } from "react";

import { Logo, ThemeToggler } from "..";

import styles from "./Header.module.scss";
import { getSession } from "@/lib/session";

const Header: FC = async () => {
  const { isLoggedIn } = await getSession();
  return (
    <header className={styles["header"]}>
      <div className={styles["header__container"]}>
        <Logo hideLogo={!isLoggedIn} />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
