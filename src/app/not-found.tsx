import React from "react";
import Image from "next/image";

import { LinksEnum } from "@/types";
import { Button } from "@/components";

import { Header } from "./ui";

import styles from "./chapter.module.scss";

function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className={styles["section"]}>
          <div className={`container ${styles["container"]}`}>
            <div className={styles["thumb"]}>
              <Image
                src="/404.webp"
                alt="not found image"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className={styles["content"]}>
              <h1
                className={`${styles["title"]} text-text-primary-light dark:text-text-primary-dark`}
              >
                Oh no! Page not found
              </h1>
              <p
                className={`${styles["text"]} text-text-secondary-light dark:text-text-secondary-dark`}
              >
                Sorry, we couldn`t find the page you are looking for.
              </p>
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

export default NotFound;
