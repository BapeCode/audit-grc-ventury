import {ReactNode} from "react";
import {cn} from "@/lib/utils";

export default function Container({
    children,
    className
}: {children: ReactNode, className?: string}) {
    return (
        <div className={cn(
            "md:max-w-5xl md:mx-auto px-6",
            className
        )}>
            {children}
        </div>
    )
}