"use client";

import { getDataFromLS, removeDataFromLS, setDataToLS } from "@/utils";
import { useEffect, useState } from "react";

export const useThemeToggler = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const getCurrentTheme = () =>
    getDataFromLS("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  useEffect(() => {
    const isDarkTheme = getCurrentTheme();

    setDarkTheme(isDarkTheme);
  }, []);

  const toggleTheme = () => {
    if (darkTheme) removeDataFromLS("theme");
    else setDataToLS({ theme: "dark" });
    setDarkTheme(!darkTheme);
  };

  return { toggleTheme, getCurrentTheme };
};
