import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

export default function Contact() {
  const { t } = useTranslation();
  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.info.email,
      details: ["contact@absouts.com"]
    },
    {
      icon: Phone,
      title: "Telephone",
      details: [
        "+880 2 223 315 204",
        "+880 2 223 315 191",
        "+44 020 7794 5045 (London)"
      ]
    },
    {
      icon: Phone,
      title: "Mobile",
      details: [
        "+880 1717 435 794",
        "+880 1645 193 991",
        "+44 079 1612 0280 (London)"
      ]
    }
  ];

  const officeLocations = [
    {
      title: "Bangladesh Registered Office",
      address: [
        "232/232(2), West Agargaon",
        "A K Khan Tower, Level-7",
        "Sher-E-Bangla Nagar",
        "Dhaka-1207, Bangladesh"
      ],
      bgColor: "bg-mediterranean-sky"
    },
    {
      title: "Bangladesh Corporate Office",
      address: [
        "House 05, Level 5, Road 137",
        "Gulshan 1",
        "Dhaka 1212, Bangladesh"
      ],
      bgColor: "bg-mediterranean-linen"
    },
    {
      title: "UK Office",
      address: [
        "434 Finchley Road",
        "London, NW2 2HY",
        "United Kingdom"
      ],
      bgColor: "bg-mediterranean-sky"
    }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" }
  ];

  return (
    <div className="pt-16" data-testid="contact-page">
      {/* Hero Banner */}
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bg-base-darker rounded-3xl shadow-strong overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Get in touch */}
              <div className="bg-gradient-to-br from-bg-section/50 to-bg-surface p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                    Get in touch
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                  Send your message and our team will respond with the details you need.
                  </p>
                </div>

                {/* Contact Info Items */}
                <div className="space-y-8 mb-12">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4" data-testid={`contact-info-${info.title.toLowerCase()}`}>
                        <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0 shadow-medium">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-brand-primary mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-text-secondary text-sm leading-relaxed">{detail}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-bold text-brand-primary mb-4">
                    Follow our social media
                  </h3>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white hover:bg-brand-secondary transform hover:scale-110 transition-all duration-300 shadow-medium"
                          aria-label={social.label}
                        >
                          <SocialIcon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations - Separate Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Our Office Locations</h2>
            <p className="text-xl text-text-secondary">Visit us at any of our offices worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <div
                key={index}
                className={`${location.bgColor} rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-black/10 hover:-translate-y-2 group`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight pt-2">{location.title}</h3>
                </div>

                <div className="space-y-2">
                  {location.address.map((line, idx) => (
                    <p key={idx} className="text-gray-900 text-base leading-relaxed opacity-90">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-bg-section relative mt-20">
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8970097242474!2d90.38750831498152!3d23.750842494584695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
