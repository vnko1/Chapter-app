"use client";
import { useState } from "react";

import { NavigationTogglerStateContext } from "./hook";
import { NavigationTogglerContextProps } from "./NavigationTogglerProvider.type";

// const navActiveClassName = "nav-active";

export default function NavigationTogglerProvider({
  children,
  ...props
}: NavigationTogglerContextProps) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <NavigationTogglerStateContext.Provider
      value={{ ...props, isActiveMenu, setIsActiveMenu }}
    >
      {children}
    </NavigationTogglerStateContext.Provider>
  );
}
