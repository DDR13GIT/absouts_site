import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { SubServiceTemplate } from "@/components/services/sub-service-template";
import { SUBSERVICES, type SubServiceSlug } from "@/lib/services";
import { absoluteUrl, buildMetadata, localizedPath } from "@/lib/seo/metadata";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/seo/structured-data";

type PageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

const SUBSERVICE_SLUGS = SUBSERVICES.map((service) => service.slug);

function isSubServiceSlug(slug: string): slug is SubServiceSlug {
  return SUBSERVICE_SLUGS.includes(slug as SubServiceSlug);
}

export function generateStaticParams() {
  return SUBSERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isSubServiceSlug(slug)) {
    return {};
  }

  const t = await getTranslations({
    locale,
    namespace: `subservices.${slug}`,
  });
  const seoT = await getTranslations({ locale, namespace: "seo.softwareSubservice" });
  const title = t("title");

  return buildMetadata({
    locale,
    title: seoT("title", { service: title }),
    description: seoT("description", { service: title }),
    path: `/services/software/${slug}`,
    keywords: `${title}, software development, Absouts`,
  });
}

export default async function SoftwareSubServicePage({ params }: PageProps) {
  const { locale, slug } = await params;

  if (!isSubServiceSlug(slug)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: `subservices.${slug}` });
  const softwareT = await getTranslations({ locale, namespace: "departments.software" });
  const url = localizedPath(locale, `/services/software/${slug}`);

  return (
    <>
      <JsonLd data={serviceSchema({ name: t("title"), description: t("description"), url })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: absoluteUrl(localizedPath(locale, "/")) },
          { name: "Services", url: absoluteUrl(localizedPath(locale, "/services")) },
          { name: softwareT("title"), url: absoluteUrl(localizedPath(locale, "/services/software")) },
          { name: t("title"), url: absoluteUrl(url) },
        ])}
      />
      <SubServiceTemplate slug={slug} />
    </>
  );
}
