import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { reasons } from "@/data/content";

export function WhyChoose() {
  return (
    <section className="bg-white/45 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="අප ගැන"
          title="විශ්වාසය ගොඩනැගෙන ක්‍රමයක්"
          text="නිවසේ වැඩවලදී පැහැදිලි සන්නිවේදනය, නිවැරදි තොරතුරු සහ ඉක්මන් සම්බන්ධතාව අත්‍යවශ්‍යයි."
        />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-ink/10 md:block" />
          <div className="grid gap-5">
            {reasons.map((reason, index) => (
              <Reveal className="relative grid gap-4 rounded-card border border-ink/10 bg-white p-6 shadow-line md:grid-cols-[4rem_1fr]" delay={index * 0.06} key={reason.title}>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="mt-2 leading-7 text-muted">{reason.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
