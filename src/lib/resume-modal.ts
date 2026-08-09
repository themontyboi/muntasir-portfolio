export const RESUME_MODAL_EVENT = "portfolio:open-resume-modal";

export function openResumeModal() {
  window.dispatchEvent(new CustomEvent(RESUME_MODAL_EVENT));
}
