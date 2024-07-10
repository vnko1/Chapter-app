import React from "react";

import { BlockAuth } from "../../ui";
import { AccountForm } from "../ui";

function AccountCreationPage({
  params: { userId },
}: {
  params: { userId: string };
}) {
  return (
    <>
      <BlockAuth heading="Create account">
        <AccountForm userId={userId} />
      </BlockAuth>
    </>
  );
}

export default AccountCreationPage;
