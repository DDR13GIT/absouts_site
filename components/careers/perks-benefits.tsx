import {
  BookOpen,
  Briefcase,
  CalendarDays,
  Coffee,
  DollarSign,
  Gift,
  Heart,
  Home,
  Monitor,
  PartyPopper,
  Plane,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui";
import { Reveal, SectionHeading } from "@/components/sections";

const icons = [
  DollarSign,
  Users,
  Monitor,
  Heart,
  Plane,
  BookOpen,
  TrendingUp,
  Star,
  Coffee,
  Home,
  Shield,
  Gift,
  Briefcase,
  CalendarDays,
  PartyPopper,
];

export async function PerksBenefits() {
  const t = await getTranslations("careers.perks");
  const perks = icons.map((Icon, index) => ({
    Icon,
    title: t(`items.${index}.title`),
    description: t(`items.${index}.description`),
  }));

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow={t("badge")}
        title={t("title")}
        lead={t("lead")}
        align="center"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {perks.map(({ Icon, title, description }, index) => (
          <Reveal key={title} delay={index * 35}>
            <Card className="h-full border-neutral-dark/10 bg-bg-surface shadow-[var(--shadow-subtle)]">
              <CardContent className="flex h-full gap-4 p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                  <Icon className="size-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold leading-tight text-brand-primary">{title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
