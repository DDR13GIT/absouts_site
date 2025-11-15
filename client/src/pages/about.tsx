import { Star, Lightbulb, Handshake, Trophy, Users, Globe } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

// Import leadership team photos
import kdRoyPhoto from "@assets/k_d_roy_1757771450330.jpeg";
import enamKhanPhoto from "@assets/PHOTO-2025-09-19-15-52-54_1758373122811.jpg";
import pritamKumarPhoto from "@assets/pritam_kumar_das_1757771450332.png";
import razwanKaderPhoto from "@assets/razwan_kader_1757771450332.png";

// Import custom icons for mission and vision
import lightbulbIcon from "@assets/Asset 3_1757767623439.png";
import globeIcon from "@assets/Asset 1_1757767623438.png";

export default function About() {
  const { t } = useTranslation();
  const values = [
    {
      icon: Star,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description
    },
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title, 
      description: t.about.values.innovation.description
    },
    {
      icon: Handshake,
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description
    },
    {
      icon: Trophy,
      title: t.about.values.clientSuccess.title,
      description: t.about.values.clientSuccess.description
    },
    {
      icon: Users,
      title: t.about.values.collaboration.title,
      description: t.about.values.collaboration.description
    },
    {
      icon: Globe,
      title: t.about.values.globalPartnership.title,
      description: t.about.values.globalPartnership.description
    }
  ];

  const leaders = [
    {
      initials: "KR",
      name: "K D Roy, FCA (ICAB), ACA (ICAEW)",
      position: "Chief Executive Officer",
      description: "Leads the entity by setting its overall direction and goals. Responsible for developing new business opportunities worldwide and ensuring that the entity's activities support both its objectives and client success. Has extensive hands-on experience managing virtual accounting and payroll services for US-based companies.",
      bgColor: "bg-primary",
      photo: kdRoyPhoto
    },
    {
      initials: "RK",
      name: "Razwan Kader",
      position: "Chief Technology Officer", 
      description: "A seasoned technology leader with deep expertise in software engineering and system architecture. Drives the company's technology vision, aligning technical strategy with business objectives. Excels at building high-performing teams and delivering scalable, reliable solutions.",
      bgColor: "bg-secondary",
      photo: razwanKaderPhoto
    },
    {
      initials: "EK", 
      name: "Enam H. Khan, FCA (ICAB), ACA (ICAEW), FCCA",
      position: "Chief Operating Officer",
      description: "Ensures smooth daily operations by refining processes, guiding cross-functional teams, and enforcing quality and compliance. Delivers reliable BPO and software services that drive company growth while fostering continuous improvement and accountability.",
      bgColor: "bg-accent",
      photo: enamKhanPhoto
    },
    {
      initials: "PD",
      name: "Pritam Kumar Das", 
      position: "Head of Business Development",
      description: "Drives the seamless delivery of all BPO and software solutions by overseeing every project to meet international quality and compliance standards. Closely monitors daily operations and upholds excellence so clients consistently receive reliable and efficient services.",
      bgColor: "bg-primary",
      photo: pritamKumarPhoto
    }
  ];

  return (
    <div className="pt-16" data-testid="about-page">
      <section className="py-20 bg-bg-base relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-text-primary">{t.about.badge}</span>
            </div>
            
            <h1 className="text-5xl font-bold text-brand-primary mb-6" data-testid="about-title">{t.about.title}</h1>
            <p className="text-xl text-text-secondary max-w-4xl mx-auto" data-testid="about-description">
              {t.about.description}
            </p>
          </div>

          {/* Foundation - Moved to Top */}
          <div className="mb-20">
            <div className="group bg-mediterranean-linen rounded-[2rem] shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-black/10 p-10" data-testid="foundation-card">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.about.foundation.title}</h2>
              <p className="text-gray-900 text-lg mb-6 leading-relaxed opacity-90">
                {t.about.foundation.description1}
              </p>
              <p className="text-gray-900 text-lg leading-relaxed opacity-90">
                {t.about.foundation.description2}
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="group bg-mediterranean-sky rounded-[2rem] shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-black/10 p-10" data-testid="mission-card">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <img
                  src={lightbulbIcon}
                  alt="Mission icon"
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.about.mission.title}</h2>
              <p className="text-gray-900 text-lg leading-relaxed opacity-90">
                {t.about.mission.description}
              </p>
            </div>

            <div className="group bg-mediterranean-linen rounded-[2rem] shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-black/10 p-10" data-testid="vision-card">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <img
                  src={globeIcon}
                  alt="Vision icon"
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.about.vision.title}</h2>
              <p className="text-gray-900 text-lg leading-relaxed opacity-90">
                {t.about.vision.description}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-text-primary">{t.about.values.badge}</span>
              </div>
              <h2 className="text-4xl font-bold text-brand-primary" data-testid="values-title">{t.about.values.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const bgColor = index % 2 === 0 ? 'bg-mediterranean-sky' : 'bg-mediterranean-linen';
                return (
                  <div key={index} className={`group ${bgColor} rounded-[2rem] shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-black/10 p-8`} data-testid={`value-${value.title.toLowerCase()}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                    <p className="text-gray-900 leading-relaxed text-center opacity-90">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leadership Team */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-text-primary">{t.about.leadership.badge}</span>
              </div>
              <h2 className="text-4xl font-bold text-brand-primary" data-testid="leadership-title">{t.about.leadership.title}</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leaders.map((leader, index) => {
                const bgColor = index % 2 === 0 ? 'bg-mediterranean-linen' : 'bg-mediterranean-sky';
                return (
                  <div key={index} className={`group ${bgColor} rounded-[2rem] shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-black/10 p-10`} data-testid={`leader-${leader.initials.toLowerCase()}`}>
                    <div className="flex items-center mb-8">
                      <div className="w-24 h-24 rounded-2xl mr-6 group-hover:scale-110 transition-all duration-300 shadow-lg overflow-hidden">
                        <img
                          src={leader.photo}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                        <p className="text-gray-700 font-semibold">{leader.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-900 text-base leading-relaxed opacity-90">
                      {leader.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
