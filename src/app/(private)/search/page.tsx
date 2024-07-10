import React from "react";

import styles from "./searchPage.module.scss";
import { Search } from "./ui";

async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  return (
    <section className="private-section">
      <div className={`${styles["container"]} private-container`}>
        <Search query={searchParams.query} />
      </div>
    </section>
  );
}

export default SearchPage;
