"use client";
import Image from "next/image";

import { Button } from "@/components";
import { useModal } from "@/hooks";
import { LinksEnum } from "@/types";

import { ContactUs } from "../ui";
import styles from "./home.module.scss";

export default function HomePage() {
  const modal = useModal();

  return (
    <section className={styles["home-section"]}>
      <div className={`container ${styles["container"]}`}>
        <div className={styles["content"]}>
          <h1 className={styles["title"]}>Welcome to Chapter</h1>
          <p className={styles["text"]}>Read, discuss, make new friends!</p>
          <div className={styles["buttons"]}>
            <Button
              fullWidth
              size="small"
              href={LinksEnum.SIGN_UP}
              classNames={`${styles["buttons__mob"]} ${styles["btn"]}`}
            >
              Sign up
            </Button>
            <Button
              fullWidth
              size="small"
              variant="outlined"
              href={LinksEnum.LOG_IN}
              classNames={`${styles["buttons__mob"]} ${styles["btn"]}`}
            >
              Log in
            </Button>
            <Button
              fullWidth
              href={LinksEnum.SIGN_UP}
              classNames={`${styles["buttons__tab"]} ${styles["btn"]}`}
            >
              Sign up
            </Button>
            <Button
              fullWidth
              variant="outlined"
              href={LinksEnum.LOG_IN}
              classNames={`${styles["buttons__tab"]} ${styles["btn"]}`}
            >
              Log in
            </Button>
          </div>
          <p className={styles["contact"]}>
            Having problems?{" "}
            <button
              onClick={() => {
                modal.setActive(true);
              }}
            >
              Contact us
            </button>
          </p>
        </div>
        <div className={styles["hero"]}>
          <div className={styles["hero-bg"]}></div>
          <Image
            src="/home-pic.webp"
            fill
            alt="hero image"
            priority
            sizes="100wv"
          />
        </div>
      </div>
      <ContactUs {...modal} />
    </section>
  );
}
