/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import Loading from "@/components/layout/loading";

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function ThemeProvider({
    children
}: {children: ReactNode}) {
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
        setTheme(initialTheme)
        document.documentElement.classList.toggle("dark", initialTheme === "dark")
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const nextTheme: Theme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
    };

    const isDark = theme === "dark";

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {mounted ? children : <Loading/> }
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