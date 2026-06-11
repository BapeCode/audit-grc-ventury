import {Document, Page, StyleSheet, Font} from "@react-pdf/renderer"
import {Cover} from "@/components/pdf/pages/cover";
import Summary from "@/components/pdf/pages/summary";
import {Domain} from "@/types/domain.type";
import {AnswerState} from "@/types/answer.type";
import Remediation from "@/components/pdf/pages/remediation";
import {
    calculatePointByDomain,
    getConformity,
    getCriticalPoints,
    getDomainStrong,
    getDomainWeakness,
    getMaturityLevel
} from "@/lib/result.utils";
import {getMaxPoints} from "@/lib/questions.utils";
import Analysis from "@/components/pdf/pages/analys";
import {AuthForm} from "@/types/auth.type";

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
    pie,
    bar,
    answer,
    auth
}: {radar: string, pie: string, bar: string, answer: AnswerState[], auth: AuthForm}) {
    const company: string = auth.company;
    const phone: string = auth.phone;
    const poste: string = auth.grade;
    const email: string = auth.email;
    const name : string = auth.lastName + " " + auth.firstName;
    const message : string = auth.message;

    const USER_SCORE = answer.reduce((sum, v) => sum + v.points, 0);
    const MAX_SCORE = getMaxPoints();
    const PERCENTAGE = (USER_SCORE / MAX_SCORE) * 100;
    const LEVELS = getMaturityLevel(PERCENTAGE);

    const conformity = getConformity(answer);
    const critical = getCriticalPoints(answer);
    const domainStrong = getDomainStrong(answer);
    const domainWeak = getDomainWeakness(answer);
    const scoreByDomain = calculatePointByDomain(answer)

    return (
        <Document>
            <Cover company={company} name={name} phone={phone} email={email} grade={poste} message={message}/>
            <Summary
                score={USER_SCORE}
                maxScore={MAX_SCORE}
                level={LEVELS.badge}
                description={LEVELS.description}
                conformity={conformity}
                critical={critical}
                domainStrong={domainStrong}
                domainWeak={domainWeak}
                radar={radar}
                pie={pie}
                bar={bar}
            />
            <Analysis scoreByDomain={scoreByDomain} answer={answer}/>
            <Remediation answer={answer}/>
        </Document>
    )
}