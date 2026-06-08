import {Domain} from "@/types/domain.type";
import {Questions} from "@/types/questions.type";
import {QUESTIONS} from "@/data/question.data";
import {DOMAINS} from "@/data/domain.data";
import {getQuestionByIndex} from "@/lib/questions.utils";

function getMaxPointsByDomain(domain: Domain): number {
    const domainQuestion = QUESTIONS.filter(v => v.domain === domain);
    return domainQuestion.reduce((sum, v) => sum + v.points, 0);
}

function getDomainFromIndex(index: number): Domain {
    if (!QUESTIONS[index]) return DOMAINS[0];
    return QUESTIONS[index].domain;
}

function getDomainProgress(index: number): Questions[] {
    const domain = getDomainFromIndex(index);
    return QUESTIONS.filter(v => v.domain === domain);
}

function getDomainState(index: number): number {
    const questionByDomain = getDomainProgress(index);
    const currentQuestion = getQuestionByIndex(index);
    return questionByDomain.indexOf(currentQuestion);
}

function getDomainFinish(domain: Domain, index: number): boolean {
    const isLastQuestion = QUESTIONS.findLastIndex(v => v.domain === domain);
    if (isLastQuestion === -1) return false;
    return index > isLastQuestion;
}

export {
    getDomainFinish,
    getDomainFromIndex,
    getDomainProgress,
    getDomainState,
    getMaxPointsByDomain
}