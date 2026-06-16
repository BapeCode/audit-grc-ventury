import {renderToBuffer} from "@react-pdf/renderer";
import Report from "@/components/pdf/report";
import {AnswerState} from "@/types/answer.type";
import {AuthForm} from "@/types/auth.type";

export default async function renderPdfReport(
    radar: string,
    pie: string,
    bar: string,
    answer: AnswerState[],
    auth: AuthForm
) {
    return await renderToBuffer(<Report
        radar={radar}
        pie={pie}
        bar={bar}
        answer={answer}
        auth={auth}
    />)
}