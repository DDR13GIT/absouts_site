import { useLocation } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/lib/translation-context";

// Import technology logos
import restApiLogo from "@assets/1_82q9fbZA3OHhyoQ48qOypQ_1757087238421.webp";
import joutLogo from "@assets/1_XkmnsJ6Joa6EDFVGUw0tfA_1757087238421.png";
import tensorFlowLogo from "@assets/7a11b0b0-f7b3-4c57-b79b-7ec4e27ff193_1757087238422.png";
import angularJsLogo from "@assets/62a79606e42d729d928b175f_1757087238422.png";
import sqlServerLogo from "@assets/6129e6c89b8f206f530029e0f221066b_1757087238422.png";
import postgreSQLLogo from "@assets/acc45903ce91d3c1708b04a2e9d083c8_1757087238422.png";
import awsLogo from "@assets/Amazon_Web_Services_Logo.svg_1757087238422.png";
import jmeterLogo from "@assets/Apache_JMeter_1757087238422.png";
import appiumLogo from "@assets/appium-logo_1757087238422.jpg";
import aspNetLogo from "@assets/ASP.NET__1757087238422.png";
import css3Logo from "@assets/CSS3_logo_and_wordmark.svg_1757087238423.png";
import djangoLogo from "@assets/Daco_4430861_1757087238423.png";
import oracleLogo from "@assets/Daco_4533338_1757087238423.png";
import graphQLLogo from "@assets/Daco_5229551_1757087238423.png";
import dockerLogo from "@assets/Docker_logo_1757087238423.png";
import elasticsearchLogo from "@assets/Elasticsearch_logo.svg_1757087238423.png";
import firebaseLogo from "@assets/Firebase_Logo.svg_1757087238423.png";
import geminiLogo from "@assets/Gemini-Logo-500x281_1757087238423.png";
import gitLabLogo from "@assets/GitLab_logo.svg_1757087238424.png";
import goLogo from "@assets/Go_Logo_Blue.svg_1757087238424.png";

// Import new icons for service cards
import globeIcon from "@assets/Asset 1_1757767623438.png";
import peopleIcon from "@assets/Asset 2_1757767623439.png";
import lightbulbIcon from "@assets/Asset 3_1757767623439.png";
import cloudIcon from "@assets/Asset 4_1757767623439.png";
import gearsIcon from "@assets/Asset 5_1757767623439.png";
import thumbsUpIcon from "@assets/Asset 6_1757767623439.png";
import buildingIcon from "@assets/Asset 7_1757767623439.png";
import searchIcon from "@assets/Asset 8_1757767623439.png";
import documentIcon from "@assets/Asset 9_1757767623440.png";
import bankIcon from "@assets/Asset 10_1757767623440.png";
import calculatorIcon from "@assets/Asset 11_1757767623440.png";
import scaleIcon from "@assets/Asset 12_1757767623440.png";
import handsIcon from "@assets/Asset 13_1757767623440.png";
import shieldIcon from "@assets/Asset 14_1757767623440.png";
import mediaIcon from "@assets/Asset 15_1757767623440.png";
import networkIcon from "@assets/Asset 16_1757767623440.png";
import teamIcon from "@assets/Asset 17_1757767623440.png";
import reportIcon from "@assets/Asset 18_1757767623441.png";
import clockIcon from "@assets/Asset 19_1757767623441.png";

// Import image editing before/after examples
import carReflectionEdit from "@assets/41132442914_06159af27b_1758366312455.jpg";
import carSpotRepair from "@assets/before-after-spot-repairs-chatham1_1758366312455.jpg";
import shoeRepair from "@assets/beforeandafter-louboutins-vibrams-resole_1758366312455.jpg";
import backgroundRemovalExample from "@assets/bg-removal-slider-v2artboard-1-copy_1758366312456.png";
import clothingEdit from "@assets/erbysozejtnpt7rhy7fn_1758366312456.jpg";
import jewelryRetouch from "@assets/high-end-jewelry-retouch-touch-up-jewelry-retouching-high-quality_1758366312456.jpg";
import chairBackgroundRemoval from "@assets/how-to-edit-product-photos-in-photoshop-remove-the-background_1758366312456.webp";
import imageMaskingExample from "@assets/Image-Masking-Service-4_1758366312456.jpg";
import multiPathService from "@assets/Malti-path-Services2_1758366312457.jpg";
import photoManipulation from "@assets/maxresdefault (18)_1758366312457.jpg";
import photoRetouching from "@assets/Photo-Retouching-Service-at-Adept-Clipping-Path_1758366312457.jpg";
import faceSwapping from "@assets/Photoshop-Swapping-Facesa_1758366312457.jpg";
import colorCorrection from "@assets/unnamed (10)_1758366312457.jpg";
import shadowReflectionExample from "@assets/Untitled-1-26-1024x615_1758366312458.jpg";

export default function ServiceDetail() {
  const [location] = useLocation();
  const serviceSlug = location.split('/').pop();

  // Handle specific service slugs
  const servicePages = {
    'ecommerce': EcommerceDetail,
    'mobile': MobileAppDetail,
    'cloud': CloudInfrastructureDetail,
    'testing': TestAutomationDetail,
    'legaltech': LegalTechDetail,
    'webportal': WebPortalDetail,
    'fintech': FintechDetail,
    'ai': AIDetail,
    'bpo': BPOServiceDetail,
    'software': SoftwareServiceDetail
  };

  const ServiceComponent = servicePages[serviceSlug as keyof typeof servicePages] || NotFoundService;
  return <ServiceComponent />;
}

function NotFoundService() {
  const { t } = useTranslation();
  
  return (
    <div className="pt-16" data-testid="service-not-found">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Service Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <Button className="text-accent hover:text-accent/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.common.backToServices}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function BPOServiceDetail() {
  const cloudAccountingServices = [
    {
      logoSrc: cloudIcon,
      title: "Virtual Accounting",
      description: "Remote accounting services providing flexibility and reducing need for in-house staff."
    },
    {
      logoSrc: calculatorIcon, 
      title: "Book-keeping",
      description: "Recording financial transactions (sales, expenses, payments) for accurate financial records."
    },
    {
      logoSrc: scaleIcon,
      title: "Bank Reconciliation", 
      description: "Matching company records with bank statements to ensure accuracy and detect discrepancies."
    },
    {
      logoSrc: reportIcon,
      title: "MIS Reporting",
      description: "Generating management reports for business insights and strategic decision-making."
    },
    {
      logoSrc: bankIcon,
      title: "Accounts Payable & Receivable",
      description: "Tracking outgoing and incoming payments to maintain healthy cash flow."
    },
    {
      logoSrc: documentIcon,
      title: "Inventory Management", 
      description: "Monitoring stock levels and tracking purchases/sales for efficient supply chain operations."
    }
  ];

  const imageEditingServices = [
    {
      icon: searchIcon,
      title: "Background Removal",
      description: "Professional background removal and replacement for product photography and portraits.",
      beforeAfterImage: backgroundRemovalExample,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: mediaIcon,
      title: "Color Correction",
      description: "Advanced color grading and correction for vibrant, professional-looking images.",
      beforeAfterImage: colorCorrection,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: peopleIcon,
      title: "Face Swapping",
      description: "Seamless face replacement and digital makeup for portrait enhancement.",
      beforeAfterImage: faceSwapping,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: shieldIcon,
      title: "Image Masking",
      description: "Precise image masking for complex selections and detailed editing work.",
      beforeAfterImage: imageMaskingExample,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: lightbulbIcon,
      title: "Photo Manipulation",
      description: "Creative photo manipulation and artistic enhancement for stunning visual effects.",
      beforeAfterImage: photoManipulation,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: clockIcon,
      title: "Shadow & Reflection",
      description: "Professional shadow creation and reflection effects for product photography.",
      beforeAfterImage: shadowReflectionExample,
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: reportIcon,
      title: "Photo Retouching",
      description: "Professional photo retouching for flawless skin, beauty enhancement, and detail refinement.",
      beforeAfterImage: photoRetouching,
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: handsIcon,
      title: "Product Enhancement",
      description: "Jewelry, clothing, and product enhancement for e-commerce and marketing materials.",
      beforeAfterImage: jewelryRetouch,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="pt-16" data-testid="bpo-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="bpo-title">Business Process Outsourcing</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="bpo-description">
              Our BPO services streamline essential business functions and enhance operational efficiency, enabling clients to focus on their core competencies and drive growth.
            </p>
          </div>

          {/* Cloud Accounting Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8" data-testid="cloud-accounting-title">Cloud Accounting Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudAccountingServices.map((service, index) => (
                <div key={index} className="bg-muted rounded-xl p-6" data-testid={`cloud-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <img 
                      src={service.logoSrc} 
                      alt={`${service.title} logo`} 
                      className="w-8 h-8 object-contain" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other BPO Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Payroll Management */}
            <div className="bg-white rounded-xl shadow-lg p-8" data-testid="payroll-management-card">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                <img 
                  src={teamIcon} 
                  alt="Payroll Management logo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Payroll Management</h3>
              <p className="text-muted-foreground mb-6">
                Processing employee salaries, tax deductions, and benefits. Ensures accurate and timely payroll processing, maintaining employee satisfaction and compliance with changing tax laws and labour regulations.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Employee salary processing</li>
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Tax deductions and compliance</li>
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Benefits administration</li>
              </ul>
            </div>

            {/* Tax Services */}
            <div className="bg-white rounded-xl shadow-lg p-8" data-testid="tax-services-card">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <img 
                  src={calculatorIcon} 
                  alt="Tax Services logo" 
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Tax Services</h3>
              <p className="text-muted-foreground mb-6">
                Preparing direct and indirect tax returns (Income-Tax, GST, VAT). Ensures accurate and on-time tax compliance, minimising risk. Expert guidance helps identify deductions and credits to optimise tax liabilities.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Income tax return preparation</li>
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> GST and VAT compliance</li>
                <li className="flex items-center"><i className="fas fa-check text-accent mr-2"></i> Tax optimization strategies</li>
              </ul>
            </div>
          </div>

          {/* Image Editing Services - Redesigned */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-50 to-fuchsia-50 border border-violet-100 mb-6">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Professional Image Enhancement</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent mb-4" data-testid="image-editing-title">
                Image Editing Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="image-editing-description">
                Professional image enhancement and manipulation services for marketing, e-commerce, and branding needs with stunning before/after results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {imageEditingServices.map((service, index) => {
                const gradientStyle = {
                  background: service.gradient === 'from-blue-500 to-cyan-500' ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' :
                             service.gradient === 'from-purple-500 to-pink-500' ? 'linear-gradient(135deg, #a855f7, #ec4899)' :
                             service.gradient === 'from-green-500 to-emerald-500' ? 'linear-gradient(135deg, #22c55e, #10b981)' :
                             service.gradient === 'from-orange-500 to-red-500' ? 'linear-gradient(135deg, #f97316, #ef4444)' :
                             service.gradient === 'from-indigo-500 to-purple-500' ? 'linear-gradient(135deg, #6366f1, #a855f7)' :
                             service.gradient === 'from-teal-500 to-blue-500' ? 'linear-gradient(135deg, #14b8a6, #3b82f6)' :
                             service.gradient === 'from-rose-500 to-pink-500' ? 'linear-gradient(135deg, #f43f5e, #ec4899)' :
                             'linear-gradient(135deg, #eab308, #f97316)' // yellow-orange fallback
                };
                
                return (
                  <div key={index} className="group relative rounded-2xl p-1 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" 
                       style={gradientStyle}
                       data-testid={`image-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`} 
                       data-gradient-border="true">
                    {/* Inner content container */}
                    <div className="bg-white rounded-2xl p-6 h-full relative overflow-hidden" data-testid={`image-service-content-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gray-100/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Service Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10"
                         style={gradientStyle}>
                      <img 
                        src={service.icon} 
                        alt={`${service.title} icon`} 
                        className="w-7 h-7 object-contain filter brightness-0 invert" 
                      />
                    </div>

                    {/* Service Title */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3 relative z-10">{service.title}</h4>
                    
                    {/* Service Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed relative z-10">{service.description}</p>

                    {/* Before/After Preview */}
                    <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300 relative z-10">
                      <img 
                        src={service.beforeAfterImage} 
                        alt={`${service.title} before and after example`} 
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Before & After
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                      <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full m-0.5"></div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>

            {/* Additional Services Showcase */}
            <div className="mt-12 bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
                  Advanced Image Editing Capabilities
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our expert team delivers professional-grade image editing with attention to detail and creative excellence
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={lightbulbIcon} alt="Creative editing" className="w-6 h-6 object-contain filter brightness-0 invert" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Creative Enhancement</h4>
                  <p className="text-sm text-gray-600">Artistic manipulation and creative effects for unique visual storytelling</p>
                </div>
                
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={clockIcon} alt="Fast turnaround" className="w-6 h-6 object-contain filter brightness-0 invert" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fast Turnaround</h4>
                  <p className="text-sm text-gray-600">Quick delivery without compromising on quality and attention to detail</p>
                </div>
                
                <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <img src={shieldIcon} alt="Quality assurance" className="w-6 h-6 object-contain filter brightness-0 invert" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">Multiple quality checks ensure pixel-perfect results for every project</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Office Support */}
          <div className="bg-muted rounded-xl p-8" data-testid="back-office-support">
            <h2 className="text-3xl font-bold text-primary mb-6">Back-Office Support Services</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Essential administrative and operational tasks that support business functions, freeing up internal resources to focus on core, revenue-generating activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div data-testid="document-management">
                <h3 className="text-xl font-semibold text-primary mb-3">Document Management</h3>
                <p className="text-muted-foreground">Organizing, storing, and retrieving files/records to ensure efficient access to important information.</p>
              </div>
              <div data-testid="order-processing">
                <h3 className="text-xl font-semibold text-primary mb-3">Order Processing & Fulfillment</h3>
                <p className="text-muted-foreground">Managing orders, updating databases, and coordinating shipments for smooth operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SoftwareServiceDetail() {
  const { t } = useTranslation();

  const serviceCards = [
    {
      logoSrc: globeIcon,
      title: "E-commerce Development",
      description: "Complete e-commerce solutions with modern platforms, payment integration, and user-friendly interfaces.",
      slug: "ecommerce",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      logoSrc: gearsIcon,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
      slug: "mobile",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      logoSrc: cloudIcon,
      title: "Cloud Infrastructure Optimization",
      description: "Scalable cloud solutions, migration services, and infrastructure optimization for enhanced performance.",
      slug: "cloud",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      logoSrc: gearsIcon,
      title: "Test Automation",
      description: "Comprehensive testing frameworks, automated testing solutions, and quality assurance services.",
      slug: "testing",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      logoSrc: scaleIcon,
      title: "LegalTech Solutions",
      description: "Legal case management, document automation, compliance solutions, and legal workflow optimization.",
      slug: "legaltech",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      logoSrc: globeIcon,
      title: "Web Portal Development",
      description: "Enterprise portals, customer portals, and content management systems with modern architecture.",
      slug: "webportal",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      logoSrc: bankIcon,
      title: "Fintech Solutions",
      description: "Financial applications, banking solutions, payment processing, and financial technology platforms.",
      slug: "fintech",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      logoSrc: lightbulbIcon,
      title: "AI Solutions",
      description: "Artificial intelligence applications, machine learning models, and intelligent automation solutions.",
      slug: "ai",
      bgColor: "bg-gradient-to-br from-pink-500 to-pink-600"
    }
  ];

  const industries = [
    {
      logoSrc: globeIcon,
      title: "E-commerce",
      description: "Online retail platforms, payment gateways, inventory management systems"
    },
    {
      logoSrc: bankIcon,
      title: "Fintech", 
      description: "Financial applications, banking solutions, payment processing systems"
    },
    {
      logoSrc: scaleIcon,
      title: "Legal Tech",
      description: "Legal case management, document automation, compliance solutions"
    },
    {
      logoSrc: networkIcon,
      title: "Web Portals",
      description: "Enterprise portals, customer portals, content management systems"
    }
  ];


  // First row of technologies (moves right to left)
  const techStackRow1 = [
    { logo: restApiLogo, name: "REST API" },
    { logo: joutLogo, name: "JOUT" },
    { logo: tensorFlowLogo, name: "TensorFlow" },
    { logo: angularJsLogo, name: "AngularJS" },
    { logo: sqlServerLogo, name: "SQL Server" },
    { logo: postgreSQLLogo, name: "PostgreSQL" },
    { logo: awsLogo, name: "AWS" },
    { logo: jmeterLogo, name: "Apache JMeter" },
    { logo: appiumLogo, name: "Appium" },
    { logo: aspNetLogo, name: "ASP.NET" }
  ];

  // Second row of technologies (moves left to right)  
  const techStackRow2 = [
    { logo: css3Logo, name: "CSS3" },
    { logo: djangoLogo, name: "Django" },
    { logo: oracleLogo, name: "Oracle" },
    { logo: graphQLLogo, name: "GraphQL" },
    { logo: dockerLogo, name: "Docker" },
    { logo: elasticsearchLogo, name: "Elasticsearch" },
    { logo: firebaseLogo, name: "Firebase" },
    { logo: geminiLogo, name: "Gemini" },
    { logo: gitLabLogo, name: "GitLab" },
    { logo: goLogo, name: "Go" }
  ];

  const developmentProcess = [
    {
      number: 1,
      title: "Discovery & Planning",
      description: "Understanding requirements and creating detailed project roadmaps",
      bgColor: "bg-accent"
    },
    {
      number: 2,
      title: "Design & Architecture", 
      description: "Creating scalable system architecture and user experience design",
      bgColor: "bg-primary"
    },
    {
      number: 3,
      title: "Development & Testing",
      description: "Agile development with continuous integration and testing", 
      bgColor: "bg-secondary"
    },
    {
      number: 4,
      title: "Deployment & Support",
      description: "Seamless deployment and ongoing maintenance support",
      bgColor: "bg-accent"
    }
  ];

  return (
    <div className="pt-16" data-testid="software-service-detail">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
            <h1 className="text-5xl font-bold text-primary mb-6" data-testid="software-title">Software Outsourcing & IT Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-4xl" data-testid="software-description">
              Custom software development, mobile applications, cloud infrastructure optimization, and specialized solutions tailored for various industries including e-commerce, fintech, legal tech, and web portals.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {serviceCards.map((service, index) => (
              <div key={index} className={`group service-card ${service.bgColor} rounded-xl p-6 text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 cursor-pointer relative overflow-hidden`} data-testid={`service-card-${service.slug}`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg relative z-10">
                  <img 
                    src={service.logoSrc} 
                    alt={`${service.title} logo`} 
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{service.title}</h3>
                <p className="text-white/90 mb-4 text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`}>
                  <Button className="group/btn bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 relative z-10 w-full text-sm" data-testid={`button-see-more-${service.slug}`}>
                    See More
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Industry Specializations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center" data-testid="industry-specializations-title">Industry Specializations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center" data-testid={`industry-${industry.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <img 
                      src={industry.logoSrc} 
                      alt={`${industry.title} logo`} 
                      className="w-10 h-10 object-contain" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-muted rounded-xl p-8 mb-16 overflow-hidden" data-testid="technology-stack">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Technology Stack</h2>
            
            {/* First Row - Moving Right to Left */}
            <div className="relative mb-8">
              <div className="flex animate-scroll-right-to-left">
                {[...techStackRow1, ...techStackRow1].map((tech, index) => (
                  <div key={index} className="flex-shrink-0 mx-8 text-center" data-testid={`tech-row1-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg p-2">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Left to Right */}
            <div className="relative">
              <div className="flex animate-scroll-left-to-right">
                {[...techStackRow2, ...techStackRow2].map((tech, index) => (
                  <div key={index} className="flex-shrink-0 mx-8 text-center" data-testid={`tech-row2-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg p-2">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground whitespace-nowrap">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6" data-testid="development-process-title">Our Development Process</h2>
              <div className="space-y-6">
                {developmentProcess.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4" data-testid={`process-step-${step.number}`}>
                    <div className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Software development team working on computers" 
                className="rounded-xl shadow-lg w-full h-auto"
                data-testid="development-team-image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Individual Service Detail Components

function EcommerceDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: globeIcon,
      title: "Custom E-commerce Platforms",
      description: "Tailored online stores built from the ground up to match your unique business requirements and brand identity."
    },
    {
      icon: calculatorIcon,
      title: "Shopping Cart Development",
      description: "Intuitive shopping cart systems with seamless checkout processes that minimize cart abandonment rates."
    },
    {
      icon: bankIcon,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple payment options including credit cards, digital wallets, and cryptocurrencies."
    },
    {
      icon: documentIcon,
      title: "Product Catalog Management",
      description: "Advanced product management systems with categories, filters, search functionality, and inventory tracking."
    },
    {
      icon: reportIcon,
      title: "Order Management Systems",
      description: "Comprehensive order processing workflows from purchase to delivery with real-time tracking capabilities."
    },
    {
      icon: scaleIcon,
      title: "Security Implementation",
      description: "Enterprise-grade security measures including SSL certificates, PCI compliance, and fraud protection."
    }
  ];

  const technologiesData = [
    { name: "React", icon: restApiLogo, description: "Modern frontend framework" },
    { name: "Angular", icon: angularJsLogo, description: "Enterprise web framework" },
    { name: "Node.js", icon: joutLogo, description: "Server-side JavaScript runtime" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Advanced relational database" },
    { name: "AWS", icon: awsLogo, description: "Cloud infrastructure platform" },
    { name: "Docker", icon: dockerLogo, description: "Containerization platform" },
    { name: "GraphQL", icon: graphQLLogo, description: "API query language" },
    { name: "Firebase", icon: firebaseLogo, description: "Real-time database platform" }
  ];

  const additionalFeatures = [
    "Inventory Management",
    "Customer Account Management", 
    "Multi-currency Support",
    "Mobile-responsive Design",
    "SEO Optimization",
    "Analytics and Reporting"
  ];

  return (
    <div className="pt-16" data-testid="ecommerce-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6" data-testid="ecommerce-title">
                E-commerce Development
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="ecommerce-description">
              Complete e-commerce solutions with modern platforms, payment integration, and user-friendly interfaces designed to drive sales and enhance customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Core Features & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive e-commerce solutions designed to maximize your online business potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks powering modern e-commerce solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </div>
  );
}

function MobileAppDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: gearsIcon,
      title: "Native iOS Development",
      description: "High-performance iOS applications built with Swift and Objective-C for optimal user experience and device integration."
    },
    {
      icon: gearsIcon,
      title: "Native Android Development",
      description: "Feature-rich Android applications developed with Kotlin and Java, leveraging the latest Android SDK capabilities."
    },
    {
      icon: globeIcon,
      title: "Cross-platform Solutions",
      description: "Unified codebase apps using React Native and Flutter for faster development and consistent user experience across platforms."
    },
    {
      icon: peopleIcon,
      title: "UI/UX Design",
      description: "Intuitive and engaging mobile interfaces designed following platform-specific guidelines and user experience best practices."
    },
    {
      icon: searchIcon,
      title: "App Store Optimization",
      description: "Strategic optimization for app store visibility, including metadata, screenshots, and keyword optimization."
    },
    {
      icon: networkIcon,
      title: "API Integration",
      description: "Seamless integration with third-party services, RESTful APIs, and backend systems for enhanced functionality."
    }
  ];

  const technologiesData = [
    { name: "React Native", icon: restApiLogo, description: "Cross-platform mobile framework" },
    { name: "Firebase", icon: firebaseLogo, description: "Backend-as-a-Service platform" },
    { name: "AWS Mobile", icon: awsLogo, description: "Cloud mobile development platform" },
    { name: "Docker", icon: dockerLogo, description: "Containerization for mobile backends" },
    { name: "GraphQL", icon: graphQLLogo, description: "API query language for mobile" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Reliable mobile app database" },
    { name: "TensorFlow", icon: tensorFlowLogo, description: "Machine learning for mobile" },
    { name: "Elasticsearch", icon: elasticsearchLogo, description: "Search and analytics engine" }
  ];

  const additionalFeatures = [
    "Push Notifications",
    "Offline Functionality", 
    "In-app Purchases",
    "Social Media Integration",
    "Analytics Integration",
    "App Maintenance & Updates"
  ];

  return (
    <div className="pt-16" data-testid="mobile-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6" data-testid="mobile-title">
                Mobile App Development
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="mobile-description">
              Native and cross-platform mobile applications for iOS and Android with modern UI/UX design and seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Mobile App Development Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete mobile development solutions from concept to deployment across iOS and Android platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern frameworks and tools for building scalable, performant mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </div>
  );
}

function CloudInfrastructureDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: cloudIcon,
      title: "Cloud Migration Services",
      description: "Seamless migration of on-premise infrastructure to cloud platforms with minimal downtime and maximum security."
    },
    {
      icon: gearsIcon,
      title: "Infrastructure as Code (IaC)",
      description: "Automated infrastructure provisioning and management using Terraform, CloudFormation, and other IaC tools."
    },
    {
      icon: networkIcon,
      title: "Auto-scaling Solutions",
      description: "Dynamic resource allocation that automatically scales infrastructure based on demand and performance metrics."
    },
    {
      icon: scaleIcon,
      title: "Load Balancing",
      description: "Intelligent traffic distribution across multiple servers to ensure optimal performance and high availability."
    },
    {
      icon: shieldIcon,
      title: "Security Implementation",
      description: "Comprehensive cloud security strategies including encryption, access controls, and compliance frameworks."
    },
    {
      icon: reportIcon,
      title: "Monitoring & Logging",
      description: "Real-time infrastructure monitoring with comprehensive logging and alerting systems for proactive management."
    }
  ];

  const technologiesData = [
    { name: "AWS", icon: awsLogo, description: "Amazon Web Services platform" },
    { name: "Docker", icon: dockerLogo, description: "Containerization platform" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Cloud database solution" },
    { name: "Elasticsearch", icon: elasticsearchLogo, description: "Search and analytics engine" },
    { name: "Firebase", icon: firebaseLogo, description: "Real-time cloud platform" },
    { name: "GraphQL", icon: graphQLLogo, description: "API query language" },
    { name: "TensorFlow", icon: tensorFlowLogo, description: "ML infrastructure platform" },
    { name: "GitLab", icon: gitLabLogo, description: "DevOps lifecycle platform" }
  ];

  const additionalFeatures = [
    "Database Optimization",
    "Cost Optimization", 
    "Disaster Recovery",
    "Performance Tuning",
    "CI/CD Pipeline Setup",
    "Container Orchestration"
  ];

  return (
    <div className="pt-16" data-testid="cloud-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6" data-testid="cloud-title">
                Cloud Infrastructure Optimization
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="cloud-description">
              Scalable cloud solutions, migration services, and infrastructure optimization for enhanced performance and cost efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Cloud Infrastructure Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to optimize performance, security, and cost-effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading cloud platforms and tools for robust infrastructure management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </div>
  );
}

function TestAutomationDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: gearsIcon,
      title: "Automated Testing Frameworks",
      description: "Comprehensive test automation frameworks designed to streamline testing processes and improve software quality."
    },
    {
      icon: shieldIcon,
      title: "End-to-End Testing",
      description: "Complete user journey testing from start to finish to ensure seamless user experience across all touchpoints."
    },
    {
      icon: reportIcon,
      title: "Performance Testing",
      description: "Load testing and performance optimization to ensure applications can handle expected user traffic and usage patterns."
    },
    {
      icon: networkIcon,
      title: "API Testing",
      description: "Comprehensive API testing including functional, reliability, performance, and security testing of web services."
    },
    {
      icon: searchIcon,
      title: "Security Testing",
      description: "Vulnerability assessments and security testing to identify and mitigate potential security risks and threats."
    },
    {
      icon: thumbsUpIcon,
      title: "Cross-browser Testing",
      description: "Ensuring compatibility and consistent performance across different browsers, devices, and operating systems."
    }
  ];

  const technologiesData = [
    { name: "Apache JMeter", icon: jmeterLogo, description: "Performance testing tool" },
    { name: "Appium", icon: appiumLogo, description: "Mobile app testing framework" },
    { name: "Elasticsearch", icon: elasticsearchLogo, description: "Search and analytics for logs" },
    { name: "Docker", icon: dockerLogo, description: "Containerized testing environments" },
    { name: "GitLab", icon: gitLabLogo, description: "CI/CD testing pipelines" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Test data management" },
    { name: "AWS", icon: awsLogo, description: "Cloud testing infrastructure" },
    { name: "Firebase", icon: firebaseLogo, description: "Mobile testing platform" }
  ];

  const additionalFeatures = [
    "Unit Testing",
    "Integration Testing", 
    "Mobile App Testing",
    "Regression Testing",
    "Load Testing",
    "Continuous Integration Testing"
  ];

  return (
    <div className="pt-16" data-testid="testing-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6" data-testid="testing-title">
                Test Automation
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-red-400/20 to-rose-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="testing-description">
              Comprehensive testing frameworks, automated testing solutions, and quality assurance services to ensure software reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Quality Assurance & Testing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive testing solutions to ensure your software meets the highest quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-pink-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-red-400/20 to-rose-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced testing tools and frameworks for comprehensive quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </div>
  );
}

function LegalTechDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: scaleIcon,
      title: "Case Management Systems",
      description: "Comprehensive case tracking and management solutions for law firms with integrated document handling and client communication."
    },
    {
      icon: documentIcon,
      title: "Document Automation",
      description: "Automated legal document generation, contract templates, and form filling to streamline legal document workflows."
    },
    {
      icon: handsIcon,
      title: "Contract Management",
      description: "End-to-end contract lifecycle management from creation and negotiation to execution and renewal tracking."
    },
    {
      icon: shieldIcon,
      title: "Compliance Tracking",
      description: "Regulatory compliance monitoring and reporting tools to ensure adherence to legal requirements and industry standards."
    },
    {
      icon: searchIcon,
      title: "Legal Research Tools",
      description: "Advanced legal research platforms with AI-powered search capabilities and comprehensive legal database access."
    },
    {
      icon: peopleIcon,
      title: "Client Portal Development",
      description: "Secure client portals for document sharing, case updates, communication, and billing transparency."
    }
  ];

  const technologiesData = [
    { name: "ASP.NET", icon: aspNetLogo, description: "Enterprise web framework" },
    { name: "Angular", icon: angularJsLogo, description: "Frontend web framework" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Legal database management" },
    { name: "Elasticsearch", icon: elasticsearchLogo, description: "Legal document search" },
    { name: "AWS", icon: awsLogo, description: "Cloud infrastructure" },
    { name: "Docker", icon: dockerLogo, description: "Application containerization" },
    { name: "Firebase", icon: firebaseLogo, description: "Real-time legal data" },
    { name: "GraphQL", icon: graphQLLogo, description: "Legal API management" }
  ];

  const additionalFeatures = [
    "Billing & Time Tracking",
    "Court Filing Systems", 
    "Legal Analytics",
    "E-discovery Solutions",
    "Legal Workflow Automation",
    "Regulatory Compliance Tools"
  ];

  return (
    <div className="pt-16" data-testid="legaltech-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6" data-testid="legaltech-title">
                LegalTech Solutions
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="legaltech-description">
              Legal case management, document automation, compliance solutions, and legal workflow optimization for modern law practices.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              LegalTech Solutions & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal technology solutions designed to modernize law practices and enhance operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Robust and secure technologies powering modern legal practice management systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </div>
  );
}

function WebPortalDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: buildingIcon,
      title: "Enterprise Portals",
      description: "Comprehensive enterprise portal solutions with role-based access, workflow management, and integrated business processes."
    },
    {
      icon: peopleIcon,
      title: "Customer Portals",
      description: "Self-service customer portals with account management, support ticketing, and personalized user experiences."
    },
    {
      icon: teamIcon,
      title: "Employee Portals",
      description: "Internal employee portals with HR integration, document access, collaboration tools, and company resources."
    },
    {
      icon: networkIcon,
      title: "Partner Portals",
      description: "Secure partner collaboration platforms with shared resources, communication tools, and business integration."
    },
    {
      icon: documentIcon,
      title: "Content Management Systems",
      description: "Advanced CMS solutions with multi-site management, workflow approval, and dynamic content delivery."
    },
    {
      icon: shieldIcon,
      title: "User Authentication & Authorization",
      description: "Robust security frameworks with single sign-on, multi-factor authentication, and granular permission controls."
    }
  ];

  const technologiesData = [
    { name: "Angular", icon: angularJsLogo, description: "Enterprise frontend framework" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Portal database management" },
    { name: "GraphQL", icon: graphQLLogo, description: "Flexible API layer" },
    { name: "Docker", icon: dockerLogo, description: "Portal containerization" },
    { name: "AWS", icon: awsLogo, description: "Cloud portal hosting" },
    { name: "Elasticsearch", icon: elasticsearchLogo, description: "Portal search engine" },
    { name: "Firebase", icon: firebaseLogo, description: "Real-time portal features" },
    { name: "GitLab", icon: gitLabLogo, description: "Portal development workflow" }
  ];

  const additionalFeatures = [
    "Dashboard Development",
    "Document Management", 
    "Workflow Management",
    "Integration Capabilities",
    "Mobile Responsiveness",
    "Analytics & Reporting"
  ];

  return (
    <div className="pt-16" data-testid="webportal-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-6" data-testid="webportal-title">
                Web Portal Development
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="webportal-description">
              Enterprise portals, customer portals, and content management systems with modern architecture and seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Web Portal Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive portal development services designed to enhance user engagement and streamline business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern web technologies and frameworks for building scalable, secure portal solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </div>
  );
}

function FintechDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: bankIcon,
      title: "Payment Processing Systems",
      description: "Secure, PCI-compliant payment processing solutions with support for multiple payment methods and currencies."
    },
    {
      icon: calculatorIcon,
      title: "Digital Banking Solutions",
      description: "Complete digital banking platforms with account management, transfers, loans, and mobile banking capabilities."
    },
    {
      icon: reportIcon,
      title: "Financial Analytics",
      description: "Advanced financial analytics and reporting tools with real-time insights, risk assessment, and performance tracking."
    },
    {
      icon: shieldIcon,
      title: "Risk Management Tools",
      description: "Comprehensive risk assessment and management systems with fraud detection and compliance monitoring."
    },
    {
      icon: networkIcon,
      title: "Trading Platforms",
      description: "High-performance trading platforms with real-time market data, order management, and portfolio tracking."
    },
    {
      icon: scaleIcon,
      title: "KYC/AML Compliance",
      description: "Automated compliance solutions for Know Your Customer and Anti-Money Laundering regulatory requirements."
    }
  ];

  const technologiesData = [
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "Financial data management" },
    { name: "Docker", icon: dockerLogo, description: "Secure containerization" },
    { name: "AWS", icon: awsLogo, description: "Cloud financial infrastructure" },
    { name: "Elasticsearch", icon: elasticsearchLogo, description: "Financial search & analytics" },
    { name: "GraphQL", icon: graphQLLogo, description: "Financial API management" },
    { name: "Firebase", icon: firebaseLogo, description: "Real-time financial data" },
    { name: "TensorFlow", icon: tensorFlowLogo, description: "AI-powered fintech solutions" },
    { name: "GitLab", icon: gitLabLogo, description: "Secure fintech deployment" }
  ];

  const additionalFeatures = [
    "Cryptocurrency Integration",
    "Fraud Detection Systems", 
    "Personal Finance Apps",
    "Investment Management",
    "Insurance Technology",
    "Regulatory Reporting"
  ];

  return (
    <div className="pt-16" data-testid="fintech-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-6" data-testid="fintech-title">
                Fintech Solutions
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="fintech-description">
              Financial applications, banking solutions, payment processing, and financial technology platforms with robust security and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Financial Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge fintech solutions designed to revolutionize financial services and enhance user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-amber-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Secure and scalable technologies powering next-generation financial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </div>
  );
}

function AIDetail() {
  const { t } = useTranslation();
  
  const coreFeatures = [
    {
      icon: lightbulbIcon,
      title: "Machine Learning Models",
      description: "Custom machine learning models for predictive analytics, classification, regression, and data-driven decision making."
    },
    {
      icon: searchIcon,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI systems."
    },
    {
      icon: mediaIcon,
      title: "Computer Vision",
      description: "Image recognition, object detection, facial recognition, and visual analytics powered by deep learning algorithms."
    },
    {
      icon: reportIcon,
      title: "Predictive Analytics",
      description: "Data-driven forecasting and trend analysis to help businesses make informed strategic decisions."
    },
    {
      icon: peopleIcon,
      title: "Chatbot Development",
      description: "Intelligent conversational AI with natural language understanding and contextual response generation."
    },
    {
      icon: thumbsUpIcon,
      title: "Recommendation Systems",
      description: "Personalized recommendation engines for e-commerce, content platforms, and user experience optimization."
    }
  ];

  const technologiesData = [
    { name: "TensorFlow", icon: tensorFlowLogo, description: "Machine learning framework" },
    { name: "PostgreSQL", icon: postgreSQLLogo, description: "AI data management" },
    { name: "Docker", icon: dockerLogo, description: "AI model containerization" },
    { name: "AWS", icon: awsLogo, description: "Cloud AI infrastructure" },
    { name: "Elasticsearch", icon: elasticsearchLogo, description: "AI-powered search" },
    { name: "Firebase", icon: firebaseLogo, description: "Real-time AI applications" },
    { name: "GraphQL", icon: graphQLLogo, description: "AI API management" },
    { name: "GitLab", icon: gitLabLogo, description: "AI development workflow" }
  ];

  const additionalFeatures = [
    "Automated Decision Making",
    "Deep Learning Solutions", 
    "AI-powered Analytics",
    "Intelligent Automation",
    "Neural Networks",
    "AI Consulting Services"
  ];

  return (
    <div className="pt-16" data-testid="ai-service-detail">
      {/* Hero Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="ghost" className="text-accent hover:text-accent/80 mb-4" data-testid="button-back-to-services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.common.backToServices}
              </Button>
            </Link>
            <div className="relative">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent mb-6" data-testid="ai-title">
                AI Solutions
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed" data-testid="ai-description">
              Artificial intelligence applications, machine learning models, and intelligent automation solutions to transform your business processes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Artificial Intelligence Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge AI solutions designed to transform business operations and enhance decision-making capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coreFeatures.map((feature, idx) => (
              <div key={idx} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {/* Gradient background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300" data-testid={`additional-feature-${feature.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                  <span className="font-medium text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced AI frameworks and tools for building intelligent, scalable artificial intelligence solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologiesData.map((tech, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100" data-testid={`technology-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </div>
  );
}
