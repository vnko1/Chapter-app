import React from "react";
import { BlockAuth } from "../../ui";
import { ChangePasswordForm } from "../ui";

function ChangPasswordPage({ params: { otp } }: { params: { otp: string } }) {
  return (
    <BlockAuth heading="Create new password">
      <ChangePasswordForm otp={otp} />
    </BlockAuth>
  );
}

export default ChangPasswordPage;
