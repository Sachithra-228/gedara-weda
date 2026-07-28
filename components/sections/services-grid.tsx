"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { ExpandingCards, type CardItem } from "@/components/ui/expanding-cards";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/icon-map";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/utils";

const serviceImages: Record<string, string> = {
  "home-repair": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  plumbing: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",
  electrical: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
  painting: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
  carpentry: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1200&q=80",
  aluminium: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  tiles: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
  construction: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  roofing: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  grill: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  gate: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
  cctv: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  ac: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
  cleaning: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
  landscaping: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80"
};

export function ServicesGrid({ limit }: { limit?: number }) {
  const visibleServices = limit ? services.slice(0, limit) : services;
  const expandingServices = visibleServices.slice(0, limit ? 7 : 9);

  const items: CardItem[] = expandingServices.map((service) => ({
    id: service.slug,
    title: service.title,
    description: service.summary,
    imgSrc: serviceImages[service.slug] ?? serviceImages["home-repair"],
    icon: <ServiceIcon className="h-6 w-6" name={service.icon} />,
    linkHref: `/services/${service.slug}`,
    whatsappHref: whatsappUrl(`මට ${service.title} සේවාව පිළිබඳ තොරතුරු අවශ්‍යයි.`)
  }));

  return (
    <section className="py-24" id="services">
      <div className="section-shell">
        <SectionHeading
          eyebrow="සේවා"
          title="නිවසේ වැඩ සඳහා තෝරාගත හැකි සේවා"
          text="අපි සේවාව සෘජුව නොකරමු. ඔබගේ අවශ්‍යතාව අනුව සුදුසු ශිල්පීන් හා කණ්ඩායම් සම්බන්ධ කර ගැනීමට පහසු මාර්ගයක් ලබාදෙමු."
        />
        <ExpandingCards className="shadow-soft" items={items} />
        {limit ? (
          <div className="mt-10 text-center">
            <ButtonLink href="/services" variant="light">
              සියලු සේවා බලන්න
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}