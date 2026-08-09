import { GitBranch, Link2, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";
import { currentYear } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-primary)] bg-[rgba(5,8,6,0.72)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display-heading font-semibold text-[var(--text-primary)]">
            {siteConfig.name}
          </p>
          <p>{siteConfig.shortLocation}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span>&copy; {currentYear()}</span>
          <span>Built with Next.js and TypeScript</span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-full text-[var(--text-secondary)] transition hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <Mail size={16} aria-hidden="true" />
            Email
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-[var(--text-secondary)] transition hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <Link2 size={16} aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full text-[var(--text-secondary)] transition hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            <GitBranch size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
