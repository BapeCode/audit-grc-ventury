"use client";

import {ThemeProvider} from "@/store/theme-store";
import {QuizProvider} from "@/store/quiz-store";
import QuizIndex from "@/components/quiz/quiz-index";
import Section from "@/components/layout/section";

export default function Page() {
    return (
        <ThemeProvider>
            <Section>
                <QuizProvider>
                    <QuizIndex/>
                </QuizProvider>
            </Section>
        </ThemeProvider>
    )
}