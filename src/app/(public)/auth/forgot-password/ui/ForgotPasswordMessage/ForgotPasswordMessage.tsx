"use client";
import React, { FC } from "react";
import { ForgotPasswordMessageProps } from "./ForgotPasswordMessage.type";
import styles from "./ForgotPasswordMessage.module.scss";

const ForgotPasswordMessage: FC<ForgotPasswordMessageProps> = ({
  setSubmitted,
}) => {
  return (
    <div className={styles["container"]}>
      <p
        className={`${styles["text"]} text-text-primary-light dark:text-text-primary-dark`}
      >
        We just sent you link to restore your password. Please check your inbox.
      </p>
      <p
        className={`${styles["btn-text"]} text-text-subtitle-light dark:text-text-subtitle-dark`}
      >
        If you did not receive the email,&nbsp;
        <button
          className={`${styles["button"]} text-link-primary-light dark:text-link-primary-dark`}
          onClick={() => setSubmitted(false)}
        >
          click here
        </button>
      </p>
    </div>
  );
};

export default ForgotPasswordMessage;
