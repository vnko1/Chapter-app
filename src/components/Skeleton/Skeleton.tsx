import React, { FC } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Skeleton.module.scss";

const SkeletonLoader: FC = () => {
  return (
    <SkeletonTheme baseColor="#D9D7D4">
      <div className={styles["box"]}>
        <div className={styles["wrapper"]}>
          <Skeleton height={52} width={52} circle />
          <Skeleton width={166} />
        </div>
        <div className={styles["container"]}>
          <Skeleton height={440} />
        </div>
        <div className={styles["container"]}>
          <Skeleton width={190} style={{ marginBottom: "12px" }} />
          <Skeleton count={4} />
        </div>
        <div className={styles["btn-wrapper"]}>
          <div>
            <Skeleton circle width={16} height={16} />
            <Skeleton width={54} />
          </div>
          <div>
            <Skeleton circle width={16} height={16} />
            <Skeleton width={116} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
