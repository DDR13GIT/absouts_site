/**
 * Software Development Service Configuration
 * Contains all data for the software development service detail page
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const softwareConfig = {
  slug: "software",
  title: "Software Development",
  description: "Custom software engineered for scale, reliability, and long-term maintainability. Covers full-cycle delivery from architecture to deployment.",

  heroGradient: {
    background: "from-purple-50 via-violet-50 to-purple-50",
    text: "from-purple-600 via-violet-600 to-purple-600"
  },

  gradientColors: {
    from: "purple-600",
    to: "violet-600"
  },

  coreFeatures: [
    {
      icon: SERVICE_ICONS.gears,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business needs and operational requirements."
    },
    {
      icon: SERVICE_ICONS.cloud,
      title: "Cloud-Native Applications",
      description: "Scalable cloud-based applications designed for modern infrastructure with high availability and performance."
    },
    {
      icon: SERVICE_ICONS.network,
      title: "API Development & Integration",
      description: "RESTful and GraphQL APIs with seamless third-party integrations to connect your systems efficiently."
    },
    {
      icon: SERVICE_ICONS.shield,
      title: "Enterprise Software Solutions",
      description: "Robust enterprise-grade applications with advanced security, compliance, and scalability features."
    },
    {
      icon: SERVICE_ICONS.lightbulb,
      title: "Software Architecture Design",
      description: "Well-planned system architecture ensuring maintainability, scalability, and optimal performance."
    },
    {
      icon: SERVICE_ICONS.document,
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, efficient applications without disrupting business operations."
    }
  ],

  additionalFeatures: [
    "Microservices Architecture",
    "DevOps & CI/CD Pipeline",
    "Code Quality & Testing",
    "Performance Optimization",
    "Technical Documentation",
    "Ongoing Maintenance & Support"
  ],

  technologies: [
    { name: "React", icon: TECHNOLOGY_LOGOS.react, description: "Modern frontend framework" },
    { name: "Angular", icon: TECHNOLOGY_LOGOS.angular, description: "Enterprise web framework" },
    { name: "Node.js", icon: TECHNOLOGY_LOGOS.nodejs, description: "Server-side JavaScript runtime" },
    { name: "Django", icon: TECHNOLOGY_LOGOS.django, description: "Python web framework" },
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "Advanced relational database" },
    { name: "AWS", icon: TECHNOLOGY_LOGOS.aws, description: "Cloud infrastructure platform" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "Containerization platform" },
    { name: "GraphQL", icon: TECHNOLOGY_LOGOS.graphql, description: "API query language" }
  ]
};
