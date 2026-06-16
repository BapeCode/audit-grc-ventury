"use client";

import {Loader} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/button";
import Logo from "@/components/layout/logo";

interface ErrorSectionProps {
    reset: () => void;
}

export default function ErrorSection({
    reset
}: ErrorSectionProps) {
    return (
        <section className="md:max-w-5xl md:mx-auto w-full py-8 px-6 md:px-0 flex-1 flex flex-col">
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-8">
                <Logo/>

                <Loader className="animate-spin h-20 w-20 text-primary"/>
                <h1 className="text-text text-2xl text-center font-semibold">Une erreur est survenu</h1>
                <p className="text-text/50 font-medium text-sm text-center">Si l&apos;erreur perciste, merci de prévenir l&apos;administrateur du site...</p>
                <div className="flex items-center gap-2">
                    <Link href={"/"}>
                        <Button variant="secondary">
                            Retour à l&apos;accueil
                        </Button>
                    </Link>
                    <Button variant={"primary"} className="w-auto" onClick={reset}>
                        Réessayer
                    </Button>
                </div>
            </div>
        </section>
    )
}