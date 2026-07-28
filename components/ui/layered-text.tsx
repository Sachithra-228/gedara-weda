"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type React from "react";

type LayeredLine = { top: string; bottom: string };

interface LayeredTextProps {
  lines?: LayeredLine[];
  fontSize?: string;
  fontSizeMd?: string;
  lineHeight?: number;
  lineHeightMd?: number;
  className?: string;
}

export function LayeredText({
  lines = [],
  fontSize = "58px",
  fontSizeMd = "34px",
  lineHeight = 54,
  lineHeightMd = 34,
  className = ""
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const calculateTranslateX = (index: number) => {
    const centerIndex = Math.floor(lines.length / 2);
    return {
      desktop: (index - centerIndex) * 28,
      mobile: (index - centerIndex) * 14
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const paragraphs = container.querySelectorAll("p");
    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current.to(paragraphs, {
      y: window.innerWidth >= 768 ? -lineHeight : -lineHeightMd,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.05
    });

    const handleMouseEnter = () => timelineRef.current?.play();
    const handleMouseLeave = () => timelineRef.current?.reverse();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      timelineRef.current?.kill();
    };
  }, [lineHeight, lineHeightMd, lines]);

  return (
    <div
      className={`mx-auto cursor-pointer py-10 font-sans font-black uppercase tracking-normal text-ink antialiased md:py-14 ${className}`}
      ref={containerRef}
      style={{ fontSize, "--md-font-size": fontSizeMd } as React.CSSProperties}
    >
      <ul className="m-0 flex list-none flex-col items-center p-0">
        {lines.map((line, index) => {
          const translateX = calculateTranslateX(index);
          const skew = index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg";
          const scaleY = index % 2 === 0 ? "0.66667" : "1.33333";

          return (
            <li
              className="relative overflow-hidden"
              key={`${line.top}-${line.bottom}-${index}`}
              style={{
                height: `${lineHeight}px`,
                transform: `translateX(${translateX.desktop}px) skew(${skew}) scaleY(${scaleY})`,
                "--md-height": `${lineHeightMd}px`,
                "--md-translateX": `${translateX.mobile}px`
              } as React.CSSProperties}
            >
              <p className="m-0 whitespace-nowrap px-4 align-top" style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight - 4}px` }}>
                {line.top}
              </p>
              <p className="m-0 whitespace-nowrap px-4 align-top text-accent" style={{ height: `${lineHeight}px`, lineHeight: `${lineHeight - 4}px` }}>
                {line.bottom}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}