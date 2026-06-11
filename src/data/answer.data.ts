import {AnswerConfig, AnswerType} from "@/types/answer.type";
import {AnswerProps} from "@/types/props.type";
import {Criticality, EffortLevel} from "@/types/questions.type";

const ANSWER_CONFIG: Record<AnswerType, AnswerConfig> = {
    compliant: {
        label: "Conforme",
        className: "bg-success/20 text-success"
    },
    partial: {
        label: "Majeur",
        className: "bg-warning/20 text-warning"
    },
    noncompliant: {
        label: "Critique",
        className: "bg-danger/20 text-danger"
    }
}

const ANSWER_POINTS: Record<AnswerType, number> = {
    noncompliant: 0,
    partial: 0.5,
    compliant: 1,
}

const ANSWER: AnswerProps[] = [
    {
        value: "compliant",
        title: "Conforme et documenté",
        description: "La règle ou mesure est officiellement formalisée, communiquée et auditée régulièrement."
    },
    {
        value: "partial",
        title: "Partiellement mis en oeuvre",
        description: "Certaines pratiques existent mais ne sont ni formalisées, ni appliquées de manière systématique"
    },
    {
        value: "noncompliant",
        title: "Non initié ou inexistant",
        description: "Aucune démarche n'a été entamée sur ce point à l'heure actuelle"
    },
]

const ANSWER_COLOR: Record<AnswerType, string> = {
    compliant: "rgb(34 197 94 / 0.6)",
    partial: "rgb(245 158 11 / 0.6)",
    noncompliant: "rgb(239 68 68 / 0.6)"
}

const CRITICAL: Record<Criticality, string> = {
    high: "Haute",
    mid: "Moyen",
    low: "Faible"
}

const EFFORT: Record<EffortLevel, string> = {
    high: "Élevé",
    mid: "Modéré",
    low: "Faible"
}

const EFFORT_COLOR: Record<EffortLevel, string> = {
    high: "rgb(239 68 68 / 0.6)",
    mid: "rgb(245 158 11 / 0.6)",
    low: "rgb(34 197 94 / 0.6)"
}

const BADGES_STYLES: Record<EffortLevel, { backgroundColor: string, color: string }> = {
    high: {
        backgroundColor: "rgb(239 68 68 / 0.2)",
        color: "rgb(239 68 68)"
    },
    mid: {
        backgroundColor: "rgb(245 158 11 / 0.2)",
        color: "rgb(245 158 11)"
    },
    low: {
        backgroundColor: "rgb(34 197 94 / 0.2)",
        color: "rgb(34 197 94)"
    }
}

export {
    ANSWER_CONFIG,
    ANSWER_POINTS,
    ANSWER,
    ANSWER_COLOR,
    CRITICAL,
    EFFORT,
    EFFORT_COLOR,
    BADGES_STYLES
}