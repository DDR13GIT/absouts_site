import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS, IMAGE_EDITING_EXAMPLES } from "@/lib/assets";

export default function ImageEditingService() {
  const { t } = useTranslation();

  const imageEditingServices = [
    {
      icon: SERVICE_ICONS.search,
      title: "Background Removal",
      description: "Professional background removal and replacement for product photography and portraits.",
      image: IMAGE_EDITING_EXAMPLES.backgroundRemoval,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: SERVICE_ICONS.media,
      title: "Color Correction",
      description: "Advanced color grading and correction for vibrant, professional-looking images.",
      image: IMAGE_EDITING_EXAMPLES.colorCorrection,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: SERVICE_ICONS.people,
      title: "Face Swapping",
      description: "Seamless face replacement and digital makeup for portrait enhancement.",
      image: IMAGE_EDITING_EXAMPLES.faceSwapping,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: SERVICE_ICONS.shield,
      title: "Image Masking",
      description: "Precise image masking for complex selections and detailed editing work.",
      image: IMAGE_EDITING_EXAMPLES.imageMasking,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: SERVICE_ICONS.lightbulb,
      title: "Photo Manipulation",
      description: "Creative photo manipulation and artistic enhancement for stunning visual effects.",
      image: IMAGE_EDITING_EXAMPLES.photoManipulation,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: SERVICE_ICONS.clock,
      title: "Shadow & Reflection",
      description: "Professional shadow creation and reflection effects for product photography.",
      image: IMAGE_EDITING_EXAMPLES.shadowReflection,
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: SERVICE_ICONS.report,
      title: "Photo Retouching",
      description: "Professional photo retouching for flawless skin, beauty enhancement, and detail refinement.",
      image: IMAGE_EDITING_EXAMPLES.photoRetouching,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: SERVICE_ICONS.hands,
      title: "Product Enhancement",
      description: "Jewelry, clothing, and product enhancement for e-commerce and marketing materials.",
      image: IMAGE_EDITING_EXAMPLES.jewelryRetouch,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const keyFeatures = [
    {
      title: "High-Volume Processing",
      description: "Handle thousands of images daily with consistent quality and rapid turnaround times.",
      icon: SERVICE_ICONS.clock
    },
    {
      title: "Brand Consistency",
      description: "Maintain uniform output quality across all images to strengthen your brand identity.",
      icon: SERVICE_ICONS.shield
    },
    {
      title: "Fast Turnaround",
      description: "Get your edited images back quickly without compromising on quality or attention to detail.",
      icon: SERVICE_ICONS.lightbulb
    },
    {
      title: "Detail Accuracy",
      description: "Meticulous attention to detail ensuring pixel-perfect results for every project.",
      icon: SERVICE_ICONS.search
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "Product photography enhancement for online stores and marketplaces."
    },
    {
      name: "Real Estate",
      description: "Property photo editing for listings and marketing materials."
    },
    {
      name: "Fashion & Apparel",
      description: "Model photography retouching and clothing enhancement."
    },
    {
      name: "Marketing Agencies",
      description: "Creative image manipulation for advertising campaigns."
    },
    {
      name: "Photography Studios",
      description: "Professional portrait and event photo retouching."
    },
    {
      name: "Publishing",
      description: "Editorial image enhancement for magazines and publications."
    }
  ];

  return (
    <div className="pt-16" data-testid="image-editing-service-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-brand-accent hover:text-brand-accent/80 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>

            <div className="relative">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Image Editing Services
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
            </div>

            <p className="text-xl text-text-secondary max-w-4xl leading-relaxed">
              High-volume, detail-accurate image processing optimized for speed and brand consistency. Built for teams requiring fast turnaround with uniform output quality.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Why Choose Our Image Editing Services</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Professional image editing solutions designed for businesses that demand excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-bg-section to-white rounded-xl p-6 shadow-medium hover:shadow-strong transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 shadow-medium">
                  <img src={feature.icon} alt={feature.title} className="w-8 h-8 object-contain brightness-0 invert" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Editing Services Grid */}
      <section className="py-20 bg-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Our Image Editing Services</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Comprehensive editing solutions for all your image enhancement needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {imageEditingServices.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${service.gradient} rounded-xl p-6 text-white shadow-medium hover:shadow-strong transform hover:-translate-y-2 transition-all duration-300`}>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/90 text-sm mb-4">{service.description}</p>
                {service.image && (
                  <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                    <img src={service.image} alt={`${service.title} example`} className="w-full h-32 object-cover" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Industries We Serve</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Trusted by businesses across diverse sectors for professional image editing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50 rounded-xl p-6 hover:shadow-medium transition-shadow duration-300">
                <h3 className="text-xl font-bold text-brand-primary mb-2">{industry.name}</h3>
                <p className="text-text-secondary">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Images?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our expert team handle your image editing needs with precision and speed.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
