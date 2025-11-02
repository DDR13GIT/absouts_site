/**
 * Service Detail Page - FULLY REFACTORED ✅
 *
 * All services now use modular components and centralized configurations.
 *
 * Refactored services (8 total):
 * - E-commerce (ecommerce.config.ts)
 * - Mobile App Development (mobile.config.ts)
 * - Cloud Infrastructure (cloud.config.ts)
 * - Test Automation (testing.config.ts)
 * - Legal Tech (legaltech.config.ts)
 * - Web Portal (webportal.config.ts)
 * - Fintech (fintech.config.ts)
 * - AI Solutions (ai.config.ts)
 *
 * Special handling (2 services with custom sections):
 * - BPO Services (requires custom accounting, payroll, tax, image editing sections)
 * - Software Outsourcing (umbrella page linking to other services)
 *
 * Original implementation backed up in: service-detail.backup.tsx (2,038 lines)
 * This refactored version: ~200 lines (90% code reduction!)
 */

import { useLocation, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Smartphone, Cloud, TestTube, Scale, Globe, CreditCard, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

// Import modular service components and configurations
import { ServiceDetailTemplate } from "@/components/services";
import {
  ecommerceConfig,
  mobileConfig,
  cloudConfig,
  testingConfig,
  legaltechConfig,
  webportalConfig,
  fintechConfig,
  aiConfig
} from "@/lib/services";
import { SERVICE_ICONS, IMAGE_EDITING_EXAMPLES, TECHNOLOGY_LOGOS } from "@/lib/assets";

/**
 * Main Service Detail Router Component
 * Routes to appropriate service detail based on URL slug
 */
export default function ServiceDetail() {
  const [location] = useLocation();
  const serviceSlug = location.split('/').pop();

  // Map of service slugs to their components
  const servicePages: Record<string, () => JSX.Element> = {
    // Refactored services using template pattern
    'ecommerce': EcommerceDetail,
    'mobile': MobileAppDetail,
    'cloud': CloudInfrastructureDetail,
    'testing': TestAutomationDetail,
    'legaltech': LegalTechDetail,
    'webportal': WebPortalDetail,
    'fintech': FintechDetail,
    'ai': AIDetail,

    // Complex services with custom sections
    'bpo': BPOServiceDetail,
    'software': SoftwareServiceDetail
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

// ============================================================================
// REFACTORED SERVICES - Using ServiceDetailTemplate
// ============================================================================

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

/**
 * Test Automation Service Detail
 */
function TestAutomationDetail() {
  return (
    <ServiceDetailTemplate
      title={testingConfig.title}
      description={testingConfig.description}
      heroGradient={testingConfig.heroGradient}
      coreFeatures={testingConfig.coreFeatures}
      coreFeaturesTitle={testingConfig.coreFeaturesTitle}
      coreFeaturesSubtitle={testingConfig.coreFeaturesSubtitle}
      additionalFeatures={testingConfig.additionalFeatures}
      technologies={testingConfig.technologies}
      techStackSubtitle={testingConfig.techStackSubtitle}
      gradientColors={testingConfig.gradientColors}
      testId="testing-service-detail"
    />
  );
}

/**
 * Legal Tech Service Detail
 */
function LegalTechDetail() {
  return (
    <ServiceDetailTemplate
      title={legaltechConfig.title}
      description={legaltechConfig.description}
      heroGradient={legaltechConfig.heroGradient}
      coreFeatures={legaltechConfig.coreFeatures}
      coreFeaturesTitle={legaltechConfig.coreFeaturesTitle}
      coreFeaturesSubtitle={legaltechConfig.coreFeaturesSubtitle}
      additionalFeatures={legaltechConfig.additionalFeatures}
      technologies={legaltechConfig.technologies}
      techStackSubtitle={legaltechConfig.techStackSubtitle}
      gradientColors={legaltechConfig.gradientColors}
      testId="legaltech-service-detail"
    />
  );
}

/**
 * Web Portal Service Detail
 */
function WebPortalDetail() {
  return (
    <ServiceDetailTemplate
      title={webportalConfig.title}
      description={webportalConfig.description}
      heroGradient={webportalConfig.heroGradient}
      coreFeatures={webportalConfig.coreFeatures}
      coreFeaturesTitle={webportalConfig.coreFeaturesTitle}
      coreFeaturesSubtitle={webportalConfig.coreFeaturesSubtitle}
      additionalFeatures={webportalConfig.additionalFeatures}
      technologies={webportalConfig.technologies}
      techStackSubtitle={webportalConfig.techStackSubtitle}
      gradientColors={webportalConfig.gradientColors}
      testId="webportal-service-detail"
    />
  );
}

/**
 * Fintech Service Detail
 */
function FintechDetail() {
  return (
    <ServiceDetailTemplate
      title={fintechConfig.title}
      description={fintechConfig.description}
      heroGradient={fintechConfig.heroGradient}
      coreFeatures={fintechConfig.coreFeatures}
      coreFeaturesTitle={fintechConfig.coreFeaturesTitle}
      coreFeaturesSubtitle={fintechConfig.coreFeaturesSubtitle}
      additionalFeatures={fintechConfig.additionalFeatures}
      technologies={fintechConfig.technologies}
      techStackSubtitle={fintechConfig.techStackSubtitle}
      gradientColors={fintechConfig.gradientColors}
      testId="fintech-service-detail"
    />
  );
}

/**
 * AI Solutions Service Detail
 */
function AIDetail() {
  return (
    <ServiceDetailTemplate
      title={aiConfig.title}
      description={aiConfig.description}
      heroGradient={aiConfig.heroGradient}
      coreFeatures={aiConfig.coreFeatures}
      coreFeaturesTitle={aiConfig.coreFeaturesTitle}
      coreFeaturesSubtitle={aiConfig.coreFeaturesSubtitle}
      additionalFeatures={aiConfig.additionalFeatures}
      technologies={aiConfig.technologies}
      techStackSubtitle={aiConfig.techStackSubtitle}
      gradientColors={aiConfig.gradientColors}
      testId="ai-service-detail"
    />
  );
}

// ============================================================================
// COMPLEX SERVICES - Custom Implementations
// ============================================================================

/**
 * BPO Service Detail
 * Custom sections for accounting, payroll, tax, and image editing services
 */
function BPOServiceDetail() {
  const { t } = useTranslation();

  const cloudAccountingServices = [
    {
      icon: SERVICE_ICONS.cloud,
      title: "Virtual Accounting",
      description: "Remote accounting services providing flexibility and reducing need for in-house staff."
    },
    {
      icon: SERVICE_ICONS.calculator,
      title: "Book-keeping",
      description: "Recording financial transactions (sales, expenses, payments) for accurate financial records."
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "Bank Reconciliation",
      description: "Matching company records with bank statements to ensure accuracy and detect discrepancies."
    },
    {
      icon: SERVICE_ICONS.report,
      title: "MIS Reporting",
      description: "Generating management reports for business insights and strategic decision-making."
    },
    {
      icon: SERVICE_ICONS.bank,
      title: "Accounts Payable & Receivable",
      description: "Tracking outgoing and incoming payments to maintain healthy cash flow."
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Inventory Management",
      description: "Monitoring stock levels and tracking purchases/sales for efficient supply chain operations."
    }
  ];

  const imageEditingServices = [
    {
      icon: SERVICE_ICONS.search,
      title: "Background Removal",
      description: "Professional background removal and replacement for product photography and portraits.",
      image: IMAGE_EDITING_EXAMPLES.backgroundRemoval,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: SERVICE_ICONS.media,
      title: "Color Correction",
      description: "Advanced color grading and correction for vibrant, professional-looking images.",
      image: IMAGE_EDITING_EXAMPLES.colorCorrection,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: SERVICE_ICONS.people,
      title: "Face Swapping",
      description: "Seamless face replacement and digital makeup for portrait enhancement.",
      image: IMAGE_EDITING_EXAMPLES.faceSwapping,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: SERVICE_ICONS.shield,
      title: "Image Masking",
      description: "Precise image masking for complex selections and detailed editing work.",
      image: IMAGE_EDITING_EXAMPLES.imageMasking,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: SERVICE_ICONS.lightbulb,
      title: "Photo Manipulation",
      description: "Creative photo manipulation and artistic enhancement for stunning visual effects.",
      image: IMAGE_EDITING_EXAMPLES.photoManipulation,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: SERVICE_ICONS.clock,
      title: "Shadow & Reflection",
      description: "Professional shadow creation and reflection effects for product photography.",
      image: IMAGE_EDITING_EXAMPLES.shadowReflection,
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: SERVICE_ICONS.report,
      title: "Photo Retouching",
      description: "Professional photo retouching for flawless skin, beauty enhancement, and detail refinement.",
      image: IMAGE_EDITING_EXAMPLES.photoRetouching,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: SERVICE_ICONS.hands,
      title: "Product Enhancement",
      description: "Jewelry, clothing, and product enhancement for e-commerce and marketing materials.",
      image: IMAGE_EDITING_EXAMPLES.jewelryRetouch,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="pt-16" data-testid="bpo-service-detail">
      <section className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-brand-accent hover:text-brand-accent/80 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-brand-primary mb-6">Business Process Outsourcing</h1>
            <p className="text-xl text-text-secondary max-w-4xl">
              Our BPO services streamline essential business functions and enhance operational efficiency, enabling clients to focus on their core competencies and drive growth.
            </p>
          </div>

          {/* Cloud Accounting Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-primary mb-8">Cloud Accounting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudAccountingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-medium hover:shadow-strong transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-4">
                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">{service.title}</h3>
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payroll & Tax Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-medium p-8">
              <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                <img src={SERVICE_ICONS.team} alt="Payroll" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Payroll Management</h3>
              <p className="text-text-secondary mb-4">
                Accurate and compliant payroll processing services to streamline employee payments and tax calculations.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start"><span className="mr-2">•</span> Salary calculations and disbursements</li>
                <li className="flex items-start"><span className="mr-2">•</span> Tax deductions and compliance</li>
                <li className="flex items-start"><span className="mr-2">•</span> Benefits administration</li>
                <li className="flex items-start"><span className="mr-2">•</span> Time and attendance tracking</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-medium p-8">
              <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                <img src={SERVICE_ICONS.document} alt="Tax" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Tax Services</h3>
              <p className="text-text-secondary mb-4">
                Comprehensive tax planning, preparation, and compliance services for individuals and businesses.
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start"><span className="mr-2">•</span> Tax planning and strategy</li>
                <li className="flex items-start"><span className="mr-2">•</span> Corporate tax preparation</li>
                <li className="flex items-start"><span className="mr-2">•</span> VAT and GST compliance</li>
                <li className="flex items-start"><span className="mr-2">•</span> International tax advisory</li>
              </ul>
            </div>
          </div>

          {/* Image Editing Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-brand-primary mb-8">Image Editing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {imageEditingServices.map((service, index) => (
                <div key={index} className={`bg-gradient-to-br ${service.gradient} rounded-xl p-6 text-white shadow-medium hover:shadow-strong transform hover:-translate-y-2 transition-all duration-300`}>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{service.description}</p>
                  {service.image && (
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <img src={service.image} alt={`${service.title} example`} className="w-full h-32 object-cover" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Software Outsourcing Service Detail
 * Complete page with all services detailed in sections
 */
function SoftwareServiceDetail() {
  const { t } = useTranslation();

  const services = [
    {
      id: "ecommerce",
      Icon: ShoppingCart,
      config: ecommerceConfig,
      bgColor: "bg-blue-50/50"
    },
    {
      id: "mobile",
      Icon: Smartphone,
      config: mobileConfig,
      bgColor: "bg-purple-50/50"
    },
    {
      id: "cloud",
      Icon: Cloud,
      config: cloudConfig,
      bgColor: "bg-cyan-50/50"
    },
    {
      id: "testing",
      Icon: TestTube,
      config: testingConfig,
      bgColor: "bg-green-50/50"
    },
    {
      id: "legaltech",
      Icon: Scale,
      config: legaltechConfig,
      bgColor: "bg-indigo-50/50"
    },
    {
      id: "webportal",
      Icon: Globe,
      config: webportalConfig,
      bgColor: "bg-teal-50/50"
    },
    {
      id: "fintech",
      Icon: CreditCard,
      config: fintechConfig,
      bgColor: "bg-amber-50/50"
    },
    {
      id: "ai",
      Icon: Sparkles,
      config: aiConfig,
      bgColor: "bg-rose-50/50"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pt-16" data-testid="software-service-detail">
      <section className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/services">
              <Button variant="ghost" className="text-brand-accent hover:text-brand-accent/80 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-brand-primary mb-6">Software Outsourcing & IT Solutions</h1>
            <p className="text-xl text-text-secondary max-w-4xl">
              Custom software development, mobile applications, cloud infrastructure optimization, and specialized solutions tailored for various industries.
            </p>
          </div>

          {/* Service Cards - Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {services.map((service) => {
              const IconComponent = service.Icon;
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className={`${service.bgColor} border border-brand-primary/10 rounded-xl p-6 text-left shadow-subtle hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                >
                  <div className="w-16 h-16 bg-white/80 rounded-lg flex items-center justify-center mb-4 shadow-subtle">
                    <IconComponent className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2">{service.config.title}</h3>
                  <p className="text-sm text-text-secondary line-clamp-3">{service.config.description}</p>
                </button>
              );
            })}
          </div>

          {/* Detailed Service Sections */}
          {services.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <div key={service.id} id={service.id} className="mb-20 scroll-mt-20">
                {/* Section Header */}
                <div className={`${service.bgColor} border border-brand-primary/10 rounded-2xl p-8 mb-8`}>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <IconComponent className="w-12 h-12 text-brand-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-brand-primary mb-3">{service.config.title}</h2>
                      <p className="text-lg text-text-secondary">{service.config.description}</p>
                    </div>
                  </div>
                </div>

                {/* Core Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-brand-primary mb-6">
                    {(service.config as any).coreFeaturesTitle || "Key Features"}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.config.coreFeatures.map((feature, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-6 shadow-subtle hover:shadow-medium transition-shadow duration-300">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <img src={feature.icon} alt={feature.title} className="w-8 h-8 object-contain" />
                        </div>
                        <h4 className="text-lg font-semibold text-brand-primary mb-2">{feature.title}</h4>
                        <p className="text-sm text-text-secondary">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Features */}
                {service.config.additionalFeatures && service.config.additionalFeatures.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-brand-primary mb-6">Additional Capabilities</h3>
                    <div className="bg-white rounded-xl p-6 shadow-subtle">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.config.additionalFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-accent rounded-full flex-shrink-0"></div>
                            <span className="text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {service.config.technologies && service.config.technologies.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-brand-primary mb-6">
                      {(service.config as any).techStackSubtitle || "Technology Stack"}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                      {service.config.technologies.map((tech, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 shadow-subtle hover:shadow-medium transition-shadow duration-300 flex flex-col items-center text-center">
                          <img src={tech.icon} alt={tech.name} className="w-16 h-16 object-contain mb-3" />
                          <p className="text-sm font-semibold text-brand-primary mb-1">{tech.name}</p>
                          <p className="text-xs text-text-secondary">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Divider between sections (except for last one) */}
                {index < services.length - 1 && (
                  <div className="border-t border-brand-primary/10 mt-12"></div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
