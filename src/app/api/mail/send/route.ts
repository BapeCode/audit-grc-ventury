import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import renderPdfReport from "@/lib/pdf";
import {AuthForm} from "@/types/auth.type";
import {transporter} from "@/lib/mail";
import {renderReportCustomersEmail, renderReportEmail} from "@/lib/email-template";

export async function POST(req: Request) {
    const cookieStore = await cookies()
    const { radar, pie, bar, answers } = await req.json()
    const isAlreadySending = cookieStore.get("mail_sending")?.value
    const session = cookieStore.get("auth_session")?.value

    if (!session) {
        return redirect("/auth")
    }

    if (!isAlreadySending) {
        cookieStore.set("mail_sending", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 10,
        });
        try {
            const sessionParsed: AuthForm = await JSON.parse(session);
            const pdfBuffer = await renderPdfReport(
                radar,
                pie,
                bar, answers,
                sessionParsed
            )

            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: process.env.SMTP_USER,
                subject: `Ventury - Rapport Pré-audit`,
                html: await renderReportEmail(
                    sessionParsed.firstName,
                    sessionParsed.lastName,
                    sessionParsed.email,
                    sessionParsed.company,
                    sessionParsed.phone,
                ),
                attachments: [{
                    filename: `rapport-${sessionParsed.company}.pdf`,
                    content: pdfBuffer,
                    contentType: "application/pdf",
                }]
            })

            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: sessionParsed.email,
                subject: `Ventury - Rapport Pré-audit`,
                html: await renderReportCustomersEmail(
                    sessionParsed.firstName,
                    sessionParsed.lastName,
                ),
                attachments: [{
                    filename: `rapport-${sessionParsed.company}.pdf`,
                    content: pdfBuffer,
                    contentType: "application/pdf",
                }]
            })
        } catch (e) {
            console.log(e);
        }
    }

    return Response.json({ success: true })
}