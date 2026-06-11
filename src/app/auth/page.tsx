"use client";

import Section from "@/components/layout/section";
import {ThemeProvider} from "@/store/theme-store";
import AuthIndex from "@/components/auth/auth-index";
import {AuthProvider} from "@/store/auth-store";

export default function Page() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Section>
                    <AuthIndex/>
                </Section>
            </AuthProvider>
        </ThemeProvider>
    )
}