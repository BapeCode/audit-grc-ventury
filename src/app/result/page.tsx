import {ThemeProvider} from "@/store/theme-store";
import {QuizProvider} from "@/store/quiz-store";
import ResultIndex from "@/components/result/result-index";
import Section from "@/components/layout/section";
import {getSession} from "@/actions/auth.actions";

export default async function Page() {
    const session = await getSession();

    return (
        <ThemeProvider>
            <Section>
                <QuizProvider>
                    <ResultIndex user={session}/>
                </QuizProvider>
            </Section>
        </ThemeProvider>
    )
}