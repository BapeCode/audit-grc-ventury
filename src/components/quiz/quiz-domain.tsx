"use client"

import {Domaine} from "@/types/quiz";

interface QuizDomainProps {
    domains: Domaine[];
    domainActive: Domaine;
    questionNumber: number;
    lengthNumber: number,
    domainFinish: Set<Domaine>
}

export default function QuizDomain({
    domains,
    domainActive,
    questionNumber,
    lengthNumber,
    domainFinish
}: QuizDomainProps) {
    const percentage = (questionNumber / lengthNumber) * 100;


    return (
        <section className="flex items-start gap-2 py-3 w-full">
            {domains.map((domain) => {
                const isActive = domainActive === domain
                const isFinish = domainFinish.has(domain)

                return (
                    <div key={domain} className={`flex flex-col items-center md:items-start justify-start gap-2 flex-1 w-full ${!isActive && "hidden md:flex"}`}>
                        {isActive ? (
                            <div className="w-full bg-track rounded-xs h-1">
                                <div className={`bg-primary h-full`} style={{
                                    width: `${percentage}%`
                                }}/>
                            </div>

                        ) : (
                            <div className={`h-1 w-full rounded-xs ${isFinish ? "bg-primary" : "bg-track/50 "}`}/>
                        )}
                        <p className={`${isActive ? "text-text font-medium text-sm" : "text-text/50 font-light text-sm"}`}>{domain}</p>
                    </div>
                )
            })}
        </section>
    )
}