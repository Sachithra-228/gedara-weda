import { TestimonialAuthor, TestimonialCard } from "@/components/ui/testimonial-card";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsSection({ title, description, testimonials, className }: TestimonialsSectionProps) {
  return (
    <section className={cn("overflow-hidden py-24 text-ink", className)}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-12 text-center">
        <div className="section-shell flex flex-col items-center gap-4">
          <p className="text-sm font-bold text-accent">පාරිභෝගික අදහස්</p>
          <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">{title}</h2>
          <p className="max-w-2xl text-base font-medium leading-8 text-muted md:text-lg">{description}</p>
        </div>

        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--duration:72s] [--gap:1rem] [gap:var(--gap)]">
            <div className="flex shrink-0 animate-marquee justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">
              {Array.from({ length: 4 }).map((_, setIndex) =>
                testimonials.map((testimonial, index) => (
                  <TestimonialCard key={`${setIndex}-${index}`} {...testimonial} />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}