import { ThemeProvider } from "@/store/theme-store";
import { QuizProvider } from "@/store/quiz-store";
import ResultIndex from "@/components/result/result-index";
import Section from "@/components/layout/section";

export default async function Page() {
  return (
    <ThemeProvider>
      <Section>
        <QuizProvider>
          <ResultIndex />
        </QuizProvider>
      </Section>
    </ThemeProvider>
  );
}
