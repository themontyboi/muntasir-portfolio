"use client";

import { GitBranch, Link2, Mail, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { certificates, experience, siteConfig } from "@/data/portfolio";
import { RESUME_MODAL_EVENT } from "@/lib/resume-modal";

const coursework = [
  "Ethical Hacking",
  "Computer Forensics",
  "Network Security",
  "Secure Applications and DevSecOps",
  "Cloud Systems Security",
  "Cryptology",
  "Cybersecurity Policy and Law",
  "Cybersecurity Management",
];

const academicHighlights = [
  "Ethical Hacking - High Distinction",
  "Cybersecurity Policy and Law - High Distinction",
  "Cybersecurity Management - High Distinction",
  "Secure Database Design - Distinction",
  "Secure Applications and DevSecOps - Distinction",
  "Computer Forensics - Distinction",
];

const skillGroups = {
  Cybersecurity: [
    "Nmap",
    "Wireshark",
    "Burp Suite",
    "OWASP ZAP",
    "Autopsy",
    "FTK Imager",
    "Network security",
    "Digital forensics",
    "Ethical hacking",
    "Cloud security",
    "DevSecOps",
  ],
  Development: [
    "Python",
    "C#",
    "SQL",
    "Java fundamentals",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Firebase",
    "Unity",
  ],
  Infrastructure: ["Linux", "Windows", "Kubernetes", "Prometheus", "Grafana", "Git", "Visual Studio Code"],
};

const projects = [
  {
    title: "Live Sticky Wall",
    label: "Real-time collaborative web application.",
    description:
      "Built a QR-based audience feedback platform supporting typed and hand-drawn notes, Firebase real-time synchronisation, category-based feedback and an administrative dashboard.",
    tech: "React • Firebase • Tailwind CSS • Framer Motion",
  },
  {
    title: "Abyss Bond",
    label: "Unity gameplay prototype.",
    description:
      "Developed a playable third-person prototype exploring player movement, camera systems, combat interactions, companion behaviour and Web deployment.",
    tech: "Unity 6 • C# • URP • New Input System",
  },
  {
    title: "Web Application Vulnerability Assessment Lab",
    label: "Academic Red/Blue Team project.",
    description:
      "Performed authorised testing in an isolated Kali / Metasploitable / DVWA environment, including service enumeration, controlled SQL injection validation, hardening and retesting.",
    tech: "Kali Linux • Nmap • DVWA",
  },
  {
    title: "Digital Forensics Investigation",
    label: "Academic investigation project.",
    description:
      "Analysed a supplied forensic disk image using Autopsy, validated evidence integrity and examined system/user artefacts.",
    tech: "Autopsy • FTK Imager",
  },
];

const unityCertificate = certificates.find(
  (certificate) => certificate.title === "Complete C# Unity Game Developer 3D",
);

export function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function openModal() {
      triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setIsOpen(true);
    }

    window.addEventListener(RESUME_MODAL_EVENT, openModal);
    return () => window.removeEventListener(RESUME_MODAL_EVENT, openModal);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    function closeModal() {
      setIsOpen(false);
      window.setTimeout(() => triggerRef.current?.focus(), 0);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="resume-modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div
        ref={modalRef}
        className="resume-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="resume-modal-header">
          <div>
            <p className="resume-kicker">Resume</p>
            <h2 id={titleId} className="display-heading">
              {siteConfig.name}
            </h2>
            <p>Cybersecurity Student | IT Support | Security Operations</p>
            <p>{siteConfig.location}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="icon-control size-10 rounded-full"
            aria-label="Close resume"
            onClick={closeModal}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="resume-modal-contact" aria-label="Resume contact links">
          <a href={`mailto:${siteConfig.email}`}>
            <Mail size={15} aria-hidden="true" />
            {siteConfig.email}
          </a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Link2 size={15} aria-hidden="true" />
            LinkedIn
          </a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">
            <GitBranch size={15} aria-hidden="true" />
            GitHub
          </a>
        </div>

        <div className="resume-modal-body">
          <section className="resume-modal-section">
            <h3>Profile</h3>
            <p>
              I am a Bachelor of Cybersecurity student in Melbourne with practical academic and
              personal project experience across ethical hacking, digital forensics, secure
              application development, networking, cloud security and software development. My
              personal projects include real-time web applications and Unity gameplay prototypes. I
              am seeking entry-level IT support, service desk, cybersecurity and security operations
              opportunities.
            </p>
          </section>

          <section className="resume-modal-section">
            <h3>Education</h3>
            <article className="resume-modal-entry">
              <h4>Bachelor of Cybersecurity</h4>
              <p>Australasian Academy of Higher Education</p>
              <p>Melbourne, Victoria</p>
              <p>In progress</p>
            </article>
            <div className="resume-modal-columns">
              <div>
                <h4>Selected coursework</h4>
                <ul>{coursework.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4>Academic highlights</h4>
                <ul>{academicHighlights.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
            <article className="resume-modal-entry">
              <h4>Previous Study</h4>
              <p>Prior study toward Bachelor of Software Engineering</p>
              <p>RMIT University</p>
              <p>Melbourne, Victoria</p>
            </article>
          </section>

          <section className="resume-modal-section">
            <h3>Technical Skills</h3>
            <div className="resume-modal-skill-grid">
              {Object.entries(skillGroups).map(([group, items]) => (
                <div key={group}>
                  <h4>{group}</h4>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-modal-section">
            <h3>Projects</h3>
            <div className="resume-modal-projects">
              {projects.map((project) => (
                <article key={project.title}>
                  <h4>{project.title}</h4>
                  <p className="resume-tech">{project.label}</p>
                  <p>{project.description}</p>
                  <p className="resume-tech">{project.tech}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-modal-section">
            <h3>Experience</h3>
            <div className="resume-modal-columns">
              {experience.map((item) => (
                <article key={item.role} className="resume-modal-entry">
                  <h4>{item.employer}</h4>
                  <p>{item.role}</p>
                  {item.supportingLabel ? <p>{item.supportingLabel}</p> : null}
                  {item.type ? <p>{item.type}</p> : null}
                  <p>{item.location}</p>
                  {item.dates ? <p>{item.dates}</p> : null}
                  <ul>{item.themes.map((theme) => <li key={theme}>{theme}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          {unityCertificate ? (
            <section className="resume-modal-section">
              <h3>Professional Development</h3>
              <article className="resume-modal-entry">
                <h4>{unityCertificate.title}</h4>
                <p>{unityCertificate.provider}</p>
                <p>{unityCertificate.issueDate}</p>
                <p>{unityCertificate.courseLength}</p>
                {unityCertificate.instructors?.map((instructor) => (
                  <p key={instructor}>{instructor}</p>
                ))}
              </article>
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}
