import { ThemeProvider } from "@/context";
import React, { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default AppLayout;
