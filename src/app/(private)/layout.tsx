import React, { ReactNode } from "react";
import { NavigationTogglerProvider, ProfileProvider } from "@/context";

function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <ProfileProvider>
      <div className="private-layout">
        <NavigationTogglerProvider></NavigationTogglerProvider>
        <main>{children}</main>
      </div>
    </ProfileProvider>
  );
}

export default PrivateLayout;
