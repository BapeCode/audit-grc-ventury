import Button from "@/components/ui/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface QuizFooterProps {
    currentAnswer: number | null;
    isFirst: boolean;
    next: () => void;
}

export default function QuizFooter({
    currentAnswer,
    isFirst,
    next
}: QuizFooterProps) {
    return (
        <footer className="flex items-center justify-between w-full py-8 border-t border-slate-300 dark:border-slate-400 mt-8">
            <Button variant={"primary"} className="w-auto" disabled={isFirst}>
                <ChevronLeft className="h-4 w-4"/>
                Précédent
            </Button>

            <Button variant={"primary"} disabled={currentAnswer === null} className="w-auto gap-2" onClick={next}>
                Suivant
                <ChevronRight className="h-4 w-4"/>
            </Button>
        </footer>
    )
}