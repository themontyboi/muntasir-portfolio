import type {
  CareerFocus,
  Certificate,
  EducationItem,
  ExperienceItem,
  NavItem,
  Project,
  SocialLink,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Muntasir Hasan",
  url: "https://muntasir-portfolio-eight.vercel.app",
  location: "Melbourne, Victoria, Australia",
  shortLocation: "Melbourne, Australia",
  email: "muntasirprof@gmail.com",
  githubUrl: "https://github.com/themontyboi",
  linkedinUrl: "https://www.linkedin.com/in/muntasir-hasan-026511315",
  professionalDirection: [
    "Entry-level IT Support",
    "Service Desk",
    "Junior Cybersecurity",
    "SOC Analyst Level 1",
    "Technical Support",
    "Junior Security Operations",
  ],
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Resume", action: "resume" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: siteConfig.linkedinUrl },
  { label: "GitHub", href: siteConfig.githubUrl },
  { label: "Email", href: `mailto:${siteConfig.email}` },
];

export const careerFocus: CareerFocus[] = [
  {
    title: "Applied AI & Software Engineering",
    icon: "code",
    description:
      "Local AI applications, backend/frontend integration, APIs, software reliability and system development.",
  },
  {
    title: "Cybersecurity & Security Operations",
    icon: "shield",
    description:
      "Security analysis, network investigation, digital forensics, vulnerability assessment and defensive security.",
  },
  {
    title: "IT Systems & Technical Support",
    icon: "headphones",
    description:
      "Troubleshooting, technical communication, Windows/Linux fundamentals and systematic problem solving.",
  },
];

export const skills = {
  Cybersecurity: [
    "Network security fundamentals",
    "Vulnerability assessment",
    "Ethical hacking methodology",
    "Digital forensics",
    "Incident response fundamentals",
    "Security governance",
    "Cloud security fundamentals",
    "Secure application development",
    "DevSecOps fundamentals",
    "Cryptography fundamentals",
  ],
  Tools: [
    "Nmap",
    "Wireshark",
    "Burp Suite",
    "OWASP ZAP",
    "Autopsy",
    "FTK Imager",
    "Linux",
    "Windows",
    "Visual Studio Code",
    "Git",
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
    "Next.js",
    "TypeScript",
    "Firebase",
    "Unity",
    "New Input System",
  ],
  "AI Systems & Application Engineering": [
    "Local LLM integration",
    "Ollama",
    "Qwen",
    "FastAPI",
    "REST APIs",
    "Document ingestion",
    "Embeddings and retrieval",
    "Speech-to-text integration",
    "Text-to-speech integration",
    "Application state management",
    "Asynchronous operation handling",
    "Testing and evaluation",
  ],
  "DevOps / Infrastructure Exposure": [
    "Kubernetes",
    "Docker concepts",
    "Prometheus",
    "Grafana",
    "CI/CD concepts",
    "Monitoring and alerting",
  ],
};

export const projects: Project[] = [
  {
    title: "Desk AI Tutor Lab Alpha",
    slug: "desk-ai-tutor",
    category: "Flagship · Local AI Engineering",
    description:
      "A local-first AI tutoring Alpha combining a Next.js interface, FastAPI backend, local language generation, speech recognition, speech synthesis, document retrieval and durable study sessions.",
    longDescription:
      "Desk AI Tutor Lab Alpha explores how local language models and deterministic application logic can work together in a reliable study environment. The system integrates Ollama/Qwen, faster-whisper, Kokoro, document preparation and bounded retrieval, while the application retains control over session ownership, conversation history, cancellation and source readiness. This is an experimental Windows PC-based Alpha, not a finished consumer product.",
    technologies: [
      "Next.js", "React", "TypeScript", "Python", "FastAPI", "Ollama", "Qwen3 4B",
      "faster-whisper", "Kokoro", "eSpeak NG", "Local embeddings", "Document retrieval",
    ],
    status: "Experimental Alpha — Working Local Prototype",
    detailsUrl: "/projects/desk-ai-tutor",
    image: null,
    imageFallback: "Desk AI Tutor screenshots",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    flagship: true,
    comingSoon: false,
    cardTechnologySummary: "Next.js · TypeScript · FastAPI · Ollama",
    features: [
      "Local-first AI tutor workflow",
      "Conversational study interaction",
      "Document-grounded study support",
      "Persistent study sessions",
      "Speech input and speech output",
      "Retrieval-based learning flow",
      "Ongoing engineering and architecture refinement",
    ],
    implementationHighlights: [
      "Next.js interface and FastAPI orchestration with locally running Ollama/Qwen models",
      "Local faster-whisper recognition and Kokoro speech synthesis",
      "Material preparation for PDF, PowerPoint, EPUB, DOCX, TXT and Markdown",
      "Deterministic session ownership and immutable conversation history",
      "Cancellation, barge-in and sequential audio playback",
      "Bounded retrieval with explicit source-readiness warnings",
    ],
    engineeringFocus:
      "My main focus in this project is the practical engineering around local AI systems: coordinating UI, backend logic, study state, retrieval, speech interaction and structured user flow in a way that feels useful and reliable. Application code owns session state, source readiness and cancellation; the model generates explanations.",
    developmentNote:
      "This project is currently in active experimental development. My ongoing work includes improving study flows, refining the tutoring logic, strengthening the user experience and continuing to evolve the system architecture.",
    limitationsNote:
      "A working Alpha for controlled personal testing. Local speech latency, recognition accuracy, physical-audio reliability and response consistency remain areas for improvement. It does not claim validated learner mastery or production readiness.",
  },
  {
    title: "Live Sticky Wall - Real-Time Audience Feedback",
    slug: "live-sticky-wall",
    category: "Real-Time Collaborative Web Application",
    description:
      "A real-time audience feedback web app where participants scan a QR code, submit typed or hand-drawn notes from their phones and see them appear live on a shared digital wall.",
    longDescription:
      "Live Sticky Wall is an interactive feedback application designed for classrooms, workshops, events and collaborative sessions. A facilitator displays a session wall containing a QR code. Participants scan the code from their phones, choose a feedback category and submit either typed or hand-drawn notes. Notes are synchronised through Firebase and displayed on the shared wall. An administration dashboard provides session statistics, filtering and note-management controls.",
    technologies: [
      "React", "Vite", "Firebase Firestore", "Tailwind CSS", "Framer Motion",
      "React Router", "QR code integration",
    ],
    status: "Working prototype / Active development",
    image: "/projects/live-sticky-wall/wall.jpg",
    imageFallback: "Audience feedback app preview",
    githubUrl: "https://github.com/themontyboi/live-sticky-wall",
    liveUrl: null,
    featured: true,
    comingSoon: false,
    cardTitleLabel: "Live Sticky Wall",
    cardCategoryLabel: "Real-Time Web Application",
    cardTechnologySummary: "React • Firebase • Tailwind CSS",
    cardStatusLabel: "Working Prototype",
    features: [
      "QR-based session access",
      "Typed and hand-drawn notes",
      "Firebase real-time updates",
      "Admin dashboard with filtering, statistics and note management",
      "Categorised feedback",
      "Mobile-first interaction",
      "Animated note presentation",
    ],
    detailsGallery: [
      {
        src: "/projects/live-sticky-wall/wall.jpg",
        title: "Shared Live Wall",
        alt: "Shared Live Wall showing categorised participant feedback and QR session access",
        caption:
          "Real-time wall displaying categorised participant feedback with QR-based session access.",
      },
      {
        src: "/projects/live-sticky-wall/drawing-good.jpg",
        title: "Mobile Drawing Interface",
        alt: "Mobile Drawing Interface for submitting hand-drawn feedback",
        caption: "Participants can submit hand-drawn feedback directly from a mobile device.",
      },
      {
        src: "/projects/live-sticky-wall/admin-dashboard.jpg",
        title: "Administration Dashboard",
        alt: "Administration Dashboard with session statistics and note management controls",
        caption:
          "Session overview with category statistics, filtering and note-management controls.",
      },
      {
        src: "/projects/live-sticky-wall/drawing-idea.jpg",
        title: "Feedback Categories",
        alt: "Feedback Categories screen for Good, Improve, Idea and Question notes",
        caption:
          "Participants choose between Good, Improve, Idea and Question before creating a note.",
      },
    ],
  },
  {
    title: "Abyss Bond - Unity Third-Person Gameplay Prototype",
    slug: "unity-game-development",
    category: "Personal Game Development Project",
    description:
      "A playable third-person Unity prototype exploring movement, camera systems, combat interaction, companion behaviour and browser deployment.",
    longDescription:
      "Abyss Bond is a playable personal Unity prototype focused on third-person controls, camera systems, combat interaction experiments, companion behaviour and browser-based deployment through Unity Web.",
    technologies: ["Unity 6", "C#", "URP", "New Input System", "Web"],
    status: "Playable Prototype",
    image: "/projects/abyss-bond/abyss-bond-gameplay.gif",
    imageFallback: "Gameplay preview coming soon",
    previewAlt: "Abyss Bond Unity gameplay prototype",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    comingSoon: false,
    cardTitleLabel: "Abyss Bond",
    cardCategoryLabel: "Unity Gameplay Prototype",
    cardStatusLabel: "Playable Prototype",
    playable: {
      url: "/unity/abyss-bond/index.html",
      desktopNote:
        "This prototype is intended for desktop keyboard and mouse. On narrow mobile screens, open it on a desktop device for a usable experience.",
    },
    implementationHighlights: [
      "Unity New Input System", "Third-person controls", "Camera systems",
      "Combat prototype", "Companion behaviour", "Web build",
    ],
  },
  {
    title: "Web Application Vulnerability Assessment Lab",
    slug: "ethical-hacking-security-lab",
    category: "Group Academic Cybersecurity Project",
    description:
      "An academic Red/Blue Team project conducted inside an authorised isolated lab environment. The project involved Nmap service enumeration, controlled SQL injection validation in DVWA, defensive hardening and before/after verification.",
    longDescription:
      "This group academic cybersecurity project tested a deliberately vulnerable web application inside an authorised virtual lab. The team performed reconnaissance, validated SQL injection safely in DVWA, applied a higher security configuration and retested the same input to document reduced exposure.",
    technologies: [
      "Kali Linux",
      "Nmap",
      "DVWA",
      "Metasploitable",
      "VirtualBox",
      "SQL Injection",
      "Blue Team Retesting",
    ],
    status: "Completed academic project",
    image: "/projects/ethical-hacking-security-lab.jpg",
    imageFallback: "Security lab preview",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    comingSoon: true,
    evidenceLabel: "View Evidence",
    evidenceImages: [
      {
        src: "/projects/evidence/ethical/01-nmap-service-enumeration.png",
        alt: "Nmap service enumeration evidence from the vulnerability assessment lab",
        caption: "Nmap service enumeration in the isolated lab environment.",
      },
      {
        src: "/projects/evidence/ethical/02-dvwa-sql-injection-validation.png",
        alt: "DVWA SQL injection validation evidence from the vulnerability assessment lab",
        caption: "Controlled DVWA SQL injection validation.",
      },
      {
        src: "/projects/evidence/ethical/03-dvwa-high-security-retest.png",
        alt: "DVWA high security retest evidence from the vulnerability assessment lab",
        caption: "High-security configuration retest of the same input.",
      },
    ],
    implementationHighlights: [
      "Performed reconnaissance and service enumeration.",
      "Validated SQL injection safely in DVWA.",
      "Compared vulnerable and hardened configurations.",
      "Documented risks and mitigation recommendations.",
      "Testing remained within authorised lab systems.",
    ],
    contributionNote:
      "My documented contribution included explaining the methodology and tools and presenting the final project conclusion.",
    ethicsNote:
      "All testing was completed in an authorised, isolated virtual lab. No public or real systems were targeted.",
  },
  {
    title: "Computer Forensics Investigation",
    slug: "computer-forensics-investigation",
    category: "Group Academic Digital Forensics Project",
    description:
      "Analysed a supplied Dell Latitude forensic disk image using Autopsy, validated evidence integrity, reviewed system and user artefacts and helped reconstruct relevant activity through timeline analysis.",
    longDescription:
      "This group academic digital forensics project examined a supplied disk image using Autopsy. The investigation preserved and validated the evidence image, examined user and software artefacts, correlated tool execution and browser activity, and reconstructed a timeline of relevant events.",
    technologies: [
      "Autopsy",
      "E01 Disk Image",
      "MD5 Verification",
      "Timeline Analysis",
      "Windows Artefacts",
      "Digital Forensics",
    ],
    status: "Completed academic project",
    image: "/projects/computer-forensics-investigation.jpg",
    imageFallback: "Forensics workflow preview",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    comingSoon: true,
    evidenceLabel: "View Evidence",
    evidenceImages: [
      {
        src: "/projects/evidence/forensics/01-autopsy-image-integrity-and-hash.png",
        alt: "Autopsy image integrity and hash verification evidence",
        caption: "Evidence image integrity and hash verification.",
      },
      {
        src: "/projects/evidence/forensics/02-autopsy-installed-tools-analysis.png",
        alt: "Autopsy installed tools analysis evidence",
        caption: "Installed tools and software artefact analysis.",
      },
      {
        src: "/projects/evidence/forensics/03-autopsy-timeline-reconstruction.png",
        alt: "Autopsy timeline reconstruction evidence",
        caption: "Timeline reconstruction of relevant events.",
      },
    ],
    contributionNote:
      "My documented contribution included forensic acquisition and validation, evidence handling and hash-integrity explanation.",
    limitationsNote:
      "The investigation was limited to the supplied disk image and did not include live memory or active network traffic.",
  },
  {
    title: "StreamFast DevSecOps Monitoring Lab",
    slug: "streamfast-devsecops-monitoring-lab",
    category: "Individual Academic DevSecOps Project",
    description:
      "Deployed a fictional video-streaming frontend on Kubernetes, configured health checks and autoscaling, and monitored CPU, memory, networking, targets and alerts with Prometheus and Grafana.",
    longDescription:
      "This individual academic DevSecOps lab deployed and monitored a fictional video-streaming frontend on Kubernetes. The work combined ConfigMap, Deployment, Service and HorizontalPodAutoscaler manifests with readiness probes, liveness probes and kube-prometheus-stack monitoring through Helm.",
    technologies: [
      "Kubernetes",
      "Docker Desktop",
      "kind",
      "Helm",
      "Prometheus",
      "Grafana",
      "YAML",
      "Autoscaling",
    ],
    status: "Completed academic project",
    image: "/projects/streamfast-devsecops-monitoring.jpg",
    imageFallback: "DevSecOps monitoring preview",
    githubUrl: null,
    liveUrl: null,
    featured: true,
    comingSoon: true,
    evidenceLabel: "View Evidence",
    evidenceImages: [
      {
        src: "/projects/evidence/devsecops/01-kubernetes-streamfast-deployment.png",
        alt: "Kubernetes StreamFast deployment evidence",
        caption: "StreamFast Kubernetes deployment and replica configuration.",
      },
      {
        src: "/projects/evidence/devsecops/02-grafana-cpu-memory-dashboard.png",
        alt: "Grafana CPU and memory dashboard evidence",
        caption: "Grafana dashboard for CPU and memory monitoring.",
      },
      {
        src: "/projects/evidence/devsecops/03-prometheus-target-health.png",
        alt: "Prometheus target health evidence",
        caption: "Prometheus target health and monitoring status.",
      },
    ],
    implementationHighlights: [
      "ConfigMap, Deployment, Service and HorizontalPodAutoscaler manifests",
      "Three starting replicas",
      "Minimum 3 and maximum 8 replicas",
      "80% CPU autoscaling target",
      "Readiness and liveness probes",
      "kube-prometheus-stack monitoring through Helm",
    ],
  },
];

export const education: EducationItem[] = [
  {
    label: "Current",
    institution: "Australasian Academy of Higher Education",
    location: "Melbourne, Victoria",
    status: "Bachelor of Cybersecurity - In progress",
    details:
      "Relevant study includes ethical hacking, computer forensics, network security, secure applications and DevSecOps, cloud systems security, cryptology, machine learning for cybersecurity, policy, law, secure database design, cybersecurity management, resilience and embedded systems security.",
  },
  {
    label: "Previous study",
    institution: "RMIT University",
    location: "Melbourne, Victoria",
    status: "Prior study toward Bachelor of Software Engineering",
    details:
      "Completed prior tertiary study in software engineering before transferring into the Bachelor of Cybersecurity.",
  },
];

export const coursework = [
  "Ethical Hacking",
  "Computer Forensics",
  "Network Security",
  "Secure Applications and DevSecOps",
  "Cloud Systems Security",
  "Cryptology",
  "Machine Learning for Cybersecurity",
  "Cybersecurity Policy and Law",
  "Secure Database Design",
  "Cybersecurity Management",
  "Cybersecurity Resilience",
  "Embedded Systems and IoT Security",
];

export const academicHighlights = [
  "Ethical Hacking - High Distinction",
  "Cybersecurity Policy and Law - High Distinction",
  "Cybersecurity Management - High Distinction",
  "Secure Database Design - Distinction",
  "Secure Applications and DevSecOps - Distinction",
  "Computer Forensics - Distinction",
];

export const resumeProjects = [
  {
    title: "Desk AI Tutor Lab Alpha",
    subtitle: "Local-first multimodal tutoring Alpha",
    description:
      "Built an experimental Next.js and FastAPI tutor integrating local Ollama models, speech recognition and synthesis, document retrieval and durable study sessions. Designed application-owned state, immutable history and cancellation-safe audio controls.",
    tech: "Next.js • TypeScript • Python • FastAPI • Ollama • Local retrieval",
    status: "Experimental Alpha / Active development",
    bullets: [
      "Integrated local language generation, speech input/output and bounded document retrieval with Next.js and FastAPI.",
      "Implemented durable study sessions, immutable history and cancellation-safe operation controls.",
      "Documented local validation and remaining speech reliability and latency limitations.",
    ],
  },
  {
    title: "Live Sticky Wall",
    subtitle: "Real-time collaborative web application",
    description:
      "Built a QR-based audience feedback platform where participants can submit typed or hand-drawn notes from mobile devices and see them appear on a shared live wall. Includes Firebase synchronisation, feedback categories, animations and an administrative dashboard.",
    tech: "React • Firebase • Tailwind CSS • Framer Motion",
    href: "https://github.com/themontyboi/live-sticky-wall",
    hrefLabel: "GitHub",
  },
  {
    title: "Abyss Bond",
    subtitle: "Unity third-person gameplay prototype",
    description:
      "Developed a playable Unity prototype exploring third-person movement, camera behaviour, combat interactions, companion behaviour and browser deployment.",
    tech: "Unity 6 • C# • URP • New Input System • Web",
    status: "Playable browser prototype",
  },
  {
    title: "Web Application Vulnerability Assessment Lab",
    subtitle: "Group academic Red/Blue Team project",
    description:
      "Performed authorised testing in an isolated Kali Linux / Metasploitable / DVWA environment. The project included service enumeration using Nmap, controlled SQL injection validation, defensive configuration changes and verification testing.",
    tech: "Kali Linux • Nmap • DVWA • SQL Injection testing",
  },
  {
    title: "Computer Forensics Investigation",
    subtitle: "Group academic investigation project",
    description:
      "Analysed a supplied forensic disk image using Autopsy, performed evidence integrity validation, reviewed system and user artefacts and helped reconstruct relevant activity.",
    tech: "Autopsy • FTK Imager • Digital evidence analysis",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Python Programming Course",
    provider: "Udemy",
    issueDate: null,
    credentialUrl: null,
    image: null,
    note: "Professional development course.",
  },
  {
    title: "Complete C# Unity Game Developer 3D",
    provider: "Udemy",
    issueDate: "October 2021",
    courseLength: "30.5 hours",
    instructors: ["Ben Tristem", "Rick Davidson", "GameDev.tv Team"],
    credentialUrl: null,
    image: "/certificates/complete-csharp-unity-game-developer-3d.jpg",
    note: "Professional development course certificate.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Site Services Assistant",
    employer: "Serco",
    location: "Melbourne, Victoria",
    supportingLabel: "Cleaning and Facilities Support",
    themes: [
      "Maintained assigned facilities according to scheduled site standards.",
      "Followed workplace safety, security and site-access procedures.",
      "Worked independently and completed tasks within fixed daily timeframes.",
      "Reported site issues or maintenance concerns to relevant personnel.",
      "Demonstrated reliability, consistency and attention to detail.",
    ],
  },
  {
    role: "Computer Teacher — Vacation Program",
    employer: "Kalindi Hospital",
    location: "New Delhi, India",
    dates: "Six-month contract",
    themes: [
      "Assisted learners with basic computer operation and software use.",
      "Explained technical concepts in accessible language.",
      "Supported troubleshooting of common computer issues.",
      "Helped users build confidence with technology.",
    ],
  },
];
