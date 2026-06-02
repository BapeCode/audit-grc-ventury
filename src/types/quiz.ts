export type Domaine = "Gourvernance & Organisation" | "Protection des accès & données" | "Sensibilisation & Comportements" | "Gestion des incidents & Continuité" | "Conformité & Protection des données personnelles"

type AnwserType = "compliant" | "partial" | "noncompliant"

export interface Questions {
    id: string;
    domaine: Domaine;
    questionText: string;
    exampleText: string;
    recommandation: Recommandation

}

export interface QuizState {
    answers: Record<string, AnwserType>,
    activeDomainIndex: number,
    activeQuestionIndex: number,
    showTransition: boolean
}

interface Recommandation {
    compliant: string;
    partial: string;
    noncompliant: string;
}
