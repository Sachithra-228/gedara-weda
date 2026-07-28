import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";

export function Cta() {
  return (
    <section className="section-shell py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-white md:px-12 md:py-20">
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/40 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-4xl font-black leading-tight md:text-6xl">අදම ඔබගේ වැඩ ආරම්භ කරන්න.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            අවශ්‍ය සේවාව, ප්‍රදේශය සහ කෙටි විස්තරයක් WhatsApp මගින් යවන්න.
          </p>
          <ButtonLink className="mt-8 animate-pulse" href={whatsappUrl(site.contact.whatsappMessage)} variant="accent" external>
            <MessageCircle className="h-4 w-4" />
            WhatsApp අමතන්න
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
