"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";
import { site } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        aria-label="WhatsApp අමතන්න"
        className="focus-ring grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:-translate-y-1 hover:bg-[#1FAF55]"
        href={whatsappUrl(site.contact.whatsappMessage)}
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <button
        aria-label="ඉහළට යන්න"
        className="focus-ring grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white text-ink shadow-soft transition hover:-translate-y-1"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
