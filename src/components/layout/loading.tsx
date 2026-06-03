import { Loader } from "lucide-react";
import Link from "next/link";
import Button from "../ui/ui/button";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-8">
            <Loader className="animate-spin h-20 w-20 text-primary"/>
            <h1 className="text-text text-2xl text-center font-semibold">Le quiz est en cours de chargement...</h1>
            <p className="text-text/50 font-medium text-sm text-center">Si le chargement est infini, merci de prévenir l&apos;administrateur du site...</p>
            <Link href={"/"}>
                <Button variant="secondary">
                    Retour à l&apos;accueil
                </Button>
            </Link>
        </div>
    )
}