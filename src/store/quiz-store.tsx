"use client";

import {createContext, ReactNode, use, useContext, useEffect, useState} from "react";
import {Domaine, Questions, QuizState} from "@/types/quiz";
import {ANSWERS, DOMAINS_ORDER, getAnswerType, getQuestionsByDomain, QuizManager} from "@/data/quiz";
import {getAllQuestion, getDomainFinish, getDomainFromIndex, getDomainProgress, getDomainState, getQuestionByIndex} from "@/lib/quiz-utils";
import { useRouter } from "next/navigation";

interface QuizContextType {
    domain: Domaine
    currentQuestion: Questions
    currentAnswer: number | null
    domainLength: number;
    domainState: number;
    maxIndex: number;
    globalIndex: number;
    domainFinish: Set<Domaine>
    answers: QuizState[];
    setAnswer: (value: number) => void;
    next: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

function QuizProvider({children}: { children: ReactNode }) {
    const [globalIndex, setGlobalIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<QuizState[]>([])
    const [currentAnswer, setCurrentAnswer] = useState<number | null>(null)
    const maxIndex = getAllQuestion().length
    const currentQuestion = getQuestionByIndex(globalIndex); // questions actuel
    const domain = getDomainFromIndex(globalIndex)
    const domainFinish: Set<Domaine> = new Set()
    const numberOfQuestionByDomain: Questions[] = getDomainProgress(globalIndex); // get le nombre de question trier par domaine
    const domainLength = numberOfQuestionByDomain.length // taille des questions par domaine
    const domainState = getDomainState(globalIndex)

    const router = useRouter()

    DOMAINS_ORDER.forEach(d => {
        if (getDomainFinish(d, globalIndex)) {
            domainFinish.add(d)
        }
    })

    const setAnswer = (value: number) => {
        setCurrentAnswer(value)
        save()
    }

    const reset = () => {
        setCurrentAnswer(null)
    }

    const save = () => {
        setAnswers((prev) => {
            const newAnswer: QuizState = {
                questionId: currentQuestion.id,
                domaine: currentQuestion.domaine,
                answer: ANSWERS[currentAnswer as number] || "noncompliant",
                points: currentQuestion.points
            }
            return [...prev, newAnswer]
        })
    }

    const next = () => {
        if (globalIndex === maxIndex - 1) {
            localStorage.setItem("answers", JSON.stringify(answers))
            router.push("/result")
        }
        setGlobalIndex(globalIndex + 1)
        reset()
    }

    return (
        <QuizContext.Provider value={{
            domain,
            domainState,
            domainFinish,
            domainLength,
            currentQuestion,
            currentAnswer,
            maxIndex,
            globalIndex,
            answers,
            setAnswer,
            next
        }}>
            {children}
        </QuizContext.Provider>
    )
}

function useQuiz() {
    const context = useContext(QuizContext)
    if (!context) throw new Error("useQuiz doit être utilisé dans un QuizProvider")
    return context;
}

export { useQuiz, QuizProvider }