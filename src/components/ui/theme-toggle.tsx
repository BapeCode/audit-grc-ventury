'use client'
import {Moon, Sun} from "lucide-react";
import {useTheme} from "@/store/theme-store";

export default function ThemeToggle() {
    const { isDark, mounted, toggleTheme } = useTheme()

    if (!mounted) return <div className="h-8 w-8"/>

    return (
        <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-md p-1 transition-colors duration-300 hover:bg-slate-950/20 dark:hover:bg-slate-100/20"
        >
            {isDark ? (
                <Sun className="h-6 w-6 text-slate-100" strokeWidth={1.0}/>
            ) : (
                <Moon className="h-6 w-6 text-slate-950" strokeWidth={1.0}/>
            )}
        </button>
    )
}