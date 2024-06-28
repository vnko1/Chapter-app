import React, { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Skeleton.module.scss";

const SkeletonLoader: FC = () => {
  return (
    <>
      {/* <Skeleton /> */}
      <Skeleton count={5} />
    </>
  );
};

export default SkeletonLoader;
