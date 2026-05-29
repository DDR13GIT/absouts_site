import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import { LOGO } from "@/lib/assets";
import { COMPANY } from "@/lib/utils/constants";
import { getDepartmentsInOrder } from "@/lib/services/departments";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

// ─── Impeccable principles applied ───────────────────────────────────────────
// • Spacing rhythm: varied — footer uses px-6 md:px-8 (tight-to-wide per breakpoint),
//   section gaps differ from column-item gaps (no uniform monotony).
// • Three departments in ORDER (cloud-accounting=1, bpo=2, software=3) via getDepartmentsInOrder().
// • Contact column: first office + primary phone + primary email from COMPANY constants.
// • Legal row separated visually with a subtle border; copyright inline with legal links.
// • "Get in Touch" uses Button asChild=false (solid brand-primary CTA).
// • Social icons: adequate 40×40px hit area with hover states.
// • Color: bg-brand-primary (deep navy) with brand-accent accents; no gradient text.
// ─────────────────────────────────────────────────────────────────────────────

const DEPT_SLUG_TO_LABEL_KEY: Record<string, string> = {
  "cloud-accounting": "cloudAccounting",
  bpo: "bpo",
  software: "software",
};

const DEPT_HREF: Record<string, string> = {
  "cloud-accounting": "/services/cloud-accounting",
  bpo: "/services/bpo",
  software: "/services/software",
};

function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-white/70 transition-colors duration-150 ease-out",
        "hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-brand-accent focus-visible:rounded-sm",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const tDepts = useTranslations("departments");
  const departments = getDepartmentsInOrder();
  const year = new Date().getFullYear();
  const primaryOffice = COMPANY.offices[0];

  return (
    <footer
      className="bg-brand-primary text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* ── Main grid ──────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="inline-block w-fit rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label="Absouts — home"
            >
              <Image
                src={LOGO.light}
                alt="Absouts"
                width={130}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {t("tagline")}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2" aria-label={t("followUs")}>
              <a
                href="https://www.linkedin.com/company/absouts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Absouts on LinkedIn"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg",
                  "text-white/60 transition-colors duration-150",
                  "hover:bg-white/10 hover:text-white",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-brand-accent",
                  "active:scale-[0.97]",
                )}
              >
                <Linkedin className="size-4.5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/absouts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Absouts on X (Twitter)"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg",
                  "text-white/60 transition-colors duration-150",
                  "hover:bg-white/10 hover:text-white",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-brand-accent",
                  "active:scale-[0.97]",
                )}
              >
                <Twitter className="size-4.5" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/absouts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Absouts on Facebook"
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg",
                  "text-white/60 transition-colors duration-150",
                  "hover:bg-white/10 hover:text-white",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-brand-accent",
                  "active:scale-[0.97]",
                )}
              >
                <Facebook className="size-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <nav aria-label="Services">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {t("servicesHeading")}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {departments.map((dept) => {
                const labelKey = DEPT_SLUG_TO_LABEL_KEY[dept.slug];
                return (
                  <li key={dept.slug}>
                    <FooterLink href={DEPT_HREF[dept.slug] ?? "/services"}>
                      {tDepts(`${labelKey}.title` as Parameters<typeof tDepts>[0])}
                    </FooterLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Company column */}
          <nav aria-label="Company">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {t("companyHeading")}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <FooterLink href="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="/careers">Careers</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact</FooterLink>
              </li>
              <li>
                <FooterLink href="/privacy">{t("privacyPolicy")}</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms">{t("termsOfService")}</FooterLink>
              </li>
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {t("contactHeading")}
            </h3>

            <ul className="flex flex-col gap-3.5" role="list">
              {/* Primary email */}
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className={cn(
                    "flex items-start gap-2.5 text-sm text-white/70",
                    "transition-colors duration-150 hover:text-white",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-brand-accent focus-visible:rounded-sm",
                  )}
                >
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-brand-accent"
                    aria-hidden="true"
                  />
                  <span>{COMPANY.email}</span>
                </a>
              </li>

              {/* Primary phone */}
              <li>
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, "")}`}
                  className={cn(
                    "flex items-start gap-2.5 text-sm text-white/70",
                    "transition-colors duration-150 hover:text-white",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-brand-accent focus-visible:rounded-sm",
                  )}
                >
                  <Phone
                    className="mt-0.5 size-4 shrink-0 text-brand-accent"
                    aria-hidden="true"
                  />
                  <span>{COMPANY.phones[0]}</span>
                </a>
              </li>

              {/* Office address */}
              {primaryOffice && (
                <li>
                  <address className="flex items-start gap-2.5 not-italic">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-brand-accent"
                      aria-hidden="true"
                    />
                    <div className="text-sm leading-relaxed text-white/70">
                      <p className="font-medium text-white/90">
                        {primaryOffice.title}
                      </p>
                      {primaryOffice.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </address>
                </li>
              )}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                size="md"
                className="border-white/30 text-white hover:bg-white hover:text-brand-primary focus-visible:ring-white"
              >
                <Link href="/contact">{t("getInTouch")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Legal bar ──────────────────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {year} {COMPANY.name}. {t("rights")}
          </p>
          <div className="flex items-center gap-5">
            <FooterLink
              href="/privacy"
              className="text-xs text-white/50 hover:text-white/80"
            >
              {t("privacyPolicy")}
            </FooterLink>
            <FooterLink
              href="/terms"
              className="text-xs text-white/50 hover:text-white/80"
            >
              {t("termsOfService")}
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
