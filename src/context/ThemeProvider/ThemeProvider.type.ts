import { Dispatch, ReactNode, SetStateAction } from "react";

export type ThemeProviderType = {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
};

export type ThemeProviderProps = { children: ReactNode };
