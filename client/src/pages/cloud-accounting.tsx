import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS } from "@/lib/assets";

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
      subtitle: "Professional accounting support without the overhead",
      description: "Access experienced accounting professionals remotely, providing your business with expert financial management without the costs and commitments of full-time staff. Our virtual accounting team integrates seamlessly with your operations, delivering comprehensive financial oversight tailored to your business needs and growth stage.",
      whatWeProvide: [
        "Dedicated accounting professionals assigned to your business",
        "Flexible engagement models (part-time, full-time, or project-based)",
        "Remote access to real-time financial data and reports",
        "Scalable support that grows with your business requirements"
      ],
      advantage: "Cost-effective access to professional accounting expertise, reduced overhead expenses, and the flexibility to scale services as your business evolves",
      bgColor: "bg-mediterranean-sky/30"
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
      bgColor: "bg-mediterranean-linen"
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
      bgColor: "bg-mediterranean-olive/25"
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
      bgColor: "bg-mediterranean-calendula/30"
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
      bgColor: "bg-mediterranean-french/30"
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
      bgColor: "bg-mediterranean-herb/20"
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
      bgColor: "bg-mediterranean-clementine/25"
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
      bgColor: "bg-mediterranean-terra/25"
    }
  ];

  return (
    <div className="pt-16" data-testid="cloud-accounting-detail">
      <section className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/services">
              <Button variant="ghost" className="text-brand-accent hover:text-brand-accent/80 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-brand-primary mb-6">Cloud Accounting</h1>
            <p className="text-xl text-text-secondary max-w-4xl">
              End-to-end bookkeeping, reporting, and compliance handled with precision and automation. Removes manual workload and enforces consistent financial accuracy.
            </p>
          </div>

          {/* Accounting Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accountingServices.map((service, index) => (
              <div key={index} className={`${service.bgColor} rounded-[2rem] shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden border border-gray-200/50 group hover:-translate-y-1`}>
                <div className="p-10">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-[1.25rem] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img src={service.icon} alt={service.title} className="w-12 h-12 object-contain brightness-0 invert" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-brand-primary mb-3 leading-tight">{service.title}</h3>
                      <p className="text-xl text-mediterranean-herb font-semibold">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* What We Provide Section */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-brand-primary mb-5">What We Provide:</h4>
                    <div className="space-y-3">
                      {service.whatWeProvide.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-mediterranean-herb rounded-full mt-2.5 flex-shrink-0"></div>
                          <span className="text-text-secondary text-base leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* The Advantage Section */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-mediterranean-herb shadow-sm">
                    <h4 className="text-base font-bold text-brand-primary mb-3 uppercase tracking-wide">The Advantage:</h4>
                    <p className="text-text-secondary text-base leading-relaxed">{service.advantage}</p>
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
