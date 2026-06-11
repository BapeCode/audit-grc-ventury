import {isProEmail} from "@/lib/utils";


export async function POST(req: Request) {
    const encoder = new TextEncoder();
    const body = await req.json();

    console.log(body)

    console.log(`FirstName Length : ${body.firstName.length}\nLastName Length : ${body.lastName.length}\nPhone Length : ${body.phone.length}\nEmail PRO : ${isProEmail(body.email)}`);


    const stream = new ReadableStream({
        async start(controller) {
            controller.enqueue(encoder.encode("validating"));
            await new Promise(r => setTimeout(r, 2000));

            if (body.firstName.length < 3 || body.lastName.length < 3 || body.phone.length < 14 || !isProEmail(body.email) || body.company < 3) {
                controller.enqueue(encoder.encode("invalid"))
                controller.close()
            };

            controller.enqueue(encoder.encode("sending"));
            await new Promise(r => setTimeout(r, 2000));
            controller.enqueue(encoder.encode("done"));
            controller.close()
        }
    })


    return new Response(stream)
}