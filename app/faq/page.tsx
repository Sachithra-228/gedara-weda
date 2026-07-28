import type { Metadata } from "next";
import { FaqSection } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "නිතර අසන ප්‍රශ්න",
  description: "මිල, සේවා ප්‍රදේශ සහ WhatsApp සම්බන්ධතාව පිළිබඳ ප්‍රශ්න."
};

export default function FaqPage() {
  return (
    <>
      <div className="pt-16">
        <FaqSection />
      </div>
      <Cta />
    </>
  );
}
