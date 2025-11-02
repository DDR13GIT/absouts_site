/**
 * Fintech Service Configuration
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const fintechConfig = {
  slug: "fintech",
  title: "Fintech Solutions",
  description: "Financial applications, banking solutions, payment processing, and financial technology platforms with robust security and compliance.",

  heroGradient: {
    background: "from-orange-50 via-amber-50 to-yellow-50",
    text: "from-orange-600 via-amber-600 to-yellow-600"
  },

  gradientColors: {
    from: "orange-600",
    to: "yellow-600"
  },

  coreFeatures: [
    {
      icon: SERVICE_ICONS.bank,
      title: "Payment Processing Systems",
      description: "Secure, PCI-compliant payment processing solutions with support for multiple payment methods and currencies."
    },
    {
      icon: SERVICE_ICONS.calculator,
      title: "Digital Banking Solutions",
      description: "Complete digital banking platforms with account management, transfers, loans, and mobile banking capabilities."
    },
    {
      icon: SERVICE_ICONS.report,
      title: "Financial Analytics",
      description: "Advanced financial analytics and reporting tools with real-time insights, risk assessment, and performance tracking."
    },
    {
      icon: SERVICE_ICONS.shield,
      title: "Risk Management Tools",
      description: "Comprehensive risk assessment and management systems with fraud detection and compliance monitoring."
    },
    {
      icon: SERVICE_ICONS.network,
      title: "Trading Platforms",
      description: "High-performance trading platforms with real-time market data, order management, and portfolio tracking."
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "KYC/AML Compliance",
      description: "Automated compliance solutions for Know Your Customer and Anti-Money Laundering regulatory requirements."
    }
  ],

  coreFeaturesTitle: "Financial Technology Solutions",
  coreFeaturesSubtitle: "Cutting-edge fintech solutions designed to revolutionize financial services and enhance user experience",

  additionalFeatures: [
    "Cryptocurrency Integration",
    "Fraud Detection Systems",
    "Personal Finance Apps",
    "Investment Management",
    "Insurance Technology",
    "Regulatory Reporting"
  ],

  technologies: [
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "Financial data management" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "Secure containerization" },
    { name: "AWS", icon: TECHNOLOGY_LOGOS.aws, description: "Cloud financial infrastructure" },
    { name: "Elasticsearch", icon: TECHNOLOGY_LOGOS.elasticsearch, description: "Financial search & analytics" },
    { name: "GraphQL", icon: TECHNOLOGY_LOGOS.graphql, description: "Financial API management" },
    { name: "Firebase", icon: TECHNOLOGY_LOGOS.firebase, description: "Real-time financial data" },
    { name: "TensorFlow", icon: TECHNOLOGY_LOGOS.tensorflow, description: "AI-powered fintech solutions" },
    { name: "GitLab", icon: TECHNOLOGY_LOGOS.gitlab, description: "Secure fintech deployment" }
  ],

  techStackSubtitle: "Secure and scalable technologies powering next-generation financial applications"
};
