"use client";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "classnames";

import { useNavigationToggler } from "@/context";

import { Icon } from "@/components";
import { IconsEnum } from "@/types";

import { NavigationListProps } from "./NavigationList.type";
import styles from "./NavigationList.module.scss";

const NavigationList: FC<NavigationListProps> = ({
  items,
  className,
  isBottom = false,
}) => {
  const pathname = usePathname();
  const { setIsActiveMenu } = useNavigationToggler();

  function handleClickNavLink() {
    setIsActiveMenu && setIsActiveMenu(false);
  }

  return (
    <>
      <ul className={cn("navigation-list", className)}>
        {items.map((navItem) => (
          <li key={navItem.id} className={styles["navigation-list__item"]}>
            <Link
              href={navItem.path}
              aria-label="Menu nav link"
              className={cn(styles["navigation-list__link"], {
                [styles["current-page"]]: navItem.path === pathname,
              })}
              onClick={handleClickNavLink}
            >
              <Icon
                icon={navItem.icon}
                className={styles["navigation-list__link-icon"]}
              />
              {navItem.name}
            </Link>
          </li>
        ))}
        {isBottom && (
          <li className={styles["navigation-list__item"]}>
            <button
              className={`${styles["navigation-list__link"]} ${styles["navigation-list__button"]}`}
              aria-label="Open modal button"
            >
              <Icon
                icon={IconsEnum.Menu}
                className={styles["navigation-list__link-icon"]}
              />
              More
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default NavigationList;
