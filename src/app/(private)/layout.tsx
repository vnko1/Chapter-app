import React, { ReactNode } from "react";
import { NavigationTogglerProvider, ProfileProvider } from "@/context";
import { ProfileHeader, SideBarNavigation } from "./ui";

function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <ProfileProvider>
      <div className="private-layout">
        <NavigationTogglerProvider>
          <SideBarNavigation />
          <ProfileHeader />
        </NavigationTogglerProvider>
        <main>{children}</main>
      </div>
    </ProfileProvider>
  );
}

export default PrivateLayout;
