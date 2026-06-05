import Image from "next/image";
import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { LOGO } from "@/lib/assets";
import { COMPANY } from "@/lib/utils/constants";
import { Link } from "@/i18n/navigation";

// Footer — ported 1:1 from the main branch: dark navy surface, four columns
// (brand / services / company / contact), legal bar at the bottom.

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src={LOGO.dark}
                alt="Absouts"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-4">
              Global outsourcing solutions for Cloud Accounting, BPO, and Software Development.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/absouts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Absouts on LinkedIn"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/absouts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Absouts on X (Twitter)"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/absouts"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Absouts on Facebook"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("servicesHeading")}</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link href="/services/cloud-accounting" className="hover:text-brand-accent transition-colors">Cloud Accounting</Link></li>
              <li><Link href="/services/bpo" className="hover:text-brand-accent transition-colors">BPO Services</Link></li>
              <li><Link href="/services/software" className="hover:text-brand-accent transition-colors">Software Development</Link></li>
              <li><Link href="/services" className="hover:text-brand-accent transition-colors">Payroll Management</Link></li>
              <li><Link href="/services" className="hover:text-brand-accent transition-colors">Tax Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("companyHeading")}</h3>
            <ul className="space-y-3 text-white/80">
              <li><Link href="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
              <li><Link href="/about" className="hover:text-brand-accent transition-colors">Leadership</Link></li>
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors">News &amp; Updates</Link></li>
              <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("contactHeading")}</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-brand-accent flex-shrink-0" />
                {COMPANY.email}
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-3 text-brand-accent flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  {COMPANY.phones.map((phone) => (
                    <span key={phone}>{phone}</span>
                  ))}
                </div>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-brand-accent flex-shrink-0" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {year} {COMPANY.name}. {t("rights")}
          </p>
          <div className="flex space-x-6 text-white/60 text-sm mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand-accent transition-colors">
              {t("privacyPolicy")}
            </Link>
            <Link href="/terms" className="hover:text-brand-accent transition-colors">
              {t("termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
