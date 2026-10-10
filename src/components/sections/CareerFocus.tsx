import { Code2, Headphones, ShieldCheck } from "lucide-react";
import { careerFocus } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  headphones: Headphones,
  shield: ShieldCheck,
  code: Code2,
};

export function CareerFocus() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Career focus"
        title="Where I Want to Contribute"
        description="Career interests shaped by my studies and personal projects."
      />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {careerFocus.map((item) => {
          const Icon = icons[item.icon];
          return (
            <article key={item.title} className="panel p-6">
              <Icon className="mb-6 text-[var(--accent-primary)]" size={28} aria-hidden="true" />
              <h3 className="display-heading text-xl font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
