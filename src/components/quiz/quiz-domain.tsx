import {Domaine} from "@/types/quiz";

interface QuizDomainProps {
    domains: Domaine[];
    domainActive: Domaine;
    questionNumber: number;
    lengthNumber: number
}

export default function QuizDomain({
    domains,
    domainActive,
    questionNumber,
    lengthNumber,
}: QuizDomainProps) {
    const percentage = (questionNumber / lengthNumber) * 100;


    return (
        <section className="flex items-start gap-2.5 py-3">
            {domains.map((domain, index) => {
                const isActive = domainActive === domain

                return (
                    <div key={domain} className="flex flex-col items-start justify-start gap-2.5 flex-1">
                        {isActive ? (
                            <div className="w-full bg-slate-200 dark:bg-slate-400 rounded-xs h-1">
                                <div className={`bg-primary h-full`} style={{
                                    width: `${percentage}%`
                                }}/>
                            </div>
                        ) : (
                            <div className={`bg-slate-200 dark:bg-slate-600 h-1 w-full rounded-xs`}/>
                        )}
                        <p className={`${isActive ? "text-slate-950 dark:text-slate-50 font-medium text-sm" : "text-slate-400 dark:text-slate-600 font-light text-sm"}`}>{index + 1}. {domain}</p>
                    </div>
                )
            })}
        </section>
    )
}