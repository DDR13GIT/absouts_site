import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { SubServiceTemplate } from "@/components/services/sub-service-template";
import { SUBSERVICES, type SubServiceSlug } from "@/lib/services";

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

  return {
    title: t("title"),
  };
}

export default async function SoftwareSubServicePage({ params }: PageProps) {
  const { slug } = await params;

  if (!isSubServiceSlug(slug)) {
    notFound();
  }

  return <SubServiceTemplate slug={slug} />;
}
