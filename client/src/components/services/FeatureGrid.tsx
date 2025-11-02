/**
 * FeatureGrid Component
 * Displays a grid of features with icons, titles, and descriptions
 */

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
  columns?: 2 | 3;
}

export function FeatureGrid({
  features,
  title = "Core Features & Capabilities",
  subtitle = "Comprehensive solutions designed to maximize your business potential",
  gradientColors = { from: "blue-600", to: "purple-600" },
  columns = 3
}: FeatureGridProps) {
  const gridClass = columns === 2
    ? "grid-cols-1 md:grid-cols-2"
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold bg-gradient-to-r from-${gradientColors.from} to-${gradientColors.to} bg-clip-text text-transparent mb-4`}>
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className={`grid ${gridClass} gap-8`}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Gradient background decoration */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${gradientColors.from}/5 via-${gradientColors.to}/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br from-${gradientColors.from} to-${gradientColors.to} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              {/* Corner decoration */}
              <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-${gradientColors.from}/20 to-${gradientColors.to}/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
