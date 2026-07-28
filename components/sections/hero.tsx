"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ButtonLink } from "@/components/ui/button-link";
import { HouseScene } from "@/components/sections/house-scene";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-rise", { y: 34, opacity: 0, duration: 0.85, stagger: 0.1, ease: "power3.out" });
    }, heroRef);

    const onMove = (event: MouseEvent) => {
      if (!artRef.current) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;
      gsap.to(artRef.current, { x, y, duration: 0.7, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden pb-12 pt-14 md:pb-16 md:pt-16">
      <div className="section-shell grid min-h-[calc(100vh-14rem)] items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <h1 className="hero-rise max-w-3xl text-4xl font-black leading-[1.18] tracking-normal text-ink md:text-6xl">
            <span className="block">නිවසේ ඕනෑම වැඩකට</span>
            <span className="block">විශ්වාසයෙන් එක් තැනකින්.</span>
          </h1>
          <p className="hero-rise mt-6 max-w-2xl text-lg leading-9 text-muted md:text-xl">
            අලුත්වැඩියා, ජලනල, විදුලි, ග්‍රිල්, පින්තාරු කිරීම සහ තවත් නිවාස සේවා රැසක්.
          </p>
          <div className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappUrl(site.contact.whatsappMessage)} external>
              <MessageCircle className="h-4 w-4" />
              WhatsApp හරහා අමතන්න
            </ButtonLink>
            <ButtonLink href="/services" variant="light">
              අපගේ සේවා බලන්න
            </ButtonLink>
          </div>
        </div>
        <div ref={artRef} className="hero-rise relative">
          <HouseScene />
        </div>
      </div>
    </section>
  );
}