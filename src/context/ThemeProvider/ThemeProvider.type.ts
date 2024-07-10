import { ReactNode } from "react";

export type ThemeProviderType = {
  isDarkTheme: boolean;
  themeToggler: () => void;
};

export type ThemeProviderProps = { children: ReactNode };
