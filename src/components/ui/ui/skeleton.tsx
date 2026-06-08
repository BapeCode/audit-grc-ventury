import {cn} from "@/lib/utils";
import {SkeletonProps} from "@/types/props.type";

export default function Skeleton({ className }: SkeletonProps) {
    return (
        <div className={cn(
            "h-4 bg-slate-100 dark:bg-slate-600 border-border border rounded-xs w-full animate-pulse",
            className
        )}></div>
    )
}