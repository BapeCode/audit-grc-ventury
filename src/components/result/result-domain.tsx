import {ResultDomainProps} from "@/types/props.type";
import Cards from "@/components/ui/card";

export default function ResultDomain({
    scoreByDomain
}: ResultDomainProps) {
    return (
        <Cards title={"Score par domaine"}>
            <div className="flex flex-col gap-2 w-full">
                {scoreByDomain.map((value) => {
                    let percentage = (value.score / value.maxScore) * 100;

                    return (
                        <div key={value.domain} className="grid grid-cols-[100px_1fr_50px] items-center gap-2 w-full">
                            <p className="text-sm font-medium text-text shrink-0">{value.domain}</p>

                            <div className="min-w-0 flex-1 h-1 bg-bg border-border border rounded-full">
                                {percentage ? (
                                    <div className="h-1 bg-primary rounded-full" style={{
                                        width: `${percentage}%`,
                                    }}/>
                                ) : null}
                            </div>

                            <p className="text-text/50 text-sm font-medium shrink-0 text-right">{value.score}/{value.maxScore}</p>
                        </div>
                    )
                })}
            </div>
        </Cards>
    )
}