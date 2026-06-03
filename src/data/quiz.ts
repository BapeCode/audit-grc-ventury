import {AnswerType, Domaine, Questions} from "@/types/quiz";

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

export const DOMAINS_ORDER: Domaine[] = [
    "Gouvernance",
    "Protection",
    "Résilience",
    "Sensibilisation",
    "Conformité"
]

export const ANSWERS: AnswerType[] = [
    "compliant",
    "partial",
    "noncompliant",
]

export function getAnswerType(answer: number): AnswerType {
    return ANSWERS[answer]
}