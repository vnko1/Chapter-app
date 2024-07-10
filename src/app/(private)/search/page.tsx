import React from "react";

import { SearchResponse } from "@/types";
import { querySearch } from "@/lib/actions";

import { RecentResult, Search, SearchResult } from "./ui";

import styles from "./searchPage.module.scss";

type ResponseType = { data: SearchResponse } | null;

async function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const res: ResponseType = await querySearch(searchParams);

  return (
    <section className="private-section">
      <div className={`${styles["container"]} private-container`}>
        <Search query={searchParams.query} />
        {res?.data ? (
          <SearchResult searchResult={res.data} />
        ) : (
          <RecentResult query={searchParams.query} />
        )}
      </div>
    </section>
  );
}

export default SearchPage;
