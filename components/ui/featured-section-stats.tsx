"use client";

import CountUp from "react-countup";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { stats } from "@/data/content";

const chartData = [
  { name: "ජන", value: 18 },
  { name: "පෙබ", value: 34 },
  { name: "මාර්", value: 52 },
  { name: "අප්‍රේ", value: 78 },
  { name: "මැයි", value: 102 },
  { name: "ජූනි", value: 128 },
  { name: "ජූලි", value: 160 }
];

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

      <div className="mt-8 h-40 w-full overflow-hidden rounded-card border border-ink/10 bg-white/42 md:h-48">
        <ResponsiveContainer height="100%" width="100%">
          <AreaChart data={chartData} margin={{ bottom: 0, left: 0, right: 0, top: 18 }}>
            <defs>
              <linearGradient id="gedaraStatsBlue" x1="0" x2="0" y1="0" y2="1">
                <stop offset="5%" stopColor="#7DAACB" stopOpacity={0.42} />
                <stop offset="95%" stopColor="#7DAACB" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                border: "1px solid rgba(17,17,17,0.1)",
                borderRadius: 8,
                color: "#111111",
                fontSize: 12
              }}
            />
            <Area dataKey="value" fill="url(#gedaraStatsBlue)" fillOpacity={1} stroke="#7DAACB" strokeWidth={3} type="monotone" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}