import {Questions} from "@/types/questions.type";
import {QUESTIONS} from "@/data/question.data";


function getAllQuestion(): Questions[] {
    return QUESTIONS;
}

function getQuestionByIndex(index: number): Questions {
    return QUESTIONS[index];
}

function getMaxPoints(): number {
    return QUESTIONS.reduce((sum, v) => sum + v.points, 0)
}

function isLastQuestion(index: number) {
    return QUESTIONS.length - 1 === index;
}

export {
    getAllQuestion,
    getQuestionByIndex,
    isLastQuestion,
    getMaxPoints
}