"use client"

import {QuizAnswerProps} from "@/types/props.type";
import {ANSWER} from "@/data/answer.data";

export default function QuizAnswer({
    onClick,
    currentAnswer,
}: QuizAnswerProps) {

    return (
        <section className="flex flex-col items-center gap-2">
            {ANSWER.map((key, index) => {
                const isActive = key.value === currentAnswer;
                 return (
                    <article 
                        key={index}
                        onClick={() => onClick(key.value)}
                        className={`flex items-center gap-4 w-full text-left border rounded-xs px-4 py-3 cursor-pointer bg-surface hover:scale-[1.01] ${isActive ? "border-primary" : "border-border"}`}
                    >
                        <div className="flex-[0_0_auto] w-5 h-5 rounded-full flex items-center justify-center border border-border">
                            {isActive && (
                                <div className="h-2.5 w-2.5 rounded-full bg-primary"/>
                            )}
                        </div>
                        <div className="flex-[1_1_auto] flex flex-col">
                            <span className="text-sm md:text-lg font-normal text-text">{key.title}</span>
                            <p className="text-xs md:text-md font-light text-text/50">{key.description}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}