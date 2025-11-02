/**
 * TechStack Component
 * Displays a grid of technologies with logos and descriptions
 */

interface Technology {
  name: string;
  icon: string;
  description: string;
}

interface TechStackProps {
  technologies: Technology[];
  title?: string;
  subtitle?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
}

export function TechStack({
  technologies,
  title = "Technology Stack",
  subtitle = "Cutting-edge technologies and frameworks powering modern solutions",
  gradientColors = { from: "blue-600", to: "purple-600" }
}: TechStackProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold bg-gradient-to-r from-${gradientColors.from} to-${gradientColors.to} bg-clip-text text-transparent mb-4`}>
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
