"use client";
import React, { useState } from "react";
import { BlockAuth } from "../ui";
import { ForgotPasswordForm, ForgotPasswordMessage } from "./ui";

function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <BlockAuth heading="Forgot password">
      {submitted ? (
        <ForgotPasswordMessage setSubmitted={setSubmitted} />
      ) : (
        <ForgotPasswordForm setSubmitted={setSubmitted} />
      )}
    </BlockAuth>
  );
}

export default ForgotPasswordPage;
