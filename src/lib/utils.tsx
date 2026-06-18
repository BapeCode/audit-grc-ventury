import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toPng } from "html-to-image";

const BLOCKED_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.fr",
  "hotmail.com",
  "hotmail.fr",
  "outlook.com",
  "outlook.fr",
  "live.com",
  "live.fr",
  "icloud.com",
  "me.com",
  "laposte.net",
  "orange.fr",
  "free.fr",
  "sfr.fr",
  "wanadoo.fr",
  "bbox.fr",
  "numericable.fr",
  "protonmail.com",
  "proton.me",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const captureChart = async (elementId: string): Promise<string> => {
  const element = document.getElementById(elementId);
  if (!element) return "";
  return await toPng(element);
};

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  const limited = digits.slice(0, 10);
  const match = limited.match(/(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})/);
  if (!match) return value;
  return [match[1], match[2], match[3], match[4], match[5]]
    .filter(Boolean)
    .join(" ");
}

export function isProEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  return !BLOCKED_DOMAINS.includes(domain);
}

export function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  const visiblePart = local.slice(0, 2);
  const maskedPart = "*".repeat(local.length - 2);
  return `${visiblePart}${maskedPart}@${domain}`;
}
