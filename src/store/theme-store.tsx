"use client";

import Loading from "@/components/layout/loading";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    mounted: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function ThemeProvider({
    children
}: {children: ReactNode}) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme: Theme = savedTheme || (prefersDark ? "dark" : "light")

        setTheme(initialTheme);

        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
    };

    const isDark = theme === "dark";

    return (
        <ThemeContext.Provider value={{ theme, isDark, mounted, toggleTheme }}>
            {mounted ? children : <Loading/>}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme doit être utilisé à l'intérieur d'un ThemeProvider");
    }
    return context;
}

export { useTheme, ThemeProvider }