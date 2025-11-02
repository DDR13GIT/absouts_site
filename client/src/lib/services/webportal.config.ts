/**
 * Web Portal Development Service Configuration
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const webportalConfig = {
  slug: "webportal",
  title: "Web Portal Development",
  description: "Enterprise portals, customer portals, and content management systems with modern architecture and seamless user experience.",

  heroGradient: {
    background: "from-teal-50 via-cyan-50 to-emerald-50",
    text: "from-teal-600 via-cyan-600 to-emerald-600"
  },

  gradientColors: {
    from: "teal-600",
    to: "emerald-600"
  },

  coreFeatures: [
    {
      icon: SERVICE_ICONS.building,
      title: "Enterprise Portals",
      description: "Comprehensive enterprise portal solutions with role-based access, workflow management, and integrated business processes."
    },
    {
      icon: SERVICE_ICONS.people,
      title: "Customer Portals",
      description: "Self-service customer portals with account management, support ticketing, and personalized user experiences."
    },
    {
      icon: SERVICE_ICONS.team,
      title: "Employee Portals",
      description: "Internal employee portals with HR integration, document access, collaboration tools, and company resources."
    },
    {
      icon: SERVICE_ICONS.network,
      title: "Partner Portals",
      description: "Secure partner collaboration platforms with shared resources, communication tools, and business integration."
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Content Management Systems",
      description: "Advanced CMS solutions with multi-site management, workflow approval, and dynamic content delivery."
    },
    {
      icon: SERVICE_ICONS.shield,
      title: "User Authentication & Authorization",
      description: "Robust security frameworks with single sign-on, multi-factor authentication, and granular permission controls."
    }
  ],

  coreFeaturesTitle: "Web Portal Solutions",
  coreFeaturesSubtitle: "Comprehensive portal development services designed to enhance user engagement and streamline business processes",

  additionalFeatures: [
    "Dashboard Development",
    "Document Management",
    "Workflow Management",
    "Integration Capabilities",
    "Mobile Responsiveness",
    "Analytics & Reporting"
  ],

  technologies: [
    { name: "Angular", icon: TECHNOLOGY_LOGOS.angular, description: "Enterprise frontend framework" },
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "Portal database management" },
    { name: "GraphQL", icon: TECHNOLOGY_LOGOS.graphql, description: "Flexible API layer" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "Portal containerization" },
    { name: "AWS", icon: TECHNOLOGY_LOGOS.aws, description: "Cloud portal hosting" },
    { name: "Elasticsearch", icon: TECHNOLOGY_LOGOS.elasticsearch, description: "Portal search engine" },
    { name: "Firebase", icon: TECHNOLOGY_LOGOS.firebase, description: "Real-time portal features" },
    { name: "GitLab", icon: TECHNOLOGY_LOGOS.gitlab, description: "Portal development workflow" }
  ],

  techStackSubtitle: "Modern web technologies and frameworks for building scalable, secure portal solutions"
};
