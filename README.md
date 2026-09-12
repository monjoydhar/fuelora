# Fuelora

Production-oriented Next.js 15 starter for a Bangladesh-first sports nutrition store.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Database

Start PostgreSQL locally or use Neon/Supabase, set `DATABASE_URL`, then:

```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

## bKash

The checkout route is intentionally a secure scaffold: payment credentials stay server-side. Add the `BKASH_*` values to `.env.local`, then implement the grant → create → redirect → callback → execute → verify flow from your approved bKash merchant documentation. Never trust a client payment status.

## Project structure

- `app/` — App Router pages and API routes
- `components/` — UI and interactive sections
- `lib/` — cart/data utilities
- `prisma/` — database schema + seed
- `public/products/` — replaceable product artwork

## Before production

Add real product photography, server-side price/stock validation, authenticated order history, Auth.js providers, Resend email delivery, GA4/Meta events, complete bKash execution/refund handlers, webhook/reconciliation safeguards, rate limiting, CSRF/origin protections where applicable, and automated tests.

The visual system follows the supplied Fuelora brief: cream, coconut-husk brown, leaf green, sand/tan, and charcoal. Navigation uses Poppins, the site has a GSAP-powered first-load preloader with a session skip, and reduced-motion users bypass the preloader. The product artwork in this starter is original placeholder SVG art.
