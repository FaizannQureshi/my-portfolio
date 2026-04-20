/** Site copy and resume data — edit social URLs here */
export const site = {
  name: "Muhammad Faizan Qureshi",
  firstName: "M Faizan",
  lastName: "Qureshi",
  handle: "@mfaizanq",
  email: "muhammadfaizan9222@gmail.com",
  phone: "+92 335 790 3070",
  phoneTel: "+923357903070",
  github: "https://github.com/muhammadfaizan9222",
  linkedin: "https://www.linkedin.com/in/muhammad-faizan-qureshi-000b8b230/",
  oracleGenAiCert:
    "https://education.oracle.com/oracle-cloud-infrastructure-2025-certified-generative-ai-professional/trackp_OCI2025GAIOCP",
  availability: "Open to new opportunities",
  tagline:
  "Full Stack AI Engineer",
  aboutHeadline: "Engineering AI Systems That Deliver Real Impact",
  aboutSub:
    "Production-focused ML systems that connect research to real business outcomes.",
  aboutBio: [
    "I design and build production-grade AI systems, combining LLMs, retrieval pipelines, and scalable backend architectures to solve real-world problems.",
    "My experience spans generative AI, computer vision, and full-stack development, allowing me to build complete, end-to-end intelligent systems.",
    "From RAG pipelines to YOLO-based detection systems and diffusion model fine-tuning, I focus on building solutions that are not just functional but reliable and scalable.",
  ],
} as const;

export const stats = [
  { value: "900+", label: "LLM Fine-Tuning Q&A Pairs" },
  { value: "3+", label: "Years Building AI Systems" },
  { value: "5+", label: "Production AI Projects" },
  { value: "10+", label: "AI Tools & Frameworks Used" },
] as const;

export const featuredProjects = [
  {
    icon: "layers" as const,
    title: "FlowRMS",
    href: "https://flowrms.com/",
    tagline:
      "Full-stack AI platform for revenue and operations with smart workflows, analytics, and automation for property teams.",
    tags: ["Next.js", "NestJS", "AI", "Product"],
  },
  {
    icon: "globe" as const,
    title: "BookYOLO",
    tagline:
      "AI-powered listing intelligence across Airbnb, Agoda, and Booking with quality scoring and risk detection at scale.",
    href: "https://bookyolo.com/",
    tags: ["Python", "ML", "Scraping", "Live"],
  },
  {
    icon: "brain" as const,
    title: "PLM LLM Fine-Tuning",
    tagline:
      "Fine-tuned GPT OSS-20B using LoRA on Oracle Agile schemas for schema understanding and prompt-to-SQL generation using 900+ curated Q&A pairs.",
    tags: ["LoRA", "Oracle", "LLMs", "OCI"],
  },
  {
    icon: "file-text" as const,
    title: "Document Audit Review System",
    tagline:
      "AI-driven system for extracting, validating, and analyzing audit data from structured and unstructured documents.",
    tags: ["LLMs", "RAG", "Automation", "NLP"],
  },
] as const;


export const projects = [
  {
    icon: "eye" as const,
    title: "CadVision",
    description:
      "Computer vision system that highlights differences between CAD revisions to speed up design validation.",
    tags: ["PyTorch", "CAD", "CV"],
  },
  {
    icon: "messages" as const,
    title: "Law Firm RAG Pipeline",
    description:
      "Built a local RAG system using ChromaDB, LlamaIndex, and Mistral for secure legal document search.",
    tags: ["RAG", "LlamaIndex", "Mistral"],
  },
  {
    icon: "bot" as const,
    title: "Oracle AI Agent Studio",
    description:
      "Built enterprise AI agents with LLM integration, custom workflows, and secure connectivity to business data.",
    tags: ["Agents", "OCI", "Enterprise"],
  },
  {
    icon: "layout" as const,
    title: "OTBI & BIP Reporting",
    description:
      "Developed dashboards and reports using complex SQL with optimized layouts for reliable stakeholder insights.",
    tags: ["OTBI", "BIP", "SQL"],
  },
  {
    icon: "network" as const,
    title: "Physics-Informed Regression",
    description:
      "PyTorch-based multi-output model for 5D CFD simulations using custom loss functions and tuning for accuracy.",
    tags: ["PyTorch", "CFD", "Research"],
  },
  {
    icon: "scan" as const,
    title: "YOLOv11 Football Detection",
    description:
      "Real-time player and ball tracking system using YOLOv11, OpenCV, and a custom-trained dataset.",
    tags: ["YOLOv11", "OpenCV", "CV"],
  },
  {
    icon: "sparkles" as const,
    title: "DreamBooth Product Imagery",
    description:
      "Fine-tuned Stable Diffusion v1.5 for generating consistent, brand-specific product images.",
    tags: ["Stable Diffusion", "DreamBooth", "Gen AI"],
  },
  
] as const;

export const skillGroups = [
  {
    title: "AI / Machine Learning",
    icon: "brain" as const,
    skills: [
      { name: "PyTorch & deep learning", pct: 92 },
      { name: "LLMs, RAG & agents", pct: 90 },
      { name: "Computer vision & YOLO", pct: 88 },
      { name: "Scikit-learn & classical ML", pct: 85 },
      { name: "Hugging Face & tuning", pct: 87 },
    ],
  },
  {
    title: "Engineering & Web",
    icon: "code" as const,
    skills: [
      { name: "Python", pct: 95 },
      { name: "React / Next.js", pct: 87 },
      { name: "FastAPI · Node.js · NestJS", pct: 83 },
      { name: "Java & C++", pct: 78 },
      { name: "React Native (Meta certified)", pct: 94 },
    ],
  },
  {
    title: "Data & Platforms",
    icon: "database" as const,
    skills: [
      { name: "SQL, OTBI & BIP", pct: 88 },
      { name: "MongoDB / MySQL / Firebase", pct: 82 },
      { name: "Supabase", pct: 98 },
      { name: "Oracle Cloud & OCI AI", pct: 85 },
      { name: "Git, Colab & tooling", pct: 90 },
    ],
  },
] as const;

export const experiences = [
  {
    company: "GoSaaS, Inc.",
    role: "AI and Data Engineer (ASE)",
    range: "Sep 2025 — Present",
    highlights: [
      {
        text: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      },
      {
        text: "LLM fine-tuning (PLM migration) — GPT OSS-20B + LoRA on Oracle Agile PLM; schema-aware prompt-to-SQL (~900 Q&A pairs).",
      },
      {
        text: "CadVision — CV system to highlight CAD revision diffs for automated validation.",
      },
      {
        text: "Oracle AI Agent Studio — LLM agents with custom workflows and enterprise data connectivity.",
      },
    ],
    tags: ["OCI", "LLMs", "PL/SQL", "OTBI", "Agents", "Python"],
  },
  {
    company: "FlowRMS",
    role: "AI Automation Engineer",
    range: "2025",
    highlights: [
      {
        text: "Built workflow automations and AI-assisted tools to streamline ops and reduce manual effort.",
      },
      {
        text: "Integrated data sources and dashboards to improve visibility across teams and processes.",
      },
      {
        text: "Delivered reliable internal tools with clear UX and measurable time savings.",
      },
    ],
    tags: ["Automation", "AI", "Dashboards", "Full-stack"],
  },
  {
    company: "GSPEC Technologies",
    role: "AI and Data Engineer",
    range: "Dec 2024 — Aug 2025",
    highlights: [
      {
        text: "BookYOLO — AI listing scanner for Airbnb / Agoda / Booking.com; features and risk flags for stay quality.",
      },
      {
        text: "Physics-informed regression — PyTorch multi-output model for 5D CFD with custom losses.",
      },
      {
        text: "YOLOv11 football detection — real-time player/ball tracking with OpenCV and custom data.",
      },
    ],
    tags: ["PyTorch", "YOLO", "RAG", "OpenCV", "Generative AI"],
  },
  {
    company: "Pakistan Oxygen Limited (POL)",
    role: "Project Intern",
    range: "Jul 2024 — Aug 2024",
    highlights: [
      {
        text: "Improved data management workflows in the Deliver & CAM team.",
      },
      {
        text: "Developed dashboards for cylinder tracking.",
      },
    ],
    tags: ["Analytics", "Dashboards", "Operations"],
  },
] as const;

export const education = [
  {
    school: "National University of Sciences and Technology (NUST)",
    location: "Islamabad, Pakistan",
    degree: "Bachelor's in Computer Science",
    detail: "CGPA 3.23 · 2021 — 2025",
  },
  {
    school: "Beaconhouse Defence Campus",
    location: "Lahore, Pakistan",
    degree: "A-levels (1A* 3A)",
    detail: "2019 — 2021",
  },
  {
    school: "Beaconhouse",
    location: "Lahore, Pakistan",
    degree: "O-levels (6A* 4A)",
    detail: "2017 — 2019",
  },
] as const;
