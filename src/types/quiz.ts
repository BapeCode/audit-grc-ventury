import {DOMAINS_ORDER} from "@/data/quiz";

export type Domaine = keyof typeof DOMAINS_ORDER[number]

export type AnswerType = "compliant" | "partial" | "noncompliant"

export interface Questions {
    id: string;
    domaine: Domaine;
    questionText: string;
    exampleText: string;
    points: number;
    recommandation: Recommandation
}

export interface QuizState {
    questionId: string;
    domaine: Domaine;
    answer: AnswerType;
    points: number;
    recommandation: string;
}

export interface Recommandation {
    compliant: string;
    partial: string;
    noncompliant: string;
}

export interface AnswerConfig {
    label: string;
    className: string;
}

export interface MaturityLevel {
    percentage: number;
    badge: string;
    description: string;
    stars: number;
}