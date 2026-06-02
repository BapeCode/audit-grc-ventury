import {questions} from "@/data/question";
import {Domaine, Questions} from "@/types/quiz";

function getQuestionByIndex(index: number): Questions[] {
    return questions[index]
}

function getDomainFromIndex(index: number) {
    return questions[index].domaine
}

function getDomainProgress(index: number) {
    const domain = getDomainFromIndex(index)
    return questions.filter(v => v.domaine === domain)
}

console.log(getDomainProgress(2))

function isLastQuestion(index: number) {
    return questions.length - 1 === index;
}

export {
    getQuestionByIndex,
    getDomainFromIndex,
    isLastQuestion
}