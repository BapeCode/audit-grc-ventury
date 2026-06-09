"use client"
import { PDFViewer } from "@react-pdf/renderer"
import Report from "./report"
import {useEffect, useState} from "react";
import {captureChart} from "@/lib/utils";

export default function PdfPreview() {
    const [isReady, setReady] = useState(false);
    const [Radar, setRadar] = useState<string>("");
    const [Pie, setPie] = useState<string>("");

    useEffect(() => {
        const capture = () => {
            const radar = localStorage.getItem('radar-chart') ?? ""
            const pie = localStorage.getItem('pie-chart') ?? ""
            setRadar(radar);
            setRadar(pie);
            setReady(true);
        }
        capture()
    }, [])

    if (!isReady) return <p>Génération du rapport....</p>

    return (
        <PDFViewer width="100%" height="100%" style={{
            height: "100vh"
        }}>
            <Report radar={Radar} pie={Pie}/>
        </PDFViewer>
    )
}