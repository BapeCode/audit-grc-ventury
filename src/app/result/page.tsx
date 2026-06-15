"use client";

import {ThemeProvider} from "@/store/theme-store";
import {QuizProvider} from "@/store/quiz-store";
import ResultIndex from "@/components/result/result-index";
import Section from "@/components/layout/section";
import {AuthProvider} from "@/store/auth-store";

export default function Page() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Section>
                    <QuizProvider>
                        <ResultIndex/>
                    </QuizProvider>
                </Section>
            </AuthProvider>
        </ThemeProvider>
    )
}