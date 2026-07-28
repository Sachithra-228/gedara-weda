"use client";

import { Star } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/data/content";
import "swiper/css";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="පාරිභෝගික අදහස්" title="විශ්වාසය කියන්නේ කතාබහෙන් පටන්ගන්න දෙයක්" />
        <Swiper
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          loop
          modules={[Autoplay]}
          spaceBetween={16}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="glass h-full rounded-card p-6">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star className="h-4 w-4 fill-current" key={index} />
                  ))}
                </div>
                <p className="mt-5 min-h-28 leading-8 text-muted">“{item.review}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-sm font-black text-white">
                    {item.name.slice(0, 1)}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-muted">{item.area}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
