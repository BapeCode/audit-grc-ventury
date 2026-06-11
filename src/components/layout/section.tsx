import {ReactNode} from "react";
import Headers from "@/components/layout/header-section";
import {QuizProvider} from "@/store/quiz-store";
import QuizIndex from "@/components/quiz/quiz-index";

export default function Section({
    children,
}: {children: ReactNode}) {
    return (
        <main className="flex flex-col flex-1 bg-bg font-sans h-full">
            <Headers/>
            <section className="w-full py-8 px-6 flex-1 flex flex-col">
                {children}
            </section>
        </main>
    )
}