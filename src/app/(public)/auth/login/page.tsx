import React from "react";
import { LinksEnum } from "@/types";
import { AuthLink, BlockAuth, Delimiter, GoogleAuth } from "../ui";
import { LoginForm } from "./ui";

function LoginPage({
  searchParams,
}: {
  searchParams: { access_token?: string; refresh_token?: string };
}) {
  return (
    <BlockAuth heading="Log in" authType="Log in">
      <LoginForm
        access_token={searchParams.access_token}
        refresh_token={searchParams.refresh_token}
      />
      <Delimiter />
      <GoogleAuth />
      <AuthLink
        textMsg="ADon`t have an account?"
        linkMsg="Sing up"
        link={LinksEnum.SIGN_UP}
      />
    </BlockAuth>
  );
}

export default LoginPage;
