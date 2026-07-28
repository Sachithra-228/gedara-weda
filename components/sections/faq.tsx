"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqs } from "@/data/content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white/45 py-24">
      <div className="section-shell max-w-4xl">
        <SectionHeading eyebrow="ප්‍රශ්න" title="නිතර අසන ප්‍රශ්න" />
        <div className="grid gap-3">
          {faqs.map((faq, index) => (
            <div className="rounded-card border border-ink/10 bg-white shadow-line" key={faq.question}>
              <button
                aria-expanded={open === index}
                className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold"
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                {faq.question}
                <ChevronDown className={cn("h-5 w-5 shrink-0 transition", open === index && "rotate-180")} />
              </button>
              {open === index ? <p className="px-5 pb-5 leading-8 text-muted">{faq.answer}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
