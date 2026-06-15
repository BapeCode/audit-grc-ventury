import {isProEmail} from "@/lib/utils";
import jwt from "jsonwebtoken";


export async function POST(req: Request) {
    const encoder = new TextEncoder();
    const body = await req.json();
    const form = body.form;
    const code = body.code;
    const token = body.token;


    console.log(form)

    const stream = new ReadableStream({
        async start(controller) {
            controller.enqueue(encoder.encode("validating"));
            await new Promise(r => setTimeout(r, 2000));

            const decoded = jwt.verify(token, process.env.JWT_SECRET) as unknown as { email: string, code: string }

            if (decoded.code !== code.join("")) {
                controller.enqueue(encoder.encode("mfa_failed"));
                controller.close()
            }

            // if (form.firstName.length < 3 || form.lastName.length < 3 || form.phone.length < 14 || !isProEmail(form.email) || form.company < 3) {
            //     controller.enqueue(encoder.encode("invalid"))
            //     controller.close()
            // };

            controller.enqueue(encoder.encode("sending"));
            await new Promise(r => setTimeout(r, 2000));
            controller.enqueue(encoder.encode("done"));
            controller.close()
        }
    })


    return new Response(stream)
}