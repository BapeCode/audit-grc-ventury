"use client";

import ThemeToggle from "@/components/layout/theme-toggle";
import {useTheme} from "@/store/theme-store";
import Logo from "@/components/layout/logo";

export default function Headers() {
    const {isDark} = useTheme();

    return (
        <header className="flex justify-between items-center w-full p-8 border-b border-border">
            <Logo/>
            <ThemeToggle/>
        </header>
    )
}