"use client";

import React, { FC } from "react";
import { Button } from "@/components";
import { deleteUserAccount } from "@/lib/actions";

const Delete: FC = () => {
  const onDeleteAcc = async () => {
    await deleteUserAccount(undefined);
  };
  return (
    <Button variant="outlined" color="error" onClick={onDeleteAcc}>
      Delete
    </Button>
  );
};

export default Delete;
