# PyrexxAI v4 migration guide

This package migrates the repo to the approved **v4 design** (white/blue/purple, light default, purple-tinted shadows, miniature phone hero, enterprise inner pages) and moves the chatbot to the **Vercel AI Gateway**. Every file in this zip is the full, final version of that file.

## 0. Confirm your local state first (Windows CMD)

```cmd
cd path\to\PyrexxAI
git status
node -v
npm -v
```

- `git status` should be clean. Commit or stash anything pending.
- Node must be **18.18 or newer** (Node 22 recommended; it is Vercel's default).

## 1. Create a branch and apply the files

```cmd
git checkout -b design-v4-migration
tar -xf pyrexxai-v4-migration.zip -C .
```

`tar` ships with Windows 10/11 and overwrites matching files. If you prefer, extract with 7-Zip into the repo root and choose "Overwrite".

## 2. Delete the files this migration removes

```cmd
del app\template.tsx
rmdir /s /q app\api\calender
```

(`app\template.tsx` wrapped every page in a Framer Motion fade that started at opacity 0, which delayed LCP. `app\api\calender` was a misspelled folder; the working routes now live in `app\api\calendar`.)

Optional: `repomix-output.xml` is a generated export and is not needed in the repo.

## 3. Install dependencies

```cmd
npm install
```

Removed: `framer-motion`, `sonner`, `@calcom/embed-react`, `@google/generative-ai` (all unused or replaced). Added: `ai`, `zod`. Upgraded: `next` 14.2.35 (security patches), `eslint-config-next` to match. `package-lock.json` is included.

## 4. Environment variables

```cmd
copy .env.example .env.local
```

Open `.env.local` and fill in the values. For the chatbot:

1. Vercel Dashboard > your team > **AI Gateway** > **API Keys** > create a key.
2. Put it in `AI_GATEWAY_API_KEY` locally, and add the same variable in **Project > Settings > Environment Variables** (Production, Preview, Development).
3. Alternative for local dev: `vercel link` then `vercel env pull .env.local` (OIDC token, expires after ~12 hours). On Vercel deployments OIDC works automatically, so the key is optional there.
4. Remove the old `OPENROUTER_API_KEY` from Vercel once you have verified the new chatbot.

Recommended Gateway settings (Dashboard > AI Gateway): set a monthly spend limit, and review Observability for latency per model after launch. Tags `pyrexxai-web` and `feature:site-assistant` are attached to every request for filtering.

**Verify the model ids**: defaults are `anthropic/claude-haiku-5.5` (primary) and `amazon/nova-2-lite` (fallback). Check them against the Gateway model catalog (`https://ai-gateway.vercel.sh/v1/models`) and swap with `AI_CHAT_MODEL` / `AI_CHAT_FALLBACK_MODELS` if you prefer another cheap, fast model.

## 5. Verify locally

```cmd
npm run typecheck
npm run lint
npm run build
npm run dev
```

Open http://localhost:3000 and check: light theme loads by default, the dark toggle works, every page in the nav and footer opens, the chat bubble answers (first reply streams within about a second), `/book-demo` shows time slots, and `/contact` submits.

## 6. Deploy

```cmd
git add -A
git commit -m "Migrate to v4 design system and Vercel AI Gateway chatbot"
git push -u origin design-v4-migration
```

Vercel creates a preview deployment for the branch. Test the preview, then merge to `main`.

Add a **Vercel Firewall rate-limit rule** (Project > Firewall > Add rule) for `POST /api/chat`, e.g. 20 requests per minute per IP. The in-code limiter is best-effort per instance; the Firewall rule is the hard guarantee.

## 7. After launch (indexing, SEO, GEO)

1. Google Search Console: submit `https://pyrexxai.com/sitemap.xml`, then use URL Inspection > Request indexing on `/`, `/ai-receptionist`, `/book-demo`, and the three `/integrations/*` pages.
2. Bing Webmaster Tools: import from Search Console (also feeds AI search products).
3. Validate structured data with Google's Rich Results Test on `/` (FAQPage) and `/ai-receptionist` (Service, BreadcrumbList).
4. Run Lighthouse (mobile) on `/` and `/ai-receptionist`.
5. Check `https://pyrexxai.com/llms.txt`, `/robots.txt`, and `/.well-known/security.txt`.
6. Open the browser console on every page type and confirm there are no Content-Security-Policy violations.

## What changed

**Design:** `app/globals.css` is the v4 design system. All pages and sections are rebuilt on it, with a shared UI kit in `components/ui/`. The hero phone scales with its column using container-query units.

**Performance** (measured with `next build`, First Load JS): home 152 kB to 99 kB (-35%); inner pages 142-155 kB to 96-101 kB. Causes: Framer Motion and Sonner removed, scroll reveal is one small shared observer, the chat panel is code-split and fetched on first hover/tap, the FAQ and all sections are server components, the page-wide opacity-0 template is gone, fonts use `next/font` with `adjustFontFallback`.

**SEO / GEO:**
- Unique title, description and canonical per page (the old page titles doubled the brand: "... | PyrexxAI | PyrexxAI", and the layout canonical could be inherited by every page).
- JSON-LD: Organization, WebSite and SoftwareApplication site-wide; FAQPage (now generated from the visible FAQ), Service, BreadcrumbList, ContactPage, WebPage and Person where relevant.
- Sitemap uses real review dates instead of `new Date()` on every build.
- `robots.ts` keeps your policy (AI search and retrieval bots allowed, training crawlers blocked) and updates it with `Claude-SearchBot`, `Claude-User`, `Perplexity-User` and `Google-Extended`.
- `llms.txt` lists every page; `security.txt` added; web manifest colours updated.

**Chatbot:** OpenRouter replaced by the Vercel AI Gateway. Fixes: model output was rendered with `dangerouslySetInnerHTML` (XSS risk), now rendered as safe React nodes; error fallbacks returned HTTP 200 with JSON, which the client displayed as raw JSON; added validation, origin check, rate limiting, hashed per-user attribution, timeout, fallbacks and session persistence.

**Other bug fixes:** `CalEmbed` called `/api/calendar/slots` but the folder was `calender`, so live slots never loaded. The slots route now validates the date it forwards upstream. The Resend client is created lazily so a missing key cannot break builds. The unused public `/api/calendar/book` endpoint was removed (the server action is the real path). The booking widget builds dates in local time.

## Please review

- **Careers:** the "Principles we hire for" and "What to expect" sections contain placeholder copy I wrote. Edit or remove them in `app/careers/page.tsx`.
- **Dashboard:** it uses the repo's original sample data.
- **`softwareSchema` `sameAs` Wikidata links** in `lib/schema.ts` came from the original layout; confirm they are the entities you intend.
- **GEO policy:** training crawlers remain blocked in `app/robots.ts`. Allow them there if you want maximum model visibility.
- **CSP:** enforced in `next.config.js`. If you add third-party scripts, embeds or fonts later, extend the matching directive.
- **GitHub Pages workflows** in `.github/workflows` assume a static export, which this app cannot do (API routes, server actions). They were not touched; remove them if you deploy only on Vercel.
