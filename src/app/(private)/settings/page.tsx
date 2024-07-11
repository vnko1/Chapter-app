import React from "react";

import { ThemeToggler } from "@/app/ui";

import { PasswordChange } from "./ui";

import styles from "./settingsPage.module.scss";
import Link from "next/link";
import { LinksEnum } from "@/types";

function SettingsPage() {
  return (
    <div className={styles["settings"]}>
      <section className="private-section">
        <div className={`private-container ${styles["theme"]}`}>
          <h2 className={styles["title"]}>Theme</h2>
          <ThemeToggler />
        </div>
      </section>
      <section className="private-section">
        <div className={`private-container ${styles["password"]}`}>
          <h2 className={styles["title"]}>Password change</h2>
          <PasswordChange />
        </div>
      </section>
      <section className="private-section">
        <div className={`private-container ${styles["terms"]}`}>
          <h2 className={styles["title"]}>Terms and conditions</h2>
          <Link href={LinksEnum.TERMS} className={styles["link"]}>
            Terms & Conditions and Privacy Policy
          </Link>
        </div>
      </section>
      <section className="private-section">
        <div className={`private-container ${styles["delete"]}`}>
          Settings Page
        </div>
      </section>
    </div>
  );
}

export default SettingsPage;
