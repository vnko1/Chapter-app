"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { useThemeProviderContext } from "@/context";
import { LinksEnum } from "@/types";

import { LogoProps } from "./Logo.type";
import { usePathname } from "next/navigation";

const Logo: FC<LogoProps> = ({ classNames, hideLogo }) => {
  const { isDarkTheme } = useThemeProviderContext();
  const pathName = usePathname();
  if (hideLogo && pathName === "/") return null;

  return (
    <div className={`max-w-[120px] ${classNames}`}>
      <Link href={LinksEnum.HOME} aria-label="Home page nav link">
        <Image
          width={276}
          height={74}
          src={isDarkTheme ? "/logo-dark.webp" : "/logo-light.webp"}
          alt="logo"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
