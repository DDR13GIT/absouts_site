/**
 * AI Solutions Service Configuration
 */

import { SERVICE_ICONS, TECHNOLOGY_LOGOS } from "@/lib/assets";

export const aiConfig = {
  slug: "ai",
  title: "AI Solutions",
  description: "Artificial intelligence applications, machine learning models, and intelligent automation solutions to transform your business processes.",

  heroGradient: {
    background: "from-pink-50 via-rose-50 to-purple-50",
    text: "from-pink-600 via-rose-600 to-purple-600"
  },

  gradientColors: {
    from: "pink-600",
    to: "purple-600"
  },

  coreFeatures: [
    {
      icon: SERVICE_ICONS.lightbulb,
      title: "Machine Learning Models",
      description: "Custom machine learning models for predictive analytics, classification, regression, and data-driven decision making."
    },
    {
      icon: SERVICE_ICONS.search,
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI systems."
    },
    {
      icon: SERVICE_ICONS.media,
      title: "Computer Vision",
      description: "Image recognition, object detection, facial recognition, and visual analytics powered by deep learning algorithms."
    },
    {
      icon: SERVICE_ICONS.report,
      title: "Predictive Analytics",
      description: "Data-driven forecasting and trend analysis to help businesses make informed strategic decisions."
    },
    {
      icon: SERVICE_ICONS.people,
      title: "Chatbot Development",
      description: "Intelligent conversational AI with natural language understanding and contextual response generation."
    },
    {
      icon: SERVICE_ICONS.thumbsUp,
      title: "Recommendation Systems",
      description: "Personalized recommendation engines for e-commerce, content platforms, and user experience optimization."
    }
  ],

  coreFeaturesTitle: "Artificial Intelligence Services",
  coreFeaturesSubtitle: "Cutting-edge AI solutions designed to transform business operations and enhance decision-making capabilities",

  additionalFeatures: [
    "Automated Decision Making",
    "Deep Learning Solutions",
    "AI-powered Analytics",
    "Intelligent Automation",
    "Neural Networks",
    "AI Consulting Services"
  ],

  technologies: [
    { name: "TensorFlow", icon: TECHNOLOGY_LOGOS.tensorflow, description: "Machine learning framework" },
    { name: "PostgreSQL", icon: TECHNOLOGY_LOGOS.postgresql, description: "AI data management" },
    { name: "Docker", icon: TECHNOLOGY_LOGOS.docker, description: "AI model containerization" },
    { name: "AWS", icon: TECHNOLOGY_LOGOS.aws, description: "Cloud AI infrastructure" },
    { name: "Elasticsearch", icon: TECHNOLOGY_LOGOS.elasticsearch, description: "AI-powered search" },
    { name: "Firebase", icon: TECHNOLOGY_LOGOS.firebase, description: "Real-time AI applications" },
    { name: "GraphQL", icon: TECHNOLOGY_LOGOS.graphql, description: "AI API management" },
    { name: "GitLab", icon: TECHNOLOGY_LOGOS.gitlab, description: "AI development workflow" }
  ],

  techStackSubtitle: "Advanced AI frameworks and tools for building intelligent, scalable artificial intelligence solutions"
};
