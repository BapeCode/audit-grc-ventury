"use client"
import { PDFViewer } from "@react-pdf/renderer"
import Report from "./report"
import {useEffect, useState} from "react";
import {AnswerState} from "@/types/answer.type";
import {AuthForm} from "@/types/auth.type";
import {getSession} from "@/actions/auth.actions";

export default function PdfPreview() {
    const [isReady, setReady] = useState(false);
    const [Radar, setRadar] = useState<string>("");
    const [Pie, setPie] = useState<string>("");
    const [Bar, setBar] = useState<string>("");
    const [Answer, setAnswer] = useState<AnswerState[]>([]);
    const [Auth, setAuth] = useState<AuthForm>();

    useEffect(() => {
        const capture = async () => {
            const radar = localStorage.getItem('radar-chart') ?? ""
            const pie = localStorage.getItem('pie-chart') ?? ""
            const bar = localStorage.getItem('bar-chart') ?? ""
            const saved = localStorage.getItem("answers") ?? ""

            const auth = await getSession()
            if (saved) setAnswer(JSON.parse(saved))
            if (auth) setAuth(auth)
            setRadar(radar);
            setPie(pie);
            setBar(bar);
            setReady(true);
        }
        capture()
    }, [])


    if (!Auth) return <p>Récupération de la session...</p>
    if (!isReady) return <p>Génération du rapport....</p>

    return (
        <PDFViewer width="100%" height="100%" style={{
            height: "100vh"
        }}>
            <Report radar={Radar} pie={Pie} bar={Bar} answer={Answer} auth={Auth}/>
        </PDFViewer>
    )
}