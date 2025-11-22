import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Scissors, Palette, UserCircle, Layers, Wand2, Sun, Sparkles, Package } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";
import { SERVICE_ICONS, IMAGE_EDITING_EXAMPLES, IE_BACKGROUNDS } from "@/lib/assets";
import { SEO } from "@/components/seo/SEO";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

export default function ImageEditingService() {
  const { t } = useTranslation();

  const imageEditingServices = [
    {
      icon: Scissors,
      title: "Background Removal Services",
      subtitle: "Clean, professional backgrounds for product photography",
      description: "Precision background removal and replacement that makes your products stand out. Our skilled editors handle complex edges, fine details, and transparent objects with meticulous attention, delivering pixel-perfect results that enhance your product presentation across all platforms.",
      image: IMAGE_EDITING_EXAMPLES.backgroundRemoval,
      whatWeProvide: [
        "Clean background removal for e-commerce products",
        "Complex edge detection for hair, fur, and transparent objects",
        "Background replacement with custom colors or scenes",
        "Shadow and reflection preservation options"
      ],
      advantage: "Professional background removal enhances product presentation, increases conversion rates, maintains brand consistency across catalogs, and provides ready-to-use images for multiple channels"
    },
    {
      icon: Palette,
      title: "Color Correction Services",
      subtitle: "Vibrant, accurate colors that capture attention",
      description: "Advanced color grading and correction that brings your images to life. We adjust white balance, exposure, contrast, and saturation to ensure your images display true-to-life colors with optimal vibrancy, making them visually appealing while maintaining natural appearance.",
      image: IMAGE_EDITING_EXAMPLES.colorCorrection,
      whatWeProvide: [
        "White balance adjustment for accurate color representation",
        "Exposure and contrast optimization",
        "Color saturation and vibrancy enhancement",
        "Batch processing for consistent color across image sets"
      ],
      advantage: "Accurate color representation builds customer trust, enhances visual appeal, reduces product returns from color mismatches, and creates cohesive brand aesthetics across all marketing materials"
    },
    {
      icon: UserCircle,
      title: "Portrait Retouching Services",
      subtitle: "Natural beauty enhancement for professional portraits",
      description: "Expert portrait retouching that enhances natural beauty while maintaining authentic appearance. Our editors skillfully remove blemishes, smooth skin, brighten eyes, and refine features, creating polished professional portraits that look naturally flawless.",
      image: IMAGE_EDITING_EXAMPLES.faceSwapping,
      whatWeProvide: [
        "Skin smoothing and blemish removal",
        "Eye and teeth brightening",
        "Face contouring and feature refinement",
        "Hair enhancement and flyaway removal"
      ],
      advantage: "Professional portrait retouching enhances subject confidence, creates polished professional images, maintains natural appearance, and produces consistent quality across large photo sets"
    },
    {
      icon: Layers,
      title: "Image Masking Services",
      subtitle: "Precise selections for complex editing requirements",
      description: "Advanced image masking techniques for objects with complex edges and fine details. We create precise masks for hair, fur, glass, and transparent objects, enabling sophisticated editing effects while preserving natural edges and intricate details.",
      image: IMAGE_EDITING_EXAMPLES.imageMasking,
      whatWeProvide: [
        "Layer masking for complex edge preservation",
        "Alpha channel masking for transparency",
        "Clipping path creation for sharp-edged objects",
        "Advanced masking for hair and fur details"
      ],
      advantage: "Precise masking enables sophisticated editing effects, preserves fine details and natural edges, provides flexibility for multiple output variations, and maintains professional quality in complex compositions"
    },
    {
      icon: Wand2,
      title: "Photo Manipulation Services",
      subtitle: "Creative image composition for stunning visuals",
      description: "Artistic photo manipulation that transforms ordinary images into extraordinary visual stories. We seamlessly blend multiple elements, create imaginative scenes, and add creative effects while maintaining photorealistic quality that captivates your audience.",
      image: IMAGE_EDITING_EXAMPLES.photoManipulation,
      whatWeProvide: [
        "Multi-image compositing and blending",
        "Creative scene creation and enhancement",
        "Object addition and removal",
        "Artistic effects and stylization"
      ],
      advantage: "Creative manipulation enables unique marketing visuals, stands out in competitive markets, tells compelling visual stories, and creates memorable brand imagery without expensive photoshoots"
    },
    {
      icon: Sun,
      title: "Shadow & Reflection Services",
      subtitle: "Realistic depth for product photography",
      description: "Professional shadow creation and reflection effects that add depth and realism to product photography. Our editors craft natural-looking shadows and reflections that ground your products and create appealing three-dimensional presentation.",
      image: IMAGE_EDITING_EXAMPLES.shadowReflection,
      whatWeProvide: [
        "Natural drop shadow creation",
        "Reflection effects for surfaces",
        "Shadow consistency across product lines",
        "Customizable shadow intensity and direction"
      ],
      advantage: "Realistic shadows and reflections add depth and dimension, create professional product presentation, enhance perceived value, and provide consistent visual language across product catalogs"
    },
    {
      icon: Sparkles,
      title: "Photo Enhancement Services",
      subtitle: "Optimize every image detail for maximum impact",
      description: "Comprehensive photo enhancement that optimizes sharpness, clarity, and overall image quality. We refine details, reduce noise, enhance textures, and ensure your images look crisp and professional across all viewing platforms and print materials.",
      image: IMAGE_EDITING_EXAMPLES.photoRetouching,
      whatWeProvide: [
        "Sharpness and clarity enhancement",
        "Noise reduction and grain removal",
        "Detail enhancement and texture refinement",
        "Image resolution upscaling when needed"
      ],
      advantage: "Enhanced image quality improves professional appearance, increases customer engagement, ensures print-ready output, and maintains brand standards across all marketing channels"
    },
    {
      icon: Package,
      title: "Product Enhancement Services",
      subtitle: "Jewelry, clothing, and product perfection",
      description: "Specialized product enhancement for jewelry, clothing, and e-commerce items. We remove imperfections, enhance textures, adjust proportions, and ensure your products look their absolute best, driving customer interest and purchase decisions.",
      image: IMAGE_EDITING_EXAMPLES.jewelryRetouch,
      whatWeProvide: [
        "Jewelry retouching and metal enhancement",
        "Clothing wrinkle removal and fabric refinement",
        "Product shape and proportion adjustment",
        "Texture and material enhancement"
      ],
      advantage: "Product enhancement increases perceived value, reduces return rates, improves conversion rates, and creates professional e-commerce presentations that build customer confidence and drive sales"
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
      {/* Hero Section */}
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

      {/* Image Editing Services - Full Width Sections */}
      {imageEditingServices.map((service, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? 'bg-bg-base' : 'bg-bg-base-darker';
        const iconBgColor = isEven ? 'bg-brand-accent' : 'bg-brand-primary';
        const backgroundImage = isEven ? IE_BACKGROUNDS.bg1 : IE_BACKGROUNDS.bg2;
        const IconComponent = service.icon;

        return (
          <section
            key={index}
            className={`relative py-20 ${bgClass}`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Service Header */}
              <div className="mb-12">
                <div className="flex mb-6">
                  <div
                    className={`w-20 h-20 rounded-xl flex items-center justify-center shadow-medium ${iconBgColor}`}
                  >
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-lg font-medium max-w-3xl text-gray-800">{service.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-base font-normal mb-12 max-w-4xl text-gray-700">
                {service.description}
              </p>

              {/* Image Example */}
              {service.image && (
                <div className="mb-12 max-w-4xl">
                  <div className="rounded-2xl overflow-hidden shadow-strong border-2 border-gray-900/10">
                    <img
                      src={service.image}
                      alt={`${service.title} example`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}

              {/* What We Provide Section */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-900">What We Provide</h4>
                <div className="space-y-3">
                  {service.whatWeProvide.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-accent" />
                      <span className="text-base leading-relaxed text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Advantage Section */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-6 text-gray-900">The Advantage</h4>
                <p className="text-base leading-relaxed text-gray-700">{service.advantage}</p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
