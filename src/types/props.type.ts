import {Domain} from "@/types/domain.type";
import {Questions} from "@/types/questions.type";
import {AnswerState, AnswerType} from "@/types/answer.type";
import {MaturityLevel} from "@/types/result.type";


// Quiz
interface QuizContextProps {
    currentDomain: Domain; // Domain actuelle
    currentQuestion: Questions; // Question actuelle
    currentAnswer: AnswerType | null; // Réponse actuelle
    domainQuestionLength: number; // Nombre de question par domaine
    domainState: number; // La progression de question par domaine
    maxQuestions: number; // Nombre de questions maximum
    globalIndex: number; // Index global pour suivre la progression à travers tous les domaines
    domainFinished: Set<Domain>; // Liste des domaines fini
    answers: AnswerState[]; // Liste des réponses
    setAnswer: (value: AnswerType) => void;
    next: () => void;
    prev: () => void;
}

interface QuizDomainProps {
    domains: Domain[];
    currentDomain: Domain;
    domainState: number;
    domainLength: number;
    domainFinished: Set<Domain>
}

interface QuizQuestionProps {
    question: string;
    example: string;
}

interface QuizFooterProps {
    currentAnswer: AnswerType | null;
    isFirst: boolean;
    isLast: boolean;
    next: () => void;
    prev: () => void;
}

// Answer Props
interface AnswerProps {
    value: AnswerType;
    title: string;
    description: string;
}

interface QuizAnswerProps {
    onClick: (response: AnswerType) => void;
    currentAnswer: AnswerType | null;
}

// Skeleton
interface SkeletonProps {
    className?: string;
}

// Resultat

interface ResultNotationProps {
    totalPoints: number;
    userPoints: number;
    maturity: MaturityLevel
}

interface ResultRecommandationProps {
    answer: AnswerState[]
}

interface ResultCardProps {
    conformityPercentage: number;
    criticalPoint: number;
    domainStrong: Domain;
    domainWeak: Domain
}

export type {
    QuizContextProps,
    AnswerProps,
    QuizAnswerProps,
    QuizDomainProps,
    QuizQuestionProps,
    QuizFooterProps,
    SkeletonProps,
    ResultNotationProps,
    ResultRecommandationProps,
    ResultCardProps
}