"use client";

import Headers from "@/components/layout/header-section";
import { ThemeProvider } from "@/store/theme-store";
import ErrorSection from "@/components/layout/error-section";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <ThemeProvider>
      <main className="flex flex-col flex-1 bg-bg font-sans h-full">
        <Headers />
        <ErrorSection reset={reset} />
      </main>
    </ThemeProvider>
  );
}
