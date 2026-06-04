"use client"

import { AnswerType } from "@/types/quiz";

interface QuizAnswerProps {
    onClick: (response: AnswerType) => void;
    currentAnswer: AnswerType | null;
}

interface AnswerProps {
    value: AnswerType;
    title: string;
    description: string;
}

const Answer: AnswerProps[] = [
    {
        value: "compliant",
        title: "Conforme et documenté",
        description: "La règle ou mesure est officiellement formalisée, communiquée et auditée régulièrement."
    },
    {
        value: "partial",
        title: "Partiellement mis en oeuvre",
        description: "Certaines pratiques existent mais ne sont ni formalisées, ni appliquées de manière systématique"
    },
    {
        value: "noncompliant",
        title: "Non initié ou inexistant",
        description: "Aucune démarche n'a été entamée sur ce point à l'heure actuelle"
    },
]

export default function QuizAnswer({
    onClick,
    currentAnswer,
}: QuizAnswerProps) {

    return (
        <section className="flex flex-col items-center gap-2">
            {Answer.map((key, index) => {
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