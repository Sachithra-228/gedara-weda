"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type LayeredLine = {
  title: string;
  description: string;
};

interface LayeredTextProps {
  lines: LayeredLine[];
  className?: string;
}

export function LayeredText({ lines, className = "" }: LayeredTextProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLine = lines[activeIndex] ?? lines[0];

  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]", className)}>
      <ul className="m-0 flex list-none flex-col gap-4 p-0 md:gap-5">
        {lines.map((line, index) => {
          const isActive = activeIndex === index;
          const offset = index % 2 === 0 ? "lg:group-hover:-translate-x-5" : "lg:group-hover:translate-x-5";

          return (
            <li key={line.title}>
              <button
                className={cn(
                  "group focus-ring block w-full text-left transition-transform duration-300",
                  offset
                )}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                type="button"
              >
                <span
                  className={cn(
                    "block rounded-card px-4 py-2 text-4xl font-black leading-tight tracking-normal transition duration-300 md:text-6xl",
                    isActive ? "bg-white text-accent shadow-line" : "text-ink hover:bg-white/70"
                  )}
                >
                  {line.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <aside className="rounded-card border border-ink/10 bg-white p-6 shadow-soft lg:sticky lg:top-24">
        <p className="text-sm font-bold text-accent">සේවා විස්තර</p>
        <h3 className="mt-3 text-3xl font-black leading-tight text-ink md:text-4xl">{activeLine.title}</h3>
        <p className="mt-5 text-base font-medium leading-8 text-muted">{activeLine.description}</p>
      </aside>
    </div>
  );
}