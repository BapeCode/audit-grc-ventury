import QuizProgress from "@/components/quiz/quiz-progress";
import QuizDomain from "@/components/quiz/quiz-domain";
import {DOMAINS_ORDER} from "@/data/question";
import QuizQuestion from "@/components/quiz/quiz-question";
import QuizAnswer from "@/components/quiz/quiz-answer";
import QuizFooter from "@/components/quiz/quiz-footer";
import {useQuiz} from "@/store/quiz-store";
import {Loader} from "lucide-react";

export default function QuizIndex() {
    const { domain, stateQuestion, currentQuestion, currentAnswer, length, setAnswer, next } = useQuiz()

    if (!currentQuestion) {
        return (
            <div className="h-full flex items-center justify-center gap-2">
                <p className="text-slate-950 dark:text-slate-50 font-medium text-2xl ">Chargement...</p>
                <Loader className="animate-spin h-10 w-10 text-slate-950 dark:text-slate-50"/>
            </div>
        )
    }

    return (
        <>
            <QuizProgress progress={stateQuestion}/>
            <QuizDomain domains={DOMAINS_ORDER} domainActive={domain} lengthNumber={length} questionNumber={stateQuestion}/>
            <QuizQuestion question={currentQuestion.questionText} example={currentQuestion.exampleText}/>
            <QuizAnswer onClick={setAnswer} currentAnswer={currentAnswer}/>
            <QuizFooter currentAnswer={currentAnswer} isFirst={stateQuestion === 0} next={next}/>
        </>
    )
}