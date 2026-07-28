import type { Metadata } from "next";
import { Gallery } from "@/components/sections/gallery";
import { Cta } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "අපගේ වැඩ",
  description: "නිවාස වැඩ උදාහරණ සහ පෙර පසු ගැලරිය."
};

export default function WorksPage() {
  return (
    <>
      <section className="section-shell pt-32 text-center">
        <p className="text-sm font-bold text-accent">අපගේ වැඩ</p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black md:text-6xl">නිවසේ වෙනස සැලසුම් කිරීමට උදාහරණ</h1>
      </section>
      <Gallery />
      <Cta />
    </>
  );
}
