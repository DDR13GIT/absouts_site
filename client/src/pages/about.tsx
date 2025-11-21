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
import foundationBG from "@assets/foundationBG.svg?url";
import baseDarkerBG from "@assets/baseDarkerBG.svg?url";
import baseBG from "@assets/baseBG.svg?url";
import missionBG from "@assets/missionBG.svg?url";
import visionBG from "@assets/visionBG.svg?url";
import valuesBG from "@assets/valuesBG.svg?url";

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
      initials: "EK",
      name: "Enam H. Khan, FCA (ICAB), ACA (ICAEW), FCCA",
      position: "Chief Operating Officer",
      description: "Ensures smooth daily operations by refining processes, guiding cross-functional teams, and enforcing quality and compliance. Delivers reliable BPO and software services that drive company growth while fostering continuous improvement and accountability.",
      bgColor: "bg-accent",
      photo: enamKhanPhoto
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
      initials: "PD",
      name: "Pritam Kumar Das",
      position: "Head of Business Development",
      description: "Drives the seamless delivery of all BPO and software solutions by overseeing every project to meet international quality and compliance standards. Closely monitors daily operations and upholds excellence so clients consistently receive reliable and efficient services.",
      bgColor: "bg-primary",
      photo: pritamKumarPhoto
    }
  ];

  return (
    <div data-testid="about-page">
      <section className="py-20 pt-28 bg-bg-base relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/5 to-transparent"></div>

        {/* Animated blob gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 ml-40 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 -ml-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

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
          <div className="mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div
              className="relative min-h-[600px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat flex items-center"
              style={{ backgroundImage: `url(${foundationBG})` }}
              data-testid="foundation-card"
            >
              {/* Text Content - Positioned on the right */}
              <div className="w-full lg:w-1/2 ml-auto p-12 lg:p-16 lg:pr-20 max-w-7xl">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                  {t.about.foundation.title}
                </h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {t.about.foundation.description1}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t.about.foundation.description2}
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div
              className="py-20"
              style={{ backgroundImage: `url(${baseDarkerBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div
                  className="relative rounded-[4rem] overflow-hidden min-h-[500px] p-12 flex flex-col justify-start"
                  style={{ backgroundImage: `url(${visionBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  data-testid="vision-card"
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#B8735F] mb-8">
                    {t.about.vision.title}
                  </h2>
                  <p className="text-gray-900 text-lg leading-relaxed max-w-md">
                    {t.about.vision.description}
                  </p>
                </div>

                {/* Mission Card */}
                <div
                  className="relative rounded-[4rem] overflow-hidden min-h-[500px] p-12 flex flex-col justify-start"
                  style={{ backgroundImage: `url(${missionBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  data-testid="mission-card"
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-[#2C5F4E] mb-8">
                    {t.about.mission.title}
                  </h2>
                  <p className="text-gray-900 text-lg leading-relaxed max-w-md">
                    {t.about.mission.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <div
              className="py-20"
              style={{ backgroundImage: `url(${baseBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-text-primary">{t.about.values.badge}</span>
                  </div>
                  <h2 className="text-5xl font-bold text-[#AB98D0]" data-testid="values-title">{t.about.values.title}</h2>
                </div>

                {/* Single Card with all values */}
                <div
                  className="relative rounded-[4rem] overflow-hidden p-16 lg:p-20 flex flex-col min-h-[700px]"
                  style={{ backgroundImage: `url(${valuesBG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 flex-1 auto-rows-fr">
                    {values.map((value, index) => {
                      const IconComponent = value.icon;
                      return (
                        <div key={index} className="flex flex-col justify-center" data-testid={`value-${value.title.toLowerCase()}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-[#FFFDF5] rounded-full flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-[#AB98D0]" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                          </div>
                          <p className="text-gray-800 text-base leading-relaxed pl-13">{value.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-success/30 border border-brand-accent/20 mb-6">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-text-primary">{t.about.leadership.badge}</span>
              </div>
              <h2 className="text-4xl font-bold text-brand-primary mb-4" data-testid="leadership-title">{t.about.leadership.title}</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Meet the visionary leaders driving our mission forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-md overflow-hidden"
                  data-testid={`leader-${leader.initials.toLowerCase()}`}
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Info Container */}
                  <div className="p-6 text-center bg-white">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {leader.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
