"use client";

import {ResultCardProps} from "@/types/props.type";
import Cards from "@/components/ui/card";

export default function ResultCard({
    conformityPercentage,
    criticalPoint,
    domainStrong,
    domainWeak
}: ResultCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Cards className="items-center justify-start gap-2">
                <p className="uppercase text-text/50 text-xs">taux de conformité</p>
                <p className="text-primary text-4xl font-bold">{conformityPercentage}%</p>
            </Cards>

            <Cards className="items-center justify-start gap-2">
                <p className="uppercase text-text/50 text-xs">Points critiques</p>
                <p className="text-danger text-4xl font-bold">{criticalPoint}</p>
            </Cards>

            <Cards className="items-center justify-start gap-2">
                <p className="uppercase text-text/50 text-xs">Domaine le plus fort</p>
                <p className="text-success text-2xl font-bold">{domainStrong}</p>
            </Cards>

            <Cards className="items-center justify-start gap-2">
                <p className="uppercase text-text/50 text-xs">Domaine le plus faible</p>
                <p className="text-warning text-2xl font-bold">{domainWeak}</p>
            </Cards>
        </div>
    )
}