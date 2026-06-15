import Button from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/layout/container";


export default function StartingSection() {

    return (
        <Container className="flex flex-col flex-1 justify-center items-center">

            <div className="flex flex-col items-center gap-2.5 px-4 py-3">
                <h1 className="text-4xl md:text-6xl font-extralight text-text text-center">Évaluation de la maturité <strong className="font-bold">Cybersécurité</strong></h1>
                <p className="text-xs md:text-lg font-medium text-text/50 text-center">Ce pré-audit permet d&apos;identifier le niveau de maturité de votre organisation face aux standards ISO 27001 et aux bonnes pratiques de la Gourvernance, Risques et Continuité</p>
            </div>

            <Link href={"/audit"} className="w-full">
                <Button variant={"primary"}>
                    Démarrer l&apos;analyse
                </Button>
            </Link>
        </Container>
    )

}