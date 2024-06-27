"use client";
import { Button, TextField } from "@/components";
import { useThemeToggler } from "@/hooks";

import { FormProvider, useForm } from "react-hook-form";
import { Logo } from "./ui";

export default function Home() {
  const { toggleTheme } = useThemeToggler();
  const nethods = useForm();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="contained" color="positive" onClick={toggleTheme}>
        BUTTON
      </Button>
      <FormProvider {...nethods}>
        <TextField id="name" name="name" label="Full name" placeholder="ad" />
      </FormProvider>
    </main>
  );
}
