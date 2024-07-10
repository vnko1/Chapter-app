"use client";
import React, { FC } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";

import { getDataFromLS, setDataToLS } from "@/utils";
import { SearchField } from "@/components";

import { SearchProps } from "./Search.type";

const Search: FC<SearchProps> = ({ query }) => {
  const { control } = useForm({ values: { query: query || "" } });
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const recentDataHandle = (term: string) => {
    const recentData = getDataFromLS<string[]>("recentData") || [];
    if (term && !recentData.includes(term)) recentData.push(term);
    setDataToLS({
      recentData: Array.from(new Set(recentData.slice(-5))),
    });
  };

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    term ? params.set("query", term) : params.delete("query");
    replace(`${pathname}?${params.toString()}`);
    recentDataHandle(term);
  }, 300);

  return (
    <SearchField
      control={control}
      placeholder="Find your friends here"
      handleSearch={handleSearch}
    />
  );
};

export default Search;
