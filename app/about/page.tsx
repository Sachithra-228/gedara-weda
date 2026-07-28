import type { Metadata } from "next";
import { WhyChoose } from "@/components/sections/why-choose";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "අප ගැන",
  description: "ගෙදර වැඩ නිවාස සේවා සම්බන්ධතා වේදිකාව ගැන."
};

export default function AboutPage() {
  return (
    <>
      <section className="section-shell pt-32 text-center">
        <p className="text-sm font-bold text-accent">අප ගැන</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          නිවාස වැඩවලදී සම්බන්ධ වීම පහසු කරන Sinhala-first වේදිකාවක්.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-muted">
          ගෙදර වැඩ සේවාවන් සෘජුව සපයන ආයතනයක් නොවේ. අපගේ අරමුණ වන්නේ නිවසේ අවශ්‍යතාව හඳුනාගෙන WhatsApp හරහා සුදුසු සේවා සම්බන්ධතාවකට ගෙනයෑමයි.
        </p>
      </section>
      <WhyChoose />
      <Cta />
    </>
  );
}
