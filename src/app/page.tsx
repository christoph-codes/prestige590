import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import HighlightsBar from "@/components/HighlightsBar";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import OverviewSection from "@/components/OverviewSection";
import SpecificationsSection from "@/components/SpecificationsSection";
import EngineSection from "@/components/EngineSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { BOAT_TITLE, LOCATION, PHONE_NUMBER, PRICE } from "@/lib/constants";
import { FAQS, getSiteUrl, SEO_KEYWORDS } from "@/lib/site";

const siteUrl = getSiteUrl();
const pageTitle = "Prestige 590 for Sale";
const pageDescription =
  "View this 2023 Prestige 590 Flybridge for sale in Marina Del Rey with pricing, specs, photos, video, and direct inquiry information.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${pageTitle} | Marina Del Rey, CA`,
    description: pageDescription,
    url: "/",
  },
  twitter: {
    title: `${pageTitle} | Marina Del Rey, CA`,
    description: pageDescription,
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: `${pageTitle} | Marina Del Rey, CA`,
        description: pageDescription,
        inLanguage: "en-US",
      },
      {
        "@type": "Product",
        "@id": `${siteUrl}/#product`,
        name: BOAT_TITLE,
        description: `${pageDescription} Asking price ${PRICE}.`,
        brand: {
          "@type": "Brand",
          name: "Prestige",
        },
        model: "590 Flybridge",
        slogan: `Prestige 590 for sale in ${LOCATION}`,
        category: "Luxury Flybridge Yacht",
        image: [
          `${siteUrl}/gallery/2023-prestige-590-power-9931520-20250902140541623-1.webp`,
          `${siteUrl}/gallery/2023-prestige-590-power-9931520-20250902140550118-3.webp`,
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: PRICE.replace(/[$,]/g, ""),
          availability: "https://schema.org/InStock",
          url: siteUrl,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Prestige 590 For Sale",
        url: siteUrl,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: PHONE_NUMBER,
          areaServed: LOCATION,
          availableLanguage: "en",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <HighlightsBar />
      <VideoSection />
      <GallerySection />
      <OverviewSection />
      <SpecificationsSection />
      <EngineSection />
      <FeaturesSection />
      <FAQSection />
      {/* <CalloutSection /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
