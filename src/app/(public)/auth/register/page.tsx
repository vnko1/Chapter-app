import React from "react";
import { AuthLink, BlockAuth } from "../ui";
import { LinksEnum } from "@/types";

function RegisterPage() {
  return (
    <BlockAuth heading="Sign up" authType="Create account">
      <AuthLink
        textMsg="Already have an account?"
        linkMsg="Log in"
        link={LinksEnum.LOG_IN}
      />
    </BlockAuth>
  );
}

export default RegisterPage;
