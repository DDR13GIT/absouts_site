import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Star, Lightbulb, Handshake, Trophy, Users, Globe } from "lucide-react";
import { ABOUT, LEADERSHIP_PHOTOS } from "@/lib/assets";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, organizationSchema } from "@/lib/seo/structured-data";

const VALUE_KEYS = [
  { key: "excellence", Icon: Star },
  { key: "innovation", Icon: Lightbulb },
  { key: "integrity", Icon: Handshake },
  { key: "clientSuccess", Icon: Trophy },
  { key: "collaboration", Icon: Users },
  { key: "globalPartnership", Icon: Globe },
] as const;

const LEADERS = [
  { key: "kdRoy", photo: LEADERSHIP_PHOTOS.kdRoy },
  { key: "enamKhan", photo: LEADERSHIP_PHOTOS.enamKhan },
  { key: "razwanKader", photo: LEADERSHIP_PHOTOS.razwanKader },
  { key: "pritamKumarDas", photo: LEADERSHIP_PHOTOS.pritamKumarDas },
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.about" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/about",
    keywords: "Absouts, outsourcing company, global delivery, BPO, software development",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div data-testid="about-page">
      <JsonLd data={organizationSchema()} />

      <section className="py-20 pt-28 bg-bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>

        {/* Animated blob gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 ml-40 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 -ml-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-primary">{t("hero.badge")}</span>
            </div>
            <h1 className="text-5xl font-bold text-brand-primary mb-6">{t("hero.title")}</h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto">{t("hero.subtitle")}</p>
          </div>

          {/* Foundation */}
          <div className="mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div
              className="relative min-h-[600px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat flex items-center"
              style={{ backgroundImage: `url(${ABOUT.foundation})` }}
            >
              <div className="w-full lg:w-1/2 ml-auto p-12 lg:p-16 lg:pr-20 max-w-7xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                  {t("foundation.title")}
                </h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {t("foundation.description1")}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t("foundation.description2")}
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div
              className="py-20"
              style={{ backgroundImage: `url(${ABOUT.baseDarker})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div
                  className="relative rounded-[4rem] overflow-hidden min-h-[500px] p-12 flex flex-col justify-start"
                  style={{ backgroundImage: `url(${ABOUT.vision})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#B8735F] mb-8">{t("vision.title")}</h2>
                  <p className="text-gray-900 text-lg leading-relaxed max-w-md">{t("vision.description")}</p>
                </div>

                <div
                  className="relative rounded-[4rem] overflow-hidden min-h-[500px] p-12 flex flex-col justify-start"
                  style={{ backgroundImage: `url(${ABOUT.mission})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#2C5F4E] mb-8">{t("mission.title")}</h2>
                  <p className="text-gray-900 text-lg leading-relaxed max-w-md">{t("mission.description")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div
              className="py-20"
              style={{ backgroundImage: `url(${ABOUT.base})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-text-primary">{t("values.badge")}</span>
                  </div>
                  <h2 className="text-5xl font-bold text-[#AB98D0]">{t("values.title")}</h2>
                </div>

                <div
                  className="relative rounded-[4rem] overflow-hidden p-16 lg:p-20 flex flex-col min-h-[700px]"
                  style={{ backgroundImage: `url(${ABOUT.values})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 flex-1 auto-rows-fr">
                    {VALUE_KEYS.map(({ key, Icon }) => (
                      <div key={key} className="flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#FFFDF5] rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-[#AB98D0]" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{t(`values.${key}.title`)}</h3>
                        </div>
                        <p className="text-gray-800 text-base leading-relaxed pl-13">
                          {t(`values.${key}.description`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-text-primary">{t("leadership.badge")}</span>
              </div>
              <h2 className="text-4xl font-bold text-brand-primary mb-4">{t("leadership.title")}</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">{t("leadership.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {LEADERS.map(({ key, photo }) => (
                <div key={key} className="bg-white rounded-3xl shadow-md overflow-hidden">
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={photo}
                      alt={t(`leadership.${key}.name`)}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6 text-center bg-white">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {t(`leadership.${key}.name`)}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">{t(`leadership.${key}.position`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
