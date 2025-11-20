import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, ServerCog, Server, GraduationCap, Rocket, BarChart, SquareArrowOutUpLeft, Building2, Monitor } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import poBg from "@assets/bpo_bg.svg";
import caBg from "@assets/ca_bg.svg";
import sdBg from "@assets/sd_bg.svg";
import ieBg from "@assets/ie_bg.svg";

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

        {/* Animated blob gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 ml-40 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 -ml-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {/* Card 1 - Cloud Accounting */}
            <div className="relative rounded-3xl p-8 overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[350px]">
              <div className="absolute inset-0">
                <img
                  src={caBg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-6">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Finance Ready</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">Cloud Accounting</h3>
                <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                  End-to-end bookkeeping, reporting, and compliance handled with precision and automation. Removes manual workload and enforces consistent financial accuracy.
                </p>
              </div>

              <Link href="/cloud-accounting" className="absolute bottom-8 left-8 z-20">
                <button className="inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300">
                  Explore
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Card 2 - Business Process Outsourcing */}
            <div className="relative rounded-3xl p-8 overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[350px]">
              <div className="absolute inset-0">
                <img
                  src={poBg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-6">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Efficiency Guaranteed</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">Business Process Outsourcing</h3>
                <p className="text-gray-700 mb-8 leading-relaxed font-medium ">
                  Delegated operational tasks executed with consistent accuracy and measurable efficiency gains. Reduces operational overhead and stabilizes process quality.
                </p>
              </div>

              <Link href="/bpo-services" className="absolute bottom-8 left-8 z-20">
                <button className="inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-gray-500 hover:text-gray-600 transition-colors duration-300">
                  Explore
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Card 3 - Software Development */}
            <div className="relative rounded-3xl p-8 overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[350px]">
              <div className="absolute inset-0">
                <img
                  src={sdBg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-6">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Built for Scale</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">Software Development</h3>
                <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                  Custom software engineered for scale, reliability, and long-term maintainability. Covers full-cycle delivery from architecture to deployment.
                </p>
              </div>

              <Link href="/services/software" className="absolute bottom-8 left-8 z-20">
                <button className="inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-purple-500 hover:text-purple-500 transition-colors duration-300">
                  Explore
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Card 4 - Image Editing Service */}
            <div className="relative rounded-3xl p-8 overflow-hidden group hover:shadow-xl transition-all duration-300 min-h-[350px]">
              <div className="absolute inset-0">
                <img
                  src={ieBg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/80 mb-6">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">Precision Assured</span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">Image Editing Service</h3>
                <p className="text-gray-700 mb-8 leading-relaxed font-medium">
                  High-volume, detail-accurate image processing optimized for speed and brand consistency. Built for teams requiring fast turnaround with uniform output quality.
                </p>
              </div>

              <Link href="/image-editing" className="absolute bottom-8 left-8 z-20">
                <button className="inline-flex items-center text-gray-900 font-medium border-b-2 border-gray-900 pb-1 hover:border-green-600 hover:text-green-600 transition-colors duration-300">
                  Explore
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
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
