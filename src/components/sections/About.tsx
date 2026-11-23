import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="How I build"
      />
      <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
        <p>
          I&apos;m a Melbourne-based developer who works across the interface and the systems behind it.
          Recent projects include cinema booking with single-use ticket admission, creative approvals
          tied to specific revisions, and a local video editor that can retry interrupted renders.
        </p>
        <p>
          My cybersecurity background shapes the questions I ask as I build: who can access the data,
          what survives a restart, and how someone can recover when a step fails.
        </p>
      </div>
    </section>
  );
}
