import {createContext, ReactNode, use, useContext, useState} from "react";
import {Domaine, Questions, QuizState} from "@/types/quiz";
import {DOMAINS_ORDER, getAnswerType, getQuestionsByDomain, QuizManager} from "@/data/question";
import {getQuestionByIndex} from "@/lib/quiz-utils";

interface QuizContextType {
    domain: Domaine
    stateQuestion: number
    currentQuestion: Questions
    currentAnswer: number | null
    length: number
    setAnswer: (value: number) => void;
    next: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

function QuizProvider({children}: { children: ReactNode }) {
    const [globalIndex, setGlobalIndex] = useState<number>(0)


    const [domain, setDomain] = useState<Domaine>(DOMAINS_ORDER[0])
    const [stateQuestion, setStateQuestion] = useState<number>(0)
    const [currentAnswer, setCurrentAnswer] = useState<number | null>(null)
    const [anwser, setAnwser] = useState<QuizState[]>([])

    const question = getQuestionByIndex(0)
    const length = question.length
    const currentQuestion = question[stateQuestion]

    const setAnswer = (value: number) => {
        setCurrentAnswer(value)
        if (currentAnswer === null) return;
        setAnwser(prev => {
            const newAnswer: QuizState = {
                questionId: currentQuestion.id,
                domaine: domain,
                answer: getAnswerType(currentAnswer),
                points: currentQuestion.points
            }
            return [...prev, newAnswer]
        })
    }

    const reset = (value: number) => {
        setStateQuestion(value)
        setCurrentAnswer(null)
    }

    const next = () => {
        if (stateQuestion + 1 < length) {
            reset(stateQuestion + 1)
        } else {
            const currentDomainIndex = DOMAINS_ORDER.indexOf(domain)
            const nextDomainIndex = currentDomainIndex + 1
            if (nextDomainIndex >= DOMAINS_ORDER.length) return console.log("On a fini !")
            setDomain(DOMAINS_ORDER[nextDomainIndex])
            reset(0)
        }
    }

    return (
        <QuizContext.Provider value={{
            domain,
            stateQuestion,
            currentQuestion,
            currentAnswer,
            length,
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