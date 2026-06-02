import React from "react";
import {cn} from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'ghost';
    className?: string;
}

const variants = {
    'primary': 'flex items-center justify-center w-full px-4 py-2 gap-2 bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-950 rounded-xs hover:bg-slate-900/80 dark:hover:bg-slate-50/80 uppercase font-medium text-sm cursor-pointer',
    'secondary': '',
    'ghost': 'ghost',
}

export default function Button({
    children,
    variant = 'primary',
    className,
    ...props
}: ButtonProps) {
    return (
        <button className={cn(
            variants[variant],
            className,
        )} {...props}>
            {children}
        </button>
    )
}