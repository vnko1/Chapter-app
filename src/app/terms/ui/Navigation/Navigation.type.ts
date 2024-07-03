import { IconsEnum } from "@/types";

export type NavigationList = {
  items: NavigationLinkProps[];
};

export type NavigationLinkProps = {
  id: string;
  path: string;
  icon?: IconsEnum;
  name: string;
};
