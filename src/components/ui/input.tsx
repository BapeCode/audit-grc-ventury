import {InputPros} from "@/types/props.type";
import {cn} from "@/lib/utils";


export default function Input({
    className,
    ...props
}: InputPros) {
    return (
        <input
            className={cn(
                "focus:border-primary outline-none rounded-xs px-4 py-2 bg-surface border border-border w-full text-text placeholder:text-text/50",
                className
            )}
            placeholder={props.placeholder || ""}
            type={typeof props.type || "text"}
            {...props}
        />
    )
}