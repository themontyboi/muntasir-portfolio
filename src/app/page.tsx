import { About } from "@/components/sections/About";
import { CareerFocus } from "@/components/sections/CareerFocus";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ResumeModal } from "@/components/resume/ResumeModal";
import { siteConfig } from "@/data/portfolio";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "Victoria",
      addressCountry: "Australia",
    },
    email: siteConfig.email,
    sameAs: [siteConfig.linkedinUrl, siteConfig.githubUrl],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "RMIT University",
      },
    ],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Australasian Academy of Higher Education",
    },
    knowsAbout: [
      "Cybersecurity",
      "IT support",
      "Security operations",
      "Secure application development",
      "Unity game development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main id="main-content">
        <Hero />
        <About />
        <CareerFocus />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Experience />
        <Contact />
      </main>
      <ResumeModal />
    </>
  );
}
