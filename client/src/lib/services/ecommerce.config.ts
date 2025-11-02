/**
 * E-commerce Service Configuration
 * Contains all data for the e-commerce service detail page
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const ecommerceConfig = {
  slug: "ecommerce",
  title: "E-commerce Development",
  description: "Complete e-commerce solutions with modern platforms, payment integration, and user-friendly interfaces designed to drive sales and enhance customer experience.",

  heroGradient: {
    background: "from-blue-50 via-indigo-50 to-purple-50",
    text: "from-blue-600 via-purple-600 to-indigo-600"
  },

  gradientColors: {
    from: "blue-600",
    to: "purple-600"
  },

  coreFeatures: [
    {
      icon: SERVICE_ICONS.globe,
      title: "Custom E-commerce Platforms",
      description: "Tailored online stores built from the ground up to match your unique business requirements and brand identity."
    },
    {
      icon: SERVICE_ICONS.calculator,
      title: "Shopping Cart Development",
      description: "Intuitive shopping cart systems with seamless checkout processes that minimize cart abandonment rates."
    },
    {
      icon: SERVICE_ICONS.bank,
      title: "Payment Gateway Integration",
      description: "Secure payment processing with multiple payment options including credit cards, digital wallets, and cryptocurrencies."
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Product Catalog Management",
      description: "Advanced product management systems with categories, filters, search functionality, and inventory tracking."
    },
    {
      icon: SERVICE_ICONS.report,
      title: "Order Management Systems",
      description: "Comprehensive order processing workflows from purchase to delivery with real-time tracking capabilities."
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "Security Implementation",
      description: "Enterprise-grade security measures including SSL certificates, PCI compliance, and fraud protection."
    }
  ],

  additionalFeatures: [
    "Inventory Management",
    "Customer Account Management",
    "Multi-currency Support",
    "Mobile-responsive Design",
    "SEO Optimization",
    "Analytics and Reporting"
  ],

  technologies: [
    { name: "React", icon: TECHNOLOGY_LOGOS.react, description: "Modern frontend framework" },
    { name: "Angular", icon: TECHNOLOGY_LOGOS.angular, description: "Enterprise web framework" },
    { name: "Node.js", icon: TECHNOLOGY_LOGOS.nodejs, description: "Server-side JavaScript runtime" },
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "Advanced relational database" },
    { name: "AWS", icon: TECHNOLOGY_LOGOS.aws, description: "Cloud infrastructure platform" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "Containerization platform" },
    { name: "GraphQL", icon: TECHNOLOGY_LOGOS.graphql, description: "API query language" },
    { name: "Firebase", icon: TECHNOLOGY_LOGOS.firebase, description: "Real-time database platform" }
  ]
};
