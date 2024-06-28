import React from "react";

import { Header } from "./ui";
import styles from "./chapter.module.scss";
import Image from "next/image";

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
              <h1 className={styles["title"]}>Oh no! Page not found</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default NotFound;
