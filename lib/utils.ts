import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsappNumber() {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "94702911223";
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${getWhatsappNumber()}?text=${encodeURIComponent(message)}`;
}
