import { LayeredText } from "@/components/ui/layered-text";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/data/services";

export function ServiceListText() {
  const lines = services.map((service) => ({
    title: service.title,
    description: service.summary
  }));

  return (
    <section className="overflow-hidden bg-white/45 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="සේවා ලැයිස්තුව"
          title="අප සම්බන්ධ කරදෙන සේවා සියල්ල"
          text="ඔබගේ නිවසට අවශ්‍ය සේවාව තෝරාගෙන WhatsApp හරහා අපට විස්තර යවන්න."
        />
        <LayeredText lines={lines} />
      </div>
    </section>
  );
}