export type NavItem = {
  label: string;
  href?: `#${string}`;
  action?: "resume";
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: string;
  image: string | null;
  imageFallback: string;
  previewAlt?: string;
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  flagship?: boolean;
  comingSoon: boolean;
  evidenceLabel?: string;
  evidenceImages?: ProjectEvidenceImage[];
  detailsGallery?: ProjectEvidenceImage[];
  contributionNote?: string;
  ethicsNote?: string;
  limitationsNote?: string;
  features?: string[];
  cardTitleLabel?: string;
  cardCategoryLabel?: string;
  cardTechnologySummary?: string;
  cardStatusLabel?: string;
  implementationHighlights?: string[];
  engineeringFocus?: string;
  developmentNote?: string;
  detailsUrl?: string;
  playable?: {
    url: string;
    desktopNote: string;
  };
};

export type ProjectEvidenceImage = {
  src: string;
  title?: string;
  alt: string;
  caption: string;
};

export type Certificate = {
  title: string;
  provider: string;
  issueDate: string | null;
  courseLength?: string;
  instructors?: string[];
  credentialUrl: string | null;
  image: string | null;
  note?: string;
};

export type EducationItem = {
  label: string;
  institution: string;
  location: string;
  status: string;
  details: string;
};

export type ExperienceItem = {
  role: string;
  employer: string;
  location: string;
  dates?: string;
  type?: string;
  supportingLabel?: string;
  themes: string[];
};

export type CareerFocus = {
  title: string;
  description: string;
  icon: "headphones" | "shield" | "code";
};
