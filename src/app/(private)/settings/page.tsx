import React from "react";

import { ThemeToggler } from "@/app/ui";

import { Delete, PasswordChange } from "./ui";

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
          <Link
            href={LinksEnum.TERMS + "/1"}
            className={`${styles["link"]} text-link-primary-light dark:text-link-primary-dark hover:text-link-hover-light dark:hover:text-link-hover-dark focus:text-link-hover-light dark:focus:text-link-hover-dark`}
          >
            Terms & Conditions and Privacy Policy
          </Link>
        </div>
      </section>
      <section className="private-section">
        <div className={`private-container ${styles["delete"]}`}>
          <div className={styles["text-box"]}>
            <h2 className={styles["title"]}>Delete your profile</h2>
            <p>
              You will be able to recover all your data if no more than 30 days
              have passed since the deletion.
            </p>
          </div>
          <div className={styles["button-box"]}>
            <h3 className={styles["sub-title"]}>
              Are you sure you want to delete the account?
            </h3>
            <Delete />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SettingsPage;
