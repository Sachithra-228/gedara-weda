import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services-grid";

export const metadata: Metadata = {
  title: "සේවා",
  description: "ගෙදර වැඩ හරහා සම්බන්ධ විය හැකි නිවාස සේවා සියල්ල."
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesGrid />
    </div>
  );
}
