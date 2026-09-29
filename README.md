# Talent Mole

Marketing site for [talentmole.com](https://talentmole.com). Next.js 15 app, originally built in Firebase Studio. GitHub is now the source of truth; Studio is no longer used.

## Local development

```bash
npm install
npm run dev          # http://localhost:9002
```

The Content Assistant (`src/ai`, Genkit + `gemini-2.5-flash`) needs `GEMINI_API_KEY`. Put it in a local `.env` file (git-ignored) when running it locally.

## Deployment

Hosted on Firebase App Hosting:

- Project: `studio-7709157110-c7968` (TalentMole)
- Backend: `studio`, region `us-central1`
- Live branch: `main`. **Every push to `main` builds and rolls out automatically.**

Runtime config lives in `apphosting.yaml`. Secrets are stored in Cloud Secret Manager and referenced there, never committed:

| Env var          | Secret           | Used by                     |
|------------------|------------------|-----------------------------|
| `GEMINI_API_KEY` | `GEMINI_API_KEY` | Content Assistant (Genkit)  |

To rotate or add a secret:

```bash
firebase apphosting:secrets:set GEMINI_API_KEY --project studio-7709157110-c7968
firebase apphosting:secrets:grantaccess GEMINI_API_KEY --backend studio --project studio-7709157110-c7968
```

A new secret version is picked up on the next rollout.

## Analytics

GA4 property `G-VLDPJLMLX3`, loaded in `src/app/layout.tsx` via `@next/third-parties/google`.
