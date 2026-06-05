import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildMetadata } from "@/lib/seo/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

type LegalSection = {
  title: string;
  paragraphs: string[];
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.terms" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/terms",
    keywords: "terms of service, user agreement, terms and conditions, service terms",
  });
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.terms" });
  const sections = t.raw("sections") as LegalSection[];

  return (
    <>
      <section className="bg-bg-base px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">
            {t("label")}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-brand-primary sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <p className="mb-10 text-sm font-medium text-text-muted">
            <span className="text-text-secondary">{t("lastUpdated")}:</span>{" "}
            {new Intl.DateTimeFormat(locale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date("2026-05-30"))}
          </p>
          <div className="space-y-11">
            {sections.map((section) => (
              <section key={section.title} className="scroll-mt-24">
                <h2 className="text-2xl font-semibold tracking-tight text-brand-primary">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-text-secondary">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
