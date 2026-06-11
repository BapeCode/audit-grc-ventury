import {CardsProps} from "@/types/props.type";
import {cn} from "@/lib/utils";

export default function Cards({
    children,
    className,
    title = ""
}: CardsProps) {
    return (
        <section className={cn(
            "flex flex-col items-start gap-4 rounded-xs bg-surface border-border border px-6 py-4",
            className
        )}>
            {title && <p className="uppercase text-text/50 font-medium text-sm">{title}</p>}
            {children}
        </section>
    )
}