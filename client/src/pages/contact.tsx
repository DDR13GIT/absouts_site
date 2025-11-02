import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, Video } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

export default function Contact() {
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.info.email,
      details: ["info@absouts.com", "business@absouts.com"]
    },
    {
      icon: Phone,
      title: t.contact.info.phone, 
      details: ["+1 (555) 123-4567", "+44 20 1234 5678"]
    },
    {
      icon: MapPin,
      title: t.contact.info.office,
      details: ["Dhaka, Bangladesh", "Global Service Delivery"]
    }
  ];

  const businessHours = [
    { day: t.contact.hours.monday, hours: t.contact.hours.mondayHours },
    { day: t.contact.hours.saturday, hours: t.contact.hours.saturdayHours },
    { day: t.contact.hours.sunday, hours: t.contact.hours.sundayHours }
  ];

  return (
    <div className="pt-16" data-testid="contact-page">
      <section className="py-20 bg-bg-base relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-primary">{t.contact.badge}</span>
            </div>
            
            <h1 className="text-5xl font-bold text-brand-primary mb-6" data-testid="contact-title">{t.contact.title}</h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto" data-testid="contact-description">
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="group bg-bg-surface backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transform hover:-translate-y-2 transition-all duration-500 hover:bg-bg-surface cursor-pointer relative overflow-hidden rounded-2xl p-8" data-testid="contact-info">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <h2 className="text-2xl font-bold text-brand-primary mb-6 group-hover:text-brand-accent transition-colors duration-300 relative z-10">{t.contact.info.title}</h2>
                <div className="space-y-6 relative z-10">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }} data-testid={`contact-info-${info.title.toLowerCase()}`}>
                        <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-medium">
                          <IconComponent className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-brand-primary mb-1 group-hover:text-brand-accent transition-colors duration-300">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-text-secondary leading-relaxed">{detail}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="group bg-bg-surface backdrop-blur-sm border-0 shadow-medium hover:shadow-strong transform hover:-translate-y-2 transition-all duration-500 hover:bg-bg-surface cursor-pointer relative overflow-hidden rounded-2xl p-8" data-testid="business-hours">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <h2 className="text-2xl font-bold text-brand-primary mb-6 group-hover:text-brand-accent transition-colors duration-300 relative z-10">{t.contact.hours.title}</h2>
                <div className="space-y-3 relative z-10">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }} data-testid={`business-hours-${schedule.day.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="text-text-secondary">{schedule.day}</span>
                      <span className="font-semibold text-brand-primary group-hover:text-brand-accent transition-colors duration-300">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="group bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white shadow-strong hover:shadow-3xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden" data-testid="quick-response">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                
                <h2 className="text-2xl font-bold mb-4 relative z-10">{t.contact.assistance.title}</h2>
                <p className="text-white/90 mb-6 leading-relaxed relative z-10">
                  Our team is available for urgent inquiries and can provide quick responses to your business needs.
                </p>
                <div className="flex space-x-4 relative z-10">
                  <Button className="group/btn bg-white text-brand-primary hover:bg-gray-100 shadow-medium hover:shadow-strong rounded-full transform hover:-translate-y-0.5 transition-all duration-300" data-testid="button-whatsapp">
                    <MessageCircle className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />WhatsApp
                  </Button>
                  <Button className="group/btn bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm shadow-medium hover:shadow-strong rounded-full transform hover:-translate-y-0.5 transition-all duration-300" data-testid="button-skype">
                    <Video className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />Skype
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
