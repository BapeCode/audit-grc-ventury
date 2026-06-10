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
    calculatePointByDomain,
    getConformity,
    getCriticalPoints,
    getDomainStrong,
    getDomainWeakness, getEffortRepartition,
    getMaturityLevel, getResponseRepartition
} from "@/lib/result.utils";
import ResultCard from "@/components/result/result-card";
import ResultDomain from "@/components/result/result-domain";
import ResultRadar from "@/components/result/result-radar";
import ResultPie from "@/components/result/result-pie";
import ResultBar from "@/components/result/result-bar";

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
    const domainWeak = getDomainWeakness(answers);
    const scoreByDomain = calculatePointByDomain(answers);

    const responseRepartition = getResponseRepartition(answers)
    const effortRepartition = getEffortRepartition(answers);

    if (!LEVELS) return <Loading/>

    return (
        <>
           <div className="flex flex-col flex-1">
               <Container className="flex flex-col gap-6 flex-1">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                       <ResultNotation totalPoints={TOTAL_POINTS} userPoints={USER_POINTS} maturity={LEVELS}/>
                       <div id="radar-chart" className="col-span-2">
                           <ResultRadar data={scoreByDomain}/>
                       </div>
                   </div>
                   <ResultCard conformityPercentage={conformityPercentage} criticalPoint={criticalPoints} domainStrong={domainStrong} domainWeak={domainWeak}/>
                   <ResultDomain scoreByDomain={scoreByDomain}/>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                       <div id="pie-chart"><ResultPie data={responseRepartition}/></div>
                       <div id="bar-chart"><ResultBar data={effortRepartition}/></div>
                   </div>
                   <ResultRecommandation answer={answers}/>
               </Container>
               <ResultFooter/>
           </div>
        </>
    )
}