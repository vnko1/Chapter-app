"use client";
import React, { FC, useEffect, useState } from "react";
import { getDataFromLS, setDataToLS } from "@/utils";

import { ThemeProviderContext } from "./hook";
import { ThemeProviderProps } from "./ThemeProvider.type";

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    getDataFromLS("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      setDataToLS({ theme: "dark" });
    } else {
      document.documentElement.classList.remove("dark");
      setDataToLS({ theme: "light" });
    }
  }, [isDarkTheme]);

  return (
    <ThemeProviderContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
