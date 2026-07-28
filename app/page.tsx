import { Cta } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ServiceListText } from "@/components/sections/service-list-text";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChoose } from "@/components/sections/why-choose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid limit={9} />
      <WhyChoose />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <ServiceListText />
      <FaqSection />
      <Cta />
    </>
  );
}