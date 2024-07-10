"use client";
import React, { FC } from "react";
import Image from "next/image";

import { useProfileContext } from "@/context";
import { Icon } from "@/components";
import { IconsEnum } from "@/types";
import { default_avatar } from "@/utils";

import { ProfileProps } from "./Profile.type";
import styles from "./Profile.module.scss";

const Profile: FC<ProfileProps> = ({ close }) => {
  const { user } = useProfileContext();
  return (
    <div className={styles["menu"]}>
      <button onClick={() => close()}>
        <Icon
          icon={IconsEnum.Arrow_left}
          size={24}
          removeInlineStyle
          className={`${styles["icon--mob"]} stroke-primary-default-light dark:stroke-primary-default-dark`}
        />
        <Icon
          icon={IconsEnum.Close}
          size={24}
          removeInlineStyle
          className={`${styles["icon--desc"]} stroke-primary-default-light dark:stroke-primary-default-dark`}
        />
      </button>
      <div className={styles["user"]}>
        <div className={styles["avatar"]}>
          <Image fill src={user.avatarUrl || default_avatar} alt="avatar" />
        </div>
        <p className={styles["nickname"]}>{user.nickName}</p>
      </div>
    </div>
  );
};

export default Profile;
