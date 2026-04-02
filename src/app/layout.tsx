import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { getSiteUrl, LISTING_DESCRIPTION, SITE_NAME } from "@/lib/site";

const siteUrl = getSiteUrl();
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Marina Del Rey, CA`,
    template: `%s | ${SITE_NAME}`,
  },
  description: LISTING_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "Luxury Yacht Listing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Marina Del Rey, CA`,
    description: LISTING_DESCRIPTION,
    images: [
      {
        url: "/gallery/2023-prestige-590-power-9931520-20250902140541623-1.webp",
        width: 1600,
        height: 900,
        alt: "2023 Prestige 590 Flybridge underway at sea in Marina Del Rey listing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Marina Del Rey, CA`,
    description: LISTING_DESCRIPTION,
    images: ["/gallery/2023-prestige-590-power-9931520-20250902140541623-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
