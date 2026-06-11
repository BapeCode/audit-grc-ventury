import {Questions} from "@/types/questions.type";

const QUESTIONS: Questions[] = [
    // ─── GOUVERNANCE ────────────────────────────────────────────────────────
    {
        id: "Gouv1",
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
                description: "Un référent existe mais son rôle n'est pas formalisé. Il est nécessaire de définir clairement ses responsabilités et de les communiquer à l'ensemble des équipes.",
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
        id: "Gouv2",
        domain: "Gouvernance",
        text: "Vos collaborateurs disposent-ils de règles écrites sur l'usage des outils informatiques ?",
        example: "Exemple : charte informatique, politique d'usage acceptable",
        points: 6,
        criticality: "mid",
        action: {
            compliant: {
                description: "Une charte informatique est en place et signée. Vérifiez qu'elle est mise à jour régulièrement et qu'elle couvre les usages récents comme le télétravail et l'IA.",
                action: "Réviser la charte annuellement et la faire signer par les nouveaux arrivants",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Des règles existent mais ne sont pas formalisées ou signées. Sans document opposable, la responsabilité de l'entreprise peut être engagée en cas d'incident.",
                action: "Formaliser la charte informatique et la faire signer par tous les collaborateurs",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune règle écrite sur l'usage des outils informatiques. Les collaborateurs utilisent les outils sans cadre défini, ce qui expose l'organisation à des risques juridiques et sécuritaires.",
                action: "Rédiger et diffuser une charte informatique opposable à tous les collaborateurs",
                effort: "mid",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Gouv3",
        domain: "Gouvernance",
        text: "Avez-vous réalisé un état des lieux ou un audit de votre sécurité informatique au cours des 2 dernières années ?",
        example: "Exemple : audit externe, autoévaluation, test d'intrusion",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "Un audit récent a permis d'identifier vos vulnérabilités. Assurez-vous que les recommandations ont été traitées et planifiez le prochain dans 12 à 18 mois.",
                action: "Planifier le prochain audit et suivre l'avancement des recommandations",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Un audit a été réalisé mais les recommandations n'ont pas toutes été appliquées ou il date de plus de 2 ans. Une mise à jour est nécessaire.",
                action: "Prioriser les recommandations non appliquées et planifier un nouvel audit",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucun audit réalisé. Vous ne connaissez pas l'état réel de votre sécurité et des failles critiques peuvent exister sans que vous en ayez conscience.",
                action: "Réaliser un premier audit de sécurité pour identifier les vulnérabilités prioritaires",
                effort: "high",
                reference: "ISO 27001"
            }
        }
    },

    // ─── PROTECTION ─────────────────────────────────────────────────────────
    {
        id: "Protec1",
        domain: "Protection",
        text: "Les accès à vos outils et systèmes sont-ils protégés par des mots de passe robustes et uniques ?",
        example: "Exemple : gestionnaire de mots de passe, politique de complexité",
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
                description: "Des règles existent mais ne sont pas appliquées par tous. Un mot de passe faible ou réutilisé suffit pour compromettre l'ensemble de vos accès.",
                action: "Déployer un gestionnaire de mots de passe sur tous les postes et former les équipes",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune politique de mots de passe. C'est l'une des failles les plus exploitées. La mise en place d'un gestionnaire est une action rapide à fort impact.",
                action: "Mettre en place un gestionnaire de mots de passe et une politique de complexité",
                effort: "mid",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Protec2",
        domain: "Protection",
        text: "Utilisez-vous une double vérification pour accéder à vos outils sensibles ?",
        example: "Exemple : code SMS, application d'authentification (MFA/2FA)",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "Le MFA est activé. Privilégiez une application d'authentification plutôt que le code SMS, plus vulnérable aux attaques par SIM swapping.",
                action: "Migrer vers une application d'authentification si vous utilisez encore le SMS",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Le MFA est activé sur certains outils seulement. Étendez-le en priorité à la messagerie, aux accès distants et aux outils de gestion sensibles.",
                action: "Déployer le MFA sur l'ensemble des outils sensibles de l'organisation",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune double vérification. Un mot de passe volé suffit à compromettre vos comptes. Le MFA bloque 99% des attaques sur les comptes.",
                action: "Activer le MFA en priorité sur la messagerie et les accès administrateurs",
                effort: "low",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Protec3",
        domain: "Protection",
        text: "Chaque collaborateur a-t-il uniquement accès aux outils et données dont il a besoin pour son travail ?",
        example: "Exemple : pas d'accès administrateur pour tout le monde",
        points: 5,
        criticality: "mid",
        action: {
            compliant: {
                description: "Le principe du moindre privilège est appliqué. Vérifiez que les droits sont révisés régulièrement, notamment lors des départs ou changements de poste.",
                action: "Mettre en place une revue semestrielle des habilitations",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Les droits sont partiellement segmentés. Des accès excessifs persistent, notamment des droits administrateurs accordés par défaut.",
                action: "Réaliser un audit des habilitations et supprimer les accès non nécessaires",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Tous les collaborateurs ont les mêmes droits d'accès. En cas de compromission d'un compte, l'attaquant accède à l'ensemble de vos données sans restriction.",
                action: "Cartographier les accès et appliquer le principe du moindre privilège",
                effort: "high",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Protec4",
        domain: "Protection",
        text: "Vos données sensibles sont-elles sauvegardées régulièrement ?",
        example: "Exemple : sauvegarde quotidienne, copie hors site ou cloud sécurisé, test de restauration",
        points: 6,
        criticality: "high",
        action: {
            compliant: {
                description: "Les sauvegardes sont en place et testées. Assurez-vous qu'elles sont déconnectées du réseau principal pour résister à une attaque par ransomware.",
                action: "Vérifier que les sauvegardes sont isolées du réseau et tester la restauration",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Des sauvegardes existent mais ne sont pas testées ou ne couvrent pas toutes les données critiques. Une sauvegarde non testée peut s'avérer inutilisable.",
                action: "Tester la restauration et étendre les sauvegardes à toutes les données critiques",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune sauvegarde en place. En cas de ransomware ou de panne, vos données seraient définitivement perdues.",
                action: "Mettre en place une stratégie de sauvegarde 3-2-1 en urgence",
                effort: "high",
                reference: "ISO 27001"
            }
        }
    },

    // ─── RÉSILIENCE ────────────────────────────────────────────────────
    {
        id: "Resil1",
        domain: "Résilience",
        text: "Vos équipes savent-elles quoi faire et qui contacter en cas de cyberattaque ou d'incident informatique ?",
        example: "Exemple : procédure d'urgence, numéro d'astreinte, référent identifié",
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
    },
    {
        id: "Resil2",
        domain: "Résilience",
        text: "Disposez-vous d'un plan pour continuer à travailler si vos systèmes informatiques tombent en panne ?",
        example: "Exemple : procédures dégradées, PCA, PRA",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "Un plan de continuité est en place. Vérifiez qu'il est testé au moins une fois par an et connu des personnes clés en dehors de la DSI.",
                action: "Tester le PCA annuellement et s'assurer qu'il est connu de tous les responsables",
                effort: "mid",
                reference: "ISO 27001"
            },
            partial: {
                description: "Un plan existe mais n'est pas complet ou pas testé. Les lacunes d'un PCA se découvrent souvent au moment où on en a le plus besoin.",
                action: "Compléter le plan et organiser un test grandeur nature",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucun plan de continuité. En cas de panne ou d'attaque, votre activité pourrait s'arrêter totalement. Le coût d'une interruption dépasse souvent le coût du plan.",
                action: "Rédiger un PCA minimal avec les procédures dégradées prioritaires",
                effort: "high",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Resil3",
        domain: "Résilience",
        text: "Gardez-vous une trace des incidents de sécurité survenus dans votre structure ?",
        example: "Exemple : registre des incidents, ticket d'incident, journal de bord",
        points: 6,
        criticality: "mid",
        action: {
            compliant: {
                description: "Le registre des incidents est tenu. Exploitez ces données pour identifier les tendances récurrentes et prioriser vos actions correctives.",
                action: "Analyser les incidents récurrents et mettre en place des actions correctives",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Certains incidents sont tracés mais pas de manière systématique. Sans historique complet, il est impossible d'identifier les failles récurrentes.",
                action: "Mettre en place un registre systématique et former les équipes à le renseigner",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune trace des incidents. Vous perdez une source d'information précieuse et vous exposez à des difficultés en cas de contrôle réglementaire.",
                action: "Créer un registre des incidents simple et accessible à toutes les équipes",
                effort: "low",
                reference: "ISO 27001"
            }
        }
    },

    // ─── SENSIBILISATION ─────────────────────────────────────────────────────────
    {
        id: "Sensi1",
        domain: "Sensibilisation",
        text: "Vos collaborateurs ont-ils été formés ou sensibilisés aux risques cyber au cours des 12 derniers mois ?",
        example: "Exemple : formation, e-learning, atelier, communication interne",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "La sensibilisation est régulière. Maintenez le rythme et adaptez le contenu aux nouvelles menaces comme les deepfakes et les arnaques par IA.",
                action: "Mettre à jour le contenu de formation avec les menaces récentes",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Des actions de sensibilisation ont eu lieu mais de manière ponctuelle. La cybersécurité nécessite une formation continue — une action annuelle ne suffit pas.",
                action: "Mettre en place un programme de sensibilisation récurrent tout au long de l'année",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune sensibilisation réalisée. L'humain est le premier vecteur d'attaque — 90% des cyberattaques commencent par une erreur humaine.",
                action: "Lancer un premier programme de sensibilisation pour l'ensemble des collaborateurs",
                effort: "mid",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Sensi2",
        domain: "Sensibilisation",
        text: "Avez-vous déjà testé la vigilance de vos équipes face aux tentatives d'arnaque par email ?",
        example: "Exemple : simulation de phishing, campagne de faux mails piégés",
        points: 6,
        criticality: "mid",
        action: {
            compliant: {
                description: "Les simulations sont en place. Analysez les résultats par département et augmentez progressivement la sophistication des scénarios.",
                action: "Analyser les résultats par département et cibler les formations en conséquence",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Des tests ont été réalisés ponctuellement. Pour être efficaces, les simulations doivent être régulières et suivies d'une formation ciblée.",
                action: "Mettre en place des campagnes régulières avec un suivi formation pour les collaborateurs piégés",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucune simulation réalisée. Vous ne savez pas comment vos équipes réagiraient face à un vrai mail de phishing.",
                action: "Lancer une première campagne de simulation de phishing pour mesurer la vigilance",
                effort: "low",
                reference: "ISO 27001"
            }
        }
    },
    {
        id: "Sensi3",
        domain: "Sensibilisation",
        text: "Le travail à distance est-il encadré par des règles de sécurité précises ?",
        example: "Exemple : connexion via VPN, interdiction d'utiliser le Wi-Fi public sans protection",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "Le télétravail est sécurisé. Vérifiez que le VPN est bien utilisé en pratique et que les postes nomades sont chiffrés en cas de perte ou de vol.",
                action: "Auditer l'usage réel du VPN et vérifier le chiffrement des postes nomades",
                effort: "low",
                reference: "ISO 27001"
            },
            partial: {
                description: "Des règles existent mais ne sont pas toujours respectées. Le travail sur réseau Wi-Fi public sans protection est un risque fréquemment sous-estimé.",
                action: "Renforcer l'application des règles et sensibiliser aux risques du Wi-Fi public",
                effort: "mid",
                reference: "ISO 27001"
            },
            noncompliant: {
                description: "Aucun encadrement du télétravail. Les connexions depuis l'extérieur exposent directement votre SI sans protection.",
                action: "Mettre en place un VPN et rédiger une politique de sécurité pour le télétravail",
                effort: "high",
                reference: "ISO 27001"
            }
        }
    },

    // ─── CONFORMITÉ ─────────────────────────────────────────────────────────
    {
        id: "Conf1",
        domain: "Conformité",
        text: "Savez-vous quelles données personnelles vous collectez, pourquoi, et combien de temps vous les conservez ?",
        example: "Exemple : registre des traitements, politique de confidentialité, durées de conservation",
        points: 7,
        criticality: "high",
        action: {
            compliant: {
                description: "Le registre des traitements est tenu à jour. Vérifiez qu'il est révisé lors de chaque nouveau traitement et que les durées de conservation sont appliquées.",
                action: "Réviser le registre lors de chaque nouveau traitement et auditer les durées de conservation",
                effort: "low",
                reference: "RGPD"
            },
            partial: {
                description: "Une cartographie partielle existe mais n'est pas exhaustive. Des données peuvent être conservées sans base légale, ce qui constitue une violation du RGPD.",
                action: "Compléter la cartographie des traitements et définir les durées de conservation manquantes",
                effort: "mid",
                reference: "RGPD"
            },
            noncompliant: {
                description: "Aucune cartographie des données. Vous collectez et conservez des données sans en avoir la maîtrise, ce qui vous expose à des sanctions CNIL.",
                action: "Réaliser un inventaire complet des données collectées et créer un registre des traitements",
                effort: "high",
                reference: "RGPD"
            }
        }
    },
    {
        id: "Conf2",
        domain: "Conformité",
        text: "En cas de fuite ou de vol de données personnelles, savez-vous ce que vous devez faire, à qui le signaler et les délais ?",
        example: "Exemple : procédure de notification CNIL, délai de 72h, information des personnes concernées",
        points: 8,
        criticality: "high",
        action: {
            compliant: {
                description: "La procédure de violation de données est maîtrisée. Testez-la et assurez-vous que les contacts CNIL sont à jour et accessibles en situation de crise.",
                action: "Vérifier que les contacts CNIL sont à jour et tester la procédure annuellement",
                effort: "low",
                reference: "RGPD"
            },
            partial: {
                description: "La procédure est connue en théorie mais pas formalisée. Le délai de 72h court dès la prise de connaissance — sans procédure claire, ce délai est difficile à respecter.",
                action: "Formaliser la procédure de notification et la rendre accessible en cas d'urgence",
                effort: "mid",
                reference: "RGPD"
            },
            noncompliant: {
                description: "Aucune procédure définie. Le non-respect du délai de 72h à la CNIL est une infraction pouvant entraîner des sanctions importantes.",
                action: "Rédiger une procédure de gestion des violations de données et former les équipes",
                effort: "mid",
                reference: "RGPD"
            }
        }
    }
]

export {
    QUESTIONS
}