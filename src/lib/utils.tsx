import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import { toPng } from "html-to-image";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const captureChart = async (elementId: string): Promise<string> => {
    const element = document.getElementById(elementId)
    if (!element) return ""
    return await toPng(element)
}