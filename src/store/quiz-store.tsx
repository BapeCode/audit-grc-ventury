"use client";

import {createContext, ReactNode, useContext, useState} from "react";
import { useRouter } from "next/navigation";
import {QuizContextProps} from "@/types/props.type";
import {getAllQuestion, getQuestionByIndex} from "@/lib/questions.utils";
import {getDomainFinish, getDomainFromIndex, getDomainProgress, getDomainState} from "@/lib/domain.utils";
import {AnswerState, AnswerType} from "@/types/answer.type";
import {Domain} from "@/types/domain.type";
import {Questions} from "@/types/questions.type";
import {DOMAINS} from "@/data/domain.data";
import {ANSWER_POINTS} from "@/data/answer.data";

const QuizContext = createContext<QuizContextProps | undefined>(undefined)

function QuizProvider({children}: { children: ReactNode }) {
    const [globalIndex, setGlobalIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<AnswerState[]>([])
    const [currentAnswer, setCurrentAnswer] = useState<AnswerType | null>(null)
    const currentQuestion: Questions = getQuestionByIndex(globalIndex);
    const currentDomain: Domain = getDomainFromIndex(globalIndex);
    const domainQuestionLength: number = getDomainProgress(globalIndex).length;
    const domainState: number = getDomainState(globalIndex);
    const maxQuestions: number = getAllQuestion().length;
    const domainFinished: Set<Domain> = new Set<Domain>()

    const router = useRouter()

    DOMAINS.forEach(d => {
        if (getDomainFinish(d, globalIndex)) {
            domainFinished.add(d)
        }
    })

    const setAnswer = (value: AnswerType) => {
        setCurrentAnswer(value)
        save(value)
    }

    const save = (answer: AnswerType) => {
        setAnswers((prev) => {
            const newAnswer = {
                questionId: currentQuestion.id,
                domain: currentQuestion.domain,
                answer: answer,
                points: currentQuestion.points * ANSWER_POINTS[answer],
                recommandation: currentQuestion.action[answer],
                criticality: currentQuestion.criticality,
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
        if (globalIndex === maxQuestions - 1) {
            localStorage.setItem("answers", JSON.stringify(answers))
            router.push("/result")
            return
        }
        const nextQuestion = getQuestionByIndex(globalIndex + 1)
        const nextAnswer = answers.find(a => a.questionId === nextQuestion.id)
        setCurrentAnswer(nextAnswer?.answer || null)
        setGlobalIndex(globalIndex + 1)
    }

    const prev = () => {
        if (globalIndex - 1 < 0) return
        const prevQuestion = getQuestionByIndex(globalIndex - 1)
        const prevAnswer = answers.find(a => a.questionId === prevQuestion.id)
        setCurrentAnswer(prevAnswer?.answer || null)
        setGlobalIndex(globalIndex - 1)
    }

    return (
        <QuizContext.Provider value={{
            currentDomain,
            domainState,
            domainFinished,
            domainQuestionLength,
            currentQuestion,
            currentAnswer,
            maxQuestions,
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