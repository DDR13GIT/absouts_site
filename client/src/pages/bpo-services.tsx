import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS } from "@/lib/assets";

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
      subtitle: "Organized, secure, and accessible records at your fingertips",
      description: "Comprehensive organizing, storing, and retrieving of your business files and records with systematic efficiency. We implement streamlined document management systems that ensure critical information is properly categorized, securely stored, and instantly accessible when needed, eliminating time wasted searching for documents.",
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
      advantage: "Improved operational efficiency through quick document access, enhanced data security and backup protection, reduced physical storage costs, and ensured compliance with record retention regulations",
      gradient: "from-blue-50/50 to-cyan-50/50"
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Order Processing & Fulfillment Services",
      subtitle: "Seamless order management from placement to delivery",
      description: "End-to-end management of your order lifecycle including processing, database updates, and shipment coordination. We ensure every customer order is handled efficiently and accurately, maintaining real-time inventory updates and coordinating with logistics partners to deliver exceptional customer experiences.",
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
      advantage: "Faster order turnaround times, reduced processing errors, improved customer satisfaction through timely deliveries, and real-time visibility into order status and inventory levels",
      gradient: "from-purple-50/50 to-pink-50/50"
    },
    {
      icon: SERVICE_ICONS.network,
      title: "Email & Chat Support Services",
      subtitle: "Professional communication management for your business",
      description: "Handling all internal and external communications, inquiries, and correspondence through email and chat channels. Our trained support team ensures prompt, professional responses that maintain your brand voice, resolve issues efficiently, and keep communication flowing smoothly across your organization.",
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
      advantage: "Improved response times enhance customer satisfaction, professional communication maintains brand reputation, freed internal resources for core activities, and comprehensive tracking ensures no inquiry goes unanswered",
      gradient: "from-green-50/50 to-emerald-50/50"
    },
    {
      icon: SERVICE_ICONS.team,
      title: "HR Support Services",
      subtitle: "Streamlined human resource management and administration",
      description: "Comprehensive employee record management and benefits administration to support your workforce effectively. We handle the administrative complexities of HR operations, ensuring accurate employee data management, timely benefits processing, and compliance with employment regulations while you focus on strategic talent development.",
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
      advantage: "Accurate employee records support better workforce management, streamlined benefits administration improves employee satisfaction, reduced HR administrative burden, and ensured compliance with employment documentation requirements",
      gradient: "from-amber-50/50 to-orange-50/50"
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "Compliance & Regulatory Support",
      subtitle: "Navigate regulations with confidence and certainty",
      description: "Ensuring your business processes follow all applicable legal and industry-specific regulations. We monitor regulatory changes, implement compliance frameworks, and maintain documentation to protect your business from legal risks, penalties, and reputational damage while keeping you audit-ready at all times.",
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
      advantage: "Reduced legal and financial risks through proactive compliance, peace of mind with expert regulatory guidance, audit-ready documentation and processes, and protection of business reputation through adherence to standards",
      gradient: "from-indigo-50/50 to-violet-50/50"
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

                  {/* Service-specific sections */}
                  {/* Document Management */}
                  {service.whatWeManage && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">What We Manage:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.whatWeManage.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.ourApproach && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Our Approach:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.ourApproach.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Order Processing */}
                  {service.orderProcessing && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Order Processing:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.orderProcessing.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.fulfillmentCoordination && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Fulfillment Coordination:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.fulfillmentCoordination.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Email & Chat Support */}
                  {service.whatWeHandle && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">What We Handle:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.whatWeHandle.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.serviceStandards && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Our Service Standards:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.serviceStandards.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* HR Support */}
                  {service.employeeRecordManagement && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Employee Record Management:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.employeeRecordManagement.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.benefitsAdministration && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Benefits Administration:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.benefitsAdministration.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Compliance */}
                  {service.complianceMonitoring && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Compliance Monitoring:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.complianceMonitoring.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.documentationReporting && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Documentation & Reporting:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.documentationReporting.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {service.auditReadiness && (
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-brand-primary mb-3">Audit Readiness:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.auditReadiness.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
