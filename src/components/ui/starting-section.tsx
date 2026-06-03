import Button from "@/components/ui/ui/button";
import Link from "next/link";

export default function StartingSection() {

    return (
        <section className="flex flex-col items-center justify-center flex-1 md:max-w-4xl md:mx-auto gap-8 px-6 md:px-0">
            <div className="flex flex-col items-center gap-2.5 px-4 py-3">
                <h1 className="text-3xl md:text-6xl font-extralight text-text text-center">Évaluation de la maturité <strong className="font-bold">Cybersécurité</strong></h1>
                <p className="text-xs md:text-lg font-medium text-text/50 text-center">Ce pré-audit permet d&apos;identifier le niveau de maturité de votre organisation face aux standards ISO 27001 et aux bonnes pratiques de la Gourvernance, Risques et Continuité</p>
            </div>

            <Link href={"/audit"} className="w-full">
                <Button variant={"primary"}>
                    Démarrer l&apos;analyse
                </Button>
            </Link>
        </section>
    )

}