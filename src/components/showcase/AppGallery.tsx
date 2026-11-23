"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { AppCard } from "@/components/showcase/AppCard";
import { appCategories, type ShowcaseApp } from "@/data/app-showcase";

export function AppGallery({ apps }: { apps: ShowcaseApp[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const term = search.trim().toLowerCase();
  const results = apps.filter((app) => (
    (category === "all" || app.category === category) &&
    `${app.title} ${app.description} ${app.category}`.toLowerCase().includes(term)
  ));

  function reset() {
    setSearch("");
    setCategory("all");
  }

  return (
    <>
      <div className="app-gallery-toolbar">
        <label className="app-gallery-field">
          <span>Search the gallery</span>
          <span className="relative block">
            <Search size={16} aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2" />
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search apps" className="pl-9" />
          </span>
        </label>
        <label className="app-gallery-field">
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All categories</option>
            {appCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <p className="my-5 text-sm text-[var(--text-secondary)]" role="status">{results.length} {results.length === 1 ? "app" : "apps"}</p>
      {results.length ? (
        <div className="app-grid" id="app-gallery-results">
          {results.map((app) => <AppCard key={app.slug} app={app} />)}
        </div>
      ) : (
        <div className="border-y border-[var(--border-primary)] py-8">
          <p>No apps match these filters.</p>
          <button type="button" className="btn-secondary mt-4 px-4 py-2" onClick={reset}>Clear filters</button>
        </div>
      )}
    </>
  );
}
