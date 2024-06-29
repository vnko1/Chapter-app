"use client";

import { useCallback, useEffect, useState } from "react";
import { getDataFromLS, removeDataFromLS, setDataToLS } from "@/utils";

export const useThemeToggler = (enableTheme = true) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const getCurrentTheme = useCallback(() => {
    if (isMounted) {
      return (
        getDataFromLS("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  }, [isMounted]);

  const toggleTheme = () => {
    if (isMounted) {
      if (darkTheme) removeDataFromLS("theme");
      else setDataToLS({ theme: "dark" });
      setDarkTheme(!darkTheme);
    }
  };

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  useEffect(() => {
    const isDarkTheme = getCurrentTheme();

    enableTheme && setDarkTheme(isDarkTheme);
  }, [enableTheme, getCurrentTheme]);

  return { toggleTheme, getCurrentTheme };
};
