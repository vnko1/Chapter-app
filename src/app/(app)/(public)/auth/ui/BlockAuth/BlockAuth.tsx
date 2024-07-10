import { FC } from "react";

import { BlockAuthProps } from "./BlockAuth.type";
import styles from "./BlockAuth.module.scss";
import Link from "next/link";
import { LinksEnum } from "@/types";

const BlockAuth: FC<BlockAuthProps> = ({
  classNames,
  children,
  authType,
  heading,
}) => {
  return (
    <section className={`${styles["block-auth"]} ${classNames}`}>
      <div
        className={`${styles["block-auth__container"]} bg-bg-primary-light dark:bg-bg-primary-dark`}
      >
        {heading ? <h1 className={styles["title"]}>{heading}</h1> : null}
        {children}
      </div>
      {authType ? (
        <p
          className={`${styles["term-link"]} text-text-subtitle-light dark:text-text-subtitle-dark`}
        >
          By clicking {`"${authType}"`} above, you acknowledge that you have
          read and understood, and agree to Chapter&apos;s{" "}
          <Link
            href={LinksEnum.TERMS}
            className="text-link-primary-light dark:text-link-primary-dark"
          >
            Terms & Conditions and Privacy Policy
          </Link>
          .
        </p>
      ) : null}
    </section>
  );
};

export default BlockAuth;
