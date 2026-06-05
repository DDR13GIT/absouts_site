import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Globe, Award, Shield, Users, TrendingUp, Settings } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BACKGROUNDS } from "@/lib/assets";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, organizationSchema } from "@/lib/seo/structured-data";

const COMPANY_PROFILE_URL =
  "https://drive.google.com/file/d/1vrgdjXj5ttHx3tsBmxmza0lTbaGhBsDO/view?usp=sharing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/",
    keywords: "cloud accounting, BPO services, software development, outsourcing",
  });
}

const SERVICE_CARDS = [
  {
    image: BACKGROUNDS.cloudAccounting,
    badge: "Finance Ready",
    dotClass: "bg-orange-500",
    title: "Cloud Accounting",
    description:
      "End-to-end bookkeeping, reporting, and compliance handled with precision and automation. Removes manual workload and enforces consistent financial accuracy.",
    href: "/services/cloud-accounting",
    hoverClass: "hover:border-orange-500 hover:text-orange-500",
    featured: true,
  },
  {
    image: BACKGROUNDS.bpo,
    badge: "Efficiency Guaranteed",
    dotClass: "bg-gray-900",
    title: "Business Process Outsourcing",
    description:
      "Delegated operational tasks executed with consistent accuracy and measurable efficiency gains. Reduces operational overhead and stabilizes process quality.",
    href: "/services/bpo",
    hoverClass: "hover:border-gray-500 hover:text-gray-600",
  },
  {
    image: BACKGROUNDS.software,
    badge: "Built for Scale",
    dotClass: "bg-purple-500",
    title: "Software Development",
    description:
      "Custom software engineered for scale, reliability, and long-term maintainability. Covers full-cycle delivery from architecture to deployment.",
    href: "/services/software",
    hoverClass: "hover:border-purple-500 hover:text-purple-500",
  },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const tAbout = await getTranslations({ locale, namespace: "about" });

  return (
    <div data-testid="home-page">
      <JsonLd data={organizationSchema()} />

      {/* Hero Section */}
      <section className="bg-bg-base py-16 pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>

        {/* Animated blob gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 ml-40 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 -ml-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left content column */}
            <div className="lg:col-span-2 relative z-10 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight">
                  {t("hero.title")}
                </h1>

                <p className="text-base text-text-secondary leading-relaxed max-w-xl">
                  {t("hero.subtitle")}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-neutral-dark px-6 text-sm font-semibold text-white shadow-[var(--shadow-medium)] transition-all duration-300 hover:bg-slate-950 hover:shadow-[var(--shadow-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                  >
                    {t("hero.letsTalk")}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <a
                    href={COMPANY_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-dark/30 bg-transparent px-6 text-sm font-semibold text-neutral-dark transition-all duration-300 hover:border-neutral-dark hover:bg-neutral-dark hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                  >
                    Company Profile
                  </a>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-6">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-brand-primary mb-1">
                    {t("hero.metrics.talents")}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {t("hero.metrics.talentsLabel")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-brand-primary mb-1">
                    {t("hero.metrics.clients")}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {t("hero.metrics.clientsLabel")}
                  </div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-brand-primary mb-1">
                    {t("hero.metrics.retention")}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {t("hero.metrics.retentionLabel")}
                  </div>
                </div>
              </div>
            </div>

            {/* Right bento grid */}
            <div className="lg:col-span-3 relative">
              <div className="grid grid-cols-2 gap-4 h-[400px]">
                <div className="flex flex-col gap-4">
                  {/* Growth metric card */}
                  <div className="bg-[#E7F1AB] rounded-2xl p-6 flex flex-col justify-between shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 transform hover:-translate-y-1 flex-1">
                    <div className="flex items-start justify-between">
                      <TrendingUp className="w-7 h-7 text-neutral-dark" />
                      <span className="text-xs font-medium text-neutral-dark/70">
                        {t("hero.bentoGrid.growth.badge")}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <div className="text-3xl font-bold text-neutral-dark mb-1">+4.5%</div>
                      <p className="text-xs text-neutral-dark/80">
                        {t("hero.bentoGrid.growth.description")}
                      </p>
                    </div>
                  </div>

                  {/* Image card */}
                  <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 transform hover:scale-[1.02] flex-1">
                    <Image
                      src={BACKGROUNDS.heroBg1}
                      alt={t("hero.imageAlt1")}
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Large image card */}
                <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-all duration-300 transform hover:scale-[1.02]">
                  <Image
                    src={BACKGROUNDS.heroBg2}
                    alt={t("hero.imageAlt2")}
                    fill
                    priority
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="py-20 bg-bg-base-darker relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
              <Settings className="w-3 h-3 text-brand-accent animate-pulse" />
              <span className="text-sm font-medium text-text-primary">{t("services.badge")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_CARDS.map((card) => (
              <div
                key={card.title}
                className={`relative rounded-3xl p-8 overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[350px] ${
                  "featured" in card && card.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={card.image}
                    alt={`${card.title} background`}
                    fill
                    sizes={
                      "featured" in card && card.featured
                        ? "(max-width: 768px) 100vw, 1280px"
                        : "(max-width: 768px) 100vw, 50vw"
                    }
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-6">
                    <div className={`w-2 h-2 ${card.dotClass} rounded-full`}></div>
                    <span className="text-xs font-medium text-gray-700">{card.badge}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                <Link href={card.href} className="absolute bottom-8 left-8 z-20">
                  <span
                    className={`inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 transition-colors duration-300 ${card.hoverClass}`}
                  >
                    {t("services.explore")}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bg-base relative">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-secondary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                <Users className="w-3 h-3 text-brand-accent animate-pulse" />
                <span className="text-sm font-medium text-text-primary">{tAbout("values.badge")}</span>
              </div>

              <h2 className="text-4xl font-bold text-brand-primary mb-6">{t("whyChooseUs.title")}</h2>
              <p className="text-lg text-text-secondary mb-8">{t("whyChooseUs.subtitle")}</p>

              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-mediterranean-linen hover:shadow-[var(--shadow-medium)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-mediterranean-french rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[var(--shadow-subtle)]">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-mediterranean-herb transition-colors duration-300">
                      {tAbout("values.globalPartnership.title")}
                    </h3>
                    <p className="text-text-secondary">{tAbout("values.globalPartnership.description")}</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-mediterranean-linen hover:shadow-[var(--shadow-medium)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-mediterranean-french rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[var(--shadow-subtle)]">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-mediterranean-herb transition-colors duration-300">
                      {tAbout("values.excellence.title")}
                    </h3>
                    <p className="text-text-secondary">{tAbout("values.excellence.description")}</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-mediterranean-linen hover:shadow-[var(--shadow-medium)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-mediterranean-french rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-[var(--shadow-subtle)]">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-mediterranean-herb transition-colors duration-300">
                      {tAbout("values.integrity.title")}
                    </h3>
                    <p className="text-text-secondary">{tAbout("values.integrity.description")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-start lg:ml-16">
              <div className="relative w-full max-w-lg aspect-[5/4]">
                <Image
                  src={BACKGROUNDS.whyChooseUs}
                  alt="Professional team collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
