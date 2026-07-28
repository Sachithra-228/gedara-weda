import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/icon-map";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/utils";

export function ServicesGrid({ limit }: { limit?: number }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24" id="services">
      <div className="section-shell">
        <SectionHeading
          eyebrow="සේවා"
          title="නිවසේ වැඩ සඳහා තෝරාගත හැකි සේවා"
          text="අපි සේවාව සෘජුව නොකරමු. ඔබගේ අවශ්‍යතාව අනුව සුදුසු ශිල්පීන් හා කණ්ඩායම් සම්බන්ධ කර ගැනීමට පහසු මාර්ගයක් ලබාදෙමු."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => (
            <Reveal delay={index * 0.035} key={service.slug}>
              <article className="group h-full rounded-card border border-ink/10 bg-white p-6 shadow-line transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-card bg-primary/18 text-ink transition group-hover:bg-primary group-hover:text-white">
                    <ServiceIcon className="h-5 w-5" name={service.icon} />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-muted">{service.summary}</p>
                <div className="mt-6 flex flex-col gap-2">
                  <Link className="focus-ring text-sm font-bold text-ink hover:text-accent" href={`/services/${service.slug}`}>
                    විස්තර බලන්න
                  </Link>
                  <a
                    className="focus-ring text-sm font-bold text-accent"
                    href={whatsappUrl(`මට ${service.title} සේවාව පිළිබඳ තොරතුරු අවශ්‍යයි.`)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    මේ සේවාව සඳහා WhatsApp කරන්න
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
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
