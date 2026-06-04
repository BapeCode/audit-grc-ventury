import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ventury Technology - Pré-Audit",
  description: "Outils de Ventury Technology pour faire des pré-audit d'une maturité cyber.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
