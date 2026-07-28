import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light" | "accent";
  external?: boolean;
};

export function ButtonLink({ href, children, className, variant = "dark", external }: ButtonLinkProps) {
  const classes = cn(
    "focus-ring group inline-flex items-center justify-center gap-2 rounded-card px-5 py-3 text-sm font-semibold transition",
    variant === "dark" && "bg-ink text-white hover:bg-accent",
    variant === "light" && "border border-ink/10 bg-white text-ink hover:border-primary hover:text-accent",
    variant === "accent" && "bg-accent text-white hover:bg-ink",
    className
  );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {children}
        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
