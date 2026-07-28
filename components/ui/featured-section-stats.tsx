"use client";

import CountUp from "react-countup";
import { stats } from "@/data/content";

export default function FeaturedSectionStats() {
  return (
    <section className="section-shell -mt-6 py-10 text-left md:-mt-10 md:py-14">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat) => (
          <div className="rounded-card border border-ink/10 bg-white/86 px-5 py-7 text-center shadow-line backdrop-blur-sm" key={stat.label}>
            <p className="text-3xl font-black tracking-normal text-ink md:text-4xl">
              <CountUp enableScrollSpy end={stat.value} scrollSpyOnce separator="," suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm font-semibold text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}