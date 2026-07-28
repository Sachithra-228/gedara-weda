"use client";

import { motion, useScroll } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-accent"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}
