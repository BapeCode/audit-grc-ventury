import {Questions} from "@/types/questions.type";

const QUESTIONS: Questions[] = [
    {
        id: "GouvOrg1",
        domain: "Gouvernance",
        text: "Avez-vous une personne ou un service clairement identifié pour gérer la cybersécurité dans votre structure ?",
        example: "Exemple : RSSI, DSI ou prestataire informatique référent",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "Un responsable identifié assure la gouvernance cyber. Assurez-vous que son périmètre est formalisé et que ses missions sont documentées.",
                action: "Formaliser la fiche de poste et le périmètre du référent cyber",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Un référent existe mais son rôle n'est pas formalisé. Il est nécessaire de définir clairement ses responsabilités.",
                action: "Rédiger une fiche de mission et la communiquer à l'ensemble des équipes",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucun responsable cyber identifié. En cas d'incident, personne ne sait quoi faire ni qui alerter.",
                action: "Désigner un référent cyber et définir ses responsabilités en priorité",
                effort: "mid",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Protec1",
        domain: "Protection",
        text: "Les accès à vos outils et systèmes sont-ils protégés par des mots de passe robustes et uniques ?",
        example: "Exemple : Gestionnaire de mots de passe, politique de complexité",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "Bonne pratique en place. Vérifiez que l'ensemble des collaborateurs utilise un gestionnaire de mots de passe et que les renouvellements sont réguliers.",
                action: "Auditer l'usage réel du gestionnaire de mots de passe",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Des règles existent mais ne sont pas appliquées par tous. Un mot de passe faible suffit pour compromettre l'ensemble de vos accès.",
                action: "Déployer un gestionnaire de mots de passe sur tous les postes et former les équipes",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune politique de mots de passe. C'est l'une des failles les plus exploitées par les attaquants.",
                action: "Mettre en place un gestionnaire de mots de passe et une politique de complexité",
                effort: "mid",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Resil1",
        domain: "Résilience",
        text: "Vos équipes savent-elles quoi faire et qui contacter en cas de cyberattaque ou d'incident informatique ?",
        example: "Exemple : Procédure d'urgence, numéro d'astreinte, référent identifié",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "La procédure est connue. Testez-la régulièrement via des exercices de simulation pour vous assurer qu'elle reste applicable en situation réelle.",
                action: "Planifier un exercice de crise annuel pour tester la procédure",
                effort: "mid",
                reference: "ISO 27001"
            },
            partial: {
                description: "Une procédure existe mais n'est pas connue de tous ou n'a jamais été testée. En situation de crise, une procédure non exercée est rarement suivie.",
                action: "Formaliser la procédure et la diffuser à l'ensemble des équipes",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune procédure définie. En cas d'attaque, la panique et l'improvisation aggravent systématiquement les dégâts.",
                action: "Rédiger une procédure de gestion de crise simple et la communiquer à tous",
                effort: "high",
                reference: "ISO 27001"
            }
        }
    }
]


export {
    QUESTIONS
}