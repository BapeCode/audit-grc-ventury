"use client";

import { QuizState } from "@/types/quiz";

export default function ResultIndex() {
    const answers: QuizState[] = localStorage.getItem("answers") ? JSON.parse(localStorage.getItem("answers")) : []
    const TOTAL_POINTS = answers.reduce((sum, v) => sum + v.points, 0)

    return (
        <div>
            {answers.map(v => (
                <div key={v.questionId} className="flex flex-col gap-2 text-text">
                    <p>Questions Id : {v.questionId}</p>
                    <p>Points : {v.points}pts</p>
                    <p>Domaine : {v.domaine}</p>
                    <p>Réponse : {v.answer}</p>
                </div>
            ))}

            <p className="text-2xl font-bold text-text">Total de points : {TOTAL_POINTS}</p>
        </div>
    )
}