import Link from "next/link";
import { Facebook, MessageCircle, Music2 } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 bg-white/55">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link className="text-2xl font-black" href="/">
            {site.name}
          </Link>
          <p className="mt-4 max-w-sm leading-7 text-muted">{site.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a className="focus-ring grid h-10 w-10 place-items-center rounded-card bg-ink text-white" href={whatsappUrl(site.contact.whatsappMessage)} aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a className="focus-ring grid h-10 w-10 place-items-center rounded-card border border-ink/10 bg-white" href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a className="focus-ring grid h-10 w-10 place-items-center rounded-card border border-ink/10 bg-white" href="https://tiktok.com" aria-label="TikTok">
              <Music2 className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold">ඉක්මන් සබැඳි</h3>
          <div className="mt-4 grid gap-3">
            {site.navigation.map((item) => (
              <Link className="text-sm text-muted transition hover:text-ink" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">සේවා</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 6).map((service) => (
              <Link className="text-sm text-muted transition hover:text-ink" href={`/services/${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">අමතන්න</h3>
          <p className="mt-4 text-sm leading-7 text-muted">{site.contact.displayPhone}</p>
          <p className="text-sm leading-7 text-muted">{site.contact.email}</p>
          <p className="text-sm leading-7 text-muted">{site.contact.location}</p>
        </div>
      </div>
      <div className="border-t border-ink/10 py-5 text-center text-sm text-muted">
        © 2026 {site.name} සියලු හිමිකම් ඇවිරිණි.
      </div>
    </footer>
  );
}
