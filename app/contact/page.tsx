import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "අමතන්න",
  description: "ගෙදර වැඩ WhatsApp මගින් අමතන්න."
};

export default function ContactPage() {
  return (
    <section className="section-shell grid gap-10 pt-32 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-bold text-accent">අමතන්න</p>
        <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">ඔබගේ නිවාස වැඩ ගැන අපට කියන්න.</h1>
        <p className="mt-6 text-lg leading-9 text-muted">
          සේවාව, ප්‍රදේශය සහ ඔබට අවශ්‍ය කාලය සඳහන් කර WhatsApp මගින් සම්බන්ධ වන්න.
        </p>
        <div className="mt-8 grid gap-4">
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-accent" />
            <span>{site.contact.displayPhone}</span>
          </div>
          <div className="flex gap-3">
            <Mail className="h-5 w-5 text-accent" />
            <span>{site.contact.email}</span>
          </div>
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-accent" />
            <span>{site.contact.location}</span>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
