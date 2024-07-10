"use client";
import React, { useState } from "react";
import { LinksEnum } from "@/types";

import { AuthLink, BlockAuth, Delimiter, GoogleAuth } from "../ui";
import { EmailForm, OTPForm } from "./ui";

function RegisterPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  return (
    <BlockAuth heading="Sign up" authType="Create account">
      {email && userId ? (
        <OTPForm email={email} userId={userId} />
      ) : (
        <EmailForm setEmail={setEmail} setUserId={setUserId} />
      )}

      {email && userId ? null : (
        <>
          <Delimiter />
          <GoogleAuth />
        </>
      )}
      <AuthLink
        textMsg="Already have an account?"
        linkMsg="Log in"
        link={LinksEnum.LOG_IN}
      />
    </BlockAuth>
  );
}

export default RegisterPage;
