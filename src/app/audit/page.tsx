"use client";

import {ThemeProvider} from "@/store/theme-store";
import Headers from "@/components/layout/header-section";
import {QuizProvider, useQuiz} from "@/store/quiz-store";
import QuizIndex from "@/components/quiz/quiz-index";

export default function Page() {
    return (
        <ThemeProvider>
            <main className="flex flex-col flex-1 bg-slate-50 font-sans dark:bg-slate-900">
                <Headers/>
                <section className="max-w-4xl mx-auto w-full py-8">
                    <QuizProvider>
                        <QuizIndex/>
                    </QuizProvider>
                </section>
            </main>
        </ThemeProvider>
    )
}