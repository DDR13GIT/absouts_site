import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { routing } from "@/i18n/routing";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children, params,
}: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return (
    <html lang={locale} className={manrope.variable}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          {/* Navbar added in Task 8 */}
          <main className="flex-1">{children}</main>
          {/* Footer added in Task 8 */}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
