export const DEFAULT_SITE_URL = "http://localhost:3000";

export const SITE_NAME = "Prestige 590 For Sale";
export const LISTING_NAME = "2023 Prestige 590 Flybridge";
export const SITE_TITLE = `${SITE_NAME} | Marina Del Rey, CA`;
export const PAGE_TITLE = "Prestige 590 for Sale";
export const LISTING_DESCRIPTION =
  "Explore this 2023 Prestige 590 Flybridge for sale in Marina Del Rey, California with pricing, specifications, photos, video, engine details, and private showing information.";
export const PAGE_DESCRIPTION =
  "View this 2023 Prestige 590 Flybridge for sale in Marina Del Rey with pricing, specs, photos, video, and direct inquiry information.";
export const SOCIAL_IMAGE_PATH =
  "/gallery/2023-prestige-590-power-9931520-20250902140541623-1.webp";
export const SOCIAL_IMAGE_ALT =
  "2023 Prestige 590 Flybridge cruising at sea with a luxury listing presentation overlay";

export const SEO_KEYWORDS = [
  "prestige 590 for sale",
  "buy prestige 590",
  "prestige 590 yacht for sale",
  "prestige 590 flybridge for sale",
  "prestige 590 marina del rey",
  "luxury yachts for sale",
  "flybridge yacht for sale",
  "prestige yacht pricing",
  "prestige 590 specs",
  "2023 prestige yacht tour",
];

export const FAQS = [
  {
    question: "What is the asking price for this Prestige 590 for sale?",
    answer:
      "The current asking price is $1,790,000. Contact the listing representative for current availability, inclusions, and showing details.",
  },
  {
    question: "Where is this 2023 Prestige 590 located?",
    answer:
      "The yacht is located in Marina Del Rey, California and is available for private showings by appointment.",
  },
  {
    question: "How much power does the Prestige 590 have?",
    answer:
      "This yacht is equipped with twin Cummins diesel engines rated at 600 horsepower each for 1,200 combined horsepower.",
  },
  {
    question: "How many hours are on the yacht?",
    answer:
      "The listing highlights only 140 engine hours, making it an attractive late-model option for buyers seeking a lightly used Prestige 590.",
  },
];

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!envUrl) {
    return DEFAULT_SITE_URL;
  }

  return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
}

export function getGtmId(): string | null {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

  if (!gtmId) {
    return null;
  }

  return gtmId;
}
