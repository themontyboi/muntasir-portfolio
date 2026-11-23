import { ArrowRight, Link2, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SingleWarriorEye } from "@/components/hero/SingleWarriorEye";
import { GlitchName } from "@/components/hero/GlitchName";
import { ResumeButton } from "@/components/ui/ResumeButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(79,209,125,0.10),transparent_32%),radial-gradient(ellipse_at_bottom_left,rgba(154,132,80,0.055),transparent_28%),linear-gradient(180deg,rgba(237,245,239,0.035),transparent_28%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="min-w-0">
          <p className="section-label mb-4 text-xs font-semibold uppercase">
            Software Development · Local AI · Cybersecurity
          </p>
          <h1 className="display-heading max-w-4xl text-5xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
            <GlitchName name={siteConfig.name} />
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug text-[var(--text-primary)]">
            I build software, local AI tools, and games.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            Recent work includes a 26-app showcase, a local AI tutor, NEONCUT for video editing,
            and game prototypes in Roblox and Unity.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
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
              Open to software, AI and cybersecurity opportunities
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              {siteConfig.location}
            </span>
          </div>
        </div>
        <div className="mx-auto w-full min-w-0 max-w-[47.5rem] lg:max-w-none">
          <SingleWarriorEye />
        </div>
      </div>
    </section>
  );
}
