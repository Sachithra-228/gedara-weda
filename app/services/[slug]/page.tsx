import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceIcon } from "@/components/shared/icon-map";
import { ButtonLink } from "@/components/ui/button-link";
import { Cta } from "@/components/sections/cta";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="section-shell pt-32">
        <div className="grid gap-8 rounded-[2rem] border border-ink/10 bg-white p-6 shadow-soft md:p-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-card bg-primary text-white">
              <ServiceIcon className="h-6 w-6" name={service.icon} />
            </div>
            <h1 className="mt-6 text-4xl font-black md:text-6xl">{service.title}</h1>
            <p className="mt-5 text-lg leading-9 text-muted">{service.details}</p>
            <ButtonLink className="mt-8" href={whatsappUrl(`මට ${service.title} සේවාව පිළිබඳ තොරතුරු අවශ්‍යයි.`)} external>
              <MessageCircle className="h-4 w-4" />
              මේ සේවාව සඳහා WhatsApp කරන්න
            </ButtonLink>
          </div>
          <div className="rounded-card bg-background p-6">
            <h2 className="text-xl font-bold">ඇතුළත් විය හැකි දේ</h2>
            <div className="mt-5 grid gap-4">
              {service.includes.map((item) => (
                <div className="flex gap-3" key={item}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <p className="leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell py-20">
        <SectionHeading
          eyebrow="සම්බන්ධතාව"
          title="අවශ්‍ය විස්තර කිහිපයක් යවන්න"
          text="ඔබගේ ප්‍රදේශය, වැඩ වර්ගය සහ ඡායාරූප තිබේ නම් ඒවා WhatsApp මගින් යැවීමෙන් සාකච්ඡාව ඉක්මන් වේ."
        />
      </section>
      <Cta />
    </>
  );
}
