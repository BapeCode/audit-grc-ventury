"use client";

import { Loader } from "lucide-react";
import Link from "next/link";
import Button from "../ui/ui/button";
import Image from "next/image";
import {useTheme} from "@/store/theme-store";
import Skeleton from "@/components/ui/ui/skeleton";

export default function Loading() {
    return (
        <div className="flex flex-col gap-4 w-full md:max-w-5xl mx-auto">
            <Skeleton/>

            <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="flex-1 h-2"/>
                ))}
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <Skeleton className="h-8 w-3/4"/>
                <Skeleton className="h-4 w-1/2"/>
            </div>

            {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-16"/>
            ))}
        </div>
    )
}