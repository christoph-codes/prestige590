import type { MetadataRoute } from "next";
import { GALLERY_IMAGES } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "weekly",
      priority: 1,
      images: GALLERY_IMAGES.map((image) => `${siteUrl}${image.src}`),
    },
  ];
}
