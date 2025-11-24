import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS } from "@/lib/assets";
import { SEO } from "@/components/seo/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

/**
 * Business Process Outsourcing Service Detail Page
 * Comprehensive BPO services including document management, order processing, support, HR, and compliance
 */
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
      description: "We transform chaotic physical and digital files into organized, searchable assets. Our comprehensive management systems ensure your data is secure, compliant, and always at your fingertips.",
      whatWeProvide: [
        "Digital and physical document organization",
        "Secure cloud-based storage & backup",
        "Indexing and categorization systems",
        "Quick retrieval & version control"
      ],
      advantage: "Improved operational efficiency and enhanced data security.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800",
      tags: ["Organization", "Security", "Digitization"]
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Order Processing & Fulfillment",
      subtitle: "End-to-end order lifecycle management with real-time inventory updates and seamless logistics coordination.",
      description: "From the moment an order is placed to its final delivery, we manage the entire lifecycle. We ensure accuracy, speed, and transparency in your fulfillment operations.",
      whatWeProvide: [
        "Order entry and verification",
        "Payment processing & confirmation",
        "Inventory allocation & updates",
        "Returns and exchange processing"
      ],
      advantage: "Faster turnaround times and reduced processing errors.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
      tags: ["Logistics", "Speed", "Accuracy"]
    },
    {
      icon: SERVICE_ICONS.network,
      title: "Email & Chat Support Services",
      subtitle: "Professional multi-channel support that maintains your brand voice while ensuring prompt, efficient resolution.",
      description: "Our dedicated support teams act as an extension of your brand. We handle inquiries with professionalism and empathy, ensuring every customer feels valued and heard.",
      whatWeProvide: [
        "Customer inquiries & support requests",
        "Vendor and supplier correspondence",
        "Prompt response with SLA adherence",
        "Issue escalation & resolution tracking"
      ],
      advantage: "Improved response times and higher customer satisfaction.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      tags: ["24/7 Support", "Multi-channel", "Satisfaction"]
    },
    {
      icon: SERVICE_ICONS.team,
      title: "HR Support Services",
      subtitle: "Comprehensive employee record management and benefits administration that handles HR complexities.",
      description: "We manage the administrative burden of HR so you can focus on your people. From records to benefits, we ensure your workforce is supported and compliant.",
      whatWeProvide: [
        "Employee personnel files maintenance",
        "Onboarding & offboarding documentation",
        "Benefits eligibility & processing",
        "Leave and attendance management"
      ],
      advantage: "Streamlined administration and ensured compliance.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
      tags: ["Talent", "Compliance", "Benefits"]
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "Compliance & Regulatory Support",
      subtitle: "Proactive monitoring and implementation of compliance frameworks that protect your business from legal risks.",
      description: "Navigate the complex landscape of regulations with confidence. We monitor changes, manage documentation, and ensure your business remains audit-ready at all times.",
      whatWeProvide: [
        "Regulatory filing preparation",
        "Industry-specific compliance tracking",
        "Audit trail maintenance",
        "Incident reporting & corrective action"
      ],
      advantage: "Reduced legal risks and peace of mind.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      tags: ["Risk Management", "Audit Ready", "Standards"]
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-bg-base" data-testid="bpo-services-detail">
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
              Business Process Outsourcing
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed animate-in slide-in-from-bottom-5 duration-500 delay-100">
              Delegated operational tasks executed with consistent accuracy and measurable efficiency gains.
              Reduces operational overhead and stabilizes process quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="flex flex-col">
        {bpoServices.map((service, index) => (
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

                  {/* Tags */}
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
    </div>
  );
}
