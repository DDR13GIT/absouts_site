import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/forms/contact-form";
import { LazyMap } from "@/components/map/lazy-map";
import { Card, CardContent } from "@/components/ui";
import { Hero, Reveal, SectionHeading } from "@/components/sections";
import { COMPANY } from "@/lib/utils/constants";

type SocialLink = {
  label: string;
  href: string;
};

const socialIcons = {
  Facebook,
  Instagram,
  Twitter,
  YouTube: Youtube,
};

export default async function ContactPage() {
  const t = await getTranslations("contact");
  const socials: SocialLink[] = "socials" in COMPANY && Array.isArray(COMPANY.socials)
    ? COMPANY.socials as SocialLink[]
    : [];

  return (
    <>
      <Hero
        layout="banner"
        eyebrow={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage="/assets/hero-bg1.jpg"
      />

      <section className="bg-bg-base px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="h-full border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
              <CardContent className="space-y-8 p-8">
                <SectionHeading title={t("info.title")} lead={t("info.lead")} />
                <div className="space-y-6">
                  <ContactBlock icon={<Mail className="size-5" />} title={t("info.email")} items={[COMPANY.email]} />
                  <ContactBlock icon={<Phone className="size-5" />} title={t("info.telephone")} items={[...COMPANY.phones]} />
                  <ContactBlock icon={<Phone className="size-5" />} title={t("info.mobile")} items={[...COMPANY.mobiles]} />
                </div>

                {socials.length ? (
                  <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-brand-primary">{t("socials")}</h2>
                    <div className="flex flex-wrap gap-2">
                      {socials.map((social) => {
                        const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? Facebook;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            className="flex size-10 items-center justify-center rounded-lg bg-brand-accent text-white transition-[background-color,transform] duration-150 ease-out hover:-translate-y-0.5 hover:bg-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                          >
                            <Icon className="size-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={80}>
            <Card className="h-full border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
              <CardContent className="space-y-6 p-8">
                <SectionHeading title={t("formTitle")} lead={t("formLead")} />
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-darker px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading title={t("offices.title")} lead={t("offices.lead")} align="center" />
          <div className="grid gap-5 md:grid-cols-3">
            {COMPANY.offices.map((office, index) => (
              <Reveal key={office.title} delay={index * 60}>
                <Card className="h-full border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-subtle)]">
                  <CardContent className="space-y-5 p-6">
                    <div className="flex size-12 items-center justify-center rounded-lg bg-brand-primary text-white">
                      <MapPin className="size-6" />
                    </div>
                    <div>
                      <h2 className="mb-3 text-xl font-semibold text-brand-primary">{office.title}</h2>
                      <div className="space-y-1 text-sm leading-relaxed text-text-secondary">
                        {office.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[28rem] bg-bg-section">
        <LazyMap src={COMPANY.mapEmbed} title={t("map.title")} />
      </section>
    </>
  );
}

function ContactBlock({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
        {icon}
      </div>
      <div>
        <h2 className="mb-2 font-semibold text-brand-primary">{title}</h2>
        <div className="space-y-1 text-sm text-text-secondary">
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
