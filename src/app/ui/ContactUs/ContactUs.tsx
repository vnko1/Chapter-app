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
      <>
        <h2 className={styles["title"]}>{title}</h2>
        <ul className={styles["links"]}>
          <li className={styles["links__item"]}>
            <a
              href={OuterLinksEnum.TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["links"]}
            >
              <Icon
                size={40}
                className={styles["link__icon"]}
                icon={IconsEnum.Telegram}
                removeInlineStyle
              />
            </a>
          </li>
          <li className={styles["links__item"]}>
            <a
              href={OuterLinksEnum.GMAIL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["links"]}
            >
              <Icon
                size={40}
                className={styles["link__icon"]}
                icon={IconsEnum.Google}
                removeInlineStyle
              />
            </a>
          </li>
        </ul>
      </>
    </UIModal>
  );
};

export default ContactUs;
