import {MaturityLevel} from "@/types/result.type";
import {Criticality, EffortLevel} from "@/types/questions.type";

const MATURITY: MaturityLevel[] = [
    {
        percentage: 0,
        badge: "Non engagé",
        description: "Les premières briques existent mais la cybersécurité n'est pas encore pilotée de manière structurée. L'exposition aux risques reste élevée et des actions prioritaires s'imposent rapidement.",
        stars: 0
    },
    {
        percentage: 20,
        badge: "Initial",
        description: "Les fondations sont à poser. Quelques mesures isolées existent, mais la sécurité n'est pas encore pilotée de manière structurée.",
        stars: 1
    },
    {
        percentage: 40,
        badge: "En cours de définition",
        description: "Vous posez des bases concrètes. Plusieurs pratiques sont engagées ; il reste à les formaliser et à les généraliser.",
        stars: 2
    },
    {
        percentage: 60,
        badge: "Défini",
        description: "Vos pratiques sont documentées et répétables. L'enjeu est désormais de mesurer leur efficacité et de combler les écarts résiduels.",
        stars: 3
    },
    {
        percentage: 80,
        badge: "Maitrisé",
        description: "Votre posture de sécurité est solide et piloté. Concentrez-vous sur l'amélioration continue et l'anticipation des menaces.",
        stars: 4
    },
    {
        percentage: 100,
        badge: "Optimisé",
        description: "Excellente maturité. La sécurité est intégrée à la culture et aux processus ; maintenez ce niveau par une veille active.",
        stars: 5
    },
]

const CRITICAL: Record<Criticality, string> = {
    high: "Haute",
    mid: "Moyen",
    low: "Faible"
}

const EFFORT: Record<EffortLevel, string> = {
    high: "Élevé",
    mid: "Moyen",
    low: "Faible"
}

export {
    MATURITY,
    CRITICAL,
    EFFORT
}