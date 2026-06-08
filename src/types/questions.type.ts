import {Domain} from "@/types/domain.type";

type Criticality = "high" | 'mid' | 'low';
type EffortLevel = "high" | 'mid' | 'low';
type Reference = "ISO 27001" | "RGPD" | "NIS2" | 'ANSSI'// on peut en rajouter.

interface Questions {
    id: string;
    domain: Domain;
    text: string;
    example: string;
    points: number;
    criticality: Criticality;
    action: ActionPlan
}

interface ActionPlan {
    compliant: ResponsePlan;
    partial: ResponsePlan;
    noncompliant: ResponsePlan;
}

interface ResponsePlan {
    description: string;
    action: string;
    effort: EffortLevel;
    reference?: Reference
}

export type {
    Questions,
    ActionPlan,
    ResponsePlan,
    Criticality,
    EffortLevel,
    Reference
}