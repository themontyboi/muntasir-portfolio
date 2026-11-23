import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { appMedia, showcaseApps } from "@/data/app-showcase";

type AppPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return showcaseApps.map(({ slug }) => ({ slug }));
}

async function findApp(params: AppPageProps["params"]) {
  const { slug } = await params;
  const app = showcaseApps.find((item) => item.slug === slug);
  if (!app) notFound();
  return app;
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const app = await findApp(params);
  const title = `${app.title} | Muntasir Hasan`;
  const url = `/apps/${app.slug}`;
  return {
    title,
    description: app.description,
    alternates: { canonical: url },
    openGraph: { title, description: app.description, url, images: [appMedia(app.slug).desktop] },
  };
}

export default async function AppDetailPage({ params }: AppPageProps) {
  const app = await findApp(params);
  const media = appMedia(app.slug);

  return (
    <main id="main-content" className="case-study">
      <header>
        <Link href="/apps" className="case-back-link"><ArrowLeft size={16} aria-hidden="true" /> App Showcase</Link>
        <p className="section-label mt-6 text-xs font-semibold uppercase">{app.collection} / {app.category}</p>
        <h1 className="display-heading mt-3 text-4xl font-semibold sm:text-5xl">{app.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">{app.description}</p>
        <p className="mt-3 text-sm font-semibold text-[var(--accent-primary)]">Working prototype</p>
        {app.demo ? (
          <a href={app.demo} className="btn-primary mt-5 px-5 py-3" target="_blank" rel="noopener noreferrer">
            <Gamepad2 size={18} aria-hidden="true" /> Play {app.title}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
        <div className="relative mt-7 aspect-[8/5] overflow-hidden border border-[var(--border-primary)] bg-[var(--surface-primary)]">
          <Image src={media.desktop} alt={`${app.title} desktop workspace`} fill sizes="(min-width: 1100px) 64rem, 100vw" className="object-contain" loading="eager" />
        </div>
      </header>
      <section className="case-section">
        <h2>Workflow</h2>
        <figure>
          <video controls playsInline preload="none" poster={media.detail} aria-label={`${app.title} workflow recording`} className="app-workflow-video">
            <source src={media.video} type="video/mp4" />
            <a href={media.video}>Download the workflow recording</a>
          </video>
          <figcaption className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{app.workflow}</figcaption>
        </figure>
      </section>
      {app.evidence ? <section className="case-section"><h2>Local verification</h2><p>{app.evidence}</p></section> : null}
      <section className="case-section">
        <h2>Screenshots</h2>
        <div className="mt-5">
          <ProjectGallery projectTitle={app.title} heading={null} images={[
            { src: media.desktop, title: "Desktop workspace", alt: `${app.title} desktop workspace`, caption: app.description },
            { src: media.detail, title: "Workflow detail", alt: `${app.title} workflow detail`, caption: app.workflow },
          ]} />
        </div>
      </section>
    </main>
  );
}
