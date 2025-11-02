import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { Globe, Award, Shield, Target, Users, TrendingUp, Settings } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

// Import icons for service cards
import peopleIcon from "@assets/Asset 17_1757767623440.png";
import gearsIcon from "@assets/Asset 5_1757767623439.png";
import heroBg1 from "@assets/hero-bg1.jpg";
import heroBg2 from "@assets/hero-bg2.jpg"

export default function Home() {
  const { t } = useTranslation();

  const handleGetStarted = () => {
    window.location.href = "/contact";
  };

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="bg-bg-base py-16 pt-28 pb-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-2 relative z-10 flex flex-col justify-between h-full">
              {/* Main Hero Content */}
              <div className="space-y-6 animate-in slide-in-from-left duration-700">
                <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary leading-tight" data-testid="hero-title">
                  {t.home.hero.title}
                </h1>

                <p className="text-base text-text-secondary leading-relaxed max-w-xl" data-testid="hero-description">
                  {t.home.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/career">
                    <Button
                      className="bg-neutral-dark hover:bg-neutral-dark/90 text-white px-8 py-6 text-base font-medium rounded-lg shadow-medium hover:shadow-strong transition-all duration-300"
                      data-testid="button-find-talent"
                    >
                      {t.home.hero.findTalent}
                    </Button>
                  </Link>

                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-2 border-neutral-dark text-neutral-dark hover:bg-neutral-dark hover:text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300"
                      data-testid="button-learn-more"
                    >
                      {t.home.hero.learnMore}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Metrics Section */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-6">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-brand-primary mb-1" data-testid="metric-talents">
                    {t.home.hero.metrics.talents}
                  </div>
                  <div className="text-xs text-text-secondary" data-testid="metric-talents-label">
                    {t.home.hero.metrics.talentsLabel}
                  </div>
                </div>

                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-brand-primary mb-1" data-testid="metric-clients">
                    {t.home.hero.metrics.clients}
                  </div>
                  <div className="text-xs text-text-secondary" data-testid="metric-clients-label">
                    {t.home.hero.metrics.clientsLabel}
                  </div>
                </div>

                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-brand-primary mb-1" data-testid="metric-retention">
                    {t.home.hero.metrics.retention}
                  </div>
                  <div className="text-xs text-text-secondary" data-testid="metric-retention-label">
                    {t.home.hero.metrics.retentionLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Bento Grid Column */}
            <div className="lg:col-span-3 relative">
              <div className="grid grid-cols-2 gap-4 h-[400px]">
                {/* Left Column - Two Stacked Metric Cards */}
                <div className="flex flex-col gap-4">
                  {/* Top - Metric Card with Success Color */}
                  <div className="bg-[#E7F1AB] rounded-2xl p-6 flex flex-col justify-between shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-1 flex-1">
                    <div className="flex items-start justify-between">
                      <TrendingUp className="w-7 h-7 text-neutral-dark" />
                      <span className="text-xs font-medium text-neutral-dark/70">{t.home.hero.bentoGrid.growth.badge}</span>
                    </div>
                    <div className="mt-auto">
                      <div className="text-3xl font-bold text-neutral-dark mb-1">+4.5%</div>
                      <p className="text-xs text-neutral-dark/80">{t.home.hero.bentoGrid.growth.description}</p>
                    </div>
                  </div>

                  {/* Bottom - Image Card */}
                  <div className="rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-[1.02] flex-1">
                    <img
                      src={heroBg1}
                      alt="Professional workspace environment"
                      className="w-full h-full object-cover"
                      data-testid="bento-image-2"
                    />
                  </div>
                </div>

                {/* Right Column - Large Image Card */}
                <div className="rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 transform hover:scale-[1.02]">
                  <img
                    src={heroBg2}
                    alt="Professional business environment"
                    className="w-full h-full object-cover"
                    data-testid="bento-image-1"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-bg-section relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-bg-surface border border-brand-accent/20 mb-6">
              <Target className="w-3 h-3 text-brand-accent animate-pulse" />
              <span className="text-sm font-medium text-text-primary">{t.home.services.badge}</span>
            </div>
            
            <h2 className="text-4xl font-bold text-brand-primary mb-4" data-testid="services-title">{t.home.services.title}</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto" data-testid="services-description">
              {t.home.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title={t.home.services.bpo.title}
              description={t.home.services.bpo.description}
              features={[
                "Cloud Accounting Services",
                "Payroll Management", 
                "Tax Services",
                "Image Editing"
              ]}
              logoSrc={peopleIcon}
              variant="primary"
              onLearnMore={() => window.location.href = "/services/bpo"}
            />
            
            <ServiceCard
              title={t.home.services.software.title}
              description={t.home.services.software.description}
              features={[
                "Custom Software Development",
                "Mobile Applications",
                "Cloud Infrastructure",
                "Test Automation"
              ]}
              logoSrc={gearsIcon}
              variant="secondary"
              onLearnMore={() => window.location.href = "/services/software"}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-bg-base relative">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-secondary/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                <Users className="w-3 h-3 text-brand-accent animate-pulse" />
                <span className="text-sm font-medium text-text-primary">{t.about.values.badge}</span>
              </div>
              
              <h2 className="text-4xl font-bold text-brand-primary mb-6" data-testid="why-choose-title">{t.career.whyChoose.title}</h2>
              <p className="text-lg text-text-secondary mb-8" data-testid="why-choose-description">
                {t.about.description}
              </p>
              
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-bg-surface hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-global-reach">
                  <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-subtle">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors duration-300">{t.about.values.globalPartnership.title}</h3>
                    <p className="text-text-secondary">{t.about.values.globalPartnership.description}</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-bg-surface hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-expert-leadership">
                  <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-subtle">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors duration-300">{t.about.values.excellence.title}</h3>
                    <p className="text-text-secondary">{t.about.values.excellence.description}</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-bg-surface hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-trusted-partnership">
                  <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-subtle">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors duration-300">{t.about.values.integrity.title}</h3>
                    <p className="text-text-secondary">{t.about.values.integrity.description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaboration" 
                className="rounded-2xl shadow-medium w-full h-auto"
                data-testid="team-image"
              />
            </div>
          </div>
        </div>
      </section>

      </div>
  );
}
