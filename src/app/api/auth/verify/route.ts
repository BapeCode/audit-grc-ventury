import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  const authData = cookieStore.get("temp_auth_data")?.value;

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Étape 1
      controller.enqueue(encoder.encode("validating"));

      if (!authData) {
        controller.enqueue(encoder.encode("error"));
        return controller.close();
      }

      cookieStore.set("auth_session", authData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
      await new Promise((r) => setTimeout(r, 1500));

      // Étape 3
      cookieStore.delete("mfa_verified");
      cookieStore.delete("mfa_expected_code");
      cookieStore.delete("temp_auth_data");
      await new Promise((r) => setTimeout(r, 1500));

      controller.enqueue(encoder.encode("done"));
      controller.close();
    },
  });

  return new Response(stream);
}
