import {MaturityLevel} from "@/types/result.type";
import {Domain} from "@/types/domain.type";
import {AnswerState} from "@/types/answer.type";
import {QUESTIONS} from "@/data/question.data";
import {MATURITY} from "@/data/result.data";
import {getAllQuestion} from "@/lib/questions.utils";
import {getMaxPointsByDomain} from "@/lib/domain.utils";
import {DOMAINS} from "@/data/domain.data";

function getMaxPoints(): number {
    return QUESTIONS.reduce((sum, v) => sum + v.points, 0);
}

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

function calculatePointByDomain(answers: AnswerState[]): Array<{score: number, domain: Domain}> {
    const domainScoreArray = []
    for (const domain of DOMAINS) {
        const scoreDomain = calculateScoreDomain(domain, answers);
        domainScoreArray.push({
            score: scoreDomain,
            domain: domain
        })
    }
    return domainScoreArray
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

function calculateScoreDomain(domain: Domain, answers: AnswerState[]): number {
    const domainTarget = answers.filter(v => v.domain === domain);
    return domainTarget.reduce((sum, v) => sum + v.points, 0);
}

export {
    getConformity,
    getDomainStrong,
    getDomainWeakness,
    getCriticalPoints,
    getMaturityLevel,
    calculateScoreDomain
}