// app/preview/page.tsx
"use client"
import dynamic from "next/dynamic"

const PdfPreview = dynamic(
    () => import("@/components/pdf/pdf-preview"),
    { ssr: false }
)

export default function PreviewPage() {
    return (
        <main>
            <button onClick={() => window.location.reload()}>Refresh PDF</button>
            <PdfPreview />
        </main>
    )
}