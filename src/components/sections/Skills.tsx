import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Technical skills"
        title="Technical Skills"
        description="Focused foundations from cybersecurity study, academic labs, development practice and tool exposure."
      />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <article key={category} className="panel p-6">
            <h3 className="display-heading text-xl font-semibold text-[var(--text-primary)]">{category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
