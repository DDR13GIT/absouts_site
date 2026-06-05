import { TECHNOLOGY_LOGOS } from "@/lib/assets";
import type { SubServiceConfig, SubServiceSlug, Technology } from "./types";

// Helper to build a Technology object from the logo map.
function tech(name: string, key: keyof typeof TECHNOLOGY_LOGOS): Technology {
  return { name, icon: TECHNOLOGY_LOGOS[key] };
}

export const SUBSERVICES: SubServiceConfig[] = [
  {
    slug: "ecommerce" as SubServiceSlug,
    iconKey: "Store",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
    accent: "terra",
    technologies: [
      tech("React", "react"),
      tech("Node.js", "nodejs"),
      tech("PostgreSQL", "postgresql"),
      tech("AWS", "aws"),
      tech("Docker", "docker"),
      tech("GraphQL", "graphql"),
      tech("Firebase", "firebase"),
    ],
  },
  {
    slug: "mobile" as SubServiceSlug,
    iconKey: "TabletSmartphone",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    accent: "herb",
    technologies: [
      tech("React", "react"),
      tech("Node.js", "nodejs"),
      tech("Firebase", "firebase"),
      tech("GraphQL", "graphql"),
      tech("PostgreSQL", "postgresql"),
      tech("AWS", "aws"),
      tech("Docker", "docker"),
    ],
  },
  {
    slug: "cloud" as SubServiceSlug,
    iconKey: "CloudCog",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
    accent: "french",
    technologies: [
      tech("AWS", "aws"),
      tech("Docker", "docker"),
      tech("GitLab", "gitlab"),
      tech("Node.js", "nodejs"),
      tech("Django", "django"),
      tech("PostgreSQL", "postgresql"),
      tech("Elasticsearch", "elasticsearch"),
    ],
  },
  {
    slug: "testing" as SubServiceSlug,
    iconKey: "ClipboardCheck",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80",
    accent: "clementine",
    technologies: [
      tech("Docker", "docker"),
      tech("GitLab", "gitlab"),
      tech("Node.js", "nodejs"),
      tech("Django", "django"),
      tech("PostgreSQL", "postgresql"),
      tech("Elasticsearch", "elasticsearch"),
      tech("AWS", "aws"),
    ],
  },
  {
    slug: "legaltech" as SubServiceSlug,
    iconKey: "Gavel",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    accent: "terra",
    technologies: [
      tech("Django", "django"),
      tech("PostgreSQL", "postgresql"),
      tech("React", "react"),
      tech("ASP.NET", "aspnet"),
      tech("Elasticsearch", "elasticsearch"),
      tech("Docker", "docker"),
      tech("AWS", "aws"),
    ],
  },
  {
    slug: "webportal" as SubServiceSlug,
    iconKey: "LayoutDashboard",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    accent: "clementine",
    technologies: [
      tech("React", "react"),
      tech("Node.js", "nodejs"),
      tech("GraphQL", "graphql"),
      tech("PostgreSQL", "postgresql"),
      tech("AWS", "aws"),
      tech("Docker", "docker"),
      tech("GitLab", "gitlab"),
    ],
  },
  {
    slug: "fintech" as SubServiceSlug,
    iconKey: "Landmark",
    gradient: { from: "brand-secondary", to: "success" },
    coreFeatureCount: 4,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80",
    accent: "herb",
    technologies: [
      tech("ASP.NET", "aspnet"),
      tech("Go", "go"),
      tech("PostgreSQL", "postgresql"),
      tech("SQL Server", "sqlserver"),
      tech("Docker", "docker"),
      tech("AWS", "aws"),
      tech("Elasticsearch", "elasticsearch"),
    ],
  },
  {
    slug: "ai" as SubServiceSlug,
    iconKey: "BrainCircuit",
    gradient: { from: "brand-secondary", to: "success" },
    coreFeatureCount: 4,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80",
    accent: "french",
    technologies: [
      tech("TensorFlow", "tensorflow"),
      tech("PostgreSQL", "postgresql"),
      tech("Docker", "docker"),
      tech("AWS", "aws"),
      tech("Elasticsearch", "elasticsearch"),
      tech("Firebase", "firebase"),
      tech("GraphQL", "graphql"),
    ],
  },
];

/** Returns the sub-service config for a given slug, or undefined. */
export function getSubService(slug: SubServiceSlug): SubServiceConfig | undefined {
  return SUBSERVICES.find((s) => s.slug === slug);
}
