import { academicHighlights, coursework, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="Cybersecurity study in progress"
        description="A focused academic foundation across security, systems, networking, policy, application security and investigation."
      />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          {education.map((item) => (
            <article key={item.label} className="panel timeline-mark p-6 pl-7">
              <p className="section-label text-xs font-semibold uppercase tracking-[0.22em]">
                {item.label}
              </p>
              <h3 className="display-heading mt-3 text-xl font-semibold text-[var(--text-primary)]">{item.status}</h3>
              <p className="mt-2 text-[var(--text-secondary)]">{item.institution}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.location}</p>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{item.details}</p>
            </article>
          ))}
        </div>
        <article className="panel p-6">
          <h3 className="display-heading text-xl font-semibold text-[var(--text-primary)]">Relevant coursework</h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {coursework.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </article>
      </div>
      <div className="mx-auto mt-6 max-w-6xl">
        <article className="panel p-6">
          <h3 className="display-heading text-xl font-semibold text-[var(--text-primary)]">Academic highlights</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {academicHighlights.map((highlight) => (
              <p key={highlight} className="border-l border-[var(--border-hover)] pl-4 text-sm text-[var(--text-secondary)]">
                {highlight}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
