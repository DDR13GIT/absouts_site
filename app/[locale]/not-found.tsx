import { AlertCircle } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button, Card, CardContent } from "@/components/ui";

export default async function LocaleNotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-bg-base px-4 py-20 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-medium)]">
        <CardContent className="space-y-6 p-8 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-xl bg-brand-accent/12 text-brand-secondary">
            <AlertCircle className="size-7" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-brand-primary">
              {t("title")}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {t("description")}
            </p>
          </div>
          <Button asChild>
            <Link href="/">{t("action")}</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
