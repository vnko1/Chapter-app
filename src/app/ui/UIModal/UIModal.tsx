"use client";
import React, { FC } from "react";
import cn from "classnames";

import { Modal } from "@/components";

import { UIModalProps } from "./UIModal.type";
import styles from "./UIModal.module.scss";

const UIModal: FC<UIModalProps> = ({ children, ...props }) => {
  const menuClassNames = cn(
    styles["menu"],
    // "bg-bg-primary-light dark:bg-bg-primary-dark",
    "bg-bg-primary-light",
    {
      [styles["active"]]: props.visible,
    }
  );

  return (
    <Modal {...props} classNames={styles["backdrop"]}>
      <div className={menuClassNames}>
        <button className={styles["button"]}></button>
        {children}
      </div>
    </Modal>
  );
};

export default UIModal;
