"use client";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { getDataFromLS } from "@/utils";
import { Button } from "@/components";

import { RecentResultProps } from "./RecentResult.type";
import styles from "./RecentResult.module.scss";

const RecentResult: FC<RecentResultProps> = ({ query }) => {
  const [recentData, setRecentData] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    setRecentData(getDataFromLS<string[]>("recentData") || []);
  }, [query]);

  const handleRecentValueClick = (event: MouseEvent<HTMLButtonElement>) => {
    const term = event.currentTarget.value;
    const params = new URLSearchParams(searchParams);
    params.set("query", term);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <p
        className={`${styles["title"]} text-text-primary-light dark:text-text-primary-dark`}
      >
        Recent
      </p>
      <ul className={styles["list"]}>
        {recentData.map((el, i) => (
          <li key={i}>
            <Button
              onClick={handleRecentValueClick}
              value={el}
              variant="text"
              color="secondary"
              classNames={`${styles["button"]} ${styles["button-custom"]}`}
            >
              {el}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RecentResult;
