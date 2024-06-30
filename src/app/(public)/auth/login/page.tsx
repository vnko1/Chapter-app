import React from "react";
import { BlockAuth } from "../ui";
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
    </BlockAuth>
  );
}

export default LoginPage;
