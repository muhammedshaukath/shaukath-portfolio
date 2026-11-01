# Muhammed Shaukath A. | Portfolio

React + TypeScript + Vite + Tailwind CSS v4 + Motion + Lucide.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
npm run preview  # preview the build
```

## Update your content
- Personal info, email, LinkedIn, resume path: `src/data/site.ts`
- Skills: `src/data/skills.ts` (only list what you can back up)
- Projects: `src/data/projects.ts` (add `github`, `demo`, `image` only when real)
- Experience, achievements: `src/data/experience.ts`
- Replace `public/resume.pdf` with your real resume; put images in `public/images/`.

## Contact form
No backend is configured, so the form opens the visitor's email app (mailto). To enable real submissions, connect a service such as Formspree and POST from `src/sections/Contact.tsx`.

## Deploy
Vercel/Netlify: build command `npm run build`, output directory `dist`. GitHub Pages: set `base` in `vite.config.ts` to your repo name.
