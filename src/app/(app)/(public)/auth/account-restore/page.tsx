"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getDataFromSS } from "@/utils";
import { BlockAuth } from "../ui";
import { RestoreForm, RestoreMessage } from "./ui";

function RestorePage() {
  const router = useRouter();
  const [timeStamp, setTimeStamp] = useState("");
  const [email, setEmail] = useState("");
  const [showRestoreForm, setShowRestoreForm] = useState(false);

  useEffect(() => {
    const email = getDataFromSS<string>("email");
    const deletedTimeStamp = getDataFromSS<string>("deletedTimeStamp");
    if (email && deletedTimeStamp) {
      setTimeStamp(deletedTimeStamp);
      setEmail(email);
    } else router.back();
  }, [router]);

  return (
    <BlockAuth>
      {showRestoreForm ? (
        <RestoreForm email={email} />
      ) : (
        <RestoreMessage
          deletedTimeStamp={timeStamp}
          setShowRestoreForm={setShowRestoreForm}
          email={email}
        />
      )}
    </BlockAuth>
  );
}

export default RestorePage;
