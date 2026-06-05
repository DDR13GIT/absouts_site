"use client";

import * as React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils/cn";
import { LOGO } from "@/lib/assets";
import { Link, usePathname } from "@/i18n/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui";
import { LanguageSwitcher } from "./language-switcher";

// Floating navbar — ported 1:1 from the main branch:
//  • Transparent fixed bar, small logo left, center glass pill of links, language right.
//  • Hide on scroll-down, show on scroll-up / at top of page.

const NAV_LINKS = [
  { key: "home" as const, href: "/" },
  { key: "about" as const, href: "/about" },
  { key: "services" as const, href: "/services" },
  { key: "careers" as const, href: "/careers" },
  { key: "contact" as const, href: "/contact" },
] as const;

type NavKey = (typeof NAV_LINKS)[number]["key"];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-transform duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
        )}
        aria-label="Main navigation"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-6">
          <div className="flex items-center justify-between">
            {/* Logo — left, small and minimal */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center" aria-label="Absouts — home">
                <Image
                  src={LOGO.light}
                  alt="Absouts"
                  width={120}
                  height={24}
                  priority
                  className="h-6 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop navigation — center glass pill */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="bg-gray-100/20 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)] border border-gray-200/30 px-8 py-3 flex items-center gap-2">
                {NAV_LINKS.map(({ key, href }) => {
                  const active = isActive(href);
                  return (
                    <Link
                      key={key}
                      href={href}
                      className={cn(
                        "text-sm font-light tracking-wide transition-all duration-200 whitespace-nowrap px-3 py-1 rounded-full",
                        active
                          ? "text-brand-secondary font-medium"
                          : "text-text-primary hover:bg-neutral-dark hover:text-white hover:py-2",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {t(key as NavKey)}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Language selector — right */}
            <div className="hidden md:flex items-center">
              <LanguageSwitcher />
            </div>

            {/* Mobile: hamburger */}
            <div className="md:hidden flex items-center gap-4">
              <button
                type="button"
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 text-text-primary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-dialog"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent
          id="mobile-nav-dialog"
          className={cn(
            "fixed left-0 top-0 !translate-x-0 !translate-y-0",
            "w-full max-w-none rounded-none rounded-b-2xl",
            "bg-bg-base p-0",
            "data-[state=open]:animate-in data-[state=open]:slide-in-from-top data-[state=open]:[animation-duration:250ms]",
            "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=closed]:[animation-duration:180ms]",
          )}
          aria-label="Mobile navigation"
        >
          <DialogHeader className="flex flex-row items-center justify-between px-5 pt-4 pb-0 mb-0">
            <DialogTitle asChild>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
              >
                <Image
                  src={LOGO.light}
                  alt="Absouts"
                  width={110}
                  height={24}
                  className="h-6 w-auto object-contain"
                />
              </Link>
            </DialogTitle>
            <DialogClose
              className="flex items-center justify-center h-9 w-9 rounded-lg text-text-primary hover:bg-gray-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </DialogClose>
          </DialogHeader>

          <nav aria-label="Mobile site sections">
            <ul className="flex flex-col space-y-2 px-4 py-6" role="list">
              {NAV_LINKS.map(({ key, href }) => {
                const active = isActive(href);
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-base font-light tracking-wide transition-colors rounded-lg",
                        active
                          ? "text-brand-secondary font-medium bg-brand-accent/5"
                          : "text-text-primary hover:text-brand-accent hover:bg-bg-section",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {t(key as NavKey)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-gray-100 px-5 py-4">
            <LanguageSwitcher />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
