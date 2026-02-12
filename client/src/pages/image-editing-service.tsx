import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Scissors, Palette, UserCircle, Layers, Wand2, Sun, Sparkles, Package } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS, IMAGE_EDITING_EXAMPLES, IE_BACKGROUNDS } from "@/lib/assets";
import { SEO } from "@/components/seo/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import ShinyText from "@/components/ShinyText";

export default function ImageEditingService() {
  const { t } = useTranslation();

  const imageEditingServices = [
    {
      icon: Scissors,
      title: "Background\nRemoval",
      subtitle: "Clean, professional backgrounds for product photography",
      description: "Precision background removal and replacement that makes your products stand out. Our skilled editors handle complex edges, fine details, and transparent objects with meticulous attention, delivering pixel-perfect results that enhance your product presentation across all platforms.",
      image: IMAGE_EDITING_EXAMPLES.backgroundRemoval,
      features: [
        "Clean background removal",
        "Complex edge detection",
        "Background replacement",
        "Shadow preservation"
      ]
    },
    {
      icon: Palette,
      title: "Color\nCorrection",
      subtitle: "Vibrant, accurate colors that capture attention",
      description: "Advanced color grading and correction that brings your images to life. We adjust white balance, exposure, contrast, and saturation to ensure your images display true-to-life colors with optimal vibrancy, making them visually appealing while maintaining natural appearance.",
      image: IMAGE_EDITING_EXAMPLES.colorCorrection,
      features: [
        "White balance adjustment",
        "Exposure optimization",
        "Color saturation",
        "Batch processing"
      ]
    },
    {
      icon: UserCircle,
      title: "Portrait\nRetouching",
      subtitle: "Natural beauty enhancement for professional portraits",
      description: "Expert portrait retouching that enhances natural beauty while maintaining authentic appearance. Our editors skillfully remove blemishes, smooth skin, brighten eyes, and refine features, creating polished professional portraits that look naturally flawless.",
      image: IMAGE_EDITING_EXAMPLES.faceSwapping,
      features: [
        "Skin smoothing",
        "Eye brightening",
        "Face contouring",
        "Hair enhancement"
      ]
    },
    {
      icon: Layers,
      title: "Image\nMasking",
      subtitle: "Precise selections for complex editing requirements",
      description: "Advanced image masking techniques for objects with complex edges and fine details. We create precise masks for hair, fur, glass, and transparent objects, enabling sophisticated editing effects while preserving natural edges and intricate details.",
      image: IMAGE_EDITING_EXAMPLES.imageMasking,
      features: [
        "Layer masking",
        "Alpha channel masking",
        "Clipping path creation",
        "Advanced hair masking"
      ]
    },
    {
      icon: Wand2,
      title: "Photo\nManipulation",
      subtitle: "Creative image composition for stunning visuals",
      description: "Artistic photo manipulation that transforms ordinary images into extraordinary visual stories. We seamlessly blend multiple elements, create imaginative scenes, and add creative effects while maintaining photorealistic quality that captivates your audience.",
      image: IMAGE_EDITING_EXAMPLES.photoManipulation,
      features: [
        "Multi-image compositing",
        "Creative scene creation",
        "Object manipulation",
        "Artistic effects"
      ]
    },
    {
      icon: Sun,
      title: "Shadow \u0026\nReflection",
      subtitle: "Realistic depth for product photography",
      description: "Professional shadow creation and reflection effects that add depth and realism to product photography. Our editors craft natural-looking shadows and reflections that ground your products and create appealing three-dimensional presentation.",
      image: IMAGE_EDITING_EXAMPLES.shadowReflection,
      features: [
        "Drop shadow creation",
        "Reflection effects",
        "Shadow consistency",
        "Custom intensity"
      ]
    },
    {
      icon: Sparkles,
      title: "Photo\nEnhancement",
      subtitle: "Optimize every image detail for maximum impact",
      description: "Comprehensive photo enhancement that optimizes sharpness, clarity, and overall image quality. We refine details, reduce noise, enhance textures, and ensure your images look crisp and professional across all viewing platforms and print materials.",
      image: IMAGE_EDITING_EXAMPLES.photoRetouching,
      features: [
        "Sharpness enhancement",
        "Noise reduction",
        "Detail refinement",
        "Resolution upscaling"
      ]
    },
    {
      icon: Package,
      title: "Product\nEnhancement",
      subtitle: "Jewelry, clothing, and product perfection",
      description: "Specialized product enhancement for jewelry, clothing, and e-commerce items. We remove imperfections, enhance textures, adjust proportions, and ensure your products look their absolute best, driving customer interest and purchase decisions.",
      image: IMAGE_EDITING_EXAMPLES.jewelryRetouch,
      features: [
        "Jewelry retouching",
        "Clothing refinement",
        "Shape adjustment",
        "Texture enhancement"
      ]
    }
  ];

  return (
    <div className="pt-16" data-testid="image-editing-service-page">
      <SEO
        title="Image Editing Services - Photo Retouching & Background Removal | Absouts"
        description="Professional image editing services including background removal, color correction, retouching, clipping path, and photo manipulation. High-quality editing for e-commerce, photography, and marketing."
        keywords="image editing services, photo retouching, background removal, color correction, clipping path, photo manipulation, product photography editing, e-commerce image editing"
        url="https://absouts.com/image-editing"
      />
      <ServiceSchema
        name="Image Editing Services"
        description="Professional image editing including background removal, color correction, photo retouching, clipping path, and manipulation services."
        url="https://absouts.com/image-editing"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://absouts.com' },
          { name: 'Services', url: 'https://absouts.com/services' },
          { name: 'Image Editing', url: 'https://absouts.com/image-editing' }
        ]}
      />

      {/* Hero Section - Original Design */}
      <section className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link href="/services">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.common.backToServices}
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-brand-primary mb-6">Image Editing Services</h1>
            <p className="text-xl text-text-secondary max-w-4xl">
              High-volume, detail-accurate image processing optimized for speed and brand consistency. Built for teams requiring fast turnaround with uniform output quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services - Minimalist Asymmetric Layout with Original Backgrounds */}
      {imageEditingServices.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? 'bg-bg-base' : 'bg-bg-base-darker';
        const backgroundImage = isEven ? IE_BACKGROUNDS.bg1 : IE_BACKGROUNDS.bg2;
        const IconComponent = service.icon;
        
        return (
          <section
            key={index}
            className={`relative py-24 sm:py-32 ${bgClass}`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                
                {/* Text Content */}
                <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                  {/* Service Number */}
                  <div className="text-sm font-medium text-gray-400 mb-6 tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Large Title with Shiny Effect */}
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
                    {service.title.split('\n').map((line, i) => (
                      <span key={i} className="block">
                        <ShinyText
                          text={line}
                          speed={3}
                          color="#111827"
                          shineColor="#50816C"
                          spread={140}
                          className="font-bold"
                        />
                      </span>
                    ))}
                  </h2>
                  
                  {/* Icon Badge */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-700" />
                    </div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>
                  
                  {/* Description - Reduced */}
                  <p className="text-lg text-gray-600 font-light leading-relaxed mb-10 max-w-lg">
                    {service.description}
                  </p>
                  
                  {/* Capabilities Section */}
                  <div className="mt-12">
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-16 h-px bg-green-700" />
                      <span className="text-sm font-medium text-green-800 uppercase tracking-[0.25em]">
                        Capabilities
                      </span>
                    </div>
                    
                    {/* Features Grid - 2x2 with Checkmarks */}
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                      {service.features.map((feature, idx) => {
                        const featureLabels = [
                          { title: "E-commerce Ready", subtitle: "Clean product backgrounds" },
                          { title: "Complex Edges", subtitle: "Hair, fur & transparency" },
                          { title: "Custom Scenes", subtitle: "Any background you need" },
                          { title: "Natural Shadows", subtitle: "Preserved reflections" }
                        ];
                        const label = featureLabels[idx] || { title: feature, subtitle: "" };
                        
                        return (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full border border-green-700 flex items-center justify-center mt-0.5">
                              <CheckCircle className="w-4 h-4 text-green-800" strokeWidth={1.5} />
                            </div>
                            <div>
                              <h4 className="text-base font-semibold text-gray-900 mb-1">
                                {label.title}
                              </h4>
                              <p className="text-sm text-gray-500 font-light">
                                {label.subtitle}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Large Image */}
                <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                  {service.image && (
                    <div className="relative group">
                      {/* Decorative frame */}
                      <div className="absolute -inset-4 bg-white/30 to-transparent rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500" />
                      
                      <div className="relative overflow-hidden rounded-2xl shadow-strong border-2 border-gray-900/10">
                        <img
                          src={service.image}
                          alt={`${service.title.replace('\n', ' ')} example`}
                          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Hover overlay with subtle gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Floating accent */}
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-700/10 rounded-full blur-2xl" />
                    </div>
                  )}
                </div>
                
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
