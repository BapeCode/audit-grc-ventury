import React from "react";
import {cn} from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'ghost';
    className?: string;
}

const variants = {
    'primary': 'flex items-center justify-center w-full px-4 py-2 gap-2 bg-primary text-white rounded-xs hover:bg-primary/80 uppercase font-semibold text-xs md:text-sm',
    'secondary': 'flex items-center justify-center w-full px-4 py-2 gap-2 bg-text text-bg rounded-xs hover:bg-text/80 uppercase font-semibold text-xs md:text-sm',
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