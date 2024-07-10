import { FC } from "react";
import Link from "next/link";

import { AuthLinkProps } from "./AuthLink.type";
import styles from "./AuthLink.module.scss";

const AuthLink: FC<AuthLinkProps> = ({
  textMsg,
  linkMsg,
  link,
  classNames,
}) => (
  <p
    className={`${styles["link-text"]} text-text-primary-light dark:text-text-primary-dark ${classNames}`}
  >
    {textMsg}{" "}
    <Link
      className="text-link-primary-light dark:text-link-primary-dark"
      href={link}
    >
      {linkMsg}
    </Link>
  </p>
);

export default AuthLink;
