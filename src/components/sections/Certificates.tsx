import Image from "next/image";
import { Award } from "lucide-react";
import { certificates } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certificates() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Certificates"
        title="Certifications and Professional Development"
        description="Course certificates and professional development completed outside formal degree study."
      />
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article key={certificate.title} className="panel p-6">
            {certificate.image ? (
              <div className="relative mb-5 aspect-[16/10] overflow-hidden border border-[rgba(154,132,80,0.5)] bg-[var(--surface-primary)]">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <Award className="mb-5 text-[var(--gold-muted)]" size={28} aria-hidden="true" />
            )}
            <h3 className="display-heading text-xl font-semibold text-[var(--text-primary)]">{certificate.title}</h3>
            <p className="gold-detail mt-2 text-sm">{certificate.provider}</p>
            <dl className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
              {certificate.issueDate ? (
                <div>
                  <dt className="inline text-[var(--text-muted)]">Issued: </dt>
                  <dd className="inline">{certificate.issueDate}</dd>
                </div>
              ) : null}
              {certificate.courseLength ? (
                <div>
                  <dt className="inline text-[var(--text-muted)]">Course length: </dt>
                  <dd className="inline">{certificate.courseLength}</dd>
                </div>
              ) : null}
              {certificate.instructors?.length ? (
                <div>
                  <dt className="inline text-[var(--text-muted)]">Instructors: </dt>
                  <dd className="inline">{certificate.instructors.join(", ")}</dd>
                </div>
              ) : null}
            </dl>
            {certificate.credentialUrl ? (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link mt-5"
              >
                View credential
              </a>
            ) : null}
            {certificate.note ? (
              <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">{certificate.note}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
