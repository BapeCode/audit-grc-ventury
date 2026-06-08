import {AnswerConfig, AnswerType} from "@/types/answer.type";
import {AnswerProps} from "@/types/props.type";

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
    compliant: 1,
    partial: 0.5,
    noncompliant: 0,
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


export {
    ANSWER_CONFIG,
    ANSWER_POINTS,
    ANSWER
}