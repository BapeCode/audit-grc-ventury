import {Domaine, Questions} from "@/types/quiz";

const questions: Questions[] = [
    {
        id: "GouvOrg1",
        domaine: "Gourvernance & Organisation",
        questionText: "Avez-vous une personne ou un service clairement identifié pour gérer la cybersécurité dans votre structure ?",
        exampleText: "Exemple : RSSI, DSI ou prestataire informatique référent",
        recommandation: {
            compliant: "Un responsable identifié assure la gouvernance cyber. Assurez-vous que son périmètre est formalisé et que ses missions sont documentées.",
            partial: "Un référent existe mais son rôle n'est pas formalisé. Il est nécessaire de définir clairement ses responsabilités et de les communiquer à l'ensemble des équipes.",
            noncompliant: "Aucun responsable cyber identifié. C'est un risque majeur : en cas d'incident, personne ne sait quoi faire ni qui alerter. Désigner un référent est la première priorité."
        }
    },
    {
        id: "Protec1",
        domaine: "Protection des accès & données",
        questionText: "Les accès à vos outils et système sont-ils protégés par des mots de passe robustes et uniques ?",
        exampleText: "Exemple : Un gestionnaire de mots de passe, politique de complexité",
        recommandation: {
            compliant: "Bonne pratique en place. Vérifiez que l'ensemble des collaborateurs utilise effectivement un gestionnaire de mots de passe et que les renouvellements sont réguliers.",
            partial: "Des règles existent mais ne sont pas appliquées par tous. Un mot de passe faible ou réutilisé suffit pour qu'un attaquant compromette l'ensemble de vos accès.",
            noncompliant: "Aucune politique de mots de passe. C'est l'une des failles les plus exploitées. La mise en place d'un gestionnaire de mots de passe est une action rapide et peu coûteuse à fort impact."
        }
    }
]

const DOMAINS_ORDER: Domaine[] = [
    "Gourvernance & Organisation",
    "Protection des accès & données",
    "Sensibilisation & Comportements",
    "Gestion des incidents & Continuité",
    "Conformité & Protection des données personnelles"
]

export function getQuestionsByDomain(domaine: Domaine): Questions[] {
    return questions.filter(q => q.domaine === domaine)
}