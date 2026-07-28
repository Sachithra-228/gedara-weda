import { Reveal } from "@/components/shared/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-muted md:text-lg">{text}</p> : null}
    </Reveal>
  );
}
