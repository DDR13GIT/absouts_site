/**
 * Software Testing & QA Service Configuration
 * Contains all data for the testing service detail page
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const testingConfig = {
  slug: "testing",
  title: "Software Testing & QA",
  description: "Comprehensive quality assurance and testing services ensuring your software is reliable, secure, and performs flawlessly across all platforms and scenarios.",

  heroGradient: {
    background: "from-green-50 via-teal-50 to-cyan-50",
    text: "from-green-600 via-teal-600 to-cyan-600"
  },

  gradientColors: {
    from: "green-600",
    to: "cyan-600"
  },

  coreFeaturesTitle: "Quality Assurance Excellence",
  coreFeaturesSubtitle: "Comprehensive testing solutions to ensure software reliability",

  coreFeatures: [
    {
      icon: SERVICE_ICONS.search,
      title: "Manual Testing",
      description: "Thorough hands-on testing by experienced QA professionals to identify usability issues and edge cases that automated tests might miss."
    },
    {
      icon: SERVICE_ICONS.gears,
      title: "Automated Testing",
      description: "Efficient test automation frameworks for regression, functional, and performance testing to accelerate your development cycle."
    },
    {
      icon: SERVICE_ICONS.shield,
      title: "Security Testing",
      description: "Comprehensive security assessments including penetration testing, vulnerability scanning, and compliance verification."
    },
    {
      icon: SERVICE_ICONS.network,
      title: "Performance Testing",
      description: "Load testing, stress testing, and performance optimization to ensure your application can handle peak traffic."
    },
    {
      icon: SERVICE_ICONS.thumbsUp,
      title: "User Acceptance Testing",
      description: "Validate that your software meets business requirements and provides an excellent user experience."
    },
    {
      icon: SERVICE_ICONS.report,
      title: "Test Documentation",
      description: "Detailed test plans, test cases, and comprehensive reporting to track quality metrics and progress."
    }
  ],

  additionalFeatures: [
    "API Testing",
    "Mobile App Testing",
    "Cross-browser Testing",
    "Accessibility Testing",
    "Localization Testing",
    "Continuous Integration Testing"
  ],

  techStackSubtitle: "Industry-leading testing tools and frameworks",

  technologies: [
    { name: "JMeter", icon: TECHNOLOGY_LOGOS.jmeter, description: "Performance testing tool" },
    { name: "Appium", icon: TECHNOLOGY_LOGOS.appium, description: "Mobile automation framework" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "Containerized test environments" },
    { name: "GitLab", icon: TECHNOLOGY_LOGOS.gitlab, description: "CI/CD pipeline integration" },
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "Database testing" },
    { name: "Firebase", icon: TECHNOLOGY_LOGOS.firebase, description: "Mobile backend testing" },
    { name: "AWS", icon: TECHNOLOGY_LOGOS.aws, description: "Cloud testing infrastructure" },
    { name: "Elasticsearch", icon: TECHNOLOGY_LOGOS.elasticsearch, description: "Log analysis and monitoring" }
  ]
};
