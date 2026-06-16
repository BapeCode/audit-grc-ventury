import {MaturityLevel} from "@/types/result.type";
import {Domain} from "@/types/domain.type";
import {AnswerState, AnswerType} from "@/types/answer.type";
import {MATURITY} from "@/data/result.data";
import {getAllQuestion} from "@/lib/questions.utils";
import {getMaxPointsByDomain} from "@/lib/domain.utils";
import {DOMAINS} from "@/data/domain.data";
import {CalculateProps, ResultBarData, ResultPieData} from "@/types/props.type";
import {ANSWER_COLOR, ANSWER_CONFIG, EFFORT, EFFORT_COLOR} from "@/data/answer.data";
import {EffortLevel} from "@/types/questions.type";

function getMaturityLevel(percentage: number): MaturityLevel {
    return MATURITY.find(v => v.percentage >= percentage) ?? MATURITY[0]
}

function getConformity(answers: AnswerState[]): number {
    const maxQuestions = getAllQuestion().length;
    const userQuestions = answers.filter(v => v.answer === "compliant").length;
    return Math.floor((userQuestions / maxQuestions) * 100);
}

function getCriticalPoints(answers: AnswerState[]): number {
    return answers.filter(v => v.answer === "noncompliant").length;
}

function getDomainStrong(answers: AnswerState[]): Domain {
    const domainScoreArray = calculatePointByDomain(answers);
    const maxScore = Math.max(...domainScoreArray.map(v => v.score));
    return domainScoreArray.find(v => v.score === maxScore)!.domain
}

function getDomainWeakness(answers: AnswerState[]): Domain {
    const domainScoreArray = calculatePointByDomain(answers);
    const maxScore = Math.min(...domainScoreArray.map(v => v.score));
    return domainScoreArray.find(v => v.score === maxScore)!.domain
}

function getResponseRepartition(answers: AnswerState[]): ResultPieData[] {
    const result: ResultPieData[] = []
    for (const answer of Object.keys(ANSWER_CONFIG)) {
        const totalResponse = answers.filter(v => v.answer === answer).length;
        result.push({
            answer: ANSWER_CONFIG[answer as AnswerType].label,
            amount: totalResponse,
            fill: ANSWER_COLOR[answer as AnswerType]
        })
    }
    return result
}

function getEffortRepartition(answers: AnswerState[]): ResultBarData[] {
    const result = [];
    for (const effort of Object.keys(EFFORT)) {
        const repartition = answers.filter(v => v.recommandation.effort === effort).length;
        result.push({
            effort: EFFORT[effort as EffortLevel],
            count: repartition,
            fill: EFFORT_COLOR[effort as EffortLevel]
        })
    }
    return result
}

function calculateScoreDomain(domain: Domain, answers: AnswerState[]): number {
    const domainTarget = answers.filter(v => v.domain === domain);
    return domainTarget.reduce((sum, v) => sum + v.points, 0);
}

function calculatePointByDomain(answers: AnswerState[]): CalculateProps[] {
    const domainScoreArray = []
    for (const domain of DOMAINS) {
        const scoreDomain = calculateScoreDomain(domain, answers);
        const maxScore = getMaxPointsByDomain(domain);
        domainScoreArray.push({
            score: scoreDomain,
            domain: domain,
            maxScore: maxScore
        })
    }
    return domainScoreArray
}

export {
    getConformity,
    getDomainStrong,
    getDomainWeakness,
    getCriticalPoints,
    getMaturityLevel,
    calculateScoreDomain,
    calculatePointByDomain,
    getResponseRepartition,
    getEffortRepartition
}