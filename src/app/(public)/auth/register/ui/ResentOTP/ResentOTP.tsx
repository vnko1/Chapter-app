"use client";
import { FC, useState } from "react";

import { CustomError } from "@/services";
import { resentOtp } from "@/lib/actions";

import { ErrorApi } from "@/app/ui";
import { ResentOTPProps } from "./ResentOTP.type";
import styles from "./ResentOtp.module.scss";

const ResentOTP: FC<ResentOTPProps> = ({ email }) => {
  const [error, setError] = useState<string | null>(null);
  const onHandleClick = async () => {
    setError(null);
    try {
      const res = await resentOtp(email);

      if (res && res.isError) throw new CustomError(res.error);
    } catch (error) {
      if (error instanceof CustomError) setError(error.errorMessage);
    }
  };

  return (
    <div className={styles["resent"]}>
      <p
        className={`${styles["resent__message"]} text-text-primary-light dark:text-text-primary-dark`}
      >
        3 attempt per 24 hours.
      </p>
      <div className={styles["resent__label"]}>
        <p
          className={`${styles["resent__label-text"]} text-text-primary-light dark:text-text-primary-dark`}
        >
          Send the code again?
        </p>
        <button
          onClick={onHandleClick}
          className={`${styles["resent__button"]} text-link-primary-light dark:text-link-primary-dark`}
          aria-label="Resent OTP button"
          type="button"
        >
          Click here.
        </button>
      </div>
      <ErrorApi error={error} />
    </div>
  );
};

export default ResentOTP;
