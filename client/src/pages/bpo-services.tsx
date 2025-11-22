import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS, BPO_BACKGROUNDS } from "@/lib/assets";
import { SEO } from "@/components/seo/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

/**
 * Business Process Outsourcing Service Detail Page
 * Comprehensive BPO services including document management, order processing, support, HR, and compliance
 */
export default function BPOServices() {
  const { t } = useTranslation();

  const bpoServices = [
    {
      icon: SERVICE_ICONS.building,
      title: "Document Management Services",
      subtitle: "Streamlined systems ensure critical information is properly categorized, securely stored, and instantly accessible when needed.",
      whatWeManage: [
        "Digital and physical document organization and filing",
        "Secure cloud-based storage with backup protocols",
        "Document indexing and categorization systems",
        "Quick retrieval processes and version control"
      ],
      ourApproach: [
        "Standardized naming conventions and folder structures",
        "Access controls and permission management",
        "Regular audits and archival procedures",
        "Compliance with data retention requirements"
      ],
      advantage: "Improved operational efficiency through quick document access, enhanced data security and backup protection, reduced physical storage costs, and ensured compliance with record retention regulations."
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Order Processing & Fulfillment Services",
      subtitle: "End-to-end order lifecycle management with real-time inventory updates and seamless logistics coordination.",
      orderProcessing: [
        "Order entry and verification from multiple channels",
        "Payment processing and confirmation",
        "Real-time inventory allocation and updates",
        "Order status tracking and management"
      ],
      fulfillmentCoordination: [
        "Warehouse and shipping partner coordination",
        "Packaging and shipment documentation",
        "Tracking number generation and customer notifications",
        "Returns and exchange processing"
      ],
      advantage: "Faster order turnaround times, reduced processing errors, improved customer satisfaction through timely deliveries, and real-time visibility into order status and inventory levels."
    },
    {
      icon: SERVICE_ICONS.network,
      title: "Email & Chat Support Services",
      subtitle: "Professional multi-channel support that maintains your brand voice while ensuring prompt, efficient resolution of all inquiries.",
      whatWeHandle: [
        "Customer inquiries and support requests",
        "Internal team communications and coordination",
        "Vendor and supplier correspondence",
        "General business inquiries and information requests"
      ],
      serviceStandards: [
        "Prompt response times with SLA adherence",
        "Professional, brand-consistent communication",
        "Issue escalation and resolution tracking",
        "Multi-channel support integration"
      ],
      advantage: "Improved response times enhance customer satisfaction, professional communication maintains brand reputation, freed internal resources for core activities, and comprehensive tracking ensures no inquiry goes unanswered."
    },
    {
      icon: SERVICE_ICONS.team,
      title: "HR Support Services",
      subtitle: "Comprehensive employee record management and benefits administration that handles HR complexities while you focus on strategic talent development.",
      employeeRecordManagement: [
        "Maintenance of employee personnel files and databases",
        "Onboarding and offboarding documentation",
        "Performance review and training record tracking",
        "Leave and attendance management"
      ],
      benefitsAdministration: [
        "Health insurance and retirement plan enrollment",
        "Benefits eligibility verification and processing",
        "Employee benefits communication and support",
        "Claims coordination and vendor liaison"
      ],
      advantage: "Accurate employee records support better workforce management, streamlined benefits administration improves employee satisfaction, reduced HR administrative burden, and ensured compliance with employment documentation requirements."
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "Compliance & Regulatory Support",
      subtitle: "Proactive monitoring and implementation of compliance frameworks that protect your business from legal risks while keeping you audit-ready.",
      complianceMonitoring: [
        "Regular review of applicable regulations and updates",
        "Industry-specific compliance requirement tracking",
        "Internal policy development and implementation",
        "Compliance calendar and deadline management"
      ],
      documentationReporting: [
        "Regulatory filing preparation and submission",
        "Audit trail maintenance and documentation",
        "Compliance training material development",
        "Incident reporting and corrective action tracking"
      ],
      auditReadiness: [
        "Pre-audit compliance assessments",
        "Documentation organization and retrieval systems",
        "Regulatory authority liaison and communication",
        "Remediation planning and implementation"
      ],
      advantage: "Reduced legal and financial risks through proactive compliance, peace of mind with expert regulatory guidance, audit-ready documentation and processes, and protection of business reputation through adherence to standards."
    }
  ];

  return (
    <div className="pt-16" data-testid="bpo-services-detail">
      <SEO
        title="BPO Services - Business Process Outsourcing | Absouts"
        description="Comprehensive BPO services including Document Management, Order Processing, Customer Support, HR Management, and Compliance. Streamline operations with Absouts' expert outsourcing solutions."
        keywords="BPO services, business process outsourcing, document management, order processing, customer support outsourcing, HR outsourcing, compliance management, Bangladesh BPO"
        url="https://absouts.com/bpo-services"
      />
      <ServiceSchema
        name="Business Process Outsourcing (BPO)"
        description="End-to-end BPO services including document management, order processing, customer support, HR management, and compliance services."
        url="https://absouts.com/bpo-services"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://absouts.com' },
          { name: 'Services', url: 'https://absouts.com/services' },
          { name: 'BPO Services', url: 'https://absouts.com/bpo-services' }
        ]}
      />
      <section className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/services">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-brand-primary mb-6">Business Process Outsourcing</h1>
            <p className="text-xl text-text-secondary max-w-4xl">
              Delegated operational tasks executed with consistent accuracy and measurable efficiency gains. Reduces operational overhead and stabilizes process quality.
            </p>
          </div>

        </div>
      </section>

      {/* BPO Services Sections - Full Width Backgrounds */}
      {bpoServices.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? 'bg-bg-base' : 'bg-bg-base-darker';
        const iconBgColor = isEven ? 'bg-brand-accent' : 'bg-brand-primary';
        const backgroundImage = isEven ? BPO_BACKGROUNDS.bg1 : BPO_BACKGROUNDS.bg2;

        return (
          <section
            key={index}
            className={`relative py-20 ${bgClass}`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Primary Tier: Service Name + Value Statement */}
              <div className="mb-12">
                <div className="flex mb-6">
                  <div
                    className={`w-20 h-20 rounded-xl flex items-center justify-center shadow-medium ${iconBgColor}`}
                  >
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-12 h-12 object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-lg font-medium max-w-3xl text-gray-800">{service.subtitle}</p>
              </div>

              {/* Advantage as closing line */}
              <p className="text-base font-normal mb-12 max-w-4xl text-gray-700">
                {service.advantage}
              </p>

              {/* Secondary Tier: Grouped Sections */}
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Document Management */}
                {service.whatWeManage && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">What We Manage</h4>
                    <div className="space-y-3">
                      {service.whatWeManage.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.ourApproach && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Our Approach</h4>
                    <div className="space-y-3">
                      {service.ourApproach.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Order Processing */}
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
                {service.orderProcessing && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Order Processing</h4>
                    <div className="space-y-3">
                      {service.orderProcessing.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.fulfillmentCoordination && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Fulfillment Coordination</h4>
                    <div className="space-y-3">
                      {service.fulfillmentCoordination.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Email & Chat Support */}
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
                {service.whatWeHandle && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">What We Handle</h4>
                    <div className="space-y-3">
                      {service.whatWeHandle.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.serviceStandards && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Our Service Standards</h4>
                    <div className="space-y-3">
                      {service.serviceStandards.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* HR Support */}
              <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
                {service.employeeRecordManagement && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Employee Record Management</h4>
                    <div className="space-y-3">
                      {service.employeeRecordManagement.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.benefitsAdministration && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Benefits Administration</h4>
                    <div className="space-y-3">
                      {service.benefitsAdministration.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Compliance */}
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                {service.complianceMonitoring && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Compliance Monitoring</h4>
                    <div className="space-y-3">
                      {service.complianceMonitoring.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.documentationReporting && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Documentation & Reporting</h4>
                    <div className="space-y-3">
                      {service.documentationReporting.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.auditReadiness && (
                  <div>
                    <h4 className="text-xl font-semibold mb-6 text-gray-900">Audit Readiness</h4>
                    <div className="space-y-3">
                      {service.auditReadiness.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                          <span className="text-base leading-relaxed text-gray-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
