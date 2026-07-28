import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Card = href ? "a" : "div";

  return (
    <Card
      {...(href ? { href, rel: "noreferrer", target: "_blank" } : {})}
      className={cn(
        "flex w-[330px] shrink-0 flex-col rounded-card border border-ink/10 bg-white/86 p-5 text-start shadow-line backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:w-[360px]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-ink/10">
          <AvatarImage alt={author.name} src={author.avatar} />
          <AvatarFallback>{author.name.slice(0, 1)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="font-bold leading-none text-ink">{author.name}</h3>
          <p className="mt-1 text-sm text-muted">{author.handle}</p>
        </div>
      </div>
      <div className="mt-5 flex gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star className="h-4 w-4 fill-current" key={index} />
        ))}
      </div>
      <p className="mt-4 min-h-28 text-sm font-medium leading-8 text-muted">“{text}”</p>
    </Card>
  );
}