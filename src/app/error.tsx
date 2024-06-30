"use client";
import React from "react";
import Image from "next/image";

import { LinksEnum } from "@/types";
import { Button } from "@/components";

import { Header } from "./ui";
import styles from "./chapter.module.scss";

function Error() {
  return (
    <>
      <Header />
      <main>
        <section className={styles["section"]}>
          <div className={`container ${styles["container"]}`}>
            <div className={styles["thumb"]}>
              <Image
                src="/error.webp"
                alt="not found image"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className={styles["content"]}>
              <h1
                className={`${styles["title"]} text-text-primary-light dark:text-text-primary-dark`}
              >
                Oh no ! Something went wrong !
              </h1>
              <Button
                href={LinksEnum.HOME}
                fullWidth
                size="small"
                classNames={`${styles["button"]} ${styles["button--mob"]}`}
              >
                Go to home page
              </Button>
              <Button
                href={LinksEnum.HOME}
                fullWidth
                classNames={`${styles["button"]} ${styles["button--tab"]}`}
              >
                Go to home page
              </Button>
              <Button
                href={LinksEnum.HOME}
                fullWidth
                size="large"
                classNames={`${styles["button"]} ${styles["button--desc"]}`}
              >
                Go to home page
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Error;
