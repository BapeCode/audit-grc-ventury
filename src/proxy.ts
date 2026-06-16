import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const session = request.cookies.get("auth_session")?.value
  const mfaExpected = request.cookies.get("mfa_expected_code")?.value
  const mfaVerified = request.cookies.get("mfa_verified")?.value

  // if (session && path.startsWith("/auth")) {
  //   return NextResponse.redirect(new URL("/result", request.url))
  // }

  if (path.startsWith("/result") && !session) {
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  if (path.startsWith("/auth/mfa") && !mfaExpected) {
    return NextResponse.redirect(new URL("/auth", request.url))
  }

  if (path.startsWith("/auth/verify") && !mfaVerified) {
    return NextResponse.redirect(new URL("/auth/mfa", request.url))
  }


  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
