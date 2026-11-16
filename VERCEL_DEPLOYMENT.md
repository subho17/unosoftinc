# Vercel Deployment Guide (UnoSoft)

The project builds three different ways. Vercel uses the **default** build — the other two are for Hostinger and must not be forced on Vercel.

| Target | Command | Output |
|---|---|---|
| **Vercel** | `npm run build` | standard Next.js build (no `output` mode) |
| Hostinger shared hosting | `npm run build:export` | static `out/` folder |
| Hostinger VPS / Docker | `npm run build:standalone` | `.next/standalone` + `server.js` |

---

## 1. Push the repository

```bash
git add .
git commit -m "Prepare for Vercel"
git push
```

`out/` and `.next/` are gitignored — Vercel builds from source, so never commit them.

## 2. Import into Vercel

1. Vercel dashboard → **Add New → Project** → import the Git repository.
2. Framework preset: **Next.js** (auto-detected).
3. Build command: `npm run build` — leave the default.
4. Output directory: leave empty (Vercel handles it). **Do not** set it to `out` — that is the static-export folder and does not exist in a Vercel build.
5. Root directory: repository root.
6. Node.js version: **20.x or newer** (`engines` in `package.json` enforces `>=20.9.0`).

## 3. Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical production URL used for Open Graph images and canonical links, e.g. `https://unosoftinc.com`. |
| `EXPORT` | Never | Only for the Hostinger static export. |
| `STANDALONE` | Never | Only for self-hosted Node builds. |

If `NEXT_PUBLIC_SITE_URL` is not set, `metadataBase` falls back to
`VERCEL_PROJECT_PRODUCTION_URL` (provided automatically by Vercel), then to
`https://unosoftinc.com`.

## 4. What is configured

- **`vercel.json`** — 301 redirects for removed routes:
  `/careers → /contact`, `/solutions → /services`.
  (The Hostinger build handles the same redirects in `public/.htaccess`,
  which Apache/LiteSpeed read; Vercel does not.)
- **`next.config.ts`** — no `output` mode by default, so Vercel uses its
  standard build and its own Image Optimization. Images are only set to
  `unoptimized` when `EXPORT=true`.
- **`app/layout.tsx`** — `metadataBase` resolves per environment, so preview
  deployments get correct absolute URLs.

## 5. Verify after the first deploy

- `/`, `/about`, `/services`, `/portfolio`, `/contact`, `/blog`, `/privacy`, `/terms`
- one article, e.g. `/blog/breaking-into-product-design`
- `/careers` → redirects to `/contact`
- images load through `/_next/image?...`

## Notes

- The contact form is client-side only. A static or Vercel-hosted site has no
  mail backend — wire it to a form service (Formspree, Resend, EmailJS or a
  Vercel Function) before launch.
- `public/.htaccess` is published as a static asset on Vercel and ignored.
  It is harmless, but it can be excluded in `.vercelignore` if you prefer.
