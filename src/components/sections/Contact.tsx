import { GitBranch, Link2, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Let's connect"
        title="Interested in working together?"
        description="I am currently open to entry-level IT support, service desk and cybersecurity opportunities in Melbourne."
      />
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        <a href={`mailto:${siteConfig.email}`} className="contact-tile">
          <Mail size={22} aria-hidden="true" />
          <span>
            <strong>Email</strong>
            <small>{siteConfig.email}</small>
          </span>
        </a>
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-tile"
        >
          <Link2 size={22} aria-hidden="true" />
          <span>
            <strong>LinkedIn</strong>
            <small>Connect on LinkedIn</small>
          </span>
        </a>
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-tile"
        >
          <GitBranch size={22} aria-hidden="true" />
          <span>
            <strong>GitHub</strong>
            <small>View GitHub</small>
          </span>
        </a>
        <div className="contact-tile">
          <MapPin size={22} aria-hidden="true" />
          <span>
            <strong>Location</strong>
            <small>{siteConfig.location}</small>
          </span>
        </div>
      </div>
    </section>
  );
}
