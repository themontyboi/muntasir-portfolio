import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { AppCard } from "@/components/showcase/AppCard";
import { AppGallery } from "@/components/showcase/AppGallery";
import { featuredApps, galleryApps, showcaseApps } from "@/data/app-showcase";

const description = "Explore Muntasir Hasan's 26 application prototypes across Agency Six and Prototype Lab, with real screenshots and workflow recordings.";

export const metadata: Metadata = {
  title: "App Showcase | Muntasir Hasan",
  description,
  alternates: { canonical: "/apps" },
  openGraph: { title: "App Showcase | Muntasir Hasan", description, url: "/apps" },
};

export default function AppShowcasePage() {
  return (
    <main id="main-content" className="app-showcase-shell">
      <header className="mb-9 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Link href="/#featured-apps" className="case-back-link"><ArrowLeft size={16} aria-hidden="true" /> Portfolio</Link>
          <h1 className="display-heading mt-6 text-4xl font-semibold sm:text-5xl">App Showcase</h1>
          <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">{showcaseApps.length} prototypes from Agency Six and Prototype Lab.</p>
        </div>
        <a href="#app-gallery" className="btn-secondary px-4 py-3">Browse app gallery <ArrowDown size={16} aria-hidden="true" /></a>
      </header>
      <section aria-labelledby="showcase-featured-title">
        <h2 id="showcase-featured-title" className="display-heading mb-4 text-2xl font-semibold">Featured cases</h2>
        <div className="app-grid app-grid--featured">
          {featuredApps.map((app, index) => <AppCard key={app.slug} app={app} lead={index === 0} />)}
        </div>
      </section>
      <section id="app-gallery" className="app-gallery-section" aria-labelledby="app-gallery-title">
        <h2 id="app-gallery-title" className="display-heading mb-5 text-2xl font-semibold">App gallery</h2>
        <AppGallery apps={galleryApps} />
      </section>
    </main>
  );
}
