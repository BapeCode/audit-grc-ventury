"use client";

import {useTheme} from "@/store/theme-store";

export default function Logo() {
    const { isDark } = useTheme();

    return (
        <>
            {isDark ? (
                <img src={"/logo-light.png"} alt={"Logo Ventury Dark Mode"} className="w-37.5 md:w-50 h-auto"/>
            ): (
                <img src={"/logo-dark.png"} alt={"Logo Ventury Light Mode"} className="w-37.5 md:w-50 h-auto"/>
            )}
        </>
    )
}