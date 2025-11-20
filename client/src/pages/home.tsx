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
import poBg from "@assets/bpo_bg.svg"
import caBg from "@assets/ca_bg.svg"
import sdBg from "@assets/sd_bg.svg"
import ieBg from "@assets/ie_bg.svg"

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

        {/* Animated blob gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 ml-40 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 -ml-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

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
                  We deliver comprehensive outsourcing services—from{" "}
                  <span className="font-semibold">Cloud Accounting</span> and{" "}
                  <span className="font-semibold">BPO</span> to{" "}
                  <span className="font-semibold">Software Development</span>
                  —by aligning the latest technology with industry best practices to help you operate efficiently and grow.
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

      {/* Service Categories Grid */}
      <section className="py-20 bg-bg-base-darker relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
              <Settings className="w-3 h-3 text-brand-accent animate-pulse" />
              <span className="text-sm font-medium text-text-primary">Our Services</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">Comprehensive Outsourcing Solutions</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We provide end-to-end solutions for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-mediterranean-linen hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-global-reach">
                  <div className="w-12 h-12 bg-mediterranean-french rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-subtle">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-mediterranean-herb transition-colors duration-300">{t.about.values.globalPartnership.title}</h3>
                    <p className="text-text-secondary">{t.about.values.globalPartnership.description}</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-mediterranean-linen hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-expert-leadership">
                  <div className="w-12 h-12 bg-mediterranean-calendula rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-subtle">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-mediterranean-herb transition-colors duration-300">{t.about.values.excellence.title}</h3>
                    <p className="text-text-secondary">{t.about.values.excellence.description}</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-mediterranean-linen hover:shadow-medium transform hover:-translate-y-1 transition-all duration-300 cursor-pointer" data-testid="feature-trusted-partnership">
                  <div className="w-12 h-12 bg-mediterranean-olive rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-subtle">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-2 group-hover:text-mediterranean-herb transition-colors duration-300">{t.about.values.integrity.title}</h3>
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
