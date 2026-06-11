"use client"

import Button from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import Container from "@/components/layout/container";
import {QuizFooterProps} from "@/types/props.type";


export default function QuizFooter({
    currentAnswer,
    isFirst,
    isLast,
    next,
    prev
}: QuizFooterProps) {
    return (
        <footer className="w-full py-4 border-t border-border mt-4">
            <Container className="flex items-center justify-between">
                <Button variant={"secondary"} className="w-auto" disabled={isFirst} onClick={prev}>
                    <ChevronLeft className="h-4 w-4"/>
                    Précédent
                </Button>

                <Button variant={"primary"} className="w-auto gap-2" onClick={next} disabled={currentAnswer === null}>
                    {isLast ? (
                        "Finir le test"
                    ): (
                        "Suivant"
                    )}
                    <ChevronRight className="h-4 w-4"/>
                </Button>
            </Container>
        </footer>
    )
}