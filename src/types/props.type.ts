import {Domain} from "@/types/domain.type";
import {Questions} from "@/types/questions.type";
import {AnswerState, AnswerType} from "@/types/answer.type";
import {MaturityLevel} from "@/types/result.type";
import React, {ReactNode} from "react";
import Summary from "@/components/pdf/pages/summary";


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

// Result

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

interface CalculateProps {
    score: number;
    domain: Domain;
    maxScore: number;
}

interface ResultDomainProps {
    scoreByDomain: CalculateProps[];
}

interface ResultRadarProps {
    data: CalculateProps[];
}

interface ResultPieData {
    answer: string;
    amount: number;
    fill: string;
}

interface ResultPieProps {
    data: ResultPieData[]
}

interface ResultBarData {
    effort: string;
    count: number;
}

interface ResultBarProps {
    data: ResultBarData[]
}

// UI / Components
interface SkeletonProps {
    className?: string;
}

interface ButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'ghost';
    className?: string;
}

interface InputPros extends React.ComponentProps<"input"> {
    className?: string;
}

interface CardsProps {
    children: ReactNode;
    className?: string;
    title?: string;
}

// PDF
interface CoverProps {
    company: string;
    name: string;
    email: string;
    phone: string;
    grade: string
    message: string;
}

interface SummaryProps {
    score: number;
    maxScore: number;
    level: string;
    description: string;
    conformity: number;
    critical: number;
    domainStrong: Domain;
    domainWeak: Domain;
    radar: string;
    pie: string
    bar: string;
}

export type {
    QuizContextProps,
    AnswerProps,
    QuizAnswerProps,
    QuizDomainProps,
    QuizQuestionProps,
    QuizFooterProps,

    ResultNotationProps,
    ResultRecommandationProps,
    ResultCardProps,
    CalculateProps,
    ResultDomainProps,
    ResultRadarProps,
    ResultPieData,
    ResultPieProps,
    ResultBarData,
    ResultBarProps,

    SkeletonProps,
    ButtonProps,
    CardsProps,
    InputPros,

    CoverProps,
    SummaryProps
}