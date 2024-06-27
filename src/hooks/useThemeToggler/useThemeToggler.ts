"use client";

import { useEffect, useState } from "react";

export const useThemeToggler = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  useEffect(() => {
    const isDarkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkTheme(isDarkTheme);
  }, []);

  return setDarkTheme;
};
