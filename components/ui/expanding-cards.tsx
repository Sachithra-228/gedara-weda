"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
  whatsappHref: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export const ExpandingCards = React.forwardRef<HTMLUListElement, ExpandingCardsProps>(
  ({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(defaultActiveIndex);
    const [isDesktop, setIsDesktop] = React.useState(false);

    React.useEffect(() => {
      const handleResize = () => setIsDesktop(window.innerWidth >= 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const gridStyle = React.useMemo(() => {
      if (activeIndex === null) return {};

      if (isDesktop) {
        return {
          gridTemplateColumns: items.map((_, index) => (index === activeIndex ? "5fr" : "1fr")).join(" "),
          gridTemplateRows: "1fr"
        };
      }

      return {
        gridTemplateColumns: "1fr",
        gridTemplateRows: items.map((_, index) => (index === activeIndex ? "5fr" : "1fr")).join(" ")
      };
    }, [activeIndex, isDesktop, items]);

    const handleInteraction = (index: number) => setActiveIndex(index);

    return (
      <ul
        className={cn(
          "grid h-[760px] w-full gap-2 transition-[grid-template-columns,grid-template-rows] duration-500 ease-out md:h-[560px]",
          className
        )}
        ref={ref}
        style={gridStyle}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <li
              className={cn(
                "group relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-card bg-white text-white shadow-line outline-none",
                "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:min-w-[74px]"
              )}
              data-active={isActive}
              key={item.id}
              onClick={() => handleInteraction(index)}
              onFocus={() => handleInteraction(index)}
              onMouseEnter={() => handleInteraction(index)}
              tabIndex={0}
            >
              <Image
                alt={item.title}
                className="object-cover grayscale transition-all duration-500 ease-out group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0 group-data-[active=true]:opacity-95 scale-110 opacity-72"
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 768px) 24vw, 100vw"
                src={item.imgSrc}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/22 to-transparent transition group-data-[active=true]:from-black/20 group-data-[active=true]:via-black/5" />

              <article className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <h3 className="hidden origin-left rotate-90 whitespace-nowrap text-xl font-black leading-none text-white opacity-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-all duration-300 ease-out md:block group-data-[active=true]:opacity-0 lg:text-2xl">
                  {item.title}
                </h3>

                <div className="max-w-md rounded-card bg-white/94 p-5 text-ink opacity-0 shadow-soft backdrop-blur-sm transition-all duration-300 delay-100 ease-out group-data-[active=true]:opacity-100">
                  <div className="inline-grid h-10 w-10 place-items-center rounded-card bg-primary/18 text-ink">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-2xl font-black leading-9 text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-muted">{item.description}</p>

                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <Link
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-card bg-ink px-4 py-2 text-xs font-bold text-white transition hover:bg-accent"
                      href={item.linkHref}
                    >
                      විස්තර බලන්න
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <a
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-card bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#1FAF55]"
                      href={item.whatsappHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    );
  }
);

ExpandingCards.displayName = "ExpandingCards";