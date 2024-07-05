"use client";
import React, { FC } from "react";
import Link from "next/link";
import cn from "classnames";

import { Icon, Modal } from "@/components";
import { IconsEnum, LinksEnum } from "@/types";
import { useModal } from "@/hooks";
import { logout } from "@/lib/session";

import { ContactUs } from "@/app/ui";

import { MenuProps } from "./Menu.type";
import styles from "./Menu.module.scss";
import "./Menu.scss";

const Menu: FC<MenuProps> = (props) => {
  const contactUs = useModal();
  return (
    <Modal
      {...props}
      classNames={`${styles["backdrop"]} bg-bg-primary-light dark:bg-bg-primary-dark`}
      activeClassNames={cn({
        [styles["active"]]: props.visible,
      })}
      enableSwipe
      screenDimension={1920}
      axis="clientY"
      side="rSideSwipe"
    >
      <button className={styles["button"]} onClick={() => props.close()}>
        <Icon
          icon={IconsEnum.Arrow_down}
          removeInlineStyle
          size={32}
          className="stroke-primary-default-light dark:stroke-primary-default-dark"
        />
      </button>
      <ul className={styles["list"]}>
        <li>
          <button
            className="side-bar-menu-btn"
            onClick={() => contactUs.setActive(true)}
          >
            <Icon
              size={32}
              icon={IconsEnum.Edit}
              removeInlineStyle
              className="side-bar-menu-btn-icon"
            />
            <span className="side-bar-menu-btn-text">Contact us</span>
          </button>
        </li>
        <li>
          <Link className="side-bar-menu-btn" href={LinksEnum.SETTINGS}>
            <Icon
              size={32}
              icon={IconsEnum.Settings}
              removeInlineStyle
              className="side-bar-menu-btn-icon"
            />
            <span className="side-bar-menu-btn-text">Settings</span>
          </Link>
        </li>
        <li>
          <button
            className="side-bar-menu-btn"
            onClick={async () => await logout()}
          >
            <Icon
              size={32}
              icon={IconsEnum.Log_out}
              removeInlineStyle
              className="side-bar-menu-btn-icon"
            />
            <span className="side-bar-menu-btn-text">Log out</span>
          </button>
        </li>
      </ul>
      <ContactUs {...contactUs} />
    </Modal>
  );
};

export default Menu;
