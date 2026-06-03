"use client"

import QuizProgress from "@/components/quiz/quiz-progress";
import QuizDomain from "@/components/quiz/quiz-domain";
import {DOMAINS_ORDER} from "@/data/quiz";
import QuizQuestion from "@/components/quiz/quiz-question";
import QuizAnswer from "@/components/quiz/quiz-answer";
import QuizFooter from "@/components/quiz/quiz-footer";
import {useQuiz} from "@/store/quiz-store";
import Loading from "../layout/loading";

export default function QuizIndex() {
    const { domain, domainState, domainLength, domainFinish, currentQuestion, currentAnswer, globalIndex, maxIndex, setAnswer, next } = useQuiz()

    if (!currentQuestion) {
        return (
            <Loading/>
        )
    }

    return (
        <>
            <QuizProgress maxIndex={maxIndex} globalIndex={globalIndex}/>
            <QuizDomain domainFinish={domainFinish} domains={DOMAINS_ORDER} domainActive={domain} lengthNumber={domainLength} questionNumber={domainState}/>
            <QuizQuestion question={currentQuestion.questionText} example={currentQuestion.exampleText}/>
            <QuizAnswer onClick={setAnswer} currentAnswer={currentAnswer}/>
            <QuizFooter isLast={globalIndex === maxIndex - 1} currentAnswer={currentAnswer} isFirst={globalIndex === 0} next={next}/>
        </>
    )
}