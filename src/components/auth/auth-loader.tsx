import {Loader, X} from "lucide-react";
import React from "react";

export default function AuthLoader({
    message,
    loadingStep
}: {
    message: Record<string, {title: string, subtitle: string}>,
    loadingStep: string
}) {
    return (
        <div className="flex flex-col justify-center items-center gap-8 flex-1">
            {loadingStep === "error" || loadingStep === "invalid" ? (
                <X className="h-15 w-15 text-primary animate-pulse"/>
            ): (
                <Loader className="h-15 w-15 text-primary animate-spin"/>
            )}
            <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                <div className="progress-indeterminate h-full w-1/3 bg-primary rounded-full"/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-text font-normal text-center text-xl">{message[loadingStep].title}</p>
                <p className="text-text/50 font-normal text-center text-sm">{message[loadingStep].subtitle}</p>
            </div>
        </div>
    )
}