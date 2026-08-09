"use client";

import { openResumeModal } from "@/lib/resume-modal";

type ResumeButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function ResumeButton({ className, children }: ResumeButtonProps) {
  return (
    <button type="button" className={className} onClick={openResumeModal}>
      {children}
    </button>
  );
}
