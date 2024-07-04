"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { default_avatar } from "@/utils";
import { useProfileContext } from "@/context";
import { LinksEnum } from "@/types";

import { AvatarProps } from "./Avatar.type";
import styles from "./Avatar.module.scss";

const Avatar: FC<AvatarProps> = ({ classNames }) => {
  const { user } = useProfileContext();
  console.log("🚀 ~ user:", user);
  return (
    <Link
      href={LinksEnum.PROFILE}
      className={`${styles["avatar"]} ${classNames}`}
    >
      <Image
        src={user.avatarUrl ? user.avatarUrl : default_avatar}
        alt="avatar"
        fill
        id="avatar"
        style={{ objectFit: "cover" }}
      />
      <span>{user.firstName}</span>
      <span>{user.nickName}</span>
    </Link>
  );
};

export default Avatar;
