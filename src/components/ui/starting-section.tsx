import Button from "@/components/ui/ui/button";

export default function StartingSection() {

    return (
        <section className="flex flex-col items-center justify-center flex-1 max-w-4xl mx-auto gap-8">
            <div className="flex flex-col items-center gap-2.5 px-4 py-3 border-l border-slate-300 dark:border-slate-600">
                <h1 className="text-6xl font-extralight text-slate-900 dark:text-slate-100">Évaluation de la maturité <strong className="font-bold">Cybersécurité</strong></h1>
                <p className="text-lg font-medium text-slate-600 dark:text-slate-300">Ce pré-audit permet d&apos;identifier le niveau de maturité de votre organisation face aux standards ISO 27001 et aux bonnes pratiques de la Gourvernance, Risques et Continuité</p>
            </div>

            <Button variant={"primary"}>
                Démarrer l'analyse
            </Button>
        </section>
    )

}