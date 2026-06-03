"use client"

import Button from "@/components/ui/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface QuizFooterProps {
    currentAnswer: number | null;
    isFirst: boolean;
    isLast: boolean
    next: () => void;
}

export default function QuizFooter({
    currentAnswer,
    isFirst,
    isLast,
    next
}: QuizFooterProps) {
    return (
        <footer className="flex items-center justify-between w-full py-4 border-t border-border mt-4">
            <Button variant={"secondary"} className="w-auto" disabled={isFirst}>
                <ChevronLeft className="h-4 w-4"/>
                Précédent
            </Button>

            <Button variant={"primary"} className="w-auto gap-2" onClick={next} disabled={currentAnswer === null ? true : false}>
                {isLast ? (
                   "Finir le test"
                ): (
                    "Suivant"
                )}
                <ChevronRight className="h-4 w-4"/>
            </Button>
        </footer>
    )
}