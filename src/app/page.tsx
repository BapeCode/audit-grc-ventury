"use client";

import Headers from "@/components/layout/header-section";
import {ThemeProvider} from "@/store/theme-store";
import StartingSection from "@/components/ui/starting-section";
import Section from "@/components/layout/section";

export default function Home() {
  return (
    <ThemeProvider>
        <Section>
            <StartingSection/>
        </Section>
    </ThemeProvider>
  );
}
