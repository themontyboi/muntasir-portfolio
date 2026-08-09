import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="A practical path into technology"
        description="A concise introduction grounded in current study, transferable experience and hands-on technical projects."
      />
      <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
        <p>
          I&apos;m a Bachelor of Cybersecurity student in Melbourne with interests across
          cybersecurity, technical support and software development.
        </p>
        <p>
          My studies and projects have given me practical exposure to ethical hacking, digital
          forensics, networking, secure applications, cloud security, web development and game
          development.
        </p>
        <p>
          Previous tertiary study toward software engineering continues to support my interest in
          programming, secure development and building useful systems.
        </p>
      </div>
    </section>
  );
}
