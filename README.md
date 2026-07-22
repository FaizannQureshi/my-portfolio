# Muhammad Faizan Qureshi — Portfolio

3D animated portfolio built with **React**, **Vite**, **Three.js**, and **GSAP** — personalized with Faizan's experience, projects, and contact info.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). On desktop you get the full 3D character, loading screen, and scroll-driven animations. On mobile the 3D scene is hidden and a static hero photo is shown instead.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (`vite --host`) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |

## Deploy (Vercel)

- **Framework:** Vite (static)
- **Root directory:** `./` (repo root)
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install:** `npm install`

`vercel.json` includes SPA rewrites and the `/api/chat` serverless route.

### Optional: AI chat on `/play`

Set **`GROQ_API_KEY`** in Vercel project environment variables to enable the Groq-powered chat on the Play page.

## Customize content

Edit **`src/config.ts`** — single source of truth for:

- Name, title, about text
- Work experience (`experiences`)
- Projects (`projects`)
- Skills cards (`skills.develop` / `skills.design`)
- Contact & social URLs (`contact`, `social`)

Also update hardcoded UI copy if needed:

- `src/components/Landing.tsx` — hero role lines
- `src/components/Loading.tsx` — loader brand text
- `src/pages/Play.tsx` — chat persona (`SYSTEM_PROMPT`)

## Assets to replace

| Asset | Path | Notes |
|-------|------|--------|
| Profile photo | `public/images/mypic.jpg` | Mobile hero + Play page chat avatar (`config.profile.image`) |
| Project thumbnails | `public/images/projects/` | Featured work screenshots |
| 3D character | `public/models/character.enc` | Encrypted GLB; re-export via `public/models/encrypt.cjs` if you replace the avatar |
| Favicon | `public/icon.svg` | `mfq` monogram |

## Routes

| Path | Page |
|------|------|
| `/` | Homepage — 3D character + all sections |
| `/myworks` | Full project grid |
| `/play` | Chess vs engine + optional AI chat |

## Tech stack

- React 18 + TypeScript + Vite 5
- Three.js (raw WebGL, not R3F)
- GSAP + ScrollTrigger + Lenis smooth scroll
- react-router-dom
- Vercel Analytics & Speed Insights

## Notes

- Mobile hero and Play page avatar use `config.profile.image` (`public/images/mypic.jpg`).
- Desktop still uses the template 3D character in `public/models/character.enc` until you replace it.

## Contact

- **Email:** muhammadfaizan9222@gmail.com
- **GitHub:** [muhammadfaizan9222](https://github.com/muhammadfaizan9222)
- **LinkedIn:** [muhammad-faizan-qureshi-000b8b230](https://www.linkedin.com/in/muhammad-faizan-qureshi-000b8b230/)
