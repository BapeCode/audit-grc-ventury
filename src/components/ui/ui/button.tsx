import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'ghost';
}

const variants = {
    'primary': 'flex items-center justify-center w-full p-4 gap-2 bg-slate-900 dark:bg-slate-50 text-slate-50 dark:text-slate-950 rounded-xs hover:bg-slate-900/80 dark:hover:bg-slate-50/80 uppercase font-medium',
    'secondary': '',
    'ghost': 'ghost',
}

export default function Button({
    children,
    variant = 'primary',
    ...props
}: ButtonProps) {
    return (
        <button className={variants[variant]} {...props}>
            {children}
        </button>
    )
}