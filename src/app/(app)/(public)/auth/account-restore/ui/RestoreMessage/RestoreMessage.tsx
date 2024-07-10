"use client";
import React, { FC, useEffect, useState } from "react";

import { Button } from "@/components";
import { CustomError } from "@/services";
import { timer } from "@/utils";
import { restoreAccount } from "@/lib/actions";

import { RestoreMessageProps } from "./RestoreMessage.type";
import styles from "./RestoreMessage.module.scss";

const RestoreMessage: FC<RestoreMessageProps> = ({
  setShowRestoreForm,
  email,
  deletedTimeStamp,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      const times = timer(deletedTimeStamp);

      if (times.distance) {
        setDays(times.days);
        setHours(times.hours);
        setMinutes(times.minutes);
      }
      if (!times.distance) clearInterval(timerId);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [deletedTimeStamp]);

  const onClick = async () => {
    setIsLoading(true);
    try {
      const res = await restoreAccount(email);
      if (res?.isError) throw new CustomError(res.error);
      setShowRestoreForm(true);
    } catch (error) {
      if (error instanceof CustomError) {
        console.log("🚀 ~ onClick ~ error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["restore-msg"]}>
      <h1 className="text-text-primary-light dark:text-text-primary-dark">
        Your account has been deleted.
        <br /> Do you want to restore?
      </h1>
      <p className="text-text-secondary-light dark:text-text-secondary-dark">
        {days} {+days > 1 ? "Days" : "Day"} {hours}{" "}
        {+hours > 1 ? "Hours" : "Hour"} {minutes}{" "}
        {+minutes > 1 ? "Minutes" : "Minute"}
      </p>
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        size="small"
        fullWidth
        classNames={`${styles["restore-btn"]} ${styles["btn-mob"]}`}
        aria-label="Recover account button"
        onClick={onClick}
      >
        Recover account
      </Button>
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        fullWidth
        classNames={`${styles["restore-btn"]} ${styles["btn-tab"]}`}
        aria-label="Recover account button"
        onClick={onClick}
      >
        Recover account
      </Button>
      <Button
        isLoading={isLoading}
        disabled={isLoading}
        fullWidth
        size="large"
        classNames={`${styles["restore-btn"]} ${styles["btn-desc"]}`}
        aria-label="Recover account button"
        onClick={onClick}
      >
        Recover account
      </Button>
    </div>
  );
};

export default RestoreMessage;
