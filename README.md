
# Grove Paws — Vite + React + Tailwind

This is a ready-to-deploy project for Vercel (or Netlify).

## Quick start
```bash
npm install
npm run dev
# open http://localhost:5173
```

## Build & preview
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this folder to GitHub (create a repo named `grove-paws`).
2. On https://vercel.com → New Project → Import your repo.
3. Build Command: `npm run build` (auto-detected)
   Output Directory: `dist` (auto-detected)
4. Deploy.

## Calendar Setup
Open `src/GrovePaws.tsx` and set:
```ts
const CALENDLY_URL = "https://calendly.com/yourname/grove-paws";
const GOOGLE_APPT_URL = "";
```

## Notes
- Tailwind is preconfigured.
- The component includes dev console tests to catch regressions.
