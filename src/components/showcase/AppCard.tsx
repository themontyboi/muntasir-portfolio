import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { appMedia, type ShowcaseApp } from "@/data/app-showcase";

export function AppCard({ app, lead = false }: { app: ShowcaseApp; lead?: boolean }) {
  return (
    <article className={`app-card${lead ? " app-card--lead" : ""}`}>
      <Link href={`/apps/${app.slug}`} prefetch={false} className="app-card-link">
        <div className="app-card-image">
          <Image
            src={appMedia(app.slug).desktop}
            alt=""
            fill
            sizes={lead ? "(min-width: 1200px) 740px, (min-width: 768px) 65vw, 100vw" : "(min-width: 1200px) 400px, (min-width: 640px) 50vw, 100vw"}
            className="object-cover object-top"
          />
        </div>
        <div className="app-card-body">
          <p className="section-label text-xs font-semibold uppercase">{app.category}</p>
          <h3 className="display-heading mt-2 text-xl font-semibold sm:text-2xl">{app.title}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{app.description}</p>
          <ArrowUpRight aria-hidden="true" className="app-card-arrow" size={18} />
        </div>
      </Link>
    </article>
  );
}
