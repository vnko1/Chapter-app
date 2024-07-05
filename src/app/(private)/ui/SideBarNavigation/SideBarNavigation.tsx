"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "classnames";

import { useNavigationToggler } from "@/context";
import { Icon } from "@/components";
import { IconsEnum, LinksEnum } from "@/types";

import { Menu } from "..";

import "./SideBarNavigation.scss";
import { useModal } from "@/hooks";

const items = [
  { icon: IconsEnum.Home, href: LinksEnum.DASHBOARD, text: "Feed" },
  { icon: IconsEnum.Message, href: LinksEnum.Chat, text: "Messages" },
  { icon: IconsEnum.Add, href: LinksEnum.Add_post, text: "Add post" },
  {
    icon: IconsEnum.Notification,
    href: LinksEnum.NOTIFICATION,
    text: "Notification",
  },
  { icon: IconsEnum.Search, href: LinksEnum.SEARCH, text: "Search" },
];

const SideBarNavigation: FC = () => {
  const { isActiveMenu } = useNavigationToggler();
  const pathName = usePathname();
  const menu = useModal();

  return (
    <div className={cn("sidebar-nav", { ["active"]: isActiveMenu })}>
      <ul className="sidebar-nav__list">
        {items.map((el, index) => (
          <li key={index}>
            <Link
              href={el.href}
              className={cn("sidebar-nav__btn", {
                ["active"]: pathName === el.href,
              })}
            >
              <Icon
                size={32}
                icon={el.icon}
                removeInlineStyle
                className="sidebar-nav__btn-icon"
              />
              <span className="sidebar-nav__btn-text">{el.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={cn("sidebar-nav__btn")}
        onClick={() => menu.setActive(true)}
      >
        <Icon
          size={32}
          icon={IconsEnum.Menu}
          removeInlineStyle
          className="sidebar-nav__btn-icon"
        />
        <span className="sidebar-nav__btn-text">More</span>
      </button>
      <Menu {...menu} />
    </div>
  );
};

export default SideBarNavigation;
