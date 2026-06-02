import {JSX} from "react";

interface QuizQuestionProps {
    question: string;
    example: string;
}

export default function QuizQuestion({
    question,
    example,
}: QuizQuestionProps) {
    return (
        <section className="flex flex-col w-full items-start py-3 gap-2">
            <h1 className="text-4xl font-normal text-slate-900 dark:text-slate-50">{question}</h1>
            <p className="text-sm font-normal text-slate-400 dark:text-slate-600">{example}</p>
        </section>
    )
}