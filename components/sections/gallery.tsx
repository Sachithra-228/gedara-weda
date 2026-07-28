import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { gallery } from "@/data/content";

export function Gallery() {
  return (
    <section className="bg-white/45 py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="අපගේ වැඩ" title="පෙර සහ පසු පෙනුමක්" text="නිවාස වැඩ සැලසුම් කිරීමේදී අවසන් පෙනුම ගැන විශ්වාසයක් ලබාදෙන උදාහරණ." />
        <div className="masonry">
          {gallery.map((item, index) => (
            <Reveal className="masonry-item" delay={index * 0.05} key={item.title}>
              <article className="group overflow-hidden rounded-card border border-ink/10 bg-white shadow-line">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image className="object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, 100vw" />
                  <div className="absolute left-3 top-3 rounded-card bg-white/90 px-3 py-1 text-xs font-bold">{item.category}</div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="rounded-card bg-ink px-3 py-1 text-xs font-bold text-white">{item.before}</span>
                    <span className="rounded-card bg-accent px-3 py-1 text-xs font-bold text-white">{item.after}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
