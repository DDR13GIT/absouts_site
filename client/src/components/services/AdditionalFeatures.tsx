/**
 * AdditionalFeatures Component
 * Displays a list of additional features in a grid layout
 */

interface AdditionalFeaturesProps {
  features: string[];
  title?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
}

export function AdditionalFeatures({
  features,
  title = "Additional Features",
  gradientColors = { from: "blue-50", to: "purple-50" }
}: AdditionalFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className={`bg-gradient-to-r from-${gradientColors.from} to-${gradientColors.to} rounded-2xl p-8 mb-16`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
            <span className="font-medium text-gray-800">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
