import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Building at the intersection of AI, software and cybersecurity"
      />
      <div className="mx-auto max-w-4xl space-y-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
        <p>
          I&apos;m a Bachelor of Cybersecurity student based in Melbourne, with interests across
          local AI systems, secure software, technical support and interactive application development.
        </p>
        <p>
          Alongside my cybersecurity studies, I build experimental software to understand how
          different technologies work together. My work includes local language models, speech
          interaction, document retrieval, real-time web applications and Unity gameplay prototypes.
        </p>
        <p>
          I&apos;m particularly interested in building reliable, useful systems and understanding
          the engineering decisions behind them.
        </p>
      </div>
    </section>
  );
}
