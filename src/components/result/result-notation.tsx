"use client";

import {Star} from "lucide-react";
import {ResultNotationProps} from "@/types/props.type";
import Cards from "@/components/ui/card";


export default function ResultNotation({
    totalPoints,
    userPoints,
    maturity,
}: ResultNotationProps) {
    return (
        <Cards title={"Maturité global"}>
            <h2 className="text-text font-bold text-6xl">
                {userPoints}
                <span className="text-text/50 font-light text-sm">/{totalPoints}</span>
            </h2>

            <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-6 w-6 stroke-1 ${i + 1 <= maturity.stars ? "text-primary fill-primary" : "text-text/50"}`}/>
                ))}
            </div>

            <div className="flex items-center justify-center px-4 py-0.5 border border-primary rounded-full">
                <p className="uppercase font-medium text-sm text-primary">Niveau : {maturity.badge}</p>
            </div>

            <p className="text-text/50 font-medium text-sm">{maturity.description}</p>
        </Cards>
    )
}