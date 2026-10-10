"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import type { ProjectEvidenceImage } from "@/types/portfolio";

type ProjectGalleryProps = {
  images: ProjectEvidenceImage[];
  projectTitle: string;
  heading?: string | null;
  tall?: boolean;
  onEnlarge?: (image: ProjectEvidenceImage, trigger: HTMLButtonElement) => void;
};

export function ProjectGallery({ images, projectTitle, heading = "Screenshot gallery", tall = false, onEnlarge }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [enlarged, setEnlarged] = useState<ProjectEvidenceImage | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!enlarged || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [enlarged]);

  if (!images.length) return null;
  const current = images[index];
  function move(direction: number) {
    setIndex((value) => (value + direction + images.length) % images.length);
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${projectTitle} screenshots`}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {heading ? <h4 className="display-heading text-lg font-semibold text-[var(--text-primary)]">{heading}</h4> : null}
        <div className="flex gap-2">
          <button type="button" className="icon-control size-10" aria-label={`Show previous ${projectTitle} screenshot`} title="Previous screenshot" onClick={() => move(-1)}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button type="button" className="icon-control size-10" aria-label={`Show next ${projectTitle} screenshot`} title="Next screenshot" onClick={() => move(1)}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <button
        type="button"
        className={`gallery-main-image relative mt-4 block w-full max-h-[58vh] overflow-hidden border border-[var(--border-primary)] bg-[var(--surface-primary)] ${tall ? "aspect-[4/3]" : "aspect-video"}`}
        aria-label={`Enlarge ${current.title ?? "project screenshot"}`}
        onClick={(event) => onEnlarge ? onEnlarge(current, event.currentTarget) : setEnlarged(current)}
      >
        <Image src={current.src} alt={current.alt} fill sizes="(min-width: 1024px) 64rem, 100vw" className="object-contain" />
      </button>
      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]" role="status" aria-live="polite" aria-atomic="true">
        <span className="font-medium text-[var(--text-primary)]">{index + 1} / {images.length}. </span>
        {current.caption}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {images.map((image, position) => (
          <button
            key={image.src}
            type="button"
            className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            aria-pressed={index === position}
            aria-label={`Show ${image.title ?? `screenshot ${position + 1}`}`}
            onClick={() => setIndex(position)}
          >
            <span className={`relative block aspect-video overflow-hidden border bg-[var(--surface-primary)] transition group-hover:border-[var(--border-hover)] ${index === position ? "border-[var(--border-hover)]" : "border-[var(--border-primary)]"}`}>
              <Image src={image.src} alt="" fill sizes="(min-width: 768px) 12rem, 45vw" className="object-contain" />
            </span>
            <span className="mt-2 block text-xs leading-5 text-[var(--text-secondary)]">{position + 1}. {image.title ?? image.caption}</span>
          </button>
        ))}
      </div>
      {!onEnlarge ? (
        <dialog
          ref={dialogRef}
          className="gothic-modal image-lightbox"
          aria-labelledby={titleId}
          onCancel={(event) => { event.preventDefault(); setEnlarged(null); }}
          onClick={(event) => { if (event.target === event.currentTarget) setEnlarged(null); }}
        >
          {enlarged ? (
            <>
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 id={titleId} className="display-heading text-xl font-semibold">{enlarged.title ?? "Project screenshot"}</h3>
                <button type="button" className="icon-control size-10" aria-label="Close screenshot" onClick={() => setEnlarged(null)}>
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <div className="relative aspect-[4/3] max-h-[72vh] w-full bg-black">
                <Image src={enlarged.src} alt={enlarged.alt} fill sizes="100vw" className="object-contain" />
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{enlarged.caption}</p>
            </>
          ) : null}
        </dialog>
      ) : null}
    </div>
  );
}
