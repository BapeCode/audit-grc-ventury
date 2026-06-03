import {DOMAINS_ORDER, questions} from "@/data/quiz";
import {Domaine, Questions} from "@/types/quiz";

function getAllQuestion(): Questions[] {
    return questions
}

function getQuestionByIndex(index: number): Questions {
    return questions[index]
}

function getDomainFromIndex(index: number) {
    if (!questions[index]) return DOMAINS_ORDER[0]
    return questions[index].domaine
}

function getDomainProgress(index: number) {
    const domain = getDomainFromIndex(index)
    return questions.filter(v => v.domaine === domain)
}

function getDomainState(index: number) {
    const questionByDomain = getDomainProgress(index);
    const currentQuestion = getQuestionByIndex(index);
    return questionByDomain.indexOf(currentQuestion)
}

function getDomainFinish(domain: Domaine, index: number) {
    const domainLastQuestion = questions.findLastIndex(v => v.domaine === domain)
    if (domainLastQuestion === -1) return false;
    return index > domainLastQuestion
}

function isLastQuestion(index: number) {
    return questions.length - 1 === index;
}

export {
    getQuestionByIndex,
    getDomainFromIndex,
    isLastQuestion,
    getDomainProgress,
    getAllQuestion,
    getDomainState,
    getDomainFinish
}