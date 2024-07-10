import React, { FC } from "react";
import { ErrorProps } from "./Error.type";
import styles from "./Error.module.scss";

const Error: FC<ErrorProps> = ({ error }) => {
  if (!error) return null;
  return (
    <p
      className={`${styles["error"]} text-error-primary-light dark:text-error-primary-dark`}
    >
      {error}
    </p>
  );
};

export default Error;
