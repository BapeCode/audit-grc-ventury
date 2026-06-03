"use client";

import {ThemeProvider} from "@/store/theme-store";
import Headers from "@/components/layout/header-section";
import {QuizProvider} from "@/store/quiz-store";
import ResultIndex from "@/components/result/result-index";

export default function Page() {
    return (
        <ThemeProvider>
            <main className="flex flex-col flex-1 bg-bg font-sans h-full">
                <Headers/>
                <section className="md:max-w-5xl md:mx-auto w-full py-8 px-6 md:px-0">
                    <QuizProvider>
                        <ResultIndex/>
                    </QuizProvider>
                </section>
            </main>
        </ThemeProvider>
    )
}