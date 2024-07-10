"use client";
import React, { FC, useEffect, useState } from "react";
import { getDataFromLS, setDataToLS } from "@/utils";

import { ThemeProviderContext } from "./hook";
import { ThemeProviderProps } from "./ThemeProvider.type";

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(getDataFromLS<boolean>("isDarkTheme") || false);
  }, [isDarkTheme]);

  useEffect(() => {
    isDarkTheme && document.documentElement.classList.add("dark");
    !isDarkTheme && document.documentElement.classList.remove("dark");
  }, [isDarkTheme]);

  const themeToggler = () => {
    setIsDarkTheme(!isDarkTheme);
    setDataToLS({ isDarkTheme: !isDarkTheme });
  };

  return (
    <ThemeProviderContext.Provider value={{ isDarkTheme, themeToggler }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
