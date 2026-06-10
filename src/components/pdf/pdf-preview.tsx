"use client"
import { PDFViewer } from "@react-pdf/renderer"
import Report from "./report"
import {useEffect, useState} from "react";
import {AnswerState} from "@/types/answer.type";

export default function PdfPreview() {
    const [isReady, setReady] = useState(false);
    const [Radar, setRadar] = useState<string>("");
    const [Pie, setPie] = useState<string>("");
    const [Bar, setBar] = useState<string>("");
    const [Answer, setAnswer] = useState<AnswerState[]>([]);

    useEffect(() => {
        const capture = () => {
            const radar = localStorage.getItem('radar-chart') ?? ""
            const pie = localStorage.getItem('pie-chart') ?? ""
            const bar = localStorage.getItem('bar-chart') ?? ""
            const saved = localStorage.getItem("answers")
            if (saved) setAnswer(JSON.parse(saved))
            setRadar(radar);
            setPie(pie);
            setBar(bar);
            setReady(true);
        }
        capture()
    }, [])

    if (!isReady) return <p>Génération du rapport....</p>

    return (
        <PDFViewer width="100%" height="100%" style={{
            height: "100vh"
        }}>
            <Report radar={Radar} pie={Pie} bar={Bar} answer={Answer}/>
        </PDFViewer>
    )
}