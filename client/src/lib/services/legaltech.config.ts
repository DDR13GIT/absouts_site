/**
 * LegalTech Service Configuration
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const legaltechConfig = {
  slug: "legaltech",
  title: "LegalTech Solutions",
  description: "Legal case management, document automation, compliance solutions, and legal workflow optimization for modern law practices.",

  heroGradient: {
    background: "from-indigo-50 via-blue-50 to-cyan-50",
    text: "from-indigo-600 via-blue-600 to-cyan-600"
  },

  gradientColors: {
    from: "indigo-600",
    to: "cyan-600"
  },

  coreFeatures: [
    {
      icon: SERVICE_ICONS.scale,
      title: "Case Management Systems",
      description: "Comprehensive case tracking and management solutions for law firms with integrated document handling and client communication."
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Document Automation",
      description: "Automated legal document generation, contract templates, and form filling to streamline legal document workflows."
    },
    {
      icon: SERVICE_ICONS.hands,
      title: "Contract Management",
      description: "End-to-end contract lifecycle management from creation and negotiation to execution and renewal tracking."
    },
    {
      icon: SERVICE_ICONS.shield,
      title: "Compliance Tracking",
      description: "Regulatory compliance monitoring and reporting tools to ensure adherence to legal requirements and industry standards."
    },
    {
      icon: SERVICE_ICONS.search,
      title: "Legal Research Tools",
      description: "Advanced legal research platforms with AI-powered search capabilities and comprehensive legal database access."
    },
    {
      icon: SERVICE_ICONS.people,
      title: "Client Portal Development",
      description: "Secure client portals for document sharing, case updates, communication, and billing transparency."
    }
  ],

  coreFeaturesTitle: "LegalTech Solutions & Services",
  coreFeaturesSubtitle: "Comprehensive legal technology solutions designed to modernize law practices and enhance operational efficiency",

  additionalFeatures: [
    "Billing & Time Tracking",
    "Court Filing Systems",
    "Legal Analytics",
    "E-discovery Solutions",
    "Legal Workflow Automation",
    "Regulatory Compliance Tools"
  ],

  technologies: [
    { name: "ASP.NET", icon: TECHNOLOGY_LOGOS.aspnet, description: "Enterprise web framework" },
    { name: "Angular", icon: TECHNOLOGY_LOGOS.angular, description: "Frontend web framework" },
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "Legal database management" },
    { name: "Elasticsearch", icon: TECHNOLOGY_LOGOS.elasticsearch, description: "Legal document search" },
    { name: "AWS", icon: TECHNOLOGY_LOGOS.aws, description: "Cloud infrastructure" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "Application containerization" },
    { name: "Firebase", icon: TECHNOLOGY_LOGOS.firebase, description: "Real-time legal data" },
    { name: "GraphQL", icon: TECHNOLOGY_LOGOS.graphql, description: "Legal API management" }
  ],

  techStackSubtitle: "Robust and secure technologies powering modern legal practice management systems"
};
