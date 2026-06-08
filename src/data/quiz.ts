import {AnswerConfig, AnswerType, MaturityLevel, Questions} from "@/types/quiz";

export const questions: Questions[] = [
    {
        id: "GouvOrg1",
        domaine: "Gouvernance",
        questionText: "Avez-vous une personne ou un service clairement identifié pour gérer la cybersécurité dans votre structure ?",
        exampleText: "Exemple : RSSI, DSI ou prestataire informatique référent",
        points: 7,
        recommandation: {
            compliant: "Un responsable identifié assure la gouvernance cyber. Assurez-vous que son périmètre est formalisé et que ses missions sont documentées.",
            partial: "Un référent existe mais son rôle n'est pas formalisé. Il est nécessaire de définir clairement ses responsabilités et de les communiquer à l'ensemble des équipes.",
            noncompliant: "Aucun responsable cyber identifié. C'est un risque majeur : en cas d'incident, personne ne sait quoi faire ni qui alerter. Désigner un référent est la première priorité."
        }
    },
    {
        id: "GouvOrg2",
        domaine: "Gouvernance",
        questionText: "Vos collaborateurs disposent-ils de règles écrites sur l’usage des outils informatiques ? ",
        exampleText: "Exemple : Charte informatique, politique d'usage acceptable",
        points: 6,
        recommandation: {
            compliant: "Un responsable identifié assure la gouvernance cyber. Assurez-vous que son périmètre est formalisé et que ses missions sont documentées.",
            partial: "Un référent existe mais son rôle n'est pas formalisé. Il est nécessaire de définir clairement ses responsabilités et de les communiquer à l'ensemble des équipes.",
            noncompliant: "Aucun responsable cyber identifié. C'est un risque majeur : en cas d'incident, personne ne sait quoi faire ni qui alerter. Désigner un référent est la première priorité."
        }
    },
    {
        id: "Protec1",
        domaine: "Protection",
        questionText: "Les accès à vos outils et système sont-ils protégés par des mots de passe robustes et uniques ?",
        exampleText: "Exemple : Un gestionnaire de mots de passe, politique de complexité",
        points: 7,
        recommandation: {
            compliant: "Bonne pratique en place. Vérifiez que l'ensemble des collaborateurs utilise effectivement un gestionnaire de mots de passe et que les renouvellements sont réguliers.",
            partial: "Des règles existent mais ne sont pas appliquées par tous. Un mot de passe faible ou réutilisé suffit pour qu'un attaquant compromette l'ensemble de vos accès.",
            noncompliant: "Aucune politique de mots de passe. C'est l'une des failles les plus exploitées. La mise en place d'un gestionnaire de mots de passe est une action rapide et peu coûteuse à fort impact."
        }
    }
]

export const DOMAINS_ORDER = [
    "Gouvernance",
    "Protection",
    "Résilience",
    "Sensibilisation",
    "Conformité"
] as const;

export const ANSWER_CONFIG: Record<AnswerType, AnswerConfig> = {
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

export const POINTS_MAP = {
    compliant: 1,
    partial: 0.5,
    noncompliant: 0
}

export const MATURITY_LEVEL: MaturityLevel[] = [
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