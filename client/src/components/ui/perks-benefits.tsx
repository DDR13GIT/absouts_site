import { 
  DollarSign, 
  Users, 
  Monitor, 
  Heart, 
  Plane, 
  BookOpen, 
  TrendingUp, 
  Star, 
  Coffee, 
  Shield, 
  Gift, 
  Briefcase, 
  Home, 
  CalendarDays, 
  PartyPopper 
} from "lucide-react";

interface PerksBenefitsProps {
  className?: string;
}

export function PerksBenefits({ className = "" }: PerksBenefitsProps) {
  const perks = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-competitive compensation packages with performance-based bonuses and regular salary reviews."
    },
    {
      icon: Users,
      title: "Great Colleagues & Mentors",
      description: "Work alongside experienced professionals who are passionate about mentoring and knowledge sharing."
    },
    {
      icon: Monitor,
      title: "Tools & Technologies",
      description: "Access to the latest development tools, software licenses, and cutting-edge technology stack."
    },
    {
      icon: Heart,
      title: "Culture based on Trust",
      description: "Open, transparent work environment built on mutual respect, trust, and collaborative teamwork."
    },
    {
      icon: Plane,
      title: "International Training and Traveling",
      description: "Opportunities for international conferences, training programs, and client visits abroad."
    },
    {
      icon: BookOpen,
      title: "Schooling & Knowledge Sharing",
      description: "Regular training sessions, workshops, certification programs, and internal knowledge sharing events."
    },
    {
      icon: TrendingUp,
      title: "Career Growth & Development",
      description: "Clear career progression paths with mentorship programs and skill development opportunities."
    },
    {
      icon: Star,
      title: "Annual Performance Evaluation",
      description: "Fair and transparent performance reviews with constructive feedback and growth planning."
    },
    {
      icon: Coffee,
      title: "Sound Work-Life Balance",
      description: "Flexible working hours, remote work options, and respect for personal time and well-being."
    },
    {
      icon: Coffee,
      title: "Bottomless Foods & Drinks",
      description: "Complimentary meals, snacks, beverages, and catered lunches to keep you energized throughout the day."
    },
    {
      icon: Shield,
      title: "Life & Health Insurance Coverage",
      description: "Comprehensive health insurance plans covering medical, dental, and life insurance for you and your family."
    },
    {
      icon: Gift,
      title: "Bonuses and Allowances",
      description: "Performance bonuses, festival bonuses, and special allowances for transportation and communication."
    },
    {
      icon: Briefcase,
      title: "Awesome Work Environment",
      description: "Modern office spaces with ergonomic furniture, recreational areas, and a positive work atmosphere."
    },
    {
      icon: CalendarDays,
      title: "Paid Leaves and Vacations",
      description: "Generous paid time off, sick leave, maternity/paternity leave, and flexible vacation policies."
    },
    {
      icon: PartyPopper,
      title: "Company Outings and Events",
      description: "Regular team building activities, annual company retreats, celebration events, and social gatherings."
    }
  ];

  return (
    <div className={`space-y-8 ${className}`} data-testid="perks-benefits">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
          <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-text-primary">Employee Benefits</span>
        </div>
        <h2 className="text-3xl font-bold text-primary mb-4" data-testid="perks-benefits-title">
          Perks & Benefits
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We believe in taking care of our team members with comprehensive benefits and a supportive work environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {perks.map((perk, index) => {
          const IconComponent = perk.icon;
          return (
            <div 
              key={index} 
              className="group bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden rounded-xl p-6"
              data-testid={`perk-${perk.title.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')}`}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-brand-accent transition-colors duration-300">
                  {perk.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}