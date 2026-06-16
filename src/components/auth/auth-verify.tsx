"use client";

import React, {useEffect, useState} from "react";
import {Loader, X} from "lucide-react";
import {useRouter} from "next/navigation";

const MESSAGES = {
    validating: { title: "Vérification...", subtitle: "Validation de vos informations" },
    done: { title: "Vérification terminé !", subtitle: "Redirection en cours..." },
    error: { title: "Vérification annuler", subtitle: "Une erreur est survenue.." }
}

export default function AuthVerify() {
    const router = useRouter();
    const [loadingStep, setLoadingStep] = useState<string>("validating");

    useEffect(() => {
        const run = async () => {
            const response = await fetch("/api/auth/verify", {
                method: "POST",
            })

            const reader = response.body?.getReader()
            if (!reader) {
                setLoadingStep("error")
                return
            }

            while (true) {
                const { done, value } = await reader.read()
                if (done) break
                const message = new TextDecoder().decode(value)
                setLoadingStep(message)

                if (message === "done") {
                    setTimeout(() => router.push("/result"), 1500)
                }

                if (message === "error") break
            }
        }
        run()
    }, [router])

    const current = MESSAGES[loadingStep as keyof typeof MESSAGES];

    if (!current) setLoadingStep("error")

    return (
        <div className="flex flex-col justify-center items-center gap-8 flex-1 w-full max-w-3xl mx-auto">
            {loadingStep === "error" || loadingStep === "invalid" ? (
                <X className="h-15 w-15 text-primary animate-pulse"/>
            ): (
                <Loader className="h-15 w-15 text-primary animate-spin"/>
            )}
            <div className="w-full h-1 bg-primary/20 rounded-full overflow-hidden">
                <div className="progress-indeterminate h-full w-1/3 bg-primary rounded-full"/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-text font-normal text-center text-xl">{current.title}</p>
                <p className="text-text/50 font-normal text-center text-sm">{current.subtitle}</p>
            </div>
        </div>
    )
}