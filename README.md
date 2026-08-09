# Muntasir Hasan Portfolio

Phase 1 personal portfolio website for Muntasir Hasan, a Melbourne-based Bachelor of Cybersecurity student targeting entry-level IT support, service desk, junior cybersecurity, SOC analyst level 1, technical support and junior security operations roles.

This version is a responsive, accessible one-page site with a dark technology-focused design and a lightweight CSS iris preview prepared for a future cinematic Three.js introduction.

## Technology Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- React
- Lucide React icons
- Local typed data files
- CSS transitions and lightweight visual effects

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:3000`.

## Production Build

```bash
npm run build
```

## Linting

```bash
npm run lint
```

## Editing Portfolio Data

Most personal content is centralised in:

```text
src/data/portfolio.ts
```

Use this file to update:

- Name, location, resume path and social links
- Email, GitHub or future social profiles
- Career focus text
- Technical skills
- Project cards and future case-study fields
- Education and coursework
- Academic highlights
- Certificate details
- Transferable work experience

Do not add unsupported claims, invented employment dates, fake credentials, fake GitHub links or fake live-demo links.

## Adding Project Images

Place screenshots in:

```text
public/projects
```

Then update the matching project object in `src/data/portfolio.ts`:

```ts
image: "/projects/example-screenshot.png"
```

Only use screenshots that accurately represent the real project.

## Adding the Resume PDF

Place the real resume PDF at:

```text
public/resume/Muntasir_Hasan_Resume.pdf
```

The website already links to:

```text
/resume/Muntasir_Hasan_Resume.pdf
```

No fake resume PDF has been generated.

## Adding Certificate Details

Certificate entries are currently placeholders in:

```text
src/data/portfolio.ts
```

Update each certificate after the exact title and credential details are confirmed:

```ts
{
  title: "Exact certificate title",
  provider: "Provider",
  issueDate: "YYYY-MM-DD",
  credentialUrl: "https://...",
  image: "/certificates/example-certificate.png",
  note: "Verified certificate details added."
}
```

Place certificate images in:

```text
public/certificates
```

Udemy course entries should not be described as industry certifications unless a recognised industry credential is actually supplied.

## Deploying to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Use the default build command:

```bash
npm run build
```

5. Deploy after adding the real resume PDF and any desired screenshots.

## Phase 2 Plan

The hero is intentionally split into text and visual components. The current CSS-only `IrisPreview` can later be replaced by a cinematic scene using:

- Three.js
- React Three Fiber
- GSAP ScrollTrigger
- Closed-eye opening animation
- Iris tunnel
- Scroll-controlled camera movement

Future 3D work should mount in `src/components/sections/IrisPreview.tsx` or replace that component while keeping portfolio content separate from animation logic.
