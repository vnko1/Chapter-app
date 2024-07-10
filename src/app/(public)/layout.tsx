import React, { ReactNode } from "react";
import { Header } from "../ui";

function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default PublicLayout;
