/**
 * Centralized assets mapping for icons, logos, and images
 * This file consolidates all asset imports to reduce duplication and improve maintainability
 */

// Technology Logos
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

// Service Icons
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

// Image Editing Examples
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

/**
 * Technology logos organized by category
 */
export const TECHNOLOGY_LOGOS = {
  // Frontend
  react: restApiLogo,
  angular: angularJsLogo,
  css3: css3Logo,

  // Backend
  nodejs: joutLogo,
  django: djangoLogo,
  aspnet: aspNetLogo,
  go: goLogo,

  // Databases
  postgresql: postgreSQLLogo,
  sqlserver: sqlServerLogo,
  oracle: oracleLogo,
  elasticsearch: elasticsearchLogo,

  // Cloud & DevOps
  aws: awsLogo,
  docker: dockerLogo,
  firebase: firebaseLogo,
  gitlab: gitLabLogo,

  // APIs & Services
  graphql: graphQLLogo,

  // Testing
  jmeter: jmeterLogo,
  appium: appiumLogo,

  // AI/ML
  tensorflow: tensorFlowLogo,
  gemini: geminiLogo,
} as const;

/**
 * Service icons for feature cards
 */
export const SERVICE_ICONS = {
  globe: globeIcon,
  people: peopleIcon,
  lightbulb: lightbulbIcon,
  cloud: cloudIcon,
  gears: gearsIcon,
  thumbsUp: thumbsUpIcon,
  building: buildingIcon,
  search: searchIcon,
  document: documentIcon,
  bank: bankIcon,
  calculator: calculatorIcon,
  scale: scaleIcon,
  hands: handsIcon,
  shield: shieldIcon,
  media: mediaIcon,
  network: networkIcon,
  team: teamIcon,
  report: reportIcon,
  clock: clockIcon,
} as const;

/**
 * Image editing examples for BPO services
 */
export const IMAGE_EDITING_EXAMPLES = {
  carReflectionEdit,
  carSpotRepair,
  shoeRepair,
  backgroundRemoval: backgroundRemovalExample,
  clothingEdit,
  jewelryRetouch,
  chairBackgroundRemoval,
  imageMasking: imageMaskingExample,
  multiPath: multiPathService,
  photoManipulation,
  photoRetouching,
  faceSwapping,
  colorCorrection,
  shadowReflection: shadowReflectionExample,
} as const;

// Type exports for better TypeScript support
export type TechnologyLogo = keyof typeof TECHNOLOGY_LOGOS;
export type ServiceIcon = keyof typeof SERVICE_ICONS;
export type ImageEditingExample = keyof typeof IMAGE_EDITING_EXAMPLES;
