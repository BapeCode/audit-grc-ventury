"use client";

import {useTheme} from "@/store/theme-store";
import Image from "next/image"
import Link from "next/link";

export default function Logo() {
    const { isDark } = useTheme();

    return (
        <>
            {isDark ? (
                <Link href={"/"}>
                    <Image
                        src="/logo-dark.png"
                        alt="Logo Dark Ventury"
                        width={200}
                        height={50}
                        style={{ width: "auto", height: "auto" }}  
                        loading="eager"
                        priority
                    />
                </Link>
            ): (
                <Link href={"/"}>
                    <Image
                        src="/logo-dark.png"
                        alt="Logo Dark Ventury"
                        width={200}
                        height={50}
                        style={{ width: "auto", height: "auto" }}
                        loading="eager"
                        priority
                    />
                </Link>
            )}
        </>
    )
}