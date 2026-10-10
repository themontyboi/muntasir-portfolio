# Muntasir Hasan Portfolio

A Next.js portfolio for a Melbourne-based Bachelor of Cybersecurity student building local AI systems, software applications and academic security projects.

## Current Experience

- Gothic Green design with a responsive, CSS-built interactive eye.
- An occasional CSS name glitch, with decorative layers hidden from assistive technology and a static reduced-motion mode.
- An accessible resume modal opened from navigation or the hero. No downloadable PDF is required or linked.
- Desk AI Tutor Lab Alpha as the first flagship project, with a dedicated case study at `/projects/desk-ai-tutor`.
- Project screenshot carousels, keyboard controls and enlarged image views.
- Academic security and forensics evidence galleries with accurate contribution and scope notes.
- Abyss Bond animated GIF preview and playable Unity Web build. The game iframe is mounted only after Play Prototype and Load Game; desktop keyboard and mouse are recommended.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS v4 and Lucide React. Portfolio content is local typed data; the AI tutor described in the case study is a separate local application, not an AI service running inside this portfolio.

## Local Development

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Next.js. If the default port is occupied, use `npm.cmd run dev -- -p 3002` or another available port.

## Validation and Production Preview

```powershell
npm.cmd run lint
npx.cmd tsc --noEmit
npm.cmd run build
npm.cmd run start -- -p 3001
```

The production server serves the most recent build. Rebuild and restart it after source changes. Use the development server for live editing.

Check desktop, tablet, 390px and 320px layouts, keyboard navigation, modal focus return, reduced motion, screenshot controls and Unity's user-triggered loading. A successful build does not replace visual review.

## Content and Assets

- `src/data/portfolio.ts`: identity, production URL, career interests, skills, projects, education, experience, resume highlights and course certificates.
- `src/data/desk-ai-tutor.ts`: case-study capabilities, architecture branches, engineering challenges, reported validation, limitations and planned work.
- `src/lib/project-gallery.ts`: discovers actual screenshots from `public/projects/desk-ai-tutor`, sorts filenames and supplies captions/alt text. Add descriptions for new screenshots here and rebuild.
- `src/components/projects/ProjectGallery.tsx`: shared carousel and accessible enlarged image experience.
- `public/projects`: project previews and screenshots.
- `public/projects/evidence`: academic evidence images.
- `public/unity/abyss-bond`: the playable Unity Web export.
- `public/certificates`: verified course-certificate assets.

The homepage retains the study-sessions screenshot as its flagship preview. The Desk AI Tutor case-study hero uses the source-aware study view. Both reference supplied public assets directly.

Keep project claims grounded in actual work. The AI tutor is an experimental Windows PC-based Alpha; its test results are attributed to the supplied project brief. Keep implemented capabilities, reported tests and future work distinct. Do not add invented deployment links, dates, credentials, users or performance metrics.

## GitHub and Vercel

Repository: `themontyboi/muntasir-portfolio`.

Production URL: https://muntasir-portfolio-eight.vercel.app

The repository is connected to Vercel. An approved push to the configured production branch triggers its Git deployment workflow.

1. Review Git status, branch, remote, changes and validation results.
2. Stage only intended source, documentation and public assets. Keep environment files, local logs, dependency folders and generated builds out of version control.
3. Obtain release approval, create a descriptive commit and push without force-pushing or rewriting existing history.
4. In Vercel, open the project and inspect the deployment associated with that commit. Confirm READY status and check the production pages before reporting a successful deployment.

No additional CI pipeline, cloud AI deployment or custom domain is required by this portfolio. Local `.vercel` configuration and environment files remain private.
