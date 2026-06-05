import type { Metadata } from "next";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/forms/contact-form";
import { LazyMap } from "@/components/map/lazy-map";
import { COMPANY } from "@/lib/utils/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd, organizationSchema } from "@/lib/seo/structured-data";

const BD_LOCATION_BG = "/assets/bdLocationBG.webp";
const UK_LOCATION_BG = "/assets/ukLocationBG.webp";

const socialLinks = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
] as const;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });

  return buildMetadata({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/contact",
    keywords: "contact Absouts, outsourcing support, BPO contact, software development contact",
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  const contactInfo = [
    { Icon: Mail, title: t("info.email"), details: [COMPANY.email] },
    { Icon: Phone, title: t("info.telephone"), details: [...COMPANY.phones] },
    { Icon: Phone, title: t("info.mobile"), details: [...COMPANY.mobiles] },
  ];

  const officeLocations = COMPANY.offices.map((office, index) => ({
    title: office.title,
    address: office.lines,
    bgImage: index === 2 ? UK_LOCATION_BG : BD_LOCATION_BG,
    iconColor: index === 2 ? "from-blue-500 to-indigo-600" : "from-emerald-500 to-teal-600",
  }));

  return (
    <div data-testid="contact-page">
      <JsonLd data={organizationSchema()} />

      {/* Hero Banner */}
      <section className="py-20 pt-28 bg-bg-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>

        {/* Animated blob gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 ml-40 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 -ml-10 w-72 h-72 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-primary">{t("hero.badge")}</span>
            </div>
            <h1 className="text-5xl font-bold text-brand-primary mb-6">{t("hero.title")}</h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto">{t("hero.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bg-base-darker rounded-3xl shadow-[var(--shadow-strong)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left — Get in touch */}
              <div className="bg-gradient-to-br from-bg-section/50 to-bg-surface p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">{t("info.title")}</h2>
                  <p className="text-text-secondary leading-relaxed">{t("info.lead")}</p>
                </div>

                <div className="space-y-8 mb-12">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-medium)]">
                        <info.Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-primary mb-2">{info.title}</h3>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-text-secondary text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social media */}
                <div>
                  <h3 className="text-lg font-bold text-brand-primary mb-4">{t("socials")}</h3>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white hover:bg-brand-secondary transform hover:scale-110 transition-all duration-300 shadow-[var(--shadow-medium)]"
                        aria-label={social.label}
                      >
                        <social.Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Contact form */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8">{t("formTitle")}</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">{t("offices.title")}</h2>
            <p className="text-xl text-text-secondary">{t("offices.lead")}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {officeLocations.map((location) => (
              <div
                key={location.title}
                className="group relative h-full rounded-[2.75rem] border border-white/20 bg-white/20 p-[1px] shadow-[var(--shadow-strong)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-accent/50"
              >
                <div className="relative h-full rounded-[2.65rem] bg-gradient-to-b from-white/50 via-white/40 to-white/30 p-8 shadow-[var(--shadow-medium)] backdrop-blur-md transition-all duration-500 group-hover:shadow-[var(--shadow-strong)]">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60 mix-blend-normal transition-opacity duration-500 group-hover:opacity-80 rounded-[2.65rem]"
                    style={{
                      backgroundImage: `url(${location.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>

                  <div className="relative z-10 flex h-full flex-col gap-6">
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${location.iconColor} rounded-2xl flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <MapPin className="h-8 w-8 text-white drop-shadow-md" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-brand-primary leading-tight mb-2">{location.title}</h3>
                      <p className="text-sm text-text-secondary">
                        Meet our team schedule executive sessions tailored to your needs.
                      </p>
                    </div>

                    <div className="space-y-2 rounded-2xl border border-white/60 p-5 shadow-inner">
                      {location.address.map((line) => (
                        <p key={line} className="text-gray-800 text-base leading-relaxed font-semibold">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-bg-section relative mt-20">
        <LazyMap src={COMPANY.mapEmbed} title={t("map.title")} />
      </section>
    </div>
  );
}
