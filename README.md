# Absouts Website

Marketing and careers site for **Absouts**, a global outsourcing company (Cloud Accounting, Business Process Outsourcing, and Software Development). Built with Next.js (App Router) and Tailwind v4, fully bilingual (English / Spanish), with a Neon Postgres + Drizzle data layer and Resend email.

## Tech stack

| Concern | Choice |
|---|---|
| Framework | Next.js 15 (App Router, React 19), TypeScript (strict) |
| Styling | Tailwind v4 (CSS-first `@theme` in `app/globals.css`, no `tailwind.config.js`) |
| i18n | next-intl, locale-prefixed routes `/en` and `/es` |
| Database | Neon Postgres (serverless, auto-wakes — no manual un-pausing) |
| ORM | Drizzle ORM + drizzle-kit |
| Mutations | Next Server Actions + Zod validation |
| Email | Resend |
| Tests | Vitest |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights` |
| Deploy | Vercel |

## Architecture

- **One backend.** Server Components read jobs directly from Neon via Drizzle (`lib/db/queries.ts`); contact and job-application forms post to **Server Actions** (`lib/actions/`) that validate with Zod, insert with Drizzle, and email via Resend. No separate API layer.
- **Single middleware** (`middleware.ts`) does locale routing (next-intl) and geoblocking.
- **Marketing copy** lives in `messages/en.json` + `messages/es.json` (kept key-identical by a test). **Structural service config** (slugs, icons, gradients, ordering) is typed in `lib/services/`.

```
app/[locale]/        pages (home, about, services + 3 departments + 8 sub-services,
                     careers + [id], contact, privacy, terms, not-found)
app/sitemap.ts · robots.ts · manifest.ts
components/          ui/ (primitives) · layout/ · sections/ · services/ · forms/ · careers/ · map/
i18n/                next-intl routing, request, navigation
lib/                 db/ (schema, client, queries, format, seed) · actions/ · seo/ · services/ · utils/
messages/            en.json · es.json
tests/               format · queries · schemas · geoblocking · structured-data · messages
```

Three service departments are presented in this order everywhere: **Cloud Accounting → BPO → Software Development**. Software is an umbrella with 8 sub-service pages (ecommerce, mobile, cloud, testing, legaltech, webportal, fintech, ai).

## Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech) Postgres database (free tier)
- A [Resend](https://resend.com) account + API key

## Setup

```bash
npm install                 # if peer-dep conflicts arise, use: npm install --legacy-peer-deps
cp .env.example .env        # then fill in the values below
```

### Environment variables (`.env`)

```
DATABASE_URL=postgres://user:pass@host/db?sslmode=require   # Neon connection string
RESEND_API_KEY=re_xxx
RESEND_FROM_EMAIL=onboarding@resend.dev        # or a verified domain sender
RESEND_TO_EMAIL=contact@absouts.com            # contact-form recipient
RESEND_CAREERS_EMAIL=careers@absouts.com       # application recipient (falls back to RESEND_TO_EMAIL)
BLOCKED_COUNTRIES=KP                           # comma-separated ISO codes; default KP
NEXT_PUBLIC_SITE_URL=https://absouts.com       # canonical base for SEO
```

### Database

```bash
npm run db:push     # apply the schema to your Neon database
npm run db:seed     # insert the sample job postings
npm run db:studio   # browse/edit data (Drizzle Studio) — this is how you manage jobs
```

There is no admin UI. **Add or edit job postings** in Drizzle Studio (or the Neon SQL editor): set a row's `status` to `published` to make it appear on `/careers`.

## Scripts

```bash
npm run dev         # dev server (http://localhost:3000 → redirects to /en)
npm run build       # production build
npm run start       # serve the production build
npm run typecheck   # tsc --noEmit
npm test            # vitest
npm run db:generate # generate a migration from schema changes
npm run db:migrate  # apply migrations
```

## Internationalization

All user-facing copy is in `messages/en.json` and `messages/es.json`. The two files must have **identical key sets and no empty values** — `tests/messages.test.ts` enforces this. To add a language: add the locale to `i18n/routing.ts`, create `messages/<locale>.json` with the same keys, and the routing/middleware picks it up.

## Deployment (Vercel)

1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Add the environment variables above (Production + Preview).
3. Provision Neon via the Vercel Marketplace (auto-sets `DATABASE_URL`) or paste your Neon string.
4. Deploy. Geoblocking uses Vercel's `x-vercel-ip-country` header automatically.

After the first deploy, run `npm run db:push && npm run db:seed` against the production database (or via the Neon console) so `/careers` has data.

## Notes

- **Resumes** are submitted as a pasted URL (link field), not file uploads.
- **Spam** mitigation is a hidden honeypot field plus server-side validation; no rate-limiter is bundled (add Upstash later if abuse appears).
- **Geoblocking** is configured via `BLOCKED_COUNTRIES` and enforced in `middleware.ts`.

## License

MIT
