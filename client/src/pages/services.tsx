import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, ServerCog, Server, GraduationCap, Rocket, BarChart, SquareArrowOutUpLeft, Building2, Monitor } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

export default function Services() {
  const { t } = useTranslation();

  const servicePillars = [
    {
      icon: Users,
      title: t.services.pillars.clientRelationship.title,
      description: t.services.pillars.clientRelationship.description
    },
    {
      icon: ServerCog,
      title: t.services.pillars.serviceDelivery.title,
      description: t.services.pillars.serviceDelivery.description
    },
    {
      icon: Server,
      title: t.services.pillars.technology.title,
      description: t.services.pillars.technology.description
    },
    {
      icon: GraduationCap,
      title: t.services.pillars.talent.title,
      description: t.services.pillars.talent.description
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: t.services.benefits.vendorManagement.title,
      description: t.services.benefits.vendorManagement.description
    },
    {
      icon: BarChart,
      title: t.services.benefits.efficiency.title,
      description: t.services.benefits.efficiency.description
    },
    {
      icon: SquareArrowOutUpLeft,
      title: t.services.benefits.scalability.title,
      description: t.services.benefits.scalability.description
    }
  ];

  return (
    <div className="pt-16" data-testid="services-page">
      <section className="py-20 bg-bg-base relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-primary">{t.services.badge}</span>
            </div>

            <h1 className="text-5xl font-bold text-brand-primary mb-6" data-testid="services-title">{t.services.title}</h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto" data-testid="services-description">
              {t.services.description}
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Card 1 - Cloud Accounting */}
            <div className="relative rounded-3xl p-10 min-h-[400px] bg-gradient-to-br from-orange-100 to-orange-50 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Background decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
                <div className="absolute top-8 right-8 w-40 h-40 bg-orange-300 rounded-[3rem] transform rotate-12"></div>
                <div className="absolute top-24 right-0 w-32 h-32 bg-orange-200 rounded-[2.5rem] transform -rotate-6"></div>
                <div className="absolute top-2 right-20 w-36 h-36 bg-orange-200 rounded-[3rem]"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-8 self-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Finance Ready</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">Cloud Accounting</h3>
                <p className="text-gray-700 mb-10 leading-relaxed flex-grow">
                  End-to-end bookkeeping, reporting, and compliance handled with precision and automation. Removes manual workload and enforces consistent financial accuracy.
                </p>

                <Link href="/cloud-accounting">
                  <button className="inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300 self-start">
                    Explore Cloud Accounting
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 - Business Process Outsourcing */}
            <div className="relative rounded-3xl p-10 min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Background decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
                <div className="absolute top-6 right-6 w-40 h-40 bg-gray-400 rounded-full"></div>
                <div className="absolute top-28 right-16 w-32 h-32 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-8 right-4 w-28 h-28 bg-gray-300 rounded-full"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-8 self-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Efficiency Guaranteed</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">Business Process Outsourcing</h3>
                <p className="text-gray-700 mb-10 leading-relaxed flex-grow">
                  Delegated operational tasks executed with consistent accuracy and measurable efficiency gains. Reduces operational overhead and stabilizes process quality.
                </p>

                <Link href="/bpo-services">
                  <button className="inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-gray-500 hover:text-gray-600 transition-colors duration-300 self-start">
                    Explore BPO
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 3 - Software Development */}
            <div className="relative rounded-3xl p-10 min-h-[400px] bg-gradient-to-br from-purple-100 to-purple-50 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Background decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-30">
                <div className="absolute top-12 right-8 w-48 h-48 bg-purple-300 rounded-[4rem] transform rotate-45"></div>
                <div className="absolute bottom-8 right-12 w-40 h-40 bg-purple-200 rounded-[3rem]"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-8 self-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Built for Scale</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">Software Development</h3>
                <p className="text-gray-700 mb-10 leading-relaxed flex-grow">
                  Custom software engineered for scale, reliability, and long-term maintainability. Covers full-cycle delivery from architecture to deployment.
                </p>

                <Link href="/services/software">
                  <button className="inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-purple-500 hover:text-purple-500 transition-colors duration-300 self-start">
                    Explore Software Development
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 4 - Image Editing Service */}
            <div className="relative rounded-3xl p-10 min-h-[400px] bg-gradient-to-br from-green-100 to-green-50 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
              {/* Background decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-40">
                <div className="absolute top-8 right-8 w-40 h-48 bg-green-600 rounded-[2rem]"></div>
                <div className="absolute top-24 right-4 w-32 h-40 bg-green-400 rounded-[2rem]"></div>
                <div className="absolute bottom-4 right-12 w-36 h-44 bg-green-300 rounded-[2rem]"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-8 self-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Precision Assured</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-6">Image Editing Service</h3>
                <p className="text-gray-700 mb-10 leading-relaxed flex-grow">
                  High-volume, detail-accurate image processing optimized for speed and brand consistency. Built for teams requiring fast turnaround with uniform output quality.
                </p>

                <Link href="/image-editing">
                  <button className="inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-green-600 hover:text-green-600 transition-colors duration-300 self-start">
                    Explore Image Editing
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Service Pillars */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-text-primary">{t.services.pillars.badge}</span>
              </div>
              <h2 className="text-4xl font-bold text-brand-primary" data-testid="service-pillars-title">{t.services.pillars.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicePillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                const pillarColors = [
                  'bg-mediterranean-calendula',
                  'bg-mediterranean-french',
                  'bg-mediterranean-olive',
                  'bg-mediterranean-clementine'
                ];
                const bgColors = [
                  'hover:bg-mediterranean-linen',
                  'hover:bg-mediterranean-sky/20',
                  'hover:bg-mediterranean-olive/10',
                  'hover:bg-mediterranean-clementine/10'
                ];
                return (
                  <div key={index} className={`group text-center p-6 rounded-2xl ${bgColors[index]} hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`} data-testid={`pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className={`w-16 h-16 ${pillarColors[index]} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-medium`}>
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3 group-hover:text-mediterranean-herb transition-colors duration-300">{pillar.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="group bg-mediterranean-linen/80 backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transform hover:-translate-y-2 transition-all duration-500 hover:bg-mediterranean-linen cursor-pointer relative overflow-hidden rounded-2xl p-8" data-testid="benefits-section">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-mediterranean-sky/10 to-mediterranean-olive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center group-hover:text-mediterranean-herb transition-colors duration-300 relative z-10">{t.services.benefits.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                const benefitColors = [
                  'bg-mediterranean-french',
                  'bg-mediterranean-terra',
                  'bg-mediterranean-herb'
                ];
                return (
                  <div key={index} className="text-center" data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className={`w-12 h-12 ${benefitColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-medium`}>
                      <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-primary mb-2 group-hover:text-mediterranean-herb transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
