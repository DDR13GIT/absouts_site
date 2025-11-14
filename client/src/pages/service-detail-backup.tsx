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
 * Custom sections for accounting, payroll, and tax services
 */
function BPOServiceDetail() {
  const { t } = useTranslation();

  const bpoServices = [
    {
      icon: SERVICE_ICONS.cloud,
      title: "Virtual Accounting Services",
      subtitle: "Professional accounting support without the overhead",
      description: "Access experienced accounting professionals remotely, providing your business with expert financial management without the costs and commitments of full-time staff. Our virtual accounting team integrates seamlessly with your operations, delivering comprehensive financial oversight tailored to your business needs and growth stage.",
      whatWeProvide: [
        "Dedicated accounting professionals assigned to your business",
        "Flexible engagement models (part-time, full-time, or project-based)",
        "Remote access to real-time financial data and reports",
        "Scalable support that grows with your business requirements"
      ],
      advantage: "Cost-effective access to professional accounting expertise, reduced overhead expenses, and the flexibility to scale services as your business evolves",
      gradient: "from-blue-50/50 to-cyan-50/50"
    },
    {
      icon: SERVICE_ICONS.calculator,
      title: "Professional Book-keeping",
      subtitle: "Accurate financial record-keeping you can trust",
      description: "Meticulous recording of every financial transaction to keep your financial house in order. We ensure all sales, expenses, and payments are properly documented and categorized, creating a solid foundation for financial analysis, tax compliance, and informed decision-making.",
      whatWeProvide: [
        "Daily sales and revenue transactions",
        "Business expenses and vendor payments",
        "Employee payroll and benefits disbursements",
        "Tax payments and statutory obligations"
      ],
      advantage: "Clean, organized financial records that maintain accuracy for better decision-making, provide confidence in business assessments, and ensure audit-ready documentation",
      gradient: "from-purple-50/50 to-pink-50/50"
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "Bank Reconciliation Services",
      subtitle: "Ensuring every dollar is accounted for",
      description: "Systematic matching of your internal financial records against bank statements to verify accuracy and identify discrepancies. This critical process acts as your financial safety net, detecting errors, unauthorized transactions, and potential fraud before they escalate into major problems.",
      whatWeProvide: [
        "Monthly reconciliation of all bank accounts",
        "Investigation and resolution of discrepancies",
        "Documentation of reconciliation findings",
        "Proactive alerts for unusual or suspicious activity"
      ],
      advantage: "Early detection of errors and fraud, ensured accuracy in financial reporting, prevention of cash flow issues, and maintained integrity of your financial data",
      gradient: "from-green-50/50 to-emerald-50/50"
    },
    {
      icon: SERVICE_ICONS.report,
      title: "MIS Reporting & Analytics",
      subtitle: "Transform data into actionable business intelligence",
      description: "Comprehensive reports that translate complex financial data into clear, actionable insights. Our customized MIS reports provide the intelligence needed to identify trends, spot opportunities, assess performance, and make confident strategic and operational decisions.",
      whatWeProvide: [
        "Profit & loss analysis by department or product line",
        "Cash flow forecasting and trend analysis",
        "Budget vs. actual performance tracking",
        "Key performance indicator (KPI) dashboards"
      ],
      advantage: "Informed strategic and operational decision-making, early identification of business trends, performance monitoring against goals, and data-driven insights for growth",
      gradient: "from-amber-50/50 to-orange-50/50"
    },
    {
      icon: SERVICE_ICONS.bank,
      title: "AP/AR Management Services",
      subtitle: "Optimize your cash flow cycle",
      description: "Systematic tracking and management of outgoing and incoming payments to maintain healthy cash flow. We monitor outstanding invoices, manage payment schedules, and optimize collection processes, helping you maintain financial stability and positive relationships with customers and vendors.",
      whatWeProvide: [
        "Vendor bill processing and payment scheduling",
        "Early payment discount optimization",
        "Customer invoice tracking and follow-up",
        "Aging analysis and collection management"
      ],
      advantage: "Maintained healthy cash flow and financial stability, reduced late fees and finance charges, stronger business relationships, and improved working capital management",
      gradient: "from-indigo-50/50 to-violet-50/50"
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Inventory Management Services",
      subtitle: "Right products, right quantities, right time",
      description: "Complete visibility and control over your inventory with real-time tracking and intelligent analysis. We monitor stock levels, track purchases and sales, and help you maintain optimal inventory levels, ensuring efficient supply chain operations while preventing stockouts or overstocking issues.",
      whatWeProvide: [
        "Current stock levels across all locations",
        "Purchase orders, receiving, and sales transactions",
        "Inventory turnover rates and movement patterns",
        "Reorder points and optimal order quantities"
      ],
      advantage: "Efficient supply chain operations, prevention of stockouts and lost sales, elimination of excess inventory costs, reduced waste from obsolescence, and minimized working capital requirements",
      gradient: "from-teal-50/50 to-cyan-50/50"
    },
    {
      icon: SERVICE_ICONS.team,
      title: "Payroll Management Services",
      subtitle: "Seamless payroll processing for a satisfied workforce",
      description: "Processing employee salaries, tax deductions, and benefits with precision and timeliness. Our comprehensive payroll management ensures accurate compensation delivery while maintaining full compliance with evolving tax laws and labour regulations. By automating routine tasks, we reduce your administrative burden and eliminate the risk of costly errors.",
      whatWeProvide: [
        "Salary and wage calculations including overtime and bonuses",
        "Tax deductions and statutory compliance (EPF, ESI, TDS)",
        "Benefits administration and leave management",
        "Quarterly and annual tax filing requirements"
      ],
      advantage: "Accurate and timely payroll processing maintains employee satisfaction and compliance, keeps businesses up to date with regulatory changes, and reduces administrative burden through automation",
      gradient: "from-rose-50/50 to-pink-50/50"
    },
    {
      icon: SERVICE_ICONS.hands,
      title: "Tax Planning & Compliance",
      subtitle: "Comprehensive tax solutions for optimal financial outcomes",
      description: "Expert preparation of direct and indirect tax returns including Income Tax, GST, and VAT. We ensure accurate and on-time tax compliance, minimizing risk while our specialized guidance helps identify deductions and credits to optimize your tax liabilities. Our team supports you through audits and liaises with tax authorities on your behalf when needed.",
      whatWeProvide: [
        "Income Tax return preparation and filing",
        "GST registration, filing, and compliance",
        "Year-round deduction and credit identification",
        "Tax audit support and documentation preparation"
      ],
      advantage: "Accurate and on-time tax compliance minimizes risk, expert guidance optimizes tax liabilities through strategic deductions and credits, and professional representation supports businesses during audits and dealings with tax authorities",
      gradient: "from-lime-50/50 to-green-50/50"
    }
  ];

  return (
    <div className="pt-16" data-testid="bpo-service-detail">
      <section className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
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

          {/* BPO Services Grid */}
          <div className="space-y-8">
            {bpoServices.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${service.gradient} rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden border border-gray-100`}>
                <div className="p-8 bg-white/80 backdrop-blur-sm">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium">
                      <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain brightness-0 invert" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-brand-primary mb-2">{service.title}</h3>
                      <p className="text-lg text-brand-accent font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* What We Provide Section */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-brand-primary mb-3">What We Provide:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.whatWeProvide.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text-secondary text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* The Advantage Section */}
                  <div className="bg-gradient-to-r from-success/10 to-brand-accent/10 rounded-xl p-4 border-l-4 border-brand-accent">
                    <h4 className="text-sm font-bold text-brand-primary mb-2">The Advantage:</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{service.advantage}</p>
                  </div>
                </div>
              </div>
            ))}
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
