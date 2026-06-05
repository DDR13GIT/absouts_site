import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SUBSERVICES } from "@/lib/services";
import { absoluteUrl, localizedPath } from "@/lib/seo/metadata";

const staticPaths = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/cloud-accounting", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/bpo", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/software", priority: 0.8, changeFrequency: "monthly" as const },
  ...SUBSERVICES.map((service) => ({
    path: `/services/software/${service.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticPaths.flatMap((entry) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(localizedPath(locale, entry.path)),
      lastModified: now,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((alternateLocale) => [
            alternateLocale,
            absoluteUrl(localizedPath(alternateLocale, entry.path)),
          ])
        ),
      },
    }))
  );
}
