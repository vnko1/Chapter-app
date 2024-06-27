"use client";
import { Button } from "@/components";
import { useThemeToggler } from "@/hooks";

export default function Home() {
  const themeToggle = useThemeToggler();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        variant="contained"
        color="positive"
        onClick={() => themeToggle((theme) => !theme)}
      >
        BUTTON
      </Button>
    </main>
  );
}
