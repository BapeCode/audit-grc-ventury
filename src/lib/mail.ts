import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false
    }
})

export {
    transporter
}