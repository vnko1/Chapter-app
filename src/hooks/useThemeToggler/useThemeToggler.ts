"use client";

import { useEffect, useState } from "react";
import { getDataFromLS, removeDataFromLS, setDataToLS } from "@/utils";

export const useThemeToggler = (enableTheme = true) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const getCurrentTheme = () =>
    getDataFromLS("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    if (darkTheme) removeDataFromLS("theme");
    else setDataToLS({ theme: "dark" });
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  useEffect(() => {
    const isDarkTheme = getCurrentTheme();

    enableTheme && setDarkTheme(isDarkTheme);
  }, [enableTheme]);

  return { toggleTheme, getCurrentTheme };
};
