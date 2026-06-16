import { getUserEmail } from "@/actions/auth.actions";
import AuthMFA from "@/components/auth/auth-mfa";
import Section from "@/components/layout/section";
import { ThemeProvider } from "@/store/theme-store";

export default async function Page() {
  const email = await (await getUserEmail()).data;
  return (
    <ThemeProvider>
      <Section>
        <AuthMFA email={email} />
      </Section>
    </ThemeProvider>
  );
}
