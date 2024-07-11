import React from "react";

import { ThemeToggler } from "@/app/ui";

import { PasswordChange } from "./ui";

import styles from "./settingsPage.module.scss";

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
          Settings Page
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
