"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Gamepad2,
  GitBranch,
  Images,
  Info,
  ArrowRight,
  Maximize2,
  RotateCcw,
  X,
} from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { Project, ProjectEvidenceImage } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

type ProjectPreviewProps = {
  project: Project;
};

function ProjectPreview({ project }: ProjectPreviewProps) {
  const [failed, setFailed] = useState(false);
  const isAnimatedPreview = project.image?.endsWith(".gif") ?? false;

  if (!project.image || failed) {
    return (
      <div className="project-preview-fallback">
        <span>
          <small>{project.category}</small>
          <strong>{project.title}</strong>
          Preview coming soon
        </span>
      </div>
    );
  }

  return (
    <div className="project-preview-image">
      <Image
        src={project.image}
        alt={project.previewAlt ?? `${project.title} preview`}
        fill
        unoptimized={isAnimatedPreview}
        sizes={project.flagship ? "(min-width: 1280px) 48rem, (min-width: 768px) 75vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"}
        className={project.detailsGallery?.length ? "object-contain" : "object-cover"}
        onError={() => setFailed(true)}
      />
      {project.playable ? (
        <span className="gameplay-preview-cue" aria-hidden="true">
          <Gamepad2 size={16} />
        </span>
      ) : null}
    </div>
  );
}

export function Projects({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<ProjectEvidenceImage | null>(null);
  const [selectedGame, setSelectedGame] = useState<Project | null>(null);
  const [isGameRequested, setIsGameRequested] = useState(false);
  const [isGameLoading, setIsGameLoading] = useState(false);
  const [gameError, setGameError] = useState<string | null>(null);
  const [iframeKey, setIframeKey] = useState(0);
  const detailsTitleId = useId();
  const evidenceTitleId = useId();
  const gameTitleId = useId();
  const gameFrameRef = useRef<HTMLDivElement | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const evidenceRef = useRef<HTMLDivElement | null>(null);
  const gameRef = useRef<HTMLDivElement | null>(null);
  const projectTriggerRef = useRef<HTMLButtonElement | null>(null);
  const evidenceTriggerRef = useRef<HTMLButtonElement | null>(null);
  const activeLayerRef = useRef<"details" | "evidence" | "game" | null>(null);
  const gameRequestRef = useRef(0);

  const isModalOpen = Boolean(selectedProject || selectedGame || selectedEvidence);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const modal = selectedEvidence ? evidenceRef.current : selectedGame ? gameRef.current : detailsRef.current;
    const trigger = selectedEvidence ? evidenceTriggerRef.current : projectTriggerRef.current;
    const returningToDetails = activeLayerRef.current === "evidence" && !selectedEvidence && Boolean(selectedProject);
    activeLayerRef.current = selectedEvidence ? "evidence" : selectedGame ? "game" : "details";
    const previousOverflow = document.body.style.overflow;
    const focusableSelector = 'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';
    document.body.style.overflow = "hidden";
    if (returningToDetails && evidenceTriggerRef.current?.isConnected) {
      evidenceTriggerRef.current.focus();
    } else {
      modal?.querySelector<HTMLElement>(focusableSelector)?.focus();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        if (selectedEvidence) {
          setSelectedEvidence(null);
        } else if (selectedGame) {
          closeGameModal();
        } else {
          setSelectedProject(null);
        }
        return;
      }

      if (event.key === "Tab" && modal) {
        const controls = modal.querySelectorAll<HTMLElement>(focusableSelector);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!first || !last) {
          return;
        }
        if (event.shiftKey && (document.activeElement === first || !modal.contains(document.activeElement))) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !modal.contains(document.activeElement))) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (trigger?.isConnected) {
        trigger.focus();
      } else {
        projectTriggerRef.current?.focus();
      }
    };
  }, [isModalOpen, selectedEvidence, selectedGame, selectedProject]);

  function openGameModal(project: Project, trigger: HTMLButtonElement) {
    if (!selectedProject) {
      projectTriggerRef.current = trigger;
    }
    gameRequestRef.current += 1;
    setSelectedProject(null);
    setSelectedEvidence(null);
    setSelectedGame(project);
    setIsGameRequested(false);
    setIsGameLoading(false);
    setGameError(null);
  }

  function openProjectDetails(project: Project, trigger: HTMLButtonElement) {
    projectTriggerRef.current = trigger;
    setSelectedProject(project);
  }

  function openEvidence(image: ProjectEvidenceImage, trigger: HTMLButtonElement) {
    evidenceTriggerRef.current = trigger;
    setSelectedEvidence(image);
  }

  function closeGameModal() {
    gameRequestRef.current += 1;
    setSelectedGame(null);
    setIsGameRequested(false);
    setIsGameLoading(false);
    setGameError(null);
  }

  async function loadGame(project: Project) {
    if (!project.playable) {
      return;
    }

    setGameError(null);
    setIsGameLoading(true);
    const request = ++gameRequestRef.current;

    try {
      const response = await fetch(project.playable.url, { method: "HEAD" });
      if (request !== gameRequestRef.current) {
        return;
      }
      if (!response.ok) {
        throw new Error("The Unity build could not be found.");
      }

      setIsGameRequested(true);
      setIframeKey((value) => value + 1);
    } catch {
      if (request !== gameRequestRef.current) {
        return;
      }
      setIsGameLoading(false);
      setGameError("The Unity build could not be loaded from the configured path.");
    }
  }

  function reloadGame() {
    setGameError(null);
    setIsGameLoading(true);
    setIframeKey((value) => value + 1);
  }

  async function requestFullscreen() {
    try {
      await gameFrameRef.current?.requestFullscreen();
    } catch {
      setGameError("Fullscreen is not available in this browser.");
    }
  }

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Featured projects"
        title="Selected Projects & Engineering Work"
        description="A collection of personal software projects, experimental AI systems and academic cybersecurity investigations."
      />
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3" inert={isModalOpen}>
        {projects
          .filter((project) => project.featured)
          .map((project) => (
            <article
              key={project.slug}
              className="project-card"
              data-playable={project.playable ? "true" : "false"}
              data-gallery={project.detailsGallery?.length ? "true" : "false"}
              data-flagship={project.flagship ? "true" : "false"}
            >
              <div className="project-card-content flex min-h-full flex-col">
                <ProjectPreview project={project} />
                <p className="section-label text-xs font-semibold uppercase tracking-[0.2em]">
                  {project.cardCategoryLabel ?? project.category}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <h3 className="display-heading text-xl font-semibold leading-tight text-[var(--text-primary)]">
                    {project.cardTitleLabel ?? project.title}
                  </h3>
                  {project.playable ? (
                    <span className="playable-badge px-3 py-1 text-xs font-semibold">
                      Playable Prototype
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 flex-1 text-sm leading-7 text-[var(--text-secondary)]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.cardTechnologySummary ? (
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      {project.cardTechnologySummary}
                    </p>
                  ) : (
                    project.technologies.map((technology) => (
                      <Tag key={technology}>{technology}</Tag>
                    ))
                  )}
                </div>
                <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border-primary)] pt-5">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--text-muted)]">Status:</span>{" "}
                    {project.cardStatusLabel ?? project.status}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.detailsUrl ? (
                      <Link href={project.detailsUrl} className="btn-primary px-4 py-2">
                        Explore Project <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    ) : null}
                    <button
                      type="button"
                      className="btn-secondary px-4 py-2"
                      onClick={(event) => openProjectDetails(project, event.currentTarget)}
                    >
                      {project.evidenceImages?.length ? (
                        <Images size={16} aria-hidden="true" />
                      ) : (
                        <Info size={16} aria-hidden="true" />
                      )}
                      {project.evidenceLabel ?? "Details"}
                    </button>
                    {project.playable ? (
                      <button
                        type="button"
                        className="btn-primary px-4 py-2"
                        onClick={(event) => openGameModal(project, event.currentTarget)}
                      >
                        <Gamepad2 size={16} aria-hidden="true" />
                        Play Prototype
                      </button>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <GitBranch size={16} aria-hidden="true" />
                        GitHub ↗
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                        Live demo
                      </a>
                    ) : null}
                    {!project.githubUrl &&
                    !project.liveUrl &&
                    !project.playable &&
                    project.comingSoon &&
                    !project.evidenceImages?.length ? (
                      <span className="inline-flex min-h-10 items-center rounded-md border border-[var(--border-primary)] px-4 py-2 text-sm text-[var(--text-muted)]">
                        Case study coming soon
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
      </div>

      {selectedProject ? (
        <div
          ref={detailsRef}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/80 px-4 py-6 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby={detailsTitleId}
          inert={Boolean(selectedEvidence)}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="gothic-modal max-h-[90vh] w-full max-w-4xl overflow-y-auto p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-label text-xs font-semibold uppercase tracking-[0.22em]">
                  {selectedProject.category}
                </p>
                <h3
                  id={detailsTitleId}
                  className="display-heading mt-3 text-2xl font-semibold text-[var(--text-primary)]"
                >
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                className="icon-control size-10 rounded-full"
                aria-label="Close project details"
                onClick={() => {
                  setSelectedEvidence(null);
                  setSelectedProject(null);
                }}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            {selectedProject.playable && selectedProject.image ? (
              <div className="mt-6 border-t border-[var(--border-primary)] pt-5">
                <div className="relative aspect-video overflow-hidden border border-[var(--border-hover)] bg-black shadow-[inset_0_0_0_1px_rgba(237,245,239,0.035)]">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.previewAlt ?? `${selectedProject.title} preview`}
                    fill
                    unoptimized={selectedProject.image.endsWith(".gif")}
                    sizes="(min-width: 1024px) 64rem, 100vw"
                    className="object-cover"
                  />
                  <span className="playable-badge absolute left-3 top-3 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                    Playable Prototype
                  </span>
                  <span className="gameplay-preview-cue" aria-hidden="true">
                    <Gamepad2 size={16} />
                  </span>
                </div>
                <h4 className="display-heading mt-5 text-2xl font-semibold text-[var(--text-primary)]">
                  {selectedProject.title}
                </h4>
                <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">
                  {selectedProject.longDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn-primary mt-6 px-5 py-3"
                  onClick={(event) => openGameModal(selectedProject, event.currentTarget)}
                >
                  <Gamepad2 size={16} aria-hidden="true" />
                  Play Prototype
                </button>
              </div>
            ) : (
              <>
                {selectedProject.flagship ? (
                  <h4 className="display-heading mt-6 text-lg font-semibold text-[var(--text-primary)]">Overview</h4>
                ) : null}
                <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                  {selectedProject.longDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
              </>
            )}

            {selectedProject.features?.length ? (
              <div className="mt-6 border-t border-[var(--border-primary)] pt-5">
                <h4 className="display-heading text-lg font-semibold text-[var(--text-primary)]">
                  {selectedProject.flagship ? "Core capabilities" : "Project features"}
                </h4>
                <ul className="mt-4 grid gap-3 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-[var(--accent-primary)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-6 grid gap-4 border-t border-[var(--border-primary)] pt-5 text-sm text-[var(--text-secondary)] md:grid-cols-2">
              <p>
                <span className="font-medium text-[var(--text-primary)]">Status:</span>{" "}
                {selectedProject.status}
              </p>
              {selectedProject.contributionNote ? (
                <p>
                  <span className="font-medium text-[var(--text-primary)]">Contribution:</span>{" "}
                  {selectedProject.contributionNote}
                </p>
              ) : null}
              {selectedProject.ethicsNote ? (
                <p>
                  <span className="font-medium text-[var(--text-primary)]">Ethics:</span>{" "}
                  {selectedProject.ethicsNote}
                </p>
              ) : null}
              {selectedProject.limitationsNote ? (
                <p>
                  <span className="font-medium text-[var(--text-primary)]">Limitations:</span>{" "}
                  {selectedProject.limitationsNote}
                </p>
              ) : null}
            </div>

            {selectedProject.implementationHighlights?.length ? (
              <div className="mt-6 border-t border-[var(--border-primary)] pt-5">
                <h4 className="display-heading text-lg font-semibold text-[var(--text-primary)]">
                  Implementation highlights
                </h4>
                <ul className="mt-4 grid gap-3 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
                  {selectedProject.implementationHighlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-[var(--accent-primary)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {selectedProject.detailsGallery?.length ? (
              <div className="mt-6 border-t border-[var(--border-primary)] pt-5">
                <ProjectGallery
                  images={selectedProject.detailsGallery}
                  projectTitle={selectedProject.cardTitleLabel ?? selectedProject.title}
                  tall={selectedProject.flagship}
                  onEnlarge={openEvidence}
                />
              </div>
            ) : null}

            {selectedProject.engineeringFocus ? (
              <div className="mt-6 border-t border-[var(--border-primary)] pt-5">
                <h4 className="display-heading text-lg font-semibold text-[var(--text-primary)]">Engineering focus</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{selectedProject.engineeringFocus}</p>
              </div>
            ) : null}
            {selectedProject.developmentNote ? (
              <div className="mt-6 border-t border-[var(--border-primary)] pt-5">
                <h4 className="display-heading text-lg font-semibold text-[var(--text-primary)]">Current status / next steps</h4>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{selectedProject.developmentNote}</p>
              </div>
            ) : null}

            {selectedProject.evidenceImages?.length ? (
              <div className="mt-6 border-t border-[var(--border-primary)] pt-5">
                <h4 className="display-heading text-lg font-semibold text-[var(--text-primary)]">
                  Evidence gallery
                </h4>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {selectedProject.evidenceImages.map((image) => (
                    <button
                      key={image.src}
                      type="button"
                      className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      onClick={(event) => openEvidence(image, event.currentTarget)}
                    >
                      <span className="relative block aspect-video overflow-hidden border border-[var(--border-primary)] bg-[var(--surface-primary)] transition group-hover:border-[var(--border-hover)]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 768px) 30vw, 100vw"
                          className="object-cover"
                        />
                      </span>
                      <span className="mt-2 block text-xs leading-5 text-[var(--text-secondary)]">
                        {image.caption}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : selectedProject.comingSoon ? (
              <p className="mt-6 border-t border-[var(--border-primary)] pt-5 text-sm text-[var(--text-secondary)]">
                Detailed case study coming soon.
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      {selectedEvidence ? (
        <div
          ref={evidenceRef}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-3 py-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={evidenceTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedEvidence(null);
            }
          }}
        >
          <div className="gothic-modal w-full max-w-6xl p-4 sm:p-5">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="section-label text-xs font-semibold uppercase tracking-[0.22em]">
                  Project image
                </p>
                <h3
                  id={evidenceTitleId}
                  className="display-heading mt-2 text-xl font-semibold text-[var(--text-primary)]"
                >
                  {selectedEvidence.caption}
                </h3>
              </div>
              <button
                type="button"
                className="icon-control size-10 rounded-full"
                aria-label="Close evidence image"
                onClick={() => setSelectedEvidence(null)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <div className="relative aspect-video max-h-[78vh] w-full overflow-hidden border border-[var(--border-hover)] bg-black">
              <Image
                src={selectedEvidence.src}
                alt={selectedEvidence.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}

      {selectedGame?.playable ? (
        <div
          ref={gameRef}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/85 px-3 py-4 backdrop-blur-sm sm:items-center sm:px-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby={gameTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeGameModal();
            }
          }}
        >
          <div className="gothic-modal max-h-[94vh] w-full max-w-6xl overflow-y-auto p-4 shadow-2xl sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="section-label text-xs font-semibold uppercase tracking-[0.22em]">
                  Playable prototype
                </p>
                <h3
                  id={gameTitleId}
                  className="display-heading mt-2 text-2xl font-semibold text-[var(--text-primary)]"
                >
                  {selectedGame.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--text-secondary)]">
                  {selectedGame.playable.desktopNote}
                </p>
              </div>
              <button
                type="button"
                className="icon-control size-10 rounded-full"
                aria-label="Close Unity prototype"
                onClick={closeGameModal}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {!isGameRequested ? (
                <button
                  type="button"
                  className="btn-primary px-4 py-2"
                  disabled={isGameLoading}
                  onClick={() => loadGame(selectedGame)}
                >
                  <Gamepad2 size={16} aria-hidden="true" />
                  Load Game
                </button>
              ) : null}
              {isGameRequested ? (
                <button type="button" className="project-link" onClick={reloadGame}>
                  <RotateCcw size={16} aria-hidden="true" />
                  Reload game
                </button>
              ) : null}
              <a
                href={selectedGame.playable.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Open in new tab
              </a>
              {isGameRequested ? (
                <button type="button" className="project-link" onClick={requestFullscreen}>
                  <Maximize2 size={16} aria-hidden="true" />
                  Fullscreen
                </button>
              ) : null}
            </div>

            {gameError ? <p className="danger-panel mt-4 p-3 text-sm">{gameError}</p> : null}

            <div
              ref={gameFrameRef}
              className="mt-5 overflow-hidden border border-[var(--border-hover)] bg-black shadow-[inset_0_0_0_1px_rgba(237,245,239,0.035)]"
            >
              {isGameRequested ? (
                <div className="relative aspect-video w-full max-h-[72vh]">
                  {isGameLoading ? (
                    <div className="absolute inset-0 z-10 grid place-items-center bg-black text-sm text-[var(--text-secondary)]">
                      Loading Unity prototype...
                    </div>
                  ) : null}
                  <iframe
                    key={iframeKey}
                    title={`${selectedGame.title} playable Unity prototype`}
                    src={selectedGame.playable.url}
                    loading="lazy"
                    allow="fullscreen"
                    allowFullScreen
                    className="h-full w-full border-0"
                    onLoad={() => setIsGameLoading(false)}
                    onError={() => {
                      setIsGameLoading(false);
                      setGameError("The Unity build could not be loaded in the embedded player.");
                    }}
                  />
                </div>
              ) : (
                <div className="grid aspect-video w-full place-items-center px-5 text-center text-sm leading-6 text-[var(--text-secondary)]">
                  Select Load Game to start the Unity Web build.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
