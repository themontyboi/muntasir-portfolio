import "server-only";
import { readdirSync } from "node:fs";
import path from "node:path";
import { projects } from "@/data/portfolio";
import type { Project, ProjectEvidenceImage } from "@/types/portfolio";

const screenshotDescriptions: Record<string, Omit<ProjectEvidenceImage, "src">> = {
  "Screenshot 2026-10-10 200829.png": {
    title: "Study Sessions",
    alt: "Desk AI Tutor saved study sessions with materials and current study topics",
    caption: "Saved study sessions keep learning material and a return point together.",
  },
  "Screenshot 2026-10-10 200852.png": {
    title: "Material Library",
    alt: "Desk AI Tutor library with imported documents and preparation status",
    caption: "The local library separates imported material from its readiness for tutoring.",
  },
  "Screenshot 2026-10-10 200907.png": {
    title: "General Chat",
    alt: "Desk AI Tutor General Chat with a text composer and microphone controls",
    caption: "General Chat supports typed questions and entry into local voice interaction.",
  },
  "Screenshot 2026-10-10 200918.png": {
    title: "Local Voice Interaction",
    alt: "Desk AI Tutor listening view with interrupt, pause and stop controls",
    caption: "The experimental voice workflow exposes learner controls for interruption, pause and stop.",
  },
  "Screenshot 2026-10-10 200939.png": {
    title: "Source-Aware Study",
    alt: "Desk AI Tutor study conversation alongside a structured topic path",
    caption: "A saved study conversation pairs source-aware tutoring with a topic path; visited does not mean mastered.",
  },
};

export function getPortfolioProjects(): Project[] {
  const directory = path.join(process.cwd(), "public", "projects", "desk-ai-tutor");
  const gallery = readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(png|jpe?g|webp|avif|gif)$/i.test(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))
    .map((entry, index): ProjectEvidenceImage => ({
      src: `/projects/desk-ai-tutor/${encodeURIComponent(entry.name)}`,
      ...(screenshotDescriptions[entry.name] ?? {
        title: `Application screenshot ${index + 1}`,
        alt: `Desk AI Tutor application screenshot ${index + 1}`,
        caption: "Desk AI Tutor Lab Alpha interface during experimental development.",
      }),
    }));

  return projects.map((project) => project.slug === "desk-ai-tutor" ? {
    ...project,
    image: gallery[0]?.src ?? null,
    previewAlt: gallery[0]?.alt,
    detailsGallery: gallery,
  } : project);
}
