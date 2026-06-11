"use client";

import {TriangleAlert} from "lucide-react";
import {CRITICAL, EFFORT} from "@/data/answer.data";
import {ANSWER_CONFIG} from "@/data/answer.data";
import {ResultRecommandationProps} from "@/types/props.type";
import Cards from "@/components/ui/card";


export default function ResultRecommandation({
    answer,
}: ResultRecommandationProps) {

    return (
        <Cards title="Plan d'action prioritaire (personnalisé)">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {answer.map((item, index) => {
                    const config = ANSWER_CONFIG[item.answer];

                    return (
                        <article key={index} className="flex flex-col items-start gap-2 rounded-xs border border-border px-6 py-4 auto">
                            <div className="flex items-center justify-between gap-3 w-full">
                                <div className={`flex items-center gap-2 px-2 py-1 rounded-xs ${config.className}`}>
                                    <TriangleAlert className="h-4 w-4"/>
                                    <p className="text-xs font-medium">{config.label}</p>
                                </div>
                                <p className="text-xs font-medium">{CRITICAL[item.criticality]}</p>
                            </div>
                            <p className="text-md font-semibold text-text">{item.domain}</p>
                            <p className="text-text/80 font-bold text-sm">Effort : {EFFORT[item.recommandation.effort]}</p>
                            <p className="text-text/80 font-normal text-sm">{item.recommandation.action}</p>
                            <p className="text-text/50 font-normal text-xs">{item.recommandation.description}</p>
                            {item.recommandation.reference && <p className="text-primary/80 font-normal text-xs">Référence : {item.recommandation.reference}</p>}
                        </article>
                    )
                })}
            </div>

        </Cards>
    )
}