import {ReactNode} from "react";
import {cn} from "@/lib/utils";

export default function Container({
    children,
    className
}: {children: ReactNode, className?: string}) {
    return (
        <div className={cn(
            "md:max-w-5xl md:mx-auto lg:max-w-4xl",
            className
        )}>
            {children}
        </div>
    )
}