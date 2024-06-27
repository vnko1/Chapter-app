"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LinksEnum } from "@/types";
import { useThemeToggler } from "@/hooks";

const Logo: FC = ({ classNames }: { classNames?: string }) => {
  const [isDark, setIsDark] = useState(false);
  const { getCurrentTheme } = useThemeToggler();

  useEffect(() => {
    setIsDark(getCurrentTheme());
  }, [getCurrentTheme]);

  return (
    <div className={`max-w-[120px] ${classNames}`}>
      <Link href={LinksEnum.HOME} aria-label="Home page nav link">
        <Image
          width={276}
          height={74}
          src={isDark ? "/logo-dark.webp" : "/logo-light.webp"}
          alt="logo"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
