"use client";
import Image from "next/image";

import { Button } from "@/components";

import { LinksEnum } from "@/types";
import styles from "./home.module.scss";

export default function HomePage() {
  return (
    <section className={styles["home-section"]}>
      <div className="container">
        <h1 className={styles["title"]}>Welcome to Chapter</h1>
        <p className={styles["text"]}>Read, discuss, make new friends!</p>
        <div className={styles["buttons"]}>
          <Button
            fullWidth
            size="small"
            href={LinksEnum.SIGN_UP}
            classNames={styles["buttons__mob"]}
          >
            Sign up
          </Button>
          <Button
            fullWidth
            size="small"
            variant="outlined"
            href={LinksEnum.LOG_IN}
            classNames={styles["buttons__mob"]}
          >
            Log in
          </Button>
          <Button
            fullWidth
            size="small"
            href={LinksEnum.SIGN_UP}
            classNames={styles["buttons__tab"]}
          >
            Sign up
          </Button>
          <Button
            fullWidth
            variant="outlined"
            href={LinksEnum.LOG_IN}
            classNames={styles["buttons__tab"]}
          >
            Log in
          </Button>
        </div>
        <p className={styles["contact"]}>
          Having problems?{" "}
          <button
            onClick={() => {
              console.log(1);
            }}
          >
            Contact us
          </button>
        </p>
        <div className={styles["hero"]}>
          <div className={styles["hero-bg"]}></div>
          <Image src="/home-pic.webp" fill alt="hero image" priority />
        </div>
      </div>
    </section>
  );
}
