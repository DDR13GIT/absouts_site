/**
 * Mobile App Development Service Configuration
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const mobileConfig = {
  slug: "mobile",
  title: "Mobile App Development",
  description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design and seamless user experience.",

  heroGradient: {
    background: "from-green-50 via-emerald-50 to-teal-50",
    text: "from-green-600 via-emerald-600 to-teal-600"
  },

  gradientColors: {
    from: "green-600",
    to: "teal-600"
  },

  coreFeatures: [
    {
      icon: SERVICE_ICONS.gears,
      title: "Native iOS Development",
      description: "High-performance iOS applications built with Swift and Objective-C for optimal user experience and device integration."
    },
    {
      icon: SERVICE_ICONS.gears,
      title: "Native Android Development",
      description: "Feature-rich Android applications developed with Kotlin and Java, leveraging the latest Android SDK capabilities."
    },
    {
      icon: SERVICE_ICONS.globe,
      title: "Cross-platform Solutions",
      description: "Unified codebase apps using React Native and Flutter for faster development and consistent user experience across platforms."
    },
    {
      icon: SERVICE_ICONS.people,
      title: "UI/UX Design",
      description: "Intuitive and engaging mobile interfaces designed following platform-specific guidelines and user experience best practices."
    },
    {
      icon: SERVICE_ICONS.search,
      title: "App Store Optimization",
      description: "Strategic optimization for app store visibility, including metadata, screenshots, and keyword optimization."
    },
    {
      icon: SERVICE_ICONS.network,
      title: "API Integration",
      description: "Seamless integration with third-party services, RESTful APIs, and backend systems for enhanced functionality."
    }
  ],

  coreFeaturesTitle: "Mobile App Development Services",
  coreFeaturesSubtitle: "Complete mobile development solutions from concept to deployment across iOS and Android platforms",

  additionalFeatures: [
    "Push Notifications",
    "Offline Functionality",
    "In-app Purchases",
    "Social Media Integration",
    "Analytics Integration",
    "App Maintenance & Updates"
  ],

  technologies: [
    { name: "React Native", icon: TECHNOLOGY_LOGOS.react, description: "Cross-platform mobile framework" },
    { name: "Firebase", icon: TECHNOLOGY_LOGOS.firebase, description: "Backend-as-a-Service platform" },
    { name: "AWS Mobile", icon: TECHNOLOGY_LOGOS.aws, description: "Cloud mobile development platform" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "Containerization for mobile backends" },
    { name: "GraphQL", icon: TECHNOLOGY_LOGOS.graphql, description: "API query language for mobile" },
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "Reliable mobile app database" },
    { name: "TensorFlow", icon: TECHNOLOGY_LOGOS.tensorflow, description: "Machine learning for mobile" },
    { name: "Elasticsearch", icon: TECHNOLOGY_LOGOS.elasticsearch, description: "Search and analytics engine" }
  ],

  techStackSubtitle: "Modern frameworks and tools for building scalable, performant mobile applications"
};
