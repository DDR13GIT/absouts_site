/**
 * ServiceHero Component
 * Hero section for service detail pages with gradient background
 */

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

interface ServiceHeroProps {
  title: string;
  description: string;
  gradientColors?: {
    background: string;
    text: string;
  };
}

export function ServiceHero({
  title,
  description,
  gradientColors = {
    background: "from-blue-50 via-indigo-50 to-purple-50",
    text: "from-blue-600 via-purple-600 to-indigo-600"
  }
}: ServiceHeroProps) {
  const { t } = useTranslation();

  return (
    <section className={`py-20 bg-gradient-to-br ${gradientColors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/services">
            <Button
              variant="ghost"
              className="text-accent hover:text-accent/80 mb-4"
              data-testid="button-back-to-services"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.common.backToServices}
            </Button>
          </Link>
          <div className="relative">
            <h1
              className={`text-5xl font-bold bg-gradient-to-r ${gradientColors.text} bg-clip-text text-transparent mb-6`}
              data-testid="service-title"
            >
              {title}
            </h1>
            <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          </div>
          <p
            className="text-xl text-muted-foreground max-w-4xl leading-relaxed"
            data-testid="service-description"
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
