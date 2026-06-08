import {Criticality, ResponsePlan} from "@/types/questions.type";
import {Domain} from "@/types/domain.type";


type AnswerType = 'compliant' | 'partial' | 'noncompliant';

interface AnswerState {
    questionId: string;
    domain: Domain;
    answer: AnswerType;
    points: number;
    recommandation: ResponsePlan;
    criticality: Criticality;
}

interface AnswerConfig {
    label: string;
    className: string;
}

export type {
    AnswerType,
    AnswerState,
    AnswerConfig
}