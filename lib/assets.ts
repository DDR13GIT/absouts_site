// Asset map: typed, stable references to all public/assets/* files.
// Use the exported keys everywhere — never inline literal paths.

export const LOGO = {
  light: "/assets/Absouts Logo Transparent 01_1757063958530.png",
  dark:  "/assets/Absouts Logo Transparent 02_1757063961279.png",
} as const;

// Service icon assets — Asset N_* mapped to semantic keys.
// Numbering follows the legacy ordering (globe=1 … clock=19).
export const SERVICE_ICONS = {
  globe:       "/assets/Asset 1_1757767623438.png",
  people:      "/assets/Asset 2_1757767623439.png",
  lightbulb:   "/assets/Asset 3_1757767623439.png",
  cloud:       "/assets/Asset 4_1757767623439.png",
  gears:       "/assets/Asset 5_1757767623439.png",
  thumbsUp:    "/assets/Asset 6_1757767623439.png",
  building:    "/assets/Asset 7_1757767623439.png",
  search:      "/assets/Asset 8_1757767623439.png",
  document:    "/assets/Asset 9_1757767623440.png",
  bank:        "/assets/Asset 10_1757767623440.png",
  calculator:  "/assets/Asset 11_1757767623440.png",
  scale:       "/assets/Asset 12_1757767623440.png",
  hands:       "/assets/Asset 13_1757767623440.png",
  shield:      "/assets/Asset 14_1757767623440.png",
  media:       "/assets/Asset 15_1757767623440.png",
  network:     "/assets/Asset 16_1757767623440.png",
  team:        "/assets/Asset 17_1757767623440.png",
  report:      "/assets/Asset 18_1757767623441.png",
  clock:       "/assets/Asset 19_1757767623441.png",
} as const;

export type ServiceIconKey = keyof typeof SERVICE_ICONS;

// Technology logo URLs — jsDelivr devicon CDN.
export const TECHNOLOGY_LOGOS = {
  react:          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  angular:        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  css3:           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  nodejs:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  django:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  aspnet:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  go:             "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  postgresql:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  sqlserver:      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  oracle:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  elasticsearch:  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
  aws:            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  docker:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  firebase:       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  gitlab:         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  graphql:        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  tensorflow:     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
} as const;

export type TechLogoKey = keyof typeof TECHNOLOGY_LOGOS;

// Background images for hero sections and department pages.
export const BACKGROUNDS = {
  bpo:             "/assets/bpo_bg.webp",
  cloudAccounting: "/assets/ca_bg.webp",
  software:        "/assets/sd_bg.webp",
  heroBg1:         "/assets/hero-bg1.jpg",
  heroBg2:         "/assets/hero-bg2.jpg",
  whyChooseUs:     "/assets/whyChooseUsBG.webp",
} as const;

// About page section backgrounds.
export const ABOUT = {
  foundation:  "/assets/foundationBG.webp",
  base:        "/assets/baseBG.webp",
  baseDarker:  "/assets/baseDarkerBG.webp",
  mission:     "/assets/missionBG.webp",
  vision:      "/assets/visionBG.webp",
  values:      "/assets/valuesBG.webp",
} as const;

// Leadership team photos — match actual filenames in public/assets.
// Four leaders in the last-live lineup: K D Roy (CEO), Enam H. Khan (COO),
// Razwan Kader (CTO), Pritam Kumar Das (Head of Business Development).
export const LEADERSHIP_PHOTOS = {
  kdRoy:          "/assets/k_d_roy_1757771450330.jpeg",
  enamKhan:       "/assets/PHOTO-2025-09-19-15-52-54_1758373122811.jpg",
  razwanKader:    "/assets/razwan_kader_1757771450332.png",
  pritamKumarDas: "/assets/pritam_kumar_das_1757771450332.png",
} as const;
