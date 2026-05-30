import type { Metadata } from "next";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://absouts.com";

type BuildMetadataInput = {
  locale: string;
  title: string;
  description: string;
  path: string;
  keywords?: string;
  type?: "website" | "article";
};

function normalizePath(path: string) {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function localizedPath(locale: string, path: string) {
  return `/${locale}${normalizePath(path)}`;
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

export function buildMetadata({
  locale,
  title,
  description,
  path,
  keywords,
  type = "website",
}: BuildMetadataInput): Metadata {
  const normalizedPath = normalizePath(path);
  const url = absoluteUrl(localizedPath(locale, normalizedPath));

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        en: absoluteUrl(localizedPath("en", normalizedPath)),
        es: absoluteUrl(localizedPath("es", normalizedPath)),
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Absouts",
      locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
