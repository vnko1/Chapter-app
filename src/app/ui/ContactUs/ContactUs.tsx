import { FC } from "react";

import { Icon } from "@/components";
import { IconsEnum, OuterLinksEnum } from "@/types";

import { UIModal } from "..";

import { ContactUsProps } from "./ContactUs.type";
import styles from "./ContactUs.module.scss";

const ContactUs: FC<ContactUsProps> = ({
  title = "Select a social network to contact us",
  ...props
}) => {
  return (
    <UIModal classNames={styles["backdrop"]} {...props}>
      <div className={styles["menu"]}>
        <h2
          className={`text-text-primary-light dark:text-text-primary-dark ${styles["title"]}`}
        >
          {title}
        </h2>
        <ul className={styles["links"]}>
          <li>
            <a
              href={OuterLinksEnum.TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className={`fill-primary-default-light dark:fill-primary-default-dark ${styles["icon"]}`}
                icon={IconsEnum.Telegram}
                removeInlineStyle
              />
            </a>
          </li>
          <li>
            <a
              href={OuterLinksEnum.GMAIL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className={`fill-primary-default-light dark:fill-primary-default-dark ${styles["icon"]}`}
                icon={IconsEnum.Google}
                removeInlineStyle
              />
            </a>
          </li>
        </ul>
      </div>
    </UIModal>
  );
};

export default ContactUs;
