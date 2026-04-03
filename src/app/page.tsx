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
import {
  FAQS,
  getSiteUrl,
  LISTING_NAME,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  SEO_KEYWORDS,
  SITE_NAME,
  SOCIAL_IMAGE_ALT,
  SOCIAL_IMAGE_PATH,
} from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${PAGE_TITLE} | Marina Del Rey, CA`,
    description: PAGE_DESCRIPTION,
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: SOCIAL_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    title: `${PAGE_TITLE} | Marina Del Rey, CA`,
    description: PAGE_DESCRIPTION,
    images: ["/twitter-image.png"],
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
        name: `${PAGE_TITLE} | Marina Del Rey, CA`,
        description: PAGE_DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        primaryImageOfPage: {
          "@id": `${siteUrl}/#primaryimage`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_NAME,
        description: PAGE_DESCRIPTION,
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#primaryimage`,
        url: `${siteUrl}${SOCIAL_IMAGE_PATH}`,
        contentUrl: `${siteUrl}${SOCIAL_IMAGE_PATH}`,
        description: SOCIAL_IMAGE_ALT,
      },
      {
        "@type": "Product",
        "@id": `${siteUrl}/#product`,
        name: BOAT_TITLE,
        description: `${PAGE_DESCRIPTION} Asking price ${PRICE}.`,
        brand: {
          "@type": "Brand",
          name: "Prestige",
        },
        model: "590 Flybridge",
        slogan: `Prestige 590 for sale in ${LOCATION}`,
        category: "Luxury Flybridge Yacht",
        itemCondition: "https://schema.org/UsedCondition",
        image: [
          `${siteUrl}${SOCIAL_IMAGE_PATH}`,
          `${siteUrl}/opengraph-image.png`,
          `${siteUrl}/gallery/2023-prestige-590-power-9931520-20250902140550118-3.webp`,
          `${siteUrl}/gallery/2023-prestige-590-power-9931520-20250902140553515-1.webp`,
        ],
        manufacturer: {
          "@type": "Organization",
          name: "Prestige Yachts",
        },
        mainEntityOfPage: {
          "@id": `${siteUrl}/#webpage`,
        },
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
        name: SITE_NAME,
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
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: LISTING_NAME,
            item: siteUrl,
          },
        ],
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
