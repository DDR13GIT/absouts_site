/**
 * ServiceDetailTemplate Component
 * Reusable template for all service detail pages
 * This component orchestrates the common layout and sections
 */

import { ServiceHero } from "./ServiceHero";
import { FeatureGrid } from "./FeatureGrid";
import { AdditionalFeatures } from "./AdditionalFeatures";
import { TechStack } from "./TechStack";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Technology {
  name: string;
  icon: string;
  description: string;
}

interface ServiceDetailTemplateProps {
  // Hero section
  title: string;
  description: string;
  heroGradient?: {
    background: string;
    text: string;
  };

  // Core features section
  coreFeatures: Feature[];
  coreFeaturesTitle?: string;
  coreFeaturesSubtitle?: string;

  // Additional features (optional)
  additionalFeatures?: string[];
  additionalFeaturesTitle?: string;

  // Technology stack (optional)
  technologies?: Technology[];
  techStackTitle?: string;
  techStackSubtitle?: string;

  // Gradient colors for styling
  gradientColors?: {
    from: string;
    to: string;
  };

  // Number of columns for feature grid
  featureColumns?: 2 | 3;

  // Custom sections (optional)
  customSections?: React.ReactNode;

  // Data test ID
  testId?: string;
}

export function ServiceDetailTemplate({
  title,
  description,
  heroGradient,
  coreFeatures,
  coreFeaturesTitle,
  coreFeaturesSubtitle,
  additionalFeatures,
  additionalFeaturesTitle,
  technologies,
  techStackTitle,
  techStackSubtitle,
  gradientColors = { from: "blue-600", to: "purple-600" },
  featureColumns = 3,
  customSections,
  testId
}: ServiceDetailTemplateProps) {
  return (
    <div className="pt-16" data-testid={testId}>
      {/* Hero Section */}
      <ServiceHero
        title={title}
        description={description}
        gradientColors={heroGradient}
      />

      {/* Core Features Section */}
      <FeatureGrid
        features={coreFeatures}
        title={coreFeaturesTitle}
        subtitle={coreFeaturesSubtitle}
        gradientColors={gradientColors}
        columns={featureColumns}
      />

      {/* Additional Features Section (within the same container) */}
      {additionalFeatures && additionalFeatures.length > 0 && (
        <section className="bg-white pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdditionalFeatures
              features={additionalFeatures}
              title={additionalFeaturesTitle}
              gradientColors={{
                from: gradientColors.from.replace("-600", "-50"),
                to: gradientColors.to.replace("-600", "-50")
              }}
            />
          </div>
        </section>
      )}

      {/* Custom Sections (if any) */}
      {customSections}

      {/* Technology Stack Section */}
      {technologies && technologies.length > 0 && (
        <TechStack
          technologies={technologies}
          title={techStackTitle}
          subtitle={techStackSubtitle}
          gradientColors={gradientColors}
        />
      )}
    </div>
  );
}
