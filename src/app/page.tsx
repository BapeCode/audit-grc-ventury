"use client";

import Headers from "@/components/layout/header-section";
import {ThemeProvider} from "@/store/theme-store";
import StartingSection from "@/components/ui/starting-section";

export default function Home() {
  return (
    <ThemeProvider>
        <main className="flex flex-col flex-1 bg-slate-50 font-sans dark:bg-slate-900">
            <Headers/>
            <StartingSection/>
        </main>
    </ThemeProvider>
  );
}
