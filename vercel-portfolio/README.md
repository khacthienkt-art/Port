# The Cover Story — Vercel portfolio

Next.js App Router portfolio built from the supplied editorial direction. It uses TypeScript, Tailwind, Framer Motion, `next/font`, `next/image`, local TypeScript content data, and pre-rendered `/work/[slug]` case studies.

## Run and deploy

```bash
npm install
npm run dev
npm run build
```

Deploy the folder through [Vercel](https://vercel.com/new); it detects Next.js automatically. Replace the clearly marked placeholder data in `data/projects.ts`, identity/email in `app/page.tsx`, and Unsplash/video sample media before publishing.

## Implementation notes

- Video uses native elements with muted, looping hero/showreel media. The remote sample URLs are placeholders and should be swapped for hosted, compressed project media.
- The provided design uses hover and reveal interactions, plus a desktop marquee preview. Video intersection coordination and route-level AnimatePresence are intentionally not added because the supplied sample remote video URLs are not a dependable production media source; add these once final video assets are available.
