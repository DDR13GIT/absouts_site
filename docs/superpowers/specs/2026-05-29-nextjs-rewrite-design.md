# Absouts Website — Next.js + Tailwind v4 Rewrite

**Date:** 2026-05-29
**Status:** Approved (design phase)
**Branch:** `rewrite/nextjs-tailwind-v4`

## 1. Overview

Complete rewrite of the Absouts corporate/marketing site. The current app is a Vite +
React SPA with a split Express (dev) / Vercel-functions (prod) backend, Supabase for the
careers data, Resend for email, half-wired en/es i18n, and triple-implemented geoblocking.

The rewrite moves to **Next.js (latest, App Router, React 19) + Tailwind v4**, unifies the
backend into Next Server Actions + Server Components, replaces Supabase with **Neon
Postgres + Drizzle ORM**, properly implements **bilingual en/es via next-intl**, and rebuilds
the UI to a **polished, anti-AI-slop** standard using the `impeccable`,
`design-taste-frontend`, and `emil-design-eng` skills.

### Goals
- Single, maintainable backend (no Express/serverless duplication).
- Modular, well-bounded components and a real design system on Tailwind v4.
- Durable free database that does not require manual un-pausing (Neon auto-wakes).
- Fully bilingual (English + Spanish) across every page.
- Polished, distinctive design — not templated AI output.
- Three clearly distinct service departments, each with proper attention.

### Non-goals
- No admin UI for jobs (managed via Drizzle Studio / SQL seed).
- No file-upload storage for resumes (link field instead).
- No CMS. Marketing copy lives in next-intl message catalogs + typed config.
- No real-time rate-limiting infra by default (honeypot + server checks; Upstash only if
  abuse appears).

## 2. Stack

| Concern | Choice |
|---|---|
| Framework | Next.js latest, App Router, React 19, TypeScript (strict) |
| Styling | Tailwind v4, CSS-first `@theme` in `globals.css` (no `tailwind.config.js`) |
| Database | Neon Postgres (serverless, auto-wakes, native Vercel integration) |
| ORM | Drizzle ORM + drizzle-kit (migrations, seed, Drizzle Studio) |
| Email | Resend |
| i18n | next-intl with `/[locale]` routing (`en`, `es`) |
| Forms / mutations | Next Server Actions + Zod validation |
| Data reads | Server Components reading Neon via Drizzle |
| Images | `next/image` |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights` |
| Deploy | Vercel |
| UI primitives | Lean custom components, Radix primitives under the hood for a11y (Dialog, Select, etc.) — only what is used |
| Design quality | `impeccable`, `design-taste-frontend`, `emil-design-eng` applied during build |

## 3. Architecture

### Routing (App Router)

```
app/
  [locale]/
    layout.tsx                          Navbar, Footer, fonts, providers
    page.tsx                            Home
    about/page.tsx
    services/page.tsx                   Overview of the 3 departments
    services/cloud-accounting/page.tsx  Department 1
    services/bpo/page.tsx               Department 2
    services/software/page.tsx          Department 3 (umbrella + sub-services)
    services/software/[slug]/page.tsx   Each of 8 sub-services, its own page
    careers/page.tsx                    Job list (reads Neon)
    careers/[id]/page.tsx               Job detail
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    not-found.tsx
  sitemap.ts
  robots.ts
  manifest.ts
middleware.ts                           Locale routing + geoblocking (single source)
lib/
  db/        Drizzle schema, client, typed queries, seed script
  services/  Typed structural config (slug, icons, gradients, ordering, sub-service map)
  actions/   Server actions (contact, application) + Zod schemas + Resend client
  seo/       Metadata helpers + JSON-LD builders
components/
  ui/        Button, Card, Badge, Input, Textarea, Select, Dialog, Skeleton, etc.
  layout/    Navbar, Footer, LanguageSwitcher
  sections/  Reusable page sections (Hero, FeatureGrid, CTA, etc.)
  services/  ServiceDepartmentTemplate, SubServiceTemplate and parts
messages/
  en.json    All English copy
  es.json    All Spanish copy (real translations)
```

### Backend unification

The current dual backend (Express `server/` for dev, `api/` functions for prod) is removed.

- **Mutations** (contact form, job application) → **Server Actions** in `lib/actions/`.
  Each action: parse with Zod → insert via Drizzle → send Resend email → return a typed
  `{ ok, error? }` result consumed by a client form component.
- **Reads** (jobs list, job detail) → Server Components call typed Drizzle queries in
  `lib/db/queries.ts` directly. No client fetch, no React Query needed for job data.
- Validation, email, and DB access each have exactly one implementation.

### Data flow — careers & contact

1. `careers/page.tsx` (Server Component) → `getPublishedJobs()` → render list.
2. `careers/[id]/page.tsx` → `getJobById(id)` → render detail or `notFound()`.
3. Application form (client component, opened as a Dialog) → `submitApplication` Server
   Action → Zod validate → insert `job_applications` → Resend email to careers inbox →
   typed result → toast.
4. Contact form → `submitContact` Server Action → Zod validate → insert
   `contact_submissions` → Resend email → typed result → toast.
5. Spam mitigation: hidden honeypot field + server-side checks (max length, basic format).
   No in-memory rate limiter (was non-functional on serverless). Upstash Redis is a
   documented future option if abuse appears.

## 4. Data model (Drizzle, Postgres, consistent snake_case)

```
jobs
  id                uuid pk default gen_random_uuid()
  job_title         text not null
  job_short_description text not null
  job_type          text not null  -- full_time | part_time | contract | internship | temporary | freelance
  location          text
  is_remote         boolean default false
  required_skills   text[] default '{}'
  qualifications    text[] default '{}'
  requirements      text[] default '{}'
  salary_min        integer
  salary_max        integer
  salary_currency   text default 'USD'
  company_name      text default 'Absouts'
  status            text not null default 'draft'  -- draft | published | closed
  posted_at         timestamptz
  created_at        timestamptz default now()
  updated_at        timestamptz default now()

contact_submissions
  id                uuid pk default gen_random_uuid()
  first_name        text not null
  last_name         text not null
  email             text not null
  company           text
  service_interest  text
  message           text not null
  created_at        timestamptz default now()

job_applications
  id                uuid pk default gen_random_uuid()
  job_id            text not null
  first_name        text not null
  last_name         text not null
  email             text not null
  phone             text not null
  experience        text not null
  resume_url        text not null     -- pasted link
  cover_letter      text
  privacy_consent   boolean not null default false
  created_at        timestamptz default now()
```

- Job-shape transform (snake_case row → frontend view model, salary/type formatting) lives
  once in `lib/db/queries.ts`.
- Seed script inserts the existing sample jobs (Senior Full Stack Developer, Cloud
  Accountant, Business Development Executive, UI/UX Designer, DevOps Engineer).
- Jobs are managed by editing the DB directly (Drizzle Studio / Neon SQL editor).

## 5. Internationalization

- `next-intl` with locale-prefixed routes (`/en/...`, `/es/...`); default `en`.
- Middleware handles locale detection/redirect (combined with geoblocking).
- All marketing copy in `messages/en.json` and `messages/es.json`. Spanish is fully
  translated, not partial. (Current site only half-wired this — fixed here.)
- Structural, non-textual config (slugs, icon keys, gradient tokens, ordering) stays in
  typed `lib/services` config, referenced by both locales.
- `LanguageSwitcher` swaps locale while preserving the current path.

## 6. Design system (Tailwind v4)

- `globals.css` uses `@import "tailwindcss";` and a `@theme { ... }` block that defines the
  brand tokens as CSS custom properties:
  - Brand: navy `#0B0B44`, blue `#2B3990`, cyan `#27AAE1`.
  - Mediterranean palette: olive, herb, french, clementine, calendula, sky, terra, linen.
  - Background/text/shadow scales, radius, fonts (Manrope).
- Light theme is the product; dark tokens optional/deferred (not required).
- Animations (blob float, scroll marquees, subtle motion) rebuilt cleanly as utilities /
  keyframes; motion designed per `emil-design-eng` (purposeful, restrained).
- UI primitives are small, single-purpose, and composable. Interactive ones (Dialog,
  Select) wrap Radix for accessibility; everything else is hand-rolled.
- The `impeccable` / `design-taste-frontend` / `emil-design-eng` skills set the bar:
  real visual hierarchy, considered spacing, no generic "AI slop" gradients-everywhere
  look. A dedicated polish pass enforces consistency across pages.

## 7. Services restructure

Image Editing is **removed** entirely. Three departments remain, in this order:

1. **Cloud Accounting** (first) — bespoke department page (virtual accounting, bookkeeping,
   bank reconciliation, MIS reporting, AP/AR, inventory, payroll, tax planning).
2. **BPO** — bespoke department page (document management, order processing, email/chat
   support, HR support, compliance).
3. **Software Development** — umbrella department page presenting 8 sub-services, each with
   its own dedicated page at `/services/software/[slug]`:
   ecommerce, mobile, cloud, testing, legaltech, webportal, fintech, ai.

Each department reads as a distinct, fully-developed area so visitors perceive separate
departments with proper attention. The home page and `/services` overview present the three
departments in the Cloud Accounting → BPO → Software order.

Sub-service content is driven by typed config (`lib/services/*`) for structure; copy is
localized via next-intl.

## 8. SEO, metadata, infra

- **Metadata**: Next Metadata API per route (title, description, canonical, OG, Twitter,
  locale alternates for en/es).
- **Structured data (JSON-LD)**: Organization (with BD + UK addresses, contact points),
  BreadcrumbList, Service — emitted via helpers in `lib/seo/`.
- **sitemap.ts / robots.ts / manifest.ts**: generated by Next (replaces static files);
  sitemap lists all localized routes; robots disallows nothing sensitive beyond defaults.
- **Geoblocking**: single `middleware.ts`, env-configurable blocked-country list
  (`BLOCKED_COUNTRIES`), default blocks `KP`; serves a restricted-access response.
- **Analytics**: `@vercel/analytics` + `@vercel/speed-insights` in root layout.

## 9. Removed / fixed vs. current site

- Removed: Image Editing service; dual Express/serverless backend; triple geoblocking;
  mock resume upload; in-memory rate limiter; ~40 unused shadcn components; dead doc
  references (`SUPABASE_SETUP.md`, `api/index.ts`, `fetch-notion-data.js`).
- Fixed: half-wired i18n → fully bilingual; inconsistent DB casing → uniform snake_case;
  duplicated job-transform/formatting → single implementation; Supabase auto-pause pain →
  Neon auto-wake.

## 10. Environment variables

```
DATABASE_URL                 Neon Postgres connection string
RESEND_API_KEY
RESEND_FROM_EMAIL            e.g. onboarding@resend.dev or verified domain
RESEND_TO_EMAIL             contact form recipient
RESEND_CAREERS_EMAIL        application recipient (falls back to RESEND_TO_EMAIL)
BLOCKED_COUNTRIES           comma-separated ISO codes, default "KP"
NEXT_PUBLIC_SITE_URL        canonical base URL for SEO
```

## 11. Multi-agent workflow

Foundation first (shared contracts), then parallel fan-out, then a polish pass.

- **Phase 1 — Foundation (sequential):**
  - Scaffold Next + Tailwind v4 theme + design-system primitives + Navbar/Footer/layout.
  - Neon + Drizzle schema, migrations, seed.
  - next-intl setup + message-catalog scaffolding + LanguageSwitcher.
  - These define the contracts every Phase-2 agent depends on.
- **Phase 2 — Parallel agents:**
  - **Agent A** — Home, About, Services overview.
  - **Agent B** — 3 department pages + 8 software sub-service pages.
  - **Agent C** — Careers (list + detail + application form), Contact (form + offices +
    map), and the contact/application Server Actions + Resend email.
  - **Agent D** — SEO (metadata, JSON-LD, sitemap/robots/manifest), middleware (i18n +
    geoblocking), analytics.
- **Phase 3 — Polish pass:** apply `design-taste-frontend` / `emil-design-eng` /
  `impeccable` across all pages for consistency and anti-slop; verify full bilingual copy;
  final build + type check.

Each Phase-2 agent builds against the Phase-1 design system and data/i18n contracts so the
tracks stay independent and mergeable.

## 12. Success criteria

- `next build` and `tsc` pass with no errors.
- All routes render in both `en` and `es` with no missing translations.
- Careers list/detail read live from Neon; contact + application forms persist to Neon and
  send Resend emails.
- Geoblocking active via middleware; KP blocked by default.
- Lighthouse: strong scores; no layout shift on hero/images.
- No Image Editing references anywhere; three departments presented in the specified order.
- Design reviewed against the three design skills — polished, distinctive, not templated.
