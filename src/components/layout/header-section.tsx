"use client";

import ThemeToggle from "@/components/ui/theme-toggle";
import {useTheme} from "@/store/theme-store";

export default function Headers() {
    const {isDark} = useTheme();

    return (
        <header className="flex justify-between items-center w-full p-8 border-b border-border">
            {isDark ? (
                <img src={"/logo-light.png"} alt={"Logo Ventury Dark Mode"} className="w-37.5 md:w-50 h-auto"/>
            ): (
                <img src={"/logo-dark.png"} alt={"Logo Ventury Light Mode"} className="w-37.5 md:w-50 h-auto"/>
            )}
            <ThemeToggle/>
        </header>
    )
}