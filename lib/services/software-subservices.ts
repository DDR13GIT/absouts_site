import { TECHNOLOGY_LOGOS } from "@/lib/assets";
import type { SubServiceConfig, SubServiceSlug, Technology } from "./types";

// Helper to build a Technology object from the logo map.
function tech(name: string, key: keyof typeof TECHNOLOGY_LOGOS): Technology {
  return { name, icon: TECHNOLOGY_LOGOS[key] };
}

export const SUBSERVICES: SubServiceConfig[] = [
  {
    slug: "ecommerce" as SubServiceSlug,
    iconKey: "ShoppingCart",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
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
    iconKey: "Smartphone",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
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
    iconKey: "Cloud",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
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
    iconKey: "TestTube",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
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
    iconKey: "Scale",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
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
    iconKey: "Globe",
    gradient: { from: "brand-primary", to: "brand-secondary" },
    coreFeatureCount: 4,
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
    iconKey: "CreditCard",
    gradient: { from: "brand-secondary", to: "success" },
    coreFeatureCount: 4,
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
    iconKey: "Sparkles",
    gradient: { from: "brand-secondary", to: "success" },
    coreFeatureCount: 4,
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
