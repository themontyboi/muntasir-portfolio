import { ArrowRight, Link2, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SingleWarriorEye } from "@/components/hero/SingleWarriorEye";
import { GlitchName } from "@/components/hero/GlitchName";
import { ResumeButton } from "@/components/ui/ResumeButton";

const quickFacts = [
  "Cybersecurity",
  "Local AI Systems",
  "Python & FastAPI",
  "Software Development",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(79,209,125,0.10),transparent_32%),radial-gradient(ellipse_at_bottom_left,rgba(154,132,80,0.055),transparent_28%),linear-gradient(180deg,rgba(237,245,239,0.035),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 min-w-0 lg:order-1">
          <p className="mb-5 inline-flex rounded-full border border-[var(--border-primary)] bg-[var(--accent-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">
            Cybersecurity · Local AI · Software Engineering
          </p>
          <h1 className="display-heading max-w-4xl text-5xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
            <GlitchName name={siteConfig.name} />
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-[var(--text-primary)]">
            Cybersecurity student building local AI systems, secure software and interactive applications.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            I&apos;m a Bachelor of Cybersecurity student in Melbourne, developing practical experience
            across AI systems, cybersecurity and software engineering. My projects include a
            local-first multimodal AI tutor, real-time web applications, security investigations
            and playable Unity prototypes.
          </p>
          <div className="mt-7 flex max-w-2xl flex-wrap gap-2">
            {quickFacts.map((fact) => (
              <span key={fact} className="hero-fact">
                {fact}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="btn-primary min-h-12 px-5 py-3">
              View Projects
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <ResumeButton className="btn-secondary min-h-12 px-5 py-3">
              View Résumé
            </ResumeButton>
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <Link2 size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              <Mail size={17} aria-hidden="true" />
              Email
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-primary)] bg-[rgba(17,28,21,0.72)] px-4 py-2">
              <span className="size-2 shrink-0 rounded-full bg-[var(--accent-primary)]" />
              Open to entry-level IT and cybersecurity opportunities
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              {siteConfig.location}
            </span>
          </div>
        </div>
        <div className="order-1 mx-auto w-full min-w-0 max-w-[47.5rem] lg:order-2 lg:max-w-none">
          <SingleWarriorEye />
        </div>
      </div>
    </section>
  );
}
