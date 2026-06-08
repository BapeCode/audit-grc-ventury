"use client";

import Button from "@/components/ui/ui/button";
import {ChevronLeft, Download, RefreshCcw} from "lucide-react";
import Container from "@/components/layout/container";

export default function ResultFooter() {
    return (
        <footer className="w-full py-4 border-t border-border mt-4">
            <Container className="flex justify-end items-center gap-2">
                <Button variant={"secondary"} className="w-auto">
                    <RefreshCcw className="h-4 w-4"/>
                    Recommencer l&apos;audit
                </Button>

                <Button variant={"primary"} className="w-auto gap-2">
                    <Download className="h-4 w-4"/>
                    Exporter en PDF
                </Button>
            </Container>
        </footer>
    )
}