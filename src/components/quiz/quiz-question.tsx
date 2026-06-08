"use client"

import {QuizQuestionProps} from "@/types/props.type";

export default function QuizQuestion({
    question,
    example,
}: QuizQuestionProps) {
    return (
        <section className="flex flex-col w-full items-start py-3 gap-2">
            <h1 className="text-lg md:text-4xl font-normal text-text">{question}</h1>
            <p className="text-xs font-normal text-text/50 ">{example}</p>
        </section>
    )
}