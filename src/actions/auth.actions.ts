"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AuthForm } from "@/types/auth.type";
import { transporter } from "@/lib/mail";
import { renderMfaEmail } from "@/lib/email-template";

export async function submitForm(
  prevState: { error: string } | undefined,
  formData: FormData,
) {
  const data = Object.fromEntries(formData.entries());
  const email = data.email as string;

  if (!email)
    return {
      error: "Le mail est invalide...",
    };

  try {
    const cookieStore = await cookies();
    const code = await sendMFACode(email);

    cookieStore.set("mfa_expected_code", code, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 10,
    });

    cookieStore.set("temp_auth_data", JSON.stringify(data), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 5,
    });
  } catch (e) {
    console.error(e);
  }

  redirect("/auth/mfa");
}

export async function getUserEmail() {
  const cookieStore = await cookies();

  const existingCookie = cookieStore.get("temp_auth_data")?.value;

  if (!existingCookie) return redirect("/auth");

  const data = JSON.parse(existingCookie);

  return {
    success: true,
    data: data.email,
  };
}

export async function verify(code: string) {
  const cookieStore = await cookies();
  const realCode = cookieStore.get("mfa_expected_code")?.value;

  if (!realCode) return redirect("/auth");
  if (!code)
    return {
      error: "Le code est invalide...",
    };

  if (realCode !== code)
    return {
      error: "Le code est invalide ou expiré. Veuillez réessayer.",
    };
  cookieStore.set("mfa_verified", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 10,
  });

  await new Promise((r) => setTimeout(r, 1500));

  redirect("/auth/verify");
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("auth_session")?.value;

  if (!session) return redirect("/auth");

  return JSON.parse(session) as AuthForm;
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("auth_session");
  cookieStore.delete("mfa_excepted_code");
  cookieStore.delete("mfa_verified");
  cookieStore.delete("temp_auth_data");
  cookieStore.delete("mail_sending");

  redirect("/");
}

export async function sendMFACode(email: string) {
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: `Ventury - Confirmation Mail - ${code}`,
      html: await renderMfaEmail(code, email),
    });
  } catch (e) {
    console.log(`Erreur réseau : ${e}`);
  }

  return code;
}
