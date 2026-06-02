export type Domaine = 'Gouvernance' | 'Protection' | 'Résilience' | 'Sensibilisation' | 'Conformité'

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
}

interface Recommandation {
    compliant: string;
    partial: string;
    noncompliant: string;
}
