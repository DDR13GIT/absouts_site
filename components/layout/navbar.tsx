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

// ─── Emil design principles applied ──────────────────────────────────────────
// • Hide-on-scroll-down / show-on-scroll-up: translateY(-100%) on scroll down,
//   translateY(0) on scroll up. CSS transition: transform 300ms cubic-bezier(0.23,1,0.32,1)
//   (ease-out-expo — strong ease-out gives immediate, responsive feel).
// • Scroll listener uses { passive: true } to avoid blocking scroll thread.
// • 16px scroll threshold before toggling (avoids flicker on micro-scrolls).
// • Active nav link: underline indicator scales from center using scaleX transform.
// • Focus-visible rings on all interactive elements.
// • Mobile: hamburger => Radix Dialog (full-screen sheet). Dialog avoids focus trap
//   issues and gives a11y title for screen readers.
// • Touch-device hover: gated behind @media (hover: hover) in className logic
//   since Tailwind hover: prefix only fires on devices with a mouse.
// • prefers-reduced-motion: no transform on the hide/show — opacity only.
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { key: "home"     as const, href: "/" },
  { key: "about"    as const, href: "/about" },
  { key: "services" as const, href: "/services" },
  { key: "careers"  as const, href: "/careers" },
  { key: "contact"  as const, href: "/contact" },
] as const;

type NavKey = (typeof NAV_LINKS)[number]["key"];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  // ── Scroll hide/show ────────────────────────────────────────────────────
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  React.useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        setScrolled(currentY > 20);

        if (Math.abs(delta) > 16) {
          setHidden(delta > 0 && currentY > 80);
          lastScrollY.current = currentY;
        }
        ticking.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Mobile drawer ───────────────────────────────────────────────────────
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header
        className={cn(
          // Layout — transparent floating header (no solid bar); the pill carries the chrome
          "fixed inset-x-0 top-0 z-40 w-full",
          // Motion: translate on scroll, ease-out-expo (via inline style)
          // Reduced-motion fallback: opacity only (handled via @media in globals)
          "transition-transform duration-300",
          hidden && "-translate-y-full",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo (dark mark over light page backgrounds) */}
          <Link
            href="/"
            className={cn(
              "shrink-0 rounded-lg",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-brand-accent focus-visible:ring-offset-2",
              "focus-visible:ring-offset-bg-base",
            )}
            aria-label="Absouts — home"
          >
            <Image
              src={LOGO.light}
              alt="Absouts"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center pill nav — desktop floating glass pill */}
          <nav className="hidden lg:flex" aria-label="Site sections">
            <ul
              className={cn(
                "flex items-center gap-1 rounded-full px-2 py-1.5",
                "border border-brand-primary/10 bg-white/70 backdrop-blur-md",
                "transition-shadow duration-300",
                scrolled
                  ? "shadow-[0_12px_36px_-14px_rgb(11_11_68/0.28)]"
                  : "shadow-[0_8px_28px_-16px_rgb(11_11_68/0.22)]",
              )}
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
              role="list"
            >
              {NAV_LINKS.map(({ key, href }) => {
                const active = isActive(href);
                return (
                  <li key={key}>
                    <Link
                      href={href}
                      className={cn(
                        "relative inline-flex items-center rounded-full px-4 py-1.5",
                        "text-sm font-medium leading-none",
                        "transition-[background-color,color] duration-150 ease-out",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-brand-accent focus-visible:ring-offset-0",
                        active
                          ? "bg-brand-primary/10 text-brand-primary"
                          : "text-text-secondary hover:bg-brand-primary/5 hover:text-brand-primary",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {t(key as NavKey)}
                      {/* Underline indicator on active */}
                      {active && (
                        <span
                          className="absolute bottom-0.5 left-1/2 h-px w-4 -translate-x-1/2 rounded-full bg-brand-accent"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right side: Language switcher + mobile hamburger */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            {/* Mobile hamburger — floating glass button, only below lg */}
            <button
              type="button"
              className={cn(
                "flex lg:hidden items-center justify-center",
                "h-10 w-10 rounded-full",
                "border border-brand-primary/10 bg-white/70 backdrop-blur-md",
                "text-brand-primary transition-colors duration-150",
                "shadow-[0_8px_28px_-16px_rgb(11_11_68/0.22)]",
                "hover:bg-white",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-brand-accent focus-visible:ring-offset-2",
                "focus-visible:ring-offset-bg-base",
                "active:scale-[0.97]",
              )}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-dialog"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer dialog ─────────────────────────────────────────── */}
      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent
          id="mobile-nav-dialog"
          className={cn(
            // Override default centered modal — pin to top, full width
            "fixed left-0 top-0 !translate-x-0 !translate-y-0",
            "w-full max-w-none rounded-none rounded-b-2xl",
            "bg-brand-primary p-0",
            // Enter from top (translateY -100% → 0)
            "data-[state=open]:animate-in data-[state=open]:slide-in-from-top data-[state=open]:[animation-duration:250ms]",
            "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=closed]:[animation-duration:180ms]",
          )}
          aria-label="Mobile navigation"
        >
          <DialogHeader className="flex flex-row items-center justify-between px-5 pt-4 pb-0 mb-0 pr-5">
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
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              </Link>
            </DialogTitle>
            <DialogClose
              className={cn(
                "flex items-center justify-center h-9 w-9 rounded-lg",
                "text-white/70 hover:bg-white/10 hover:text-white",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-brand-accent",
                "active:scale-[0.97]",
              )}
              aria-label="Close navigation menu"
            >
              <X className="size-5" aria-hidden="true" />
            </DialogClose>
          </DialogHeader>

          {/* Nav links — staggered entrance (Emil: 50ms between items) */}
          <nav aria-label="Mobile site sections">
            <ul className="flex flex-col gap-1 px-4 py-5" role="list">
              {NAV_LINKS.map(({ key, href }, index) => {
                const active = isActive(href);
                return (
                  <li
                    key={key}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animationFillMode: "both",
                    }}
                    className="animate-in fade-in slide-in-from-top-2 [animation-duration:200ms]"
                  >
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center rounded-xl px-4 py-3",
                        "text-base font-medium",
                        "transition-colors duration-150",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-brand-accent focus-visible:ring-offset-0",
                        active
                          ? "bg-white/20 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white",
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

          {/* Language switcher in mobile drawer */}
          <div className="border-t border-white/10 px-5 py-4">
            <LanguageSwitcher />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
