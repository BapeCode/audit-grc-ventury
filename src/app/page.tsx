"use client";

import {ThemeProvider} from "@/store/theme-store";
import StartingSection from "@/components/home/starting-section";
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
