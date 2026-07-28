"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { gallery } from "@/data/content";

type WorkImage = {
  image: string;
  title: string;
  category: string;
};

function ImageCard({ item }: { item: WorkImage }) {
  return (
    <article className="group relative h-[210px] w-full shrink-0 overflow-hidden rounded-card bg-ink shadow-[0_22px_70px_rgba(0,0,0,0.38)] transition-transform duration-300 hover:scale-[1.02] sm:h-[300px] md:h-[400px]">
      <Image
        alt={item.title}
        className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        fill
        loading="lazy"
        sizes="(min-width: 1024px) 24vw, 52vw"
        src={item.image}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <p className="text-xs font-bold text-secondary">{item.category}</p>
        <h3 className="mt-1 text-sm font-bold leading-6">{item.title}</h3>
      </div>
    </article>
  );
}

export function ThreeDParallaxUnfurlingGallery() {
  const images = useMemo(() => {
    const repeated = [...gallery, ...gallery, ...gallery] as WorkImage[];

    return {
      col1: repeated.filter((_, index) => index % 4 === 0),
      col2: repeated.filter((_, index) => index % 4 === 1),
      col3: repeated.filter((_, index) => index % 4 === 2),
      col4: repeated.filter((_, index) => index % 4 === 3)
    };
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    mass: 0.45
  });

  const bannerWidth = useTransform(smoothProgress, [0, 0.2], ["88vw", "100vw"]);
  const bannerHeight = useTransform(smoothProgress, [0, 0.2], ["78vh", "100vh"]);
  const bannerRadius = useTransform(smoothProgress, [0, 0.2], ["28px", "0px"]);
  const rotateY = useTransform(smoothProgress, [0, 1], [-42, -7]);
  const rotateX = useTransform(smoothProgress, [0, 1], [22, 3]);
  const rotateZ = useTransform(smoothProgress, [0, 1], [13, 1]);
  const translateZ = useTransform(smoothProgress, [0, 1], [-620, 0]);
  const yCol1 = useTransform(smoothProgress, [0, 1], ["3%", "-38%"]);
  const yCol2 = useTransform(smoothProgress, [0, 1], ["-36%", "10%"]);
  const yCol3 = useTransform(smoothProgress, [0, 1], ["2%", "-36%"]);
  const yCol4 = useTransform(smoothProgress, [0, 1], ["-28%", "18%"]);

  const columns = [
    { key: "col1", items: images.col1, y: yCol1 },
    { key: "col2", items: images.col2, y: yCol2 },
    { key: "col3", items: images.col3, y: yCol3 },
    { key: "col4", items: images.col4, y: yCol4 }
  ];

  return (
    <section className="relative h-[430vh] bg-[#050505] text-white selection:bg-white selection:text-black">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          className="relative mx-auto flex max-w-[1920px] items-center justify-center overflow-hidden bg-black will-change-transform"
          style={{ width: bannerWidth, height: bannerHeight, borderRadius: bannerRadius }}
        >
          <div className="absolute left-1/2 top-10 z-30 w-[min(760px,calc(100%-32px))] -translate-x-1/2 text-center md:top-14">
            <p className="text-sm font-bold text-secondary">අපගේ වැඩ</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">නිවාස වෙනස් වූ ආකාරය</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
              පින්තාරු, වහල, බාත්රූම්, මුළුතැන්ගෙය සහ ටයිල් වැඩ සඳහා තෝරාගත් උදාහරණ.
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_120px_160px_-42px_rgba(0,0,0,1),inset_0_-120px_160px_-42px_rgba(0,0,0,1)]" />
          <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_120px_0_150px_-55px_rgba(0,0,0,1),inset_-120px_0_150px_-55px_rgba(0,0,0,1)]" />

          <div className="absolute inset-0 flex items-center justify-center pt-28" style={{ perspective: "1000px" }}>
            <motion.div
              className="flex h-[150vh] w-[125vw] origin-center items-center justify-center gap-4 opacity-95 will-change-transform md:gap-6"
              style={{ rotateX, rotateY, rotateZ, z: translateZ, transformStyle: "preserve-3d" }}
            >
              {columns.map((column) => (
                <motion.div
                  className="flex w-[26vw] min-w-[180px] flex-col gap-4 md:w-[22vw] md:min-w-[220px] md:gap-6"
                  key={column.key}
                  style={{ y: column.y }}
                >
                  {column.items.map((item, index) => (
                    <ImageCard item={item} key={`${column.key}-${item.title}-${index}`} />
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}