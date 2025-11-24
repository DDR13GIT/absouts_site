import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS } from "@/lib/assets";
import { SEO } from "@/components/seo/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

import { Badge } from "@/components/ui/badge";

/**
 * Cloud Accounting Service Detail Page
 * Comprehensive accounting services including bookkeeping, payroll, and tax compliance
 */
export default function CloudAccounting() {
  const { t } = useTranslation();

  const accountingServices = [
    {
      icon: SERVICE_ICONS.cloud,
      title: "Virtual Accounting Services",
      subtitle: "Professional support without overhead",
      description: "Access experienced accounting professionals remotely. We integrate seamlessly with your operations, delivering comprehensive financial oversight tailored to your business needs.",
      whatWeProvide: [
        "Dedicated accounting professionals",
        "Flexible engagement models",
        "Remote access to real-time data",
        "Scalable support"
      ],
      advantage: "Cost-effective expertise and flexibility.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
      tags: ["Remote", "Scalable"]
    },
    {
      icon: SERVICE_ICONS.calculator,
      title: "Professional Book-keeping",
      subtitle: "Accurate records you can trust",
      description: "Meticulous recording of every financial transaction. We ensure all sales, expenses, and payments are properly documented, creating a solid foundation for analysis.",
      whatWeProvide: [
        "Daily sales & revenue tracking",
        "Expense & vendor management",
        "Payroll & benefits recording",
        "Statutory obligation tracking"
      ],
      advantage: "Audit-ready documentation and accuracy.",
      image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=800",
      tags: ["Accuracy", "Compliance"]
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "Bank Reconciliation",
      subtitle: "Every dollar accounted for",
      description: "Systematic matching of internal records against bank statements. This critical process acts as your financial safety net, detecting errors and preventing fraud.",
      whatWeProvide: [
        "Monthly account reconciliation",
        "Discrepancy resolution",
        "Findings documentation",
        "Suspicious activity alerts"
      ],
      advantage: "Fraud prevention and data integrity.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      tags: ["Security", "Integrity"]
    },
    {
      icon: SERVICE_ICONS.report,
      title: "MIS Reporting & Analytics",
      subtitle: "Data into actionable intelligence",
      description: "Comprehensive reports translating complex data into insights. Identify trends, spot opportunities, and make confident strategic decisions with our customized reports.",
      whatWeProvide: [
        "Profit & loss analysis",
        "Cash flow forecasting",
        "Budget vs. actual tracking",
        "KPI dashboards"
      ],
      advantage: "Data-driven insights for growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["Insights", "Strategy"]
    },
    {
      icon: SERVICE_ICONS.bank,
      title: "AP/AR Management",
      subtitle: "Optimize your cash flow cycle",
      description: "Systematic tracking of payments to maintain healthy cash flow. We monitor outstanding invoices and manage payment schedules to ensure financial stability.",
      whatWeProvide: [
        "Vendor bill processing",
        "Discount optimization",
        "Invoice tracking & follow-up",
        "Collection management"
      ],
      advantage: "Improved working capital management.",
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800",
      tags: ["Cash Flow", "Efficiency"]
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Inventory Management",
      subtitle: "Right products, right time",
      description: "Complete visibility over your inventory. We monitor stock levels and track movements to ensure efficient supply chain operations and prevent stockouts.",
      whatWeProvide: [
        "Real-time stock tracking",
        "Purchase & sales monitoring",
        "Turnover rate analysis",
        "Reorder point optimization"
      ],
      advantage: "Minimized waste and optimized stock.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      tags: ["Logistics", "Control"]
    },
    {
      icon: SERVICE_ICONS.team,
      title: "Payroll Management",
      subtitle: "Seamless processing for teams",
      description: "Precision in salary, tax, and benefits processing. We ensure accurate compensation delivery while maintaining full compliance with labor regulations.",
      whatWeProvide: [
        "Salary & wage calculation",
        "Tax & statutory compliance",
        "Benefits administration",
        "Tax filing assistance"
      ],
      advantage: "Employee satisfaction and compliance.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      tags: ["HR", "Compliance"]
    },
    {
      icon: SERVICE_ICONS.hands,
      title: "Tax Planning & Compliance",
      subtitle: "Optimal financial outcomes",
      description: "Expert preparation of direct and indirect tax returns. We ensure on-time compliance and identify strategic deductions to optimize your tax liabilities.",
      whatWeProvide: [
        "Income Tax preparation",
        "GST filing & compliance",
        "Deduction identification",
        "Audit support"
      ],
      advantage: "Risk minimization and tax optimization.",
      image: "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?auto=format&fit=crop&q=80&w=800",
      tags: ["Planning", "Savings"]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-bg-base" data-testid="cloud-accounting-detail">
      <SEO
        title="Cloud Accounting Services - Virtual Bookkeeping & Tax Compliance | Absouts"
        description="Professional cloud accounting services including virtual bookkeeping, payroll management, tax planning, AP/AR management, and financial reporting. Expert remote accounting solutions for your business."
        keywords="cloud accounting, virtual bookkeeping, online accounting services, payroll management, tax compliance, AP AR management, MIS reporting, inventory management, remote accounting"
        url="https://absouts.com/cloud-accounting"
      />
      <ServiceSchema
        name="Cloud Accounting Services"
        description="Comprehensive cloud accounting including virtual accounting, bookkeeping, payroll, tax compliance, and financial reporting services."
        url="https://absouts.com/cloud-accounting"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://absouts.com' },
          { name: 'Services', url: 'https://absouts.com/services' },
          { name: 'Cloud Accounting', url: 'https://absouts.com/cloud-accounting' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-mediterranean-sky/10 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services">
              <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all text-brand-primary">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tight animate-in slide-in-from-bottom-5 duration-500">
              Cloud Accounting
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed animate-in slide-in-from-bottom-5 duration-500 delay-100">
              End-to-end bookkeeping, reporting, and compliance handled with precision and automation.
              We remove the manual workload to enforce consistent financial accuracy for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="flex flex-col">
        {accountingServices.map((service, index) => (
          <section
            key={index}
            className={`py-24 relative overflow-hidden ${index % 2 === 0 ? 'bg-mediterranean-sky/5' : 'bg-bg-base-darker'
              }`}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className={`absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob ${index % 2 === 0 ? 'animation-delay-2000' : ''}`} />
              <div className={`absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 ${index % 2 === 0 ? '' : 'animation-delay-2000'}`} />
              <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-mediterranean-sky/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>

                {/* Text Content */}
                <div className="flex-1 w-full space-y-8 animate-in slide-in-from-bottom-10 duration-700 delay-100">
                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="p-4 rounded-2xl bg-brand-primary text-white shadow-xl shadow-brand-primary/20 transform transition-transform hover:scale-110 duration-300">
                        <img src={service.icon} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain invert brightness-0 filter" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-brand-primary leading-tight tracking-tight">
                        {service.title}
                      </h2>
                    </div>

                    <h3 className="text-xl font-medium text-brand-secondary/80 pl-1 border-l-4 border-brand-accent/30">
                      {service.subtitle}
                    </h3>

                    <p className="text-lg text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Redesigned Tags - Integrated into content */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10 px-3 py-1 text-sm font-medium border border-brand-primary/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-4 pt-4">
                    <h4 className="text-sm font-bold text-brand-primary uppercase tracking-widest opacity-80">What We Provide</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                      {service.whatWeProvide.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <div className="mt-1 p-0.5 rounded-full bg-success/10 text-success group-hover:bg-success/20 transition-colors">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <span className="text-text-secondary font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/60">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm">
                      <div className="p-2.5 rounded-xl bg-brand-accent/10 text-brand-accent">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-brand-primary text-sm uppercase tracking-wide mb-1">Key Advantage</p>
                        <p className="text-text-secondary italic">"{service.advantage}"</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full relative group perspective-1000">
                  <div className={`absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-[2rem] transform transition-transform duration-700 group-hover:scale-105 ${index % 2 === 0 ? '-rotate-6' : 'rotate-6'
                    }`} />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-primary/10 aspect-[4/3] transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 via-transparent to-transparent opacity-60" />
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-mediterranean-olive/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-primary mb-6">Ready to Streamline Your Finances?</h2>
          <p className="text-lg text-text-secondary mb-8">
            Let us handle the numbers so you can focus on growing your business.
            Get in touch for a customized accounting solution.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
