import {Document, Page, StyleSheet, Font} from "@react-pdf/renderer"
import {Cover} from "@/components/pdf/pages/cover";
import Summary from "@/components/pdf/pages/summary";
import {Domain} from "@/types/domain.type";

Font.register({
    family: "Roboto",
    fonts: [
        {src: "/font/Roboto-Black.ttf", fontWeight: "black"},
        {src: "/font/Roboto-ExtraBold.ttf", fontWeight: "extrabold"},
        {src: "/font/Roboto-Bold.ttf", fontWeight: "bold"},
        {src: "/font/Roboto-SemiBold.ttf", fontWeight: "semibold"},
        {src: "/font/Roboto-Medium.ttf", fontWeight: "medium"},
        {src: "/font/Roboto-Regular.ttf", fontWeight: "normal"},
        {src: "/font/Roboto-Light.ttf", fontWeight: "light"},
        {src: "/font/Roboto-ExtraLight.ttf", fontWeight: "extralight"},
        {src: "/font/Roboto-Thin.ttf", fontWeight: "thin"},
    ]
})

export default function Report({
    radar,
    pie
}: {radar: string, pie: string}) {
    const company: string = "Anthropic";
    const date: string = "Mardi 9 Juin 2026";

    const level = "En cours de définition";
    const score = 21;
    const maxScore = 100;
    const description = "Vous posez des bases concrètes. Plusieurs pratiques sont engagées ; il reste à les formaliser et à les généraliser pour atteindre une posture de sécurité robuste."
    const conformity = 10
    const critical = 4
    const domainStrong: Domain = "Gouvernance"
    const domainWeak: Domain = "Résilience"

    return (
        <Document>
            <Cover company={company} date={date} />
            <Summary
                score={score}
                maxScore={maxScore}
                level={level}
                description={description}
                conformity={conformity}
                critical={critical}
                domainStrong={domainStrong}
                domainWeak={domainWeak}
                radar={radar}
                pie={pie}
            />
        </Document>
    )
}