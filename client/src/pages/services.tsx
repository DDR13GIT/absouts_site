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

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* BPO Services */}
            <div className="group service-card bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white shadow-strong hover:shadow-3xl transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden" data-testid="bpo-services-card">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              
              <div className="w-20 h-20 bg-brand-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-medium relative z-10">
                <Building2 className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">{t.services.bpo.title}</h2>
              <p className="text-white/90 mb-6 text-lg leading-relaxed relative z-10">
                {t.services.bpo.description}
              </p>
              <Link href="/services/bpo">
                <Button className="group/btn bg-white text-brand-primary hover:bg-gray-100 shadow-medium hover:shadow-strong transform hover:-translate-y-0.5 transition-all duration-300 relative z-10 rounded-full" data-testid="button-explore-bpo">
                  {t.services.bpo.button}
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </Link>
            </div>

            {/* Software Services */}
            <div className="group service-card bg-gradient-to-br from-brand-accent to-brand-secondary rounded-2xl p-8 text-white shadow-strong hover:shadow-3xl transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden" data-testid="software-services-card">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-medium relative z-10">
                <Monitor className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h2 className="text-3xl font-bold mb-4 relative z-10">{t.services.software.title}</h2>
              <p className="text-white/90 mb-6 text-lg leading-relaxed relative z-10">
                {t.services.software.description}
              </p>
              <Link href="/services/software">
                <Button className="group/btn bg-white text-brand-primary hover:bg-gray-100 shadow-medium hover:shadow-strong transform hover:-translate-y-0.5 transition-all duration-300 relative z-10 rounded-full" data-testid="button-explore-software">
                  {t.services.software.button}
                  <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </Button>
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
                return (
                  <div key={index} className="group text-center p-6 rounded-2xl hover:bg-white/70 hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid={`pillar-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-medium">
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors duration-300">{pillar.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="group bg-white/70 backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-2xl p-8" data-testid="benefits-section">
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center group-hover:text-brand-accent transition-colors duration-300 relative z-10">{t.services.benefits.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center" data-testid={`benefit-${benefit.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-medium">
                      <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors duration-300">{benefit.title}</h3>
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
