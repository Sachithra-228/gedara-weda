"use client";

import CountUp from "react-countup";
import { Reveal } from "@/components/shared/reveal";
import { stats } from "@/data/content";

export function Stats() {
  return (
    <section className="section-shell -mt-8 grid gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <Reveal className="rounded-card border border-ink/10 bg-white p-6 text-center shadow-line" delay={index * 0.06} key={stat.label}>
          <div className="text-4xl font-black text-ink">
            <CountUp enableScrollSpy end={stat.value} scrollSpyOnce suffix={stat.suffix} />
          </div>
          <p className="mt-2 text-sm font-semibold text-muted">{stat.label}</p>
        </Reveal>
      ))}
    </section>
  );
}
