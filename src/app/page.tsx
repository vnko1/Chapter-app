"use client";
import { Button, TextField } from "@/components";
import { useThemeToggler } from "@/hooks";
import { IconsEnum } from "@/types";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const themeToggle = useThemeToggler();
  const nethods = useForm();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        variant="contained"
        color="positive"
        onClick={() => themeToggle((theme) => !theme)}
      >
        BUTTON
      </Button>
      <FormProvider {...nethods}>
        <TextField id="name" name="name" leftIcon={IconsEnum.} />
      </FormProvider>
    </main>
  );
}
