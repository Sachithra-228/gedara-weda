import type { Metadata } from "next";
import { Noto_Sans_Sinhala, Poppins } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { FloatingActions } from "@/components/shared/floating-actions";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { CursorGlow } from "@/components/shared/cursor-glow";
import { site } from "@/data/site";
import "./globals.css";

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gedaraweda.lk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: siteUrl,
    siteName: site.name,
    locale: "si_LK",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: site.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.seo.description,
    areaServed: "Sri Lanka",
    url: siteUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Sinhala"],
      telephone: site.contact.displayPhone
    }
  };

  return (
    <html lang="si">
      <body className={`${notoSinhala.variable} ${poppins.variable} font-sans antialiased`}>
        <SmoothScroll />
        <CursorGlow />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
