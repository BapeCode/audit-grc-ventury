import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    const body = await req.json();
    const email = body.email;
    console.log(email);

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const token = jwt.sign(
        {email: email, code: code},
        // @ts-ignore
        process.env.JWT_SECRET,
        {expiresIn: "5m"}
    )

    console.log("Code : " + code)

    await new Promise(r => setTimeout(r, 2000));

    return Response.json({token: token});
}