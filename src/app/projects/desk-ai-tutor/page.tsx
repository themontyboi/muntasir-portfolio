import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Tag } from "@/components/ui/Tag";
import { deskAITutorCaseStudy as study } from "@/data/desk-ai-tutor";
import { getPortfolioProjects } from "@/lib/project-gallery";

const title = "Desk AI Tutor Lab Alpha | Muntasir Hasan";
const description = "A working Windows PC-based AI tutoring Alpha: Next.js, FastAPI, local Qwen models, speech interaction, bounded document retrieval and durable study sessions.";
const sections = [
  ["overview", "Overview"], ["motivation", "Problem and motivation"],
  ["architecture", "System architecture"], ["capabilities", "Implemented capabilities"],
  ["screenshots", "Screenshot gallery"], ["challenges", "Engineering challenges"],
  ["validation", "Validation and testing"], ["limitations", "Known limitations"],
  ["future-work", "Future work"],
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/desk-ai-tutor" },
  openGraph: { title, description, type: "website", url: "/projects/desk-ai-tutor" },
  twitter: { card: "summary", title, description },
};

export default function DeskAITutorPage() {
  const project = getPortfolioProjects().find((item) => item.slug === "desk-ai-tutor");
  if (!project) notFound();
  const gallery = project.detailsGallery ?? [];
  const heroImage = gallery.find((image) => image.title === "Source-Aware Study") ?? gallery[0];

  return (
    <main id="main-content" className="case-study">
      <header className="case-introduction">
        <Link href="/#projects" className="case-back-link"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
        <p className="section-label mt-7 text-xs font-semibold uppercase tracking-[0.16em]">{project.category}</p>
        <h1 className="display-heading mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">{project.description}</p>
        <p className="mt-4 text-sm font-semibold text-[var(--accent-primary)]">{project.status}</p>
        {heroImage ? (
          <figure className="mt-8">
            <div className="relative aspect-[4/3] max-h-[52vh] w-full overflow-hidden border border-[var(--border-primary)] bg-[var(--background-secondary)]">
              <Image src={heroImage.src} alt={heroImage.alt} fill sizes="(min-width: 1152px) 64rem, 100vw" className="object-contain" loading="eager" />
            </div>
            <figcaption className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{heroImage.caption}</figcaption>
          </figure>
        ) : null}
      </header>

      <nav className="case-contents" aria-label="Case-study sections">
        {sections.map(([id, label], index) => <a key={id} href={`#${id}`}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
      </nav>

      <section id="overview" className="case-section">
        <h2>Overview</h2>
        <p>{project.longDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Technical stack">
          {project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}
        </div>
      </section>
      <section id="motivation" className="case-section">
        <h2>Problem and motivation</h2><p>{study.motivation}</p>
      </section>
      <section id="architecture" className="case-section">
        <h2>System architecture</h2>
        <p>The browser handles interaction, recording and playback. FastAPI coordinates application-owned state and the local services below; these are separate branches rather than a single inference chain.</p>
        <figure className="architecture-diagram">
          <ol className="architecture-trunk">
            <li><strong>Next.js / React interface</strong><span>Typed input, microphone capture, visible state and audio playback</span></li>
            <li><ArrowDown size={18} aria-hidden="true" /><strong>FastAPI application</strong><span>Backend coordination and model orchestration</span></li>
            <li><ArrowDown size={18} aria-hidden="true" /><strong>Application-owned session and operation state</strong><span>Ownership, history, cancellation and source readiness</span></li>
          </ol>
          <ul className="architecture-branches">
            {study.architecture.map((branch) => <li key={branch.title}><strong>{branch.title}</strong><span>{branch.detail}</span></li>)}
          </ul>
          <figcaption>Broad Alpha data flow. Application logic owns durable state; local services supply generation, speech and prepared evidence.</figcaption>
        </figure>
      </section>
      <section id="capabilities" className="case-section">
        <p className="case-stage">Implemented</p><h2>Implemented capabilities</h2>
        <dl className="case-detail-list">{study.capabilities.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.detail}</dd></div>)}</dl>
      </section>
      <section id="screenshots" className="case-section">
        <h2>Screenshot gallery</h2>
        <p>Five views of the working local Alpha: saved sessions, material preparation, chat, voice interaction and source-aware study.</p>
        <div className="mt-6"><ProjectGallery images={gallery} projectTitle={project.title} heading={null} tall /></div>
      </section>
      <section id="challenges" className="case-section">
        <h2>Engineering challenges</h2>
        <dl className="case-detail-list">{study.challenges.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.detail}</dd></div>)}</dl>
      </section>
      <section id="validation" className="case-section">
        <p className="case-stage">Tested · Reported project validation</p><h2>Validation and testing</h2>
        <p>These results are reported in the supplied Alpha project brief. They describe local developer validation, not an independent third-party assessment or evidence of real-world tutoring effectiveness.</p>
        <ul className="case-bullets">{study.validation.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section id="limitations" className="case-section">
        <h2>Known limitations</h2>
        <ul className="case-bullets">{study.limitations.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section id="future-work" className="case-section">
        <p className="case-stage">Planned</p><h2>Future work</h2>
        <ul className="case-bullets">{study.futureWork.map((item) => <li key={item}>{item}</li>)}</ul>
        <Link href="/#projects" className="btn-secondary mt-8 px-5 py-3"><ArrowLeft size={16} aria-hidden="true" /> Back to projects</Link>
      </section>
    </main>
  );
}
