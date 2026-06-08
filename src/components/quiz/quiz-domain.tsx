"use client"

import {QuizDomainProps} from "@/types/props.type";

export default function QuizDomain({
    domains,
    currentDomain,
    domainState,
    domainLength,
    domainFinished
}: QuizDomainProps) {
    const percentage = (domainState / domainLength) * 100;

    return (
        <section className="flex items-start gap-2 py-3 w-full">
            {domains.map((domain, index) => {
                const isActive = currentDomain === domain
                const isFinish = domainFinished.has(domain)

                return (
                    <div key={domain} className={`flex flex-col items-center md:items-start justify-start gap-2 flex-1 w-full ${!isActive && "hidden md:flex"}`}>
                        {isActive ? (
                            <div className="w-full bg-track rounded-xs h-1">
                                <div className={`bg-primary h-full`} style={{
                                    width: `${percentage}%`
                                }}/>
                            </div>

                        ) : (
                            <div className={`h-1 w-full rounded-xs ${isFinish ? "bg-primary" : "bg-track/80 "}`}/>
                        )}
                        <p className={`${isActive ? "text-text font-medium text-sm" : "font-light text-sm"} ${isFinish ? "text-text/80" : "text-text/50"}`}>{index + 1}. {domain}</p>
                    </div>
                )
            })}
        </section>
    )
}