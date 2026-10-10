import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Experience"
        description="Experience in facilities support, communication and helping people use technology."
      />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
        {experience.map((item) => (
          <article key={item.role} className="panel p-6">
            <BriefcaseBusiness className="mb-5 text-[var(--accent-primary)]" size={28} aria-hidden="true" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="display-heading text-xl font-semibold text-[var(--text-primary)]">{item.role}</h3>
                <p className="mt-1 text-[var(--text-secondary)]">{item.employer}</p>
                {item.supportingLabel ? (
                  <p className="mt-1 text-sm text-[var(--accent-primary)]">{item.supportingLabel}</p>
                ) : null}
              </div>
              {item.type ? (
                <span className="rounded-full border border-[var(--border-primary)] px-3 py-1 text-xs text-[var(--text-secondary)]">
                  {item.type}
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              {item.dates ? `${item.location} - ${item.dates}` : item.location}
            </p>
            <ul className="mt-5 space-y-3">
              {item.themes.map((theme) => (
                <li key={theme} className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]">
                  <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-[var(--accent-primary)]" />
                  <span>{theme}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
