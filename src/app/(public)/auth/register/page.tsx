"use client";
import React, { useState } from "react";
import { AuthLink, BlockAuth, Delimiter, GoogleAuth } from "../ui";
import { LinksEnum } from "@/types";
import { EmailForm } from "./ui";

function RegisterPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  return (
    <BlockAuth heading="Sign up" authType="Create account">
      <EmailForm setEmail={setEmail} setUserId={setUserId} />
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
