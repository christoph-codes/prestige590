import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  getGtmId,
  getSiteUrl,
  LISTING_DESCRIPTION,
  SITE_NAME,
} from "@/lib/site";

const siteUrl = getSiteUrl();
const gtmId = getGtmId();
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
      <body className={`${inter.variable} ${playfair.variable}`}>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        {children}
      </body>
      {gtmId ? (
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      ) : null}
    </html>
  );
}
