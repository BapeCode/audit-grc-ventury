import {render} from "react-email";
import EmailMfa from "@/emails/email-mfa";
import EmailReport from "@/emails/email-report";
import EmailReportCustomers from "@/emails/email-report-customers";

export async function renderMfaEmail(code: string, email: string) {
    return await render(<EmailMfa code={code} email={email}/>)
}

export async function renderReportEmail(firstname: string, lastname: string, email: string, company: string, phone: string) {
    return await render(<EmailReport firstname={firstname} lastname={lastname} phone={phone} email={email} company={company}/>)
}

export async function renderReportCustomersEmail(firstName: string, lastName: string) {
    return await render(<EmailReportCustomers firstname={firstName} lastname={lastName}/>)
}