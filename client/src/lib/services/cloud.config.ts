/**
 * Cloud Infrastructure Service Configuration
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const cloudConfig = {
  slug: "cloud",
  title: "Cloud Infrastructure Solutions",
  description: "Scalable cloud infrastructure with automated deployment, monitoring, and optimization for maximum reliability and performance.",

  heroGradient: {
    background: "from-sky-50 via-blue-50 to-cyan-50",
    text: "from-sky-600 via-blue-600 to-cyan-600"
  },

  gradientColors: {
    from: "sky-600",
    to: "cyan-600"
  },

  coreFeatures: [
    {
      icon: SERVICE_ICONS.cloud,
      title: "Cloud Migration Services",
      description: "Seamless migration of on-premise infrastructure to cloud platforms with minimal downtime and maximum security."
    },
    {
      icon: SERVICE_ICONS.gears,
      title: "Infrastructure as Code (IaC)",
      description: "Automated infrastructure provisioning and management using Terraform, CloudFormation, and other IaC tools."
    },
    {
      icon: SERVICE_ICONS.network,
      title: "Auto-scaling Solutions",
      description: "Dynamic resource allocation that automatically scales infrastructure based on demand and performance metrics."
    },
    {
      icon: SERVICE_ICONS.scale,
      title: "Load Balancing",
      description: "Intelligent traffic distribution across multiple servers to ensure optimal performance and high availability."
    },
    {
      icon: SERVICE_ICONS.shield,
      title: "Security Implementation",
      description: "Comprehensive cloud security strategies including encryption, access controls, and compliance frameworks."
    },
    {
      icon: SERVICE_ICONS.report,
      title: "Monitoring & Logging",
      description: "Real-time infrastructure monitoring and centralized logging for proactive issue detection and resolution."
    }
  ],

  coreFeaturesTitle: "Cloud Infrastructure Services",
  coreFeaturesSubtitle: "Enterprise-grade cloud solutions designed for scalability, security, and optimal performance",

  additionalFeatures: [
    "Disaster Recovery Planning",
    "Cost Optimization",
    "DevOps Implementation",
    "Container Orchestration",
    "Serverless Architecture",
    "Multi-cloud Strategy"
  ],

  technologies: [
    { name: "AWS", icon: TECHNOLOGY_LOGOS.aws, description: "Amazon Web Services platform" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "Container platform" },
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "Cloud database solution" },
    { name: "Elasticsearch", icon: TECHNOLOGY_LOGOS.elasticsearch, description: "Search and analytics" },
    { name: "Firebase", icon: TECHNOLOGY_LOGOS.firebase, description: "Backend services platform" },
    { name: "GitLab", icon: TECHNOLOGY_LOGOS.gitlab, description: "CI/CD platform" },
    { name: "GraphQL", icon: TECHNOLOGY_LOGOS.graphql, description: "API gateway" },
    { name: "TensorFlow", icon: TECHNOLOGY_LOGOS.tensorflow, description: "ML infrastructure" }
  ],

  techStackSubtitle: "Leading cloud platforms and tools for building resilient infrastructure"
};
