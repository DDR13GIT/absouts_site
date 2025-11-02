import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon?: string;
  logoSrc?: string;
  variant: "primary" | "secondary" | "accent";
  onLearnMore: () => void;
}

export function ServiceCard({ title, description, features, icon, logoSrc, variant, onLearnMore }: ServiceCardProps) {
  const variantStyles = {
    primary: "bg-brand-secondary text-white shadow-medium",
    secondary: "bg-brand-accent text-white shadow-medium",
    accent: "bg-brand-primary text-white shadow-medium"
  };

  return (
    <Card className="group service-card h-full bg-bg-surface border border-border shadow-medium hover:shadow-strong transform hover:-translate-y-3 transition-all duration-500 cursor-pointer relative overflow-hidden rounded-2xl" data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      
      <CardHeader className="relative z-10">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${variantStyles[variant]} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          {logoSrc ? (
            <img src={logoSrc} alt={`${title} logo`} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <i className={`${icon} text-2xl group-hover:scale-110 transition-transform duration-300`}></i>
          )}
        </div>
        <h3 className="text-2xl font-bold text-brand-primary mb-4 group-hover:text-brand-accent transition-colors duration-300">{title}</h3>
        <p className="text-text-secondary mb-6 leading-relaxed">{description}</p>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <ul className="space-y-3 text-sm text-text-secondary mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
              <Check className="h-4 w-4 text-brand-accent mr-3 group-hover:scale-125 transition-transform duration-300" />
              <span className="group-hover:text-text-primary transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          variant="ghost" 
          className="group/btn text-brand-secondary hover:text-white hover:bg-brand-secondary font-semibold p-3 px-6 rounded-full shadow-subtle hover:shadow-medium transform hover:-translate-y-0.5 transition-all duration-300"
          onClick={onLearnMore}
          data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More 
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Button>
      </CardContent>
    </Card>
  );
}
