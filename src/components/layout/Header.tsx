"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/data/portfolio";
import { openResumeModal } from "@/lib/resume-modal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border-primary)] bg-[rgba(5,8,6,0.84)] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="group inline-flex items-center gap-3 rounded-full text-sm font-semibold text-[var(--text-primary)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
        >
          <span className="grid size-9 place-items-center rounded-full border border-[rgba(154,132,80,0.45)] bg-[var(--accent-soft)] text-[var(--accent-primary)] shadow-[inset_0_0_0_1px_rgba(79,209,125,0.15)]">
            MH
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.action === "resume" ? (
              <button
                key={item.label}
                type="button"
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                onClick={openResumeModal}
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border-primary)] text-[var(--text-primary)] transition hover:bg-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--border-primary)] bg-[var(--background-primary)] px-4 py-4 shadow-2xl md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) =>
              item.action === "resume" ? (
                <button
                  key={item.label}
                  type="button"
                  className="rounded-md px-4 py-3 text-left text-base font-medium text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  onClick={() => {
                    setIsOpen(false);
                    openResumeModal();
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-4 py-3 text-base font-medium text-[var(--text-secondary)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
