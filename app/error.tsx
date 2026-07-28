"use client";

import { ButtonLink } from "@/components/ui/button-link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="section-shell flex min-h-screen flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold text-accent">දෝෂයක් ඇතිවිය</p>
      <h1 className="mt-4 text-4xl font-bold">නැවත උත්සාහ කරන්න</h1>
      <button
        className="focus-ring mt-8 rounded-card bg-ink px-5 py-3 text-sm font-semibold text-white"
        onClick={reset}
      >
        පිටුව නැවත පූරණය කරන්න
      </button>
    </div>
  );
}
