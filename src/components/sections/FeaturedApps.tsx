import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppCard } from "@/components/showcase/AppCard";
import { featuredApps, showcaseApps } from "@/data/app-showcase";

export function FeaturedApps() {
  return (
    <section id="featured-apps" className="section-shell mx-auto max-w-7xl" aria-labelledby="featured-apps-title">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-2xl">
          <p className="section-label mb-3 text-xs font-semibold uppercase">Application development</p>
          <h2 id="featured-apps-title" className="section-title text-3xl font-semibold md:text-4xl">Featured Apps</h2>
          <p className="section-copy mt-3">Booking, creative review and rights management prototypes with recorded workflows.</p>
        </div>
        <Link href="/apps" className="btn-secondary px-4 py-3">
          View all {showcaseApps.length} apps <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="app-grid">
        {featuredApps.slice(0, 3).map((app) => <AppCard key={app.slug} app={app} />)}
      </div>
    </section>
  );
}
