"use client"

import QuizProgress from "@/components/quiz/quiz-progress";
import QuizDomain from "@/components/quiz/quiz-domain";
import QuizQuestion from "@/components/quiz/quiz-question";
import QuizAnswer from "@/components/quiz/quiz-answer";
import QuizFooter from "@/components/quiz/quiz-footer";
import {useQuiz} from "@/store/quiz-store";
import Loading from "../layout/loading";
import {useEffect, useState} from "react";
import Container from "@/components/layout/container";
import {DOMAINS} from "@/data/domain.data";

export default function QuizIndex() {
    const [isLoading, setIsLoading] = useState(true);
    const { currentDomain, domainState, domainQuestionLength, domainFinished, currentQuestion, currentAnswer, globalIndex, maxQuestions, setAnswer, next, prev } = useQuiz()

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500)
        return () => clearTimeout(timer)
    }, [])

    if (!currentQuestion || isLoading) return <Loading/>

    return (
        <div className="flex flex-col justify-between flex-1">
            <Container>
                <QuizProgress maxIndex={maxQuestions} globalIndex={globalIndex}/>
                <QuizDomain domainFinished={domainFinished} domains={DOMAINS} currentDomain={currentDomain} domainLength={domainQuestionLength} domainState={domainState}/>
                <div key={globalIndex} className="animate-translate">
                    <QuizQuestion question={currentQuestion.text} example={currentQuestion.example}/>
                    <QuizAnswer onClick={setAnswer} currentAnswer={currentAnswer}/>
                </div>
            </Container>
            <QuizFooter isLast={globalIndex === maxQuestions - 1} currentAnswer={currentAnswer} isFirst={globalIndex === 0} prev={prev} next={next}/>
        </div>
    )
}