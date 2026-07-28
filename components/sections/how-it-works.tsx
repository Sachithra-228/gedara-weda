import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { steps } from "@/data/content";

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="ක්‍රමය" title="පියවර හතරකින් වැඩ ආරම්භ කරන්න" />
        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal className="relative" delay={index * 0.08} key={step}>
              <div className="h-full rounded-card border border-ink/10 bg-white p-6 shadow-line">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-black text-white">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-bold leading-8">{step}</h3>
              </div>
              {index < steps.length - 1 ? (
                <ArrowDown className="mx-auto my-2 h-5 w-5 text-primary lg:absolute lg:-right-3 lg:top-1/2 lg:-translate-y-1/2 lg:-rotate-90" />
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
