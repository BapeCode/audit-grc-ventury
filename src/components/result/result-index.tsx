"use client";

import ResultNotation from "@/components/result/result-notation";
import ResultRecommandation from "@/components/result/result-recommandations";
import ResultFooter from "@/components/result/result-footer";
import Loading from "@/components/layout/loading";
import {useEffect, useState} from "react";
import Container from "@/components/layout/container";
import {AnswerState} from "@/types/answer.type";
import {getMaxPoints} from "@/lib/questions.utils";
import {
    getConformity,
    getCriticalPoints,
    getDomainStrong,
    getDomainWeakness,
    getMaturityLevel
} from "@/lib/result.utils";
import ResultCard from "@/components/result/result-card";

export default function ResultIndex() {
    const [answers, setAnswers] = useState<AnswerState[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem("answers")
        if (saved) setAnswers(JSON.parse(saved))
        setIsLoaded(true)
    }, [])

    if (!isLoaded) return <Loading/>

    const USER_POINTS = answers.reduce((sum, v) => sum + v.points, 0)
    const TOTAL_POINTS = getMaxPoints()
    const PERCENTAGE = (USER_POINTS / TOTAL_POINTS) * 100
    const LEVELS = getMaturityLevel(PERCENTAGE)

    // Card
    const conformityPercentage = getConformity(answers)
    const criticalPoints = getCriticalPoints(answers);
    const domainStrong = getDomainStrong(answers);
    const domainWeak = getDomainWeakness(answers)


    if (!LEVELS) return <Loading/>

    return (
        <>
           <div className="flex flex-col flex-1">
               <Container className="flex flex-col gap-6 flex-1">
                   <div className="grid grid-cols-1 md:grid-cols-3">
                       <ResultNotation totalPoints={TOTAL_POINTS} userPoints={USER_POINTS} maturity={LEVELS}/>
                       <div className="col-span-2"/>
                   </div>
                    <ResultCard conformityPercentage={conformityPercentage} criticalPoint={criticalPoints} domainStrong={domainStrong} domainWeak={domainWeak}/>
                   <ResultRecommandation answer={answers}/>
               </Container>
               <ResultFooter/>
           </div>
            {/*{answers.map(v => (*/}
            {/*    <div key={v.questionId} className="flex flex-col gap-2 text-text">*/}
            {/*        <p>Questions Id : {v.questionId}</p>*/}
            {/*        <p>Points : {v.points}pts</p>*/}
            {/*        <p>Domaine : {v.domaine}</p>*/}
            {/*        <p>Réponse : {v.answer}</p>*/}
            {/*        <p>Recommandation : {v.recommandation}</p>*/}
            {/*    </div>*/}
            {/*))}*/}

            {/*<p className="text-2xl font-bold text-text">Total de points : {USER_POINTS}</p>*/}
        </>
    )
}