import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS } from "@/lib/assets";
import bpoServiceBg from "@/assets/bpo_service_bg.svg";
import bpoServiceBgInverted from "@/assets/bpo_service_bg_inverted.svg";

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
      advantage: "Improved operational efficiency through quick document access, enhanced data security and backup protection, reduced physical storage costs, and ensured compliance with record retention regulations.",
      backgroundImage: bpoServiceBg,
      textColor: "#F7E6D4",
      isDark: true
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
      advantage: "Faster order turnaround times, reduced processing errors, improved customer satisfaction through timely deliveries, and real-time visibility into order status and inventory levels.",
      backgroundImage: bpoServiceBgInverted,
      textColor: "#61605D",
      isDark: false
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
      advantage: "Improved response times enhance customer satisfaction, professional communication maintains brand reputation, freed internal resources for core activities, and comprehensive tracking ensures no inquiry goes unanswered.",
      backgroundImage: bpoServiceBg,
      textColor: "#F7E6D4",
      isDark: true
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
      advantage: "Accurate employee records support better workforce management, streamlined benefits administration improves employee satisfaction, reduced HR administrative burden, and ensured compliance with employment documentation requirements.",
      backgroundImage: bpoServiceBgInverted,
      textColor: "#61605D",
      isDark: false
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
      advantage: "Reduced legal and financial risks through proactive compliance, peace of mind with expert regulatory guidance, audit-ready documentation and processes, and protection of business reputation through adherence to standards.",
      backgroundImage: bpoServiceBg,
      textColor: "#F7E6D4",
      isDark: true
    }
  ];

  return (
    <div className="pt-16" data-testid="bpo-services-detail">
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
              Delegated operational tasks executed with consistent accuracy and measurable efficiency gains. Reduces operational overhead and stabilizes process quality.
            </p>
          </div>

          {/* BPO Services Grid */}
          <div className="space-y-8">
            {bpoServices.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 overflow-hidden border border-gray-200 relative"
              >
                {/* Background with reduced opacity */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Content */}
                <div className="relative p-12">
                  {/* Primary Tier: Service Name + Value Statement */}
                  <div className="flex items-start gap-6 mb-4">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-medium"
                      style={{ backgroundColor: service.isDark ? '#F7E6D4' : '#61605D' }}
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        className={`w-10 h-10 object-contain ${service.isDark ? 'brightness-0' : 'brightness-0 invert'}`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2" style={{ color: service.textColor }}>{service.title}</h3>
                      <p className="text-base font-medium" style={{ color: service.textColor, opacity: 0.8 }}>{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Advantage as closing line */}
                  <p className="text-base font-normal mb-8" style={{ color: service.textColor, opacity: 0.9 }}>
                    {service.advantage}
                  </p>

                  {/* Secondary Tier: Grouped Sections */}
                  <div className="space-y-4">
                    {/* Document Management */}
                    {service.whatWeManage && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>What We Manage:</h4>
                        <div className="space-y-2">
                          {service.whatWeManage.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.ourApproach && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Our Approach:</h4>
                        <div className="space-y-2">
                          {service.ourApproach.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Order Processing */}
                  <div className="space-y-4">
                    {service.orderProcessing && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Order Processing:</h4>
                        <div className="space-y-2">
                          {service.orderProcessing.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.fulfillmentCoordination && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Fulfillment Coordination:</h4>
                        <div className="space-y-2">
                          {service.fulfillmentCoordination.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Email & Chat Support */}
                  <div className="space-y-4">
                    {service.whatWeHandle && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>What We Handle:</h4>
                        <div className="space-y-2">
                          {service.whatWeHandle.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.serviceStandards && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Our Service Standards:</h4>
                        <div className="space-y-2">
                          {service.serviceStandards.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* HR Support */}
                  <div className="space-y-4">
                    {service.employeeRecordManagement && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Employee Record Management:</h4>
                        <div className="space-y-2">
                          {service.employeeRecordManagement.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.benefitsAdministration && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Benefits Administration:</h4>
                        <div className="space-y-2">
                          {service.benefitsAdministration.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Compliance */}
                  <div className="space-y-4">
                    {service.complianceMonitoring && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Compliance Monitoring:</h4>
                        <div className="space-y-2">
                          {service.complianceMonitoring.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.documentationReporting && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Documentation & Reporting:</h4>
                        <div className="space-y-2">
                          {service.documentationReporting.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {service.auditReadiness && (
                      <div>
                        <h4 className="text-lg font-semibold mt-10 mb-4" style={{ color: service.textColor }}>Audit Readiness:</h4>
                        <div className="space-y-2">
                          {service.auditReadiness.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: service.textColor }}></div>
                              <span className="text-sm leading-relaxed" style={{ color: service.textColor, opacity: 0.9 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
