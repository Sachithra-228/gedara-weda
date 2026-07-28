"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/utils";
import { ProgressBar } from "@/components/shared/progress-bar";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ProgressBar />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/5 bg-background/70 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link className="focus-ring text-xl font-black text-ink" href="/">
            {site.name}
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="ප්‍රධාන මෙනුව">
            {site.navigation.map((item) => (
              <Link className="focus-ring text-sm font-semibold text-muted transition hover:text-ink" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="focus-ring hidden items-center gap-2 rounded-card bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent lg:inline-flex"
            href={whatsappUrl(site.contact.whatsappMessage)}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            aria-label="මෙනුව"
            className="focus-ring grid h-10 w-10 place-items-center rounded-card border border-ink/10 bg-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open ? (
          <div className="border-t border-ink/5 bg-background/95 px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-2" aria-label="ජංගම මෙනුව">
              {site.navigation.map((item) => (
                <Link
                  className="focus-ring rounded-card px-3 py-3 text-sm font-semibold text-ink hover:bg-white"
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
