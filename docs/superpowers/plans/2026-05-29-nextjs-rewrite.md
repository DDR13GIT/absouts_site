# Absouts Next.js + Tailwind v4 Rewrite — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Absouts marketing + careers site on Next.js (App Router, React 19) and Tailwind v4 with a Neon/Drizzle data layer, next-intl bilingual support, a unified Server Action backend, three distinct service departments, and a polished anti-slop UI.

**Architecture:** Single Next.js app. Server Components read jobs from Neon via Drizzle; Server Actions handle contact/application mutations with Zod validation + Resend email. One `middleware.ts` does locale routing (next-intl) and geoblocking. Marketing copy lives in next-intl message catalogs; structural service config is typed. UI is a lean Tailwind-v4 design system; visual craft is enforced with the `impeccable`, `design-taste-frontend`, and `emil-design-eng` skills.

**Tech Stack:** Next.js latest, React 19, TypeScript (strict), Tailwind v4, Drizzle ORM + Neon Postgres, next-intl, Resend, Zod, Radix primitives, Vitest, `@vercel/analytics` + `@vercel/speed-insights`.

**Reference spec:** `docs/superpowers/specs/2026-05-29-nextjs-rewrite-design.md`

---

## Working notes for the implementer

- **Clean slate.** The old app (`client/`, `server/`, `api/`, `shared/`, `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `components.json`, `vercel.json`) is removed in Task 1. The new app lives at repo root using the Next.js App Router. Image assets currently in `attached_assets/` are migrated to `public/` (Task 1).
- **TDD where it pays.** Logic units (DB queries + formatters, Zod schemas, Server Action validation paths, geoblocking decision, SEO JSON-LD builders, i18n completeness) get unit tests with Vitest. UI/content tasks are verified with `pnpm typecheck`, `pnpm build`, and a visual review using the design skills + the `run` skill — they are not unit-tested.
- **Design skills are mandatory on UI tasks.** Every page/section task ends with a design-quality gate: invoke `design-taste-frontend` (direction), `emil-design-eng` (component/motion polish), and `impeccable` (audit) before marking done. "Done" means it does not look templated.
- **Commit cadence:** one commit per task minimum. Conventional commit messages. End each message with the Co-Authored-By trailer from the repo convention.
- **Package manager:** pnpm. If pnpm is unavailable, npm is acceptable — keep the lockfile consistent.
- **Branch:** already on `rewrite/nextjs-tailwind-v4`.

---

## File Structure

```
package.json                      deps + scripts
tsconfig.json                     strict TS, path alias @/*
next.config.ts                    next config (i18n plugin, images)
postcss.config.mjs                tailwind v4 postcss plugin
drizzle.config.ts                 drizzle-kit config
vitest.config.ts                  test runner
.env.example                      documented env vars
middleware.ts                     next-intl locale routing + geoblocking

app/
  globals.css                     @import tailwindcss + @theme tokens + keyframes
  layout.tsx                      root html shell, fonts, analytics
  [locale]/
    layout.tsx                    NextIntlClientProvider, Navbar, Footer
    page.tsx                      Home
    about/page.tsx
    services/page.tsx
    services/cloud-accounting/page.tsx
    services/bpo/page.tsx
    services/software/page.tsx
    services/software/[slug]/page.tsx
    careers/page.tsx
    careers/[id]/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    not-found.tsx
  sitemap.ts
  robots.ts
  manifest.ts

i18n/
  routing.ts                      next-intl routing config (locales, default)
  request.ts                      next-intl request config (message loading)
  navigation.ts                   localized Link/redirect/usePathname helpers

messages/
  en.json
  es.json

lib/
  db/
    schema.ts                     drizzle tables
    client.ts                     neon + drizzle client
    queries.ts                    typed reads + job view-model transform
    format.ts                     formatJobType / formatSalary
    seed.ts                       sample jobs seed script
  actions/
    schemas.ts                    zod schemas (contact, application)
    contact.ts                    submitContact server action
    application.ts                submitApplication server action
    email.ts                      resend client + email templates
  seo/
    metadata.ts                   buildMetadata helper
    structured-data.ts            organization / breadcrumb / service JSON-LD builders
  services/
    types.ts                      ServiceConfig / SubServiceConfig types
    departments.ts                cloud-accounting, bpo, software (ordered)
    software-subservices.ts       8 sub-service configs (slug, icon, gradient)
    index.ts                      barrel
  utils/
    cn.ts                         class merge helper
    constants.ts                  company info (offices, phones, emails, socials)

components/
  ui/                             Button, Card, Badge, Input, Textarea, Select,
                                  Dialog, Checkbox, Skeleton, Toast/Toaster
  layout/                         Navbar, Footer, LanguageSwitcher
  sections/                       Hero, SectionHeading, FeatureGrid, TechStack,
                                  Cta, BlobBackground, StatMetrics
  services/                       DepartmentTemplate, SubServiceTemplate,
                                  DepartmentServiceCard
  forms/                          ContactForm, JobApplicationForm
  careers/                        JobListCard, JobDetail, PerksBenefits
  map/                            LazyMap

tests/
  format.test.ts
  queries.test.ts
  schemas.test.ts
  geoblocking.test.ts
  structured-data.test.ts
  messages.test.ts
```

---

# PHASE 1 — Foundation (sequential; everything depends on these)

## Task 1: Remove old app and scaffold Next.js + Tailwind v4

**Files:**
- Delete: `client/`, `server/`, `api/`, `shared/`, `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `components.json`, `vercel.json`, `.replit`, `DEPLOYMENT.md`, `GEOBLOCKING.md`, `supabase-setup.sql`, `.vercelignore`
- Move: `attached_assets/*` → `public/assets/*`
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `app/globals.css`, `app/layout.tsx`, `app/[locale]/page.tsx` (temporary placeholder)

- [ ] **Step 1: Preserve assets, then remove old source**

```bash
git mv attached_assets public_assets_tmp 2>/dev/null || mv attached_assets public_assets_tmp
rm -rf client server api shared vite.config.ts tailwind.config.ts postcss.config.js \
  components.json vercel.json .replit DEPLOYMENT.md GEOBLOCKING.md supabase-setup.sql .vercelignore
mkdir -p public/assets && (git mv public_assets_tmp/* public/assets/ 2>/dev/null || mv public_assets_tmp/* public/assets/)
rmdir public_assets_tmp 2>/dev/null || true
# also move the public/ static files that should stay (favicon, manifest icons) if present
```

- [ ] **Step 2: Write `package.json`**

```json
{
  "name": "absouts-site",
  "version": "2.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "db:generate": "drizzle-kit generate",
    "db:migrate": "drizzle-kit migrate",
    "db:push": "drizzle-kit push",
    "db:studio": "drizzle-kit studio",
    "db:seed": "tsx lib/db/seed.ts"
  },
  "dependencies": {
    "next": "^15.5.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "next-intl": "^4.3.0",
    "drizzle-orm": "^0.44.0",
    "@neondatabase/serverless": "^0.10.4",
    "resend": "^6.4.0",
    "zod": "^4.0.0",
    "lucide-react": "^0.544.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.0.0",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-checkbox": "^1.1.5",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-slot": "^1.2.0",
    "class-variance-authority": "^0.7.1",
    "@vercel/analytics": "^1.5.0",
    "@vercel/speed-insights": "^1.2.0"
  },
  "devDependencies": {
    "typescript": "^5.6.3",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.1.0",
    "@tailwindcss/postcss": "^4.1.0",
    "drizzle-kit": "^0.31.0",
    "tsx": "^4.19.1",
    "vitest": "^2.1.0",
    "dotenv": "^17.2.3"
  }
}
```

- [ ] **Step 3: Write `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 4: Write `next.config.ts`, `postcss.config.mjs`**

`next.config.ts`:
```ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default withNextIntl(nextConfig);
```

`postcss.config.mjs`:
```js
const config = { plugins: { "@tailwindcss/postcss": {} } };
export default config;
```

- [ ] **Step 5: Write `app/globals.css` with the Tailwind v4 `@theme` token block**

```css
@import "tailwindcss";

@theme {
  /* Brand */
  --color-brand-primary: #0b0b44;
  --color-brand-secondary: #2b3990;
  --color-brand-accent: #27aae1;

  /* Mediterranean palette */
  --color-med-olive: #9caa8c;
  --color-med-herb: #5d6f5f;
  --color-med-french: #6b8db2;
  --color-med-clementine: #dc8b6a;
  --color-med-calendula: #f5c56b;
  --color-med-sky: #b5c9d9;
  --color-med-terra: #a6704e;
  --color-med-linen: #eae6dc;

  /* Surfaces */
  --color-bg-base: #fffdf5;
  --color-bg-darker: #f8f5ee;
  --color-bg-section: #d0d9f5;
  --color-bg-surface: #ffffff;
  --color-success: #e7f1ab;
  --color-neutral-dark: #333333;

  /* Text */
  --color-text-primary: #0b0b44;
  --color-text-secondary: #6e6f72;
  --color-text-muted: #939598;

  --font-sans: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --radius: 0.75rem;
  --shadow-subtle: 0 2px 8px rgb(0 0 0 / 0.06);
  --shadow-medium: 0 4px 16px rgb(0 0 0 / 0.06);
  --shadow-strong: 0 8px 24px rgb(0 0 0 / 0.06);

  --animate-blob: blob 7s infinite ease-in-out;
}

@keyframes blob {
  0%   { transform: translate3d(0,0,0) scale(1); }
  33%  { transform: translate3d(30px,-50px,0) scale(1.1); }
  66%  { transform: translate3d(-20px,20px,0) scale(0.9); }
  100% { transform: translate3d(0,0,0) scale(1); }
}

@layer base {
  body {
    background: var(--color-bg-base);
    color: var(--color-text-primary);
    font-family: var(--font-sans);
    letter-spacing: -0.01em;
    -webkit-font-smoothing: antialiased;
  }
}

.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
```

- [ ] **Step 6: Write root `app/layout.tsx` + temporary `app/[locale]/page.tsx`**

`app/layout.tsx`:
```tsx
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return children; // [locale]/layout.tsx renders <html>; root just imports CSS + analytics
}
```

Note: in App Router with `[locale]`, the `<html>`/`<body>` tags belong in `app/[locale]/layout.tsx`. Keep `Analytics`/`SpeedInsights` there. Adjust this in Task 6.

Temporary `app/[locale]/page.tsx`:
```tsx
export default function Home() {
  return <main className="p-10 text-3xl font-bold text-brand-primary">Absouts (scaffold)</main>;
}
```

- [ ] **Step 7: Install + verify dev server boots**

Run: `pnpm install && pnpm dev`
Expected: dev server starts; visiting `/` (after i18n redirect lands on `/en`) shows the scaffold text. (i18n routing wired in Task 5; until then root may 404 on `/` — acceptable at this step if `/en` renders after Task 5.)

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 15 + Tailwind v4, remove legacy Vite/Express app

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 2: Drizzle schema + Neon client + `.env.example`

**Files:**
- Create: `lib/db/schema.ts`, `lib/db/client.ts`, `drizzle.config.ts`, `.env.example`

- [ ] **Step 1: Write `lib/db/schema.ts`**

```ts
import { pgTable, uuid, text, boolean, integer, timestamp } from "drizzle-orm/pg-core";

export const jobs = pgTable("jobs", {
  id: uuid("id").primaryKey().defaultRandom(),
  jobTitle: text("job_title").notNull(),
  jobShortDescription: text("job_short_description").notNull(),
  jobType: text("job_type").notNull(),
  location: text("location"),
  isRemote: boolean("is_remote").default(false),
  requiredSkills: text("required_skills").array().default([]),
  qualifications: text("qualifications").array().default([]),
  requirements: text("requirements").array().default([]),
  salaryMin: integer("salary_min"),
  salaryMax: integer("salary_max"),
  salaryCurrency: text("salary_currency").default("USD"),
  companyName: text("company_name").default("Absouts"),
  status: text("status").notNull().default("draft"),
  postedAt: timestamp("posted_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  serviceInterest: text("service_interest"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const jobApplications = pgTable("job_applications", {
  id: uuid("id").primaryKey().defaultRandom(),
  jobId: text("job_id").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  experience: text("experience").notNull(),
  resumeUrl: text("resume_url").notNull(),
  coverLetter: text("cover_letter"),
  privacyConsent: boolean("privacy_consent").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export type JobRow = typeof jobs.$inferSelect;
```

- [ ] **Step 2: Write `lib/db/client.ts`**

```ts
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
```

- [ ] **Step 3: Write `drizzle.config.ts` + `.env.example`**

`drizzle.config.ts`:
```ts
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL! },
});
```

`.env.example`:
```
DATABASE_URL=postgres://user:pass@host/db?sslmode=require
RESEND_API_KEY=re_xxx
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=contact@absouts.com
RESEND_CAREERS_EMAIL=careers@absouts.com
BLOCKED_COUNTRIES=KP
NEXT_PUBLIC_SITE_URL=https://absouts.com
```

- [ ] **Step 4: Generate migration + verify**

Run: `pnpm db:generate`
Expected: a SQL migration appears under `drizzle/`. (No DB connection required to generate.)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Drizzle schema, Neon client, drizzle-kit config

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 3: Job formatters (TDD)

**Files:**
- Create: `lib/db/format.ts`, `tests/format.test.ts`
- Create: `vitest.config.ts`

- [ ] **Step 1: Write `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  test: { environment: "node", include: ["tests/**/*.test.ts"] },
});
```

- [ ] **Step 2: Write the failing test `tests/format.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { formatJobType, formatSalary } from "@/lib/db/format";

describe("formatJobType", () => {
  it("maps known types", () => {
    expect(formatJobType("full_time")).toBe("Full-time");
    expect(formatJobType("part_time")).toBe("Part-time");
    expect(formatJobType("freelance")).toBe("Freelance");
  });
  it("falls back to Full-time for null/unknown", () => {
    expect(formatJobType(null)).toBe("Full-time");
    expect(formatJobType("weird")).toBe("Full-time");
  });
});

describe("formatSalary", () => {
  it("formats a min-max range", () => {
    expect(formatSalary(60000, 90000, "USD")).toBe("USD 60,000 - 90,000");
  });
  it("formats min only and max only", () => {
    expect(formatSalary(60000, null, "USD")).toBe("USD 60,000+");
    expect(formatSalary(null, 90000, "USD")).toBe("Up to USD 90,000");
  });
  it("returns undefined when no currency or no bounds", () => {
    expect(formatSalary(60000, 90000, null)).toBeUndefined();
    expect(formatSalary(null, null, "USD")).toBeUndefined();
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `pnpm test tests/format.test.ts`
Expected: FAIL — module `@/lib/db/format` not found.

- [ ] **Step 4: Implement `lib/db/format.ts`**

```ts
export function formatJobType(type: string | null): string {
  if (!type) return "Full-time";
  const map: Record<string, string> = {
    full_time: "Full-time",
    part_time: "Part-time",
    contract: "Contract",
    internship: "Internship",
    temporary: "Temporary",
    freelance: "Freelance",
  };
  return map[type] ?? "Full-time";
}

export function formatSalary(
  min: number | null,
  max: number | null,
  currency: string | null,
): string | undefined {
  if (!currency || (!min && !max)) return undefined;
  if (min && max) return `${currency} ${min.toLocaleString()} - ${max.toLocaleString()}`;
  if (min) return `${currency} ${min.toLocaleString()}+`;
  if (max) return `Up to ${currency} ${max.toLocaleString()}`;
  return undefined;
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `pnpm test tests/format.test.ts`
Expected: PASS (3 + 2 assertions green).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: job type/salary formatters with tests

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 4: Job queries + view-model transform (TDD on the transform)

**Files:**
- Create: `lib/db/queries.ts`, `tests/queries.test.ts`

- [ ] **Step 1: Write the failing test `tests/queries.test.ts`** (tests the pure transform, not the DB)

```ts
import { describe, it, expect } from "vitest";
import { toJobListItem, toJobDetail } from "@/lib/db/queries";
import type { JobRow } from "@/lib/db/schema";

const row: JobRow = {
  id: "abc", jobTitle: "Dev", jobShortDescription: "desc", jobType: "full_time",
  location: "Dhaka", isRemote: false, requiredSkills: ["React"], qualifications: ["BSc"],
  requirements: ["Build"], salaryMin: 60000, salaryMax: 90000, salaryCurrency: "USD",
  companyName: "Absouts", status: "published", postedAt: new Date("2025-01-01"),
  createdAt: new Date("2025-01-01"), updatedAt: new Date("2025-01-01"),
};

describe("toJobListItem", () => {
  it("maps a row to list shape with formatted fields", () => {
    const j = toJobListItem(row);
    expect(j).toMatchObject({
      id: "abc", title: "Dev", location: "Dhaka", type: "Full-time",
      salary: "USD 60,000 - 90,000", skills: ["React"],
    });
  });
  it("shows Remote when is_remote", () => {
    expect(toJobListItem({ ...row, isRemote: true }).location).toBe("Remote");
  });
});

describe("toJobDetail", () => {
  it("joins arrays and fills defaults", () => {
    const d = toJobDetail(row);
    expect(d.requirements).toBe("Build");
    expect(d.experience).toBe("BSc");
    expect(d.contact).toBe("careers@absouts.com");
    expect(d.salary).toBe("USD 60,000 - 90,000");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test tests/queries.test.ts`
Expected: FAIL — exports not found.

- [ ] **Step 3: Implement `lib/db/queries.ts`**

```ts
import { and, desc, eq } from "drizzle-orm";
import { db } from "./client";
import { jobs, type JobRow } from "./schema";
import { formatJobType, formatSalary } from "./format";

export type JobListItem = {
  id: string; title: string; location: string; type: string;
  postedDate: string; description: string; skills: string[];
  salary?: string; requirements?: string; experience?: string;
};

export type JobDetailVM = JobListItem & {
  salary: string; requirements: string; experience: string;
  benefits: string; contact: string; deadline: string | null;
};

export function toJobListItem(j: JobRow): JobListItem {
  return {
    id: j.id,
    title: j.jobTitle,
    location: j.isRemote ? "Remote" : j.location ?? "Not specified",
    type: formatJobType(j.jobType),
    postedDate: (j.postedAt ?? j.createdAt ?? new Date()).toISOString(),
    description: j.jobShortDescription,
    skills: j.requiredSkills ?? [],
    salary: formatSalary(j.salaryMin, j.salaryMax, j.salaryCurrency),
    requirements: j.requirements?.length ? j.requirements.join("\n") : undefined,
    experience: j.qualifications?.length ? j.qualifications.join("\n") : undefined,
  };
}

export function toJobDetail(j: JobRow): JobDetailVM {
  const base = toJobListItem(j);
  return {
    ...base,
    salary: base.salary ?? "Competitive",
    requirements: j.requirements?.length ? j.requirements.join("\n") : "To be discussed during interview",
    experience: j.qualifications?.length ? j.qualifications.join("\n") : "Will be discussed during interview",
    benefits: "See company benefits section below",
    contact: "careers@absouts.com",
    deadline: null,
  };
}

export async function getPublishedJobs(): Promise<JobListItem[]> {
  const rows = await db.select().from(jobs)
    .where(eq(jobs.status, "published"))
    .orderBy(desc(jobs.postedAt));
  return rows.map(toJobListItem);
}

export async function getJobById(id: string): Promise<JobDetailVM | null> {
  const rows = await db.select().from(jobs)
    .where(and(eq(jobs.id, id), eq(jobs.status, "published"))).limit(1);
  return rows[0] ? toJobDetail(rows[0]) : null;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test tests/queries.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: job queries + view-model transform with tests

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 5: next-intl routing, request config, navigation, middleware (i18n + geoblocking, TDD on geoblock)

**Files:**
- Create: `i18n/routing.ts`, `i18n/request.ts`, `i18n/navigation.ts`, `middleware.ts`, `lib/geoblocking.ts`, `tests/geoblocking.test.ts`
- Create stub message files: `messages/en.json`, `messages/es.json` (minimal, expanded later)

- [ ] **Step 1: Write `i18n/routing.ts`, `i18n/navigation.ts`, `i18n/request.ts`**

`i18n/routing.ts`:
```ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
});
```

`i18n/navigation.ts`:
```ts
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

`i18n/request.ts`:
```ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "en" | "es")) {
    locale = routing.defaultLocale;
  }
  return { locale, messages: (await import(`@/messages/${locale}.json`)).default };
});
```

- [ ] **Step 2: Write the failing test `tests/geoblocking.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { isBlockedCountry } from "@/lib/geoblocking";

describe("isBlockedCountry", () => {
  it("blocks a configured country (case-insensitive)", () => {
    expect(isBlockedCountry("KP", "KP")).toBe(true);
    expect(isBlockedCountry("kp", "KP,RU")).toBe(true);
  });
  it("allows non-listed and unknown", () => {
    expect(isBlockedCountry("US", "KP")).toBe(false);
    expect(isBlockedCountry(null, "KP")).toBe(false);
  });
  it("allows everything when list empty", () => {
    expect(isBlockedCountry("KP", "")).toBe(false);
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `pnpm test tests/geoblocking.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 4: Implement `lib/geoblocking.ts`**

```ts
export function isBlockedCountry(country: string | null, blockedList: string): boolean {
  if (!country || !blockedList) return false;
  const blocked = blockedList.split(",").map((c) => c.trim().toUpperCase()).filter(Boolean);
  return blocked.includes(country.toUpperCase());
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `pnpm test tests/geoblocking.test.ts`
Expected: PASS.

- [ ] **Step 6: Write `middleware.ts` (geoblock first, then next-intl)**

```ts
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { isBlockedCountry } from "./lib/geoblocking";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country");
  if (isBlockedCountry(country, process.env.BLOCKED_COUNTRIES ?? "KP")) {
    return new NextResponse(
      "<!doctype html><meta charset=utf-8><title>Access Restricted</title>" +
        "<div style='font-family:system-ui;display:grid;place-items:center;min-height:100vh;" +
        "background:linear-gradient(135deg,#0b0b44,#2b3990);color:#fff;text-align:center'>" +
        "<div><h1>Access Restricted</h1><p>This site is not available from your location.</p></div></div>",
      { status: 403, headers: { "content-type": "text/html" } },
    );
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(en|es)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
```

- [ ] **Step 7: Write minimal `messages/en.json` and `messages/es.json`**

```json
{ "nav": { "home": "Home", "about": "About", "services": "Services", "careers": "Careers", "contact": "Contact" } }
```
(es.json: Spanish equivalents — `Inicio`, `Acerca de`, `Servicios`, `Carrera`, `Contacto`.)

- [ ] **Step 8: Verify routing works**

Run: `pnpm dev`, open `/` → expect redirect to `/en`; open `/es` → renders. `pnpm test` → all green.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: next-intl routing + middleware geoblocking with tests

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 6: Locale layout, fonts, utils, constants

**Files:**
- Create: `lib/utils/cn.ts`, `lib/utils/constants.ts`, `app/[locale]/layout.tsx`
- Modify: `app/layout.tsx` (reduce to passthrough), delete temporary home if replaced later

- [ ] **Step 1: Write `lib/utils/cn.ts`**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

- [ ] **Step 2: Write `lib/utils/constants.ts`** (company facts, from current site)

```ts
export const COMPANY = {
  name: "Absouts",
  email: "contact@absouts.com",
  supportEmail: "support@absouts.com",
  careersEmail: "careers@absouts.com",
  phones: ["+880 2 223 315 204", "+880 2 223 315 191", "+44 020 7794 5045"],
  mobiles: ["+880 1717 435 794", "+880 1645 193 991", "+44 079 1612 0280"],
  offices: [
    { title: "Bangladesh Registered Office", lines: ["232/232(2), West Agargaon", "A K Khan Tower, Level-7", "Sher-E-Bangla Nagar", "Dhaka-1207, Bangladesh"] },
    { title: "Bangladesh Corporate Office", lines: ["House 05, Level 5, Road 137", "Gulshan 1", "Dhaka 1212, Bangladesh"] },
    { title: "UK Office", lines: ["434 Finchley Road", "London, NW2 2HY", "United Kingdom"] },
  ],
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8970097242474!2d90.38750831498152!3d23.750842494584695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd",
} as const;
```

- [ ] **Step 3: Write `app/[locale]/layout.tsx`** (owns `<html>`, fonts, providers, Navbar/Footer placeholders)

```tsx
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { routing } from "@/i18n/routing";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children, params,
}: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  return (
    <html lang={locale} className={manrope.variable}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider>
          {/* Navbar added in Task 8 */}
          <main className="flex-1">{children}</main>
          {/* Footer added in Task 8 */}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

Reduce `app/layout.tsx` to `export default function RootLayout({ children }: { children: React.ReactNode }) { return children; }` plus the `import "./globals.css"`.

- [ ] **Step 4: Verify build + typecheck**

Run: `pnpm typecheck && pnpm build`
Expected: builds; `/en` renders scaffold home inside the layout.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: locale layout, fonts, cn util, company constants

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 7: UI primitives (design system)

**Files:**
- Create: `components/ui/button.tsx`, `card.tsx`, `badge.tsx`, `input.tsx`, `textarea.tsx`, `select.tsx`, `dialog.tsx`, `checkbox.tsx`, `skeleton.tsx`, `toast.tsx`, `toaster.tsx`, `components/ui/index.ts`

- [ ] **Step 1: Build the primitives**

Each primitive is small, single-responsibility, styled with the Task-1 theme tokens, and uses `cn`. Interactive ones wrap Radix:
- `Button` — CVA variants `default | outline | ghost | secondary`, sizes `sm | md | lg | icon`, `asChild` via `@radix-ui/react-slot`. Token-based colors (`bg-brand-primary`, etc.).
- `Card` / `CardHeader` / `CardContent` — surface container.
- `Badge` — `default | secondary` variants.
- `Input`, `Textarea` — token-styled form controls.
- `Select` — Radix Select, styled trigger/content/item.
- `Dialog` — Radix Dialog with overlay + content (used by the application modal).
- `Checkbox` — Radix Checkbox.
- `Skeleton` — pulse loader.
- `Toast` + `Toaster` — Radix Toast provider/viewport + a tiny `useToast` store (single-file, in `toast.tsx`).
- `index.ts` re-exports all.

Design-quality gate: run `emil-design-eng` for the interactive primitives (focus rings, transitions, hit areas) and `impeccable` for visual consistency. Primitives must feel crafted, not generic.

- [ ] **Step 2: Verify typecheck**

Run: `pnpm typecheck`
Expected: no errors. (No unit tests for presentational primitives.)

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: Tailwind v4 UI primitive component library

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 8: Layout components — Navbar, Footer, LanguageSwitcher; assets map; service config

**Files:**
- Create: `components/layout/navbar.tsx`, `footer.tsx`, `language-switcher.tsx`
- Create: `lib/services/types.ts`, `departments.ts`, `software-subservices.ts`, `index.ts`
- Create: `lib/assets.ts` (maps `public/assets/*` paths + jsDelivr tech-logo URLs)
- Modify: `app/[locale]/layout.tsx` to mount Navbar + Footer

- [ ] **Step 1: Write `lib/assets.ts`**

Re-express the current asset map but pointing at `/assets/<file>` public paths (not webpack imports): `SERVICE_ICONS`, `TECHNOLOGY_LOGOS` (jsDelivr URLs unchanged), background image paths for departments, leadership photos, hero images. Verify each referenced file exists under `public/assets/`.

- [ ] **Step 2: Write `lib/services/types.ts` + configs**

```ts
// types.ts
export type Feature = { iconKey: string; titleKey: string; descKey: string };
export type Technology = { name: string; icon: string; descKey: string };
export type SubServiceConfig = {
  slug: string; iconKey: string;
  heroGradient: { background: string; text: string };
  gradientColors: { from: string; to: string };
  coreFeatures: Feature[]; additionalFeatureKeys: string[]; technologies: Technology[];
};
export type DepartmentConfig = {
  slug: "cloud-accounting" | "bpo" | "software";
  order: number; iconKey: string;
};
```

`departments.ts` exports the three departments ordered **cloud-accounting (1) → bpo (2) → software (3)**. `software-subservices.ts` exports the 8 sub-services (ecommerce, mobile, cloud, testing, legaltech, webportal, fintech, ai) with their slugs, icon keys, gradient tokens, feature lists (referencing message keys), and technology arrays (logos from `TECHNOLOGY_LOGOS`). Copy text is referenced by i18n keys, not inlined. `index.ts` barrels them.

**No Image Editing config anywhere.**

- [ ] **Step 3: Write Navbar, Footer, LanguageSwitcher**

- `Navbar` — fixed, scroll-hide-on-down/show-on-up, center pill nav (Home/About/Services/Careers/Contact via localized `Link` from `i18n/navigation`), logo left, `LanguageSwitcher` right, mobile Dialog menu. Active-link styling. All labels from `nav.*` messages.
- `Footer` — company info, **Services column lists the 3 departments in order (Cloud Accounting, BPO, Software Development)** plus Company + Contact columns, socials, "Download Company Profile" + "Get in Touch" buttons, legal links to `/privacy` `/terms`, copyright with current year. Uses `COMPANY` constants + messages.
- `LanguageSwitcher` — Radix Select swapping locale while preserving path (use `usePathname` + `useRouter` from `i18n/navigation`), US/Spain flag SVGs.

- [ ] **Step 4: Mount in layout + verify**

Add `<Navbar />` and `<Footer />` to `app/[locale]/layout.tsx`. Run `pnpm typecheck && pnpm build`. Visit `/en` and `/es` → nav + footer render in both locales, language switch preserves path.

Design-quality gate: `design-taste-frontend` + `emil-design-eng` on the navbar interaction/motion; `impeccable` audit.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: navbar, footer, language switcher, service config, asset map

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 9: Seed script + message-catalog scaffolding

**Files:**
- Create: `lib/db/seed.ts`
- Expand: `messages/en.json`, `messages/es.json` with the full namespace tree (empty-but-present keys are NOT allowed — see Task 10)

- [ ] **Step 1: Write `lib/db/seed.ts`** — inserts the 5 sample jobs from the legacy `supabase-setup.sql` (Senior Full Stack Developer, Cloud Accountant, Business Development Executive, UI/UX Designer, DevOps Engineer) with `status: "published"`, `postedAt: new Date()`, using `db.insert(jobs).values([...])`. Guard with a `process.env.DATABASE_URL` check and a console summary.

- [ ] **Step 2: Define the message namespace tree** in both `en.json` and `es.json`:
`nav`, `common`, `home`, `about`, `services`, `departments.cloudAccounting`, `departments.bpo`, `departments.software`, `subservices.<slug>` (×8), `careers`, `contact`, `legal.privacy`, `legal.terms`, `notFound`, `seo`. (Actual copy is filled by the page tasks; both files must stay key-identical.)

- [ ] **Step 3: Verify seed runs against a real Neon DB** (requires `DATABASE_URL` + applied migration)

Run: `pnpm db:push && pnpm db:seed`
Expected: "Seeded 5 jobs" (or equivalent). If no DB is provisioned yet, this step is deferred to deployment setup and noted as such — do not block other tasks.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: job seed script + message catalog namespace scaffolding

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

# PHASE 2 — Parallel agents (A, B, C, D build against the Phase-1 contracts)

> Each Phase-2 task: implement the page(s)/feature, add/locate all required keys in BOTH `messages/en.json` and `messages/es.json` (native-quality Spanish), `pnpm typecheck && pnpm build`, run a design-quality gate (`design-taste-frontend` → `emil-design-eng` → `impeccable`), then commit. UI tasks are verified by build + visual review (use the `run` skill to view the page), not unit tests.

## Task 10 (Agent A): Home, About, Services overview

**Files:**
- Create: `app/[locale]/page.tsx` (replace scaffold), `app/[locale]/about/page.tsx`, `app/[locale]/services/page.tsx`
- Create: `components/sections/hero.tsx`, `section-heading.tsx`, `stat-metrics.tsx`, `blob-background.tsx`, `cta.tsx`
- Use: leadership photos + backgrounds from `lib/assets.ts`

- [ ] **Step 1: Home** — hero (bilingual title/subtitle, Find Talent + Learn More CTAs, 3 stat metrics 540+/40+/95%, bento image grid), "Comprehensive Outsourcing Solutions" section presenting the **3 departments in order Cloud Accounting → BPO → Software** as image cards linking to `/services/cloud-accounting`, `/services/bpo`, `/services/software`, and a "Why Choose Absouts" values section. All copy from `home.*` messages. **No Image Editing card.**
- [ ] **Step 2: About** — hero, Foundation section (K D Roy & CO / Adhikary Roy / LTR partnership copy), Mission/Vision/Values cards, Leadership grid (K D Roy, Enam H. Khan, Razwan Kader, Pritam Kumar Das with photos + positions). Copy from `about.*`.
- [ ] **Step 3: Services overview** — hero, 3 department cards (ordered), Service Pillars (4), Benefits (3). Copy from `services.*`.
- [ ] **Step 4:** Add all `home`/`about`/`services` keys to `en.json` + `es.json` (full Spanish).
- [ ] **Step 5:** `pnpm typecheck && pnpm build`; visual review of `/en` and `/es` for all three pages.
- [ ] **Step 6: Design-quality gate** then **commit**:
```bash
git add -A
git commit -m "feat: home, about, services-overview pages (bilingual, polished)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

## Task 11 (Agent B): Three department pages + 8 software sub-service pages

**Files:**
- Create: `app/[locale]/services/cloud-accounting/page.tsx`, `services/bpo/page.tsx`, `services/software/page.tsx`, `services/software/[slug]/page.tsx`
- Create: `components/services/department-template.tsx`, `sub-service-template.tsx`, `department-service-card.tsx`, `components/sections/feature-grid.tsx`, `tech-stack.tsx`

- [ ] **Step 1: Cloud Accounting** (department 1) — bespoke long-form page: hero + the 8 accounting service blocks (virtual accounting, bookkeeping, bank reconciliation, MIS reporting, AP/AR, inventory, payroll, tax planning) with alternating image/text layout + CTA. Copy from `departments.cloudAccounting.*`. ServiceSchema + BreadcrumbSchema (Task 13 provides builders; import them).
- [ ] **Step 2: BPO** (department 2) — bespoke page: hero + 5 BPO blocks (document management, order processing, email/chat support, HR support, compliance). Copy from `departments.bpo.*`.
- [ ] **Step 3: Software** (department 3) — umbrella page: hero, overview grid of the 8 sub-services (cards linking to `/services/software/[slug]`), and a short "how the department works" framing. Copy from `departments.software.*`.
- [ ] **Step 4: Sub-service dynamic page** — `services/software/[slug]/page.tsx` uses `generateStaticParams` over the 8 slugs; renders `SubServiceTemplate` from `software-subservices.ts` config (hero, core features grid, additional features, tech stack). `notFound()` for unknown slug. Copy from `subservices.<slug>.*`.
- [ ] **Step 5:** Add all `departments.*` + `subservices.*` keys to `en.json` + `es.json` (full Spanish).
- [ ] **Step 6:** `pnpm typecheck && pnpm build`; visual review of every department + a few sub-service pages in both locales. Confirm the three departments feel distinct (different layouts/identity), satisfying "separate departments, proper attention."
- [ ] **Step 7: Design-quality gate** then **commit**:
```bash
git add -A
git commit -m "feat: 3 distinct department pages + 8 software sub-service pages

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

## Task 12 (Agent C): Server Actions (contact + application) with Zod (TDD), then Careers + Contact pages

**Files:**
- Create: `lib/actions/schemas.ts`, `lib/actions/email.ts`, `lib/actions/contact.ts`, `lib/actions/application.ts`, `tests/schemas.test.ts`
- Create: `components/forms/contact-form.tsx`, `job-application-form.tsx`, `components/careers/job-list-card.tsx`, `perks-benefits.tsx`, `components/map/lazy-map.tsx`
- Create: `app/[locale]/careers/page.tsx`, `careers/[id]/page.tsx`, `contact/page.tsx`

- [ ] **Step 1: Write the failing test `tests/schemas.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { contactSchema, applicationSchema } from "@/lib/actions/schemas";

describe("contactSchema", () => {
  it("accepts valid input", () => {
    expect(contactSchema.safeParse({
      firstName: "A", lastName: "B", email: "a@b.com", message: "hello there world",
    }).success).toBe(true);
  });
  it("rejects bad email and short message", () => {
    expect(contactSchema.safeParse({ firstName: "A", lastName: "B", email: "x", message: "hi" }).success).toBe(false);
  });
});

describe("applicationSchema", () => {
  it("requires consent + url resume", () => {
    const base = { jobId: "1", firstName: "A", lastName: "B", email: "a@b.com",
      phone: "123", experience: "2-3", resumeUrl: "https://x.com/cv", privacyConsent: true };
    expect(applicationSchema.safeParse(base).success).toBe(true);
    expect(applicationSchema.safeParse({ ...base, privacyConsent: false }).success).toBe(false);
    expect(applicationSchema.safeParse({ ...base, resumeUrl: "not-a-url" }).success).toBe(false);
  });
});
```

- [ ] **Step 2: Run → fail.** `pnpm test tests/schemas.test.ts` → FAIL (module not found).

- [ ] **Step 3: Implement `lib/actions/schemas.ts`**

```ts
import { z } from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  serviceInterest: z.string().optional(),
  message: z.string().min(10).max(5000),
  website: z.string().max(0).optional(), // honeypot: must be empty
});

export const applicationSchema = z.object({
  jobId: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1).regex(/^[\d\s+\-()]+$/),
  experience: z.string().min(1),
  resumeUrl: z.string().url(),
  coverLetter: z.string().max(10000).optional(),
  privacyConsent: z.literal(true),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ApplicationInput = z.infer<typeof applicationSchema>;
```

- [ ] **Step 4: Run → pass.** `pnpm test tests/schemas.test.ts` → PASS.

- [ ] **Step 5: Implement `lib/actions/email.ts`** — Resend client + two HTML email builders (contact notification, application notification) mirroring the current email content. Export `sendContactEmail(data)` and `sendApplicationEmail(data)`; both swallow/log errors so a mail failure doesn't fail the DB write.

- [ ] **Step 6: Implement `lib/actions/contact.ts` and `application.ts`** as `"use server"` actions:

```ts
"use server";
import { db } from "@/lib/db/client";
import { contactSubmissions } from "@/lib/db/schema";
import { contactSchema } from "./schemas";
import { sendContactEmail } from "./email";

export async function submitContact(raw: unknown): Promise<{ ok: boolean; error?: string }> {
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: "invalid" };
  if (parsed.data.website) return { ok: true }; // honeypot tripped: pretend success
  const { website, ...data } = parsed.data;
  try {
    await db.insert(contactSubmissions).values(data);
    await sendContactEmail(data);
    return { ok: true };
  } catch {
    return { ok: false, error: "server" };
  }
}
```
(`application.ts` analogous: validate → insert `jobApplications` → `sendApplicationEmail` → typed result.)

- [ ] **Step 7: Build the client forms + careers/contact pages.**
  - `ContactForm` (client) — controlled fields + hidden honeypot, calls `submitContact`, toast on result, reset on success.
  - `JobApplicationForm` (client) — Radix `Dialog`, fields incl. **resume URL link field** (not file upload), experience `Select`, privacy `Checkbox`, honeypot; calls `submitApplication`.
  - `careers/page.tsx` (Server Component) — `getPublishedJobs()` → render `JobListCard` list; empty/error states from `careers.*` messages; "Why choose us", application process, `PerksBenefits`.
  - `careers/[id]/page.tsx` — `getJobById(id)` → detail layout (overview, requirements, benefits, testimonials, sidebar with salary/experience/contact + Apply button opening the dialog) or `notFound()`.
  - `contact/page.tsx` — hero, contact info, offices (from `COMPANY`), socials, `ContactForm`, `LazyMap` (IntersectionObserver iframe loader using `COMPANY.mapEmbed`).

- [ ] **Step 8:** Add `careers.*` + `contact.*` keys to `en.json` + `es.json` (full Spanish). `pnpm typecheck && pnpm build`. Visual review both locales; submit a test contact + application against a dev DB if available.

- [ ] **Step 9: Design-quality gate** then **commit**:
```bash
git add -A
git commit -m "feat: contact/application server actions + careers & contact pages

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

## Task 13 (Agent D): SEO (metadata + JSON-LD, TDD), sitemap/robots/manifest, privacy/terms/404

**Files:**
- Create: `lib/seo/metadata.ts`, `lib/seo/structured-data.ts`, `tests/structured-data.test.ts`
- Create: `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- Create: `app/[locale]/privacy/page.tsx`, `terms/page.tsx`, `app/[locale]/not-found.tsx`
- Modify: each `page.tsx` to export `generateMetadata` using the helper

- [ ] **Step 1: Write the failing test `tests/structured-data.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { organizationSchema, breadcrumbSchema, serviceSchema } from "@/lib/seo/structured-data";

describe("structured-data builders", () => {
  it("organization has type + addresses", () => {
    const s = organizationSchema();
    expect(s["@type"]).toBe("Organization");
    expect(Array.isArray(s.address)).toBe(true);
  });
  it("breadcrumb numbers items from 1", () => {
    const s = breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]);
    expect(s.itemListElement[0].position).toBe(1);
    expect(s.itemListElement[1].position).toBe(2);
  });
  it("service carries name + provider", () => {
    const s = serviceSchema({ name: "BPO", description: "d", url: "/x" });
    expect(s.serviceType).toBe("BPO");
    expect(s.provider.name).toBe("Absouts");
  });
});
```

- [ ] **Step 2: Run → fail.** `pnpm test tests/structured-data.test.ts` → FAIL.

- [ ] **Step 3: Implement `lib/seo/structured-data.ts`** — pure functions `organizationSchema()`, `breadcrumbSchema(items)`, `serviceSchema({name,description,url})` returning JSON-LD objects (port current `StructuredData.tsx` content: BD+UK addresses, contact point, sameAs, offer catalog). Plus a `<JsonLd data={...} />` server component that renders a `<script type="application/ld+json">`.

- [ ] **Step 4: Run → pass.** `pnpm test tests/structured-data.test.ts` → PASS.

- [ ] **Step 5: Implement `lib/seo/metadata.ts`** — `buildMetadata({ locale, title, description, path, keywords? })` returning a Next `Metadata` object with canonical, `alternates.languages` for en/es, OpenGraph + Twitter cards, using `NEXT_PUBLIC_SITE_URL`. Wire `generateMetadata` into every page (home/about/services/3 departments/8 subservices/careers/job-detail/contact/privacy/terms) with copy from `seo.*` messages. Job-detail metadata uses the job title.

- [ ] **Step 6: Implement `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`** — sitemap enumerates every localized route (both locales) for the static pages + the 8 sub-service slugs; robots allows all, points to sitemap; manifest ports `site.webmanifest` (name, icons, theme color).

- [ ] **Step 7: Build privacy, terms, not-found pages** — port the legacy long-form Privacy Policy and Terms of Service content into `legal.privacy.*` / `legal.terms.*` messages (full Spanish too) rendered in a clean prose layout; `not-found.tsx` localized 404.

- [ ] **Step 8:** Add `seo.*`, `legal.*`, `notFound.*` keys to both message files. `pnpm typecheck && pnpm build && pnpm test`. Check `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, and View-Source JSON-LD on a service page.

- [ ] **Step 9: Design-quality gate** (privacy/terms/404 typography) then **commit**:
```bash
git add -A
git commit -m "feat: SEO metadata + JSON-LD, sitemap/robots/manifest, legal + 404 pages

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

# PHASE 3 — Integration, polish, verification

## Task 14: i18n completeness test + full message audit (TDD)

**Files:**
- Create: `tests/messages.test.ts`

- [ ] **Step 1: Write the failing test `tests/messages.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

function keyPaths(obj: unknown, prefix = ""): string[] {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    return Object.entries(obj).flatMap(([k, v]) => keyPaths(v, prefix ? `${prefix}.${k}` : k));
  }
  return [prefix];
}

describe("message catalogs", () => {
  it("en and es have identical key sets", () => {
    const a = keyPaths(en).sort();
    const b = keyPaths(es).sort();
    expect(b).toEqual(a);
  });
  it("no empty string values", () => {
    const empties = keyPaths(en).filter((p) =>
      p.split(".").reduce<any>((o, k) => o?.[k], en) === "");
    expect(empties).toEqual([]);
  });
});
```

- [ ] **Step 2: Run → likely fails** if any locale drifted. Fill in the missing/empty keys in `es.json` (and `en.json`) until green.

Run: `pnpm test tests/messages.test.ts`
Expected: PASS (identical key sets, no empties).

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "test: enforce en/es message parity + fill gaps

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

## Task 15: Full design-quality polish pass

**Files:** any page/component needing refinement.

- [ ] **Step 1:** Run `design-taste-frontend` across the whole site for a consistent art direction (spacing rhythm, type scale, color usage, motion language).
- [ ] **Step 2:** Run `emil-design-eng` on interactive surfaces (forms, dialog, nav, hover/scroll motion) for the invisible-details polish.
- [ ] **Step 3:** Run `impeccable` as a final audit (hierarchy, cognitive load, accessibility, responsive behavior, empty/error states). Fix findings.
- [ ] **Step 4:** Verify the three departments read as visually distinct identities (not the same template recolored).
- [ ] **Step 5: Commit** the polish changes.
```bash
git add -A
git commit -m "polish: site-wide design audit (taste/emil/impeccable)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

## Task 16: Final verification + docs + README

**Files:**
- Create/replace: `README.md`
- Verify: full build, tests, both locales, all routes.

- [ ] **Step 1:** `pnpm typecheck && pnpm test && pnpm build` — all green.
- [ ] **Step 2:** Use the `run` skill to launch the app and walk every route in `en` and `es`: home, about, services, 3 departments, 2–3 sub-services, careers list+detail, contact (submit a test message), privacy, terms, 404. Confirm: no Image Editing anywhere; departments ordered Cloud Accounting → BPO → Software; forms persist + email; geoblocking header path returns 403 for `KP` (simulate via header).
- [ ] **Step 3:** Write a new `README.md` documenting: stack, env vars (`.env.example`), `pnpm dev/build/test`, `db:generate/migrate/push/seed`, Neon + Vercel setup, how to add jobs (Drizzle Studio), how to add a language/translations, deployment. Remove all references to Supabase/Express/Vite.
- [ ] **Step 4: Commit**
```bash
git add -A
git commit -m "docs: README for Next.js stack + final verification

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Self-Review (completed by author)

**Spec coverage:** Stack (Task 1), Tailwind v4 theme (1), routing/backend unification (5,6,12), data model (2), formatters/queries (3,4), i18n full bilingual (5,9,10–13,14), design system (7,8), services restructure incl. Image Editing removal + 3-department order (8,10,11), forms/email/spam (12), SEO/sitemap/robots/manifest (13), geoblocking middleware (5), analytics (6), removed/fixed cruft (1), env vars (2), multi-agent phases (Phase 1/2/3 mapping to Agents A–D), success criteria (16). All spec sections map to tasks.

**Placeholder scan:** Logic tasks contain complete code + tests. UI/content tasks specify exact files, sections, message namespaces, ordering, and a design gate with acceptance criteria — these are specifications of creative output, not "TODO" placeholders. Full bilingual JSON bodies are produced during page tasks and enforced by the Task-14 parity test rather than transcribed here (transcribing ~600 lines of marketing copy in two languages into the plan adds no engineering value and would go stale).

**Type consistency:** `JobRow` (schema) → `toJobListItem`/`toJobDetail`/`getPublishedJobs`/`getJobById` (queries) → consumed by careers pages. `contactSchema`/`applicationSchema` → `submitContact`/`submitApplication` → forms. `isBlockedCountry` → middleware. `organizationSchema`/`breadcrumbSchema`/`serviceSchema` → pages + tests. Names are consistent across tasks.
