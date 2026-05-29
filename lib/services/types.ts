export type DepartmentSlug = "cloud-accounting" | "bpo" | "software";

export type SubServiceSlug =
  | "ecommerce"
  | "mobile"
  | "cloud"
  | "testing"
  | "legaltech"
  | "webportal"
  | "fintech"
  | "ai";

export type Technology = { name: string; icon: string };

export type SubServiceConfig = {
  slug: SubServiceSlug;
  /** Lucide-react export name used for the icon (e.g. "ShoppingCart") */
  iconKey: string;
  gradient: { from: string; to: string };
  technologies: Technology[];
  /** Number of core features listed in messages for this sub-service */
  coreFeatureCount: number;
};

export type DepartmentConfig = {
  slug: DepartmentSlug;
  /** 1=cloud-accounting, 2=bpo, 3=software */
  order: number;
  /** Semantic key from SERVICE_ICONS or a descriptive string */
  iconKey: string;
  /** /assets path to background image */
  background: string;
};
