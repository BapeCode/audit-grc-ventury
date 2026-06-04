"use client";

import {createContext, ReactNode, useContext, useState} from "react";
import {AnswerType, Domaine, Questions, QuizState} from "@/types/quiz";
import {DOMAINS_ORDER, POINTS_MAP} from "@/data/quiz";
import {getAllQuestion, getDomainFinish, getDomainFromIndex, getDomainProgress, getDomainState, getQuestionByIndex} from "@/lib/quiz-utils";
import { useRouter } from "next/navigation";

interface QuizContextType {
    domain: Domaine
    currentQuestion: Questions
    currentAnswer: AnswerType | null
    domainLength: number;
    domainState: number;
    maxIndex: number;
    globalIndex: number;
    domainFinish: Set<Domaine>
    answers: QuizState[];
    setAnswer: (value: AnswerType) => void;
    next: () => void;
    prev: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

function QuizProvider({children}: { children: ReactNode }) {
    const [globalIndex, setGlobalIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<QuizState[]>([])
    const [currentAnswer, setCurrentAnswer] = useState<AnswerType | null>(null)
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

    const setAnswer = (value: AnswerType) => {
        setCurrentAnswer(value)
        save(value)
    }

    const reset = () => {
        setCurrentAnswer(null)
    }

    const save = (answer: AnswerType) => {
        setAnswers((prev) => {
            const newAnswer = {
                questionId: currentQuestion.id,
                domaine: currentQuestion.domaine,
                answer: answer,
                points: currentQuestion.points * POINTS_MAP[answer],
                recommandation: currentQuestion.recommandation[answer]
            };
            const existingAnswerIndex = prev.findIndex(v => v?.questionId === currentQuestion.id);

            if (existingAnswerIndex !== -1) {
                return prev.map((item, index) => {
                    if (index === existingAnswerIndex) {
                        return newAnswer; 
                    }
                    return item;
                });
            } else {
                const cleanPrev = prev.filter(item => item !== undefined);
                return [...cleanPrev, newAnswer];
            }
        });
    }

    const next = () => {
        if (globalIndex === maxIndex - 1) {
            localStorage.setItem("answers", JSON.stringify(answers))
            router.push("/result")
        }
        setGlobalIndex(globalIndex + 1)
        reset()
    }

    const prev = () => {
        if (globalIndex - 1 < 0) {
            return
        }
        setGlobalIndex(globalIndex - 1)
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
            next,
            prev
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