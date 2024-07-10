"use client";

import { createContext, useContext } from "react";

import { ThemeProviderType } from "../ThemeProvider.type";

export const ThemeProviderContext = createContext<ThemeProviderType | null>(
  null
);

export const useThemeProviderContext = () => {
  const themeProviderContext = useContext(ThemeProviderContext);

  if (!themeProviderContext)
    throw new Error(
      "useThemeProviderContext has to be used within <ThemeProviderContext.Provider>"
    );
  return themeProviderContext;
};
