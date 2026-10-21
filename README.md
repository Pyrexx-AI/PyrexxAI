# PyrexxAI Website

Marketing site, booking, and AI assistant for [pyrexxai.com](https://pyrexxai.com) (Next.js 14 App Router, TypeScript, Tailwind CSS).

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in the values (see below)
npm run dev
```

Scripts: `npm run dev` · `npm run build` · `npm run typecheck` · `npm run lint`

## Architecture

| Area | Where |
| --- | --- |
| Design system (tokens, components, themes) | `app/globals.css` (light default; dark via `[data-theme="dark"]`) |
| Shared UI primitives | `components/ui/*` |
| Home sections | `components/*` (server components; only the phone mockup, ROI calculator and navbar hydrate) |
| Page content data | `lib/content/*` (FAQ, EMR integrations) |
| SEO | `lib/seo.ts` (metadata), `lib/schema.ts` (JSON-LD), `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt` |
| AI assistant (client) | `components/AIAssistant.tsx` (launcher) · `components/chat/ChatPanel.tsx` (lazy-loaded panel) |
| AI assistant (server) | `app/api/chat/route.ts` → Vercel AI Gateway; config in `lib/chat/*` |
| Booking | `components/CalEmbed.tsx` · `app/api/calendar/slots` · `app/actions/booking.ts` |
| Contact | `components/ContactForm.tsx` · `app/actions/contact.ts` |

## AI assistant (Vercel AI Gateway)

`/api/chat` streams plain text from `streamText()` using a Gateway model id (default `anthropic/claude-haiku-5.5`) with provider/model fallbacks, input validation (zod), same-origin check, per-IP rate limiting, token cap, timeout, and graceful fallbacks. Models are configured with env vars, so changing models needs no code change:

```
AI_GATEWAY_API_KEY=          # optional on Vercel (OIDC is automatic)
AI_CHAT_MODEL=anthropic/claude-haiku-5.5
AI_CHAT_FALLBACK_MODELS=amazon/nova-2-lite
AI_CHAT_ANTHROPIC_THINKING=disabled
```

## Deployment

Deploy on Vercel. Note: the site uses server features (API routes, server actions, edge runtime), so it cannot be statically exported to GitHub Pages.

## License

See `LICENSE`.
