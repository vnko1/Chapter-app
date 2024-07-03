import React, { ReactNode } from "react";
import { ProfileProvider } from "@/context";

function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <ProfileProvider>
      <div className="private-layout">
        <main>{children}</main>
      </div>
    </ProfileProvider>
  );
}

export default PrivateLayout;
