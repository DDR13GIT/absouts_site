/**
 * Service Detail Page - Refactored Version
 * This is a clean, modular implementation using reusable components
 *
 * Key improvements:
 * - Centralized service configurations
 * - Reusable template components
 * - Reduced code duplication from 2,038 lines to ~200 lines
 * - Easy to maintain and extend
 */

import { useLocation } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { ServiceDetailTemplate } from "@/components/services";
import { ecommerceConfig, mobileConfig, cloudConfig } from "@/lib/services";

/**
 * Main Service Detail Router Component
 * Routes to appropriate service detail based on URL slug
 */
export default function ServiceDetail() {
  const [location] = useLocation();
  const serviceSlug = location.split('/').pop();

  // Map of service slugs to their components
  const servicePages: Record<string, () => JSX.Element> = {
    'ecommerce': EcommerceDetail,
    'mobile': MobileAppDetail,
    'cloud': CloudInfrastructureDetail,

    // TODO: Refactor these services to use the new modular pattern
    // 'testing': TestAutomationDetail,
    // 'legaltech': LegalTechDetail,
    // 'webportal': WebPortalDetail,
    // 'fintech': FintechDetail,
    // 'ai': AIDetail,
    // 'bpo': BPOServiceDetail,
    // 'software': SoftwareServiceDetail
  };

  const ServiceComponent = servicePages[serviceSlug as string] || NotFoundService;
  return <ServiceComponent />;
}

/**
 * Not Found Service Component
 */
function NotFoundService() {
  const { t } = useTranslation();

  return (
    <div className="pt-16" data-testid="service-not-found">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Service Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/services">
            <Button className="text-accent hover:text-accent/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.common.backToServices}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * E-commerce Service Detail
 * Clean implementation using ServiceDetailTemplate
 */
function EcommerceDetail() {
  return (
    <ServiceDetailTemplate
      title={ecommerceConfig.title}
      description={ecommerceConfig.description}
      heroGradient={ecommerceConfig.heroGradient}
      coreFeatures={ecommerceConfig.coreFeatures}
      additionalFeatures={ecommerceConfig.additionalFeatures}
      technologies={ecommerceConfig.technologies}
      gradientColors={ecommerceConfig.gradientColors}
      testId="ecommerce-service-detail"
    />
  );
}

/**
 * Mobile App Development Service Detail
 */
function MobileAppDetail() {
  return (
    <ServiceDetailTemplate
      title={mobileConfig.title}
      description={mobileConfig.description}
      heroGradient={mobileConfig.heroGradient}
      coreFeatures={mobileConfig.coreFeatures}
      coreFeaturesTitle={mobileConfig.coreFeaturesTitle}
      coreFeaturesSubtitle={mobileConfig.coreFeaturesSubtitle}
      additionalFeatures={mobileConfig.additionalFeatures}
      technologies={mobileConfig.technologies}
      techStackSubtitle={mobileConfig.techStackSubtitle}
      gradientColors={mobileConfig.gradientColors}
      testId="mobile-service-detail"
    />
  );
}

/**
 * Cloud Infrastructure Service Detail
 */
function CloudInfrastructureDetail() {
  return (
    <ServiceDetailTemplate
      title={cloudConfig.title}
      description={cloudConfig.description}
      heroGradient={cloudConfig.heroGradient}
      coreFeatures={cloudConfig.coreFeatures}
      coreFeaturesTitle={cloudConfig.coreFeaturesTitle}
      coreFeaturesSubtitle={cloudConfig.coreFeaturesSubtitle}
      additionalFeatures={cloudConfig.additionalFeatures}
      technologies={cloudConfig.technologies}
      techStackSubtitle={cloudConfig.techStackSubtitle}
      gradientColors={cloudConfig.gradientColors}
      testId="cloud-service-detail"
    />
  );
}

// TODO: Create config files and refactor these service detail components:
// - TestAutomationDetail (testing.config.ts)
// - LegalTechDetail (legaltech.config.ts)
// - WebPortalDetail (webportal.config.ts)
// - FintechDetail (fintech.config.ts)
// - AIDetail (ai.config.ts)
// - BPOServiceDetail (bpo.config.ts)
// - SoftwareServiceDetail (software.config.ts)
//
// Follow the same pattern as above - each will be just a few lines!
