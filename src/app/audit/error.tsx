"use client";

import Headers from "@/components/layout/header-section";
import {ThemeProvider} from "@/store/theme-store";
import ErrorSection from "@/components/layout/error-section";

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <ThemeProvider>
            <main className="flex flex-col flex-1 bg-bg font-sans h-full">
                <Headers/>
                <ErrorSection error={error} reset={reset}/>
            </main>
        </ThemeProvider>
    )
}