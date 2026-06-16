import {ThemeProvider} from "@/store/theme-store";
import Section from "@/components/layout/section";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import AuthVerify from "@/components/auth/auth-verify";

export default async function Page() {
    const cookieStore = await cookies()
    const mfaVerified = cookieStore.get("mfa_verified")?.value;
    const authData = cookieStore.get("temp_auth_data")?.value;

    if (!mfaVerified || !authData) redirect("/auth");

    return (
        <ThemeProvider>
            <Section>
                <AuthVerify/>
            </Section>
        </ThemeProvider>
    )
}