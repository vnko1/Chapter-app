"use client";
import React, { FC } from "react";
import cn from "classnames";

import { Icon, Modal } from "@/components";
import { IconsEnum } from "@/types";

import { UIModalProps } from "./UIModal.type";
import styles from "./UIModal.module.scss";

const UIModal: FC<UIModalProps> = ({ children, ...props }) => {
  const menuClassNames = cn(
    styles["menu"],
    "bg-bg-primary-light dark:bg-bg-primary-dark",
    {
      [styles["active"]]: props.visible,
    }
  );

  return (
    <Modal
      {...props}
      classNames={styles["backdrop"]}
      enableSwipe
      screenDimension={1920}
      axis="clientY"
      side="rSideSwipe"
    >
      <div className={menuClassNames}>
        <button className={styles["button"]} onClick={() => props.close()}>
          <Icon
            icon={IconsEnum.Arrow_down}
            removeInlineStyle
            size={32}
            className={`stroke-primary-default-light dark:stroke-primary-default-dark ${styles["button__icon-mob"]}`}
          />
          <Icon
            icon={IconsEnum.Close}
            removeInlineStyle
            size={32}
            className={`stroke-text-primary-light dark:stroke-text-primary-dark ${styles["button__icon-desc"]}`}
          />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default UIModal;
