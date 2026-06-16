import Section from "@/components/layout/section";
import { ThemeProvider } from "@/store/theme-store";
import AuthIndex from "@/components/auth/auth-index";

export default function Page() {
  return (
    <ThemeProvider>
      <Section>
        <AuthIndex />
      </Section>
    </ThemeProvider>
  );
}
