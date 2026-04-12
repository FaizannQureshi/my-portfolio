/** Site copy and resume data — edit social URLs here */
export const site = {
  name: "Muhammad Faizan Qureshi",
  firstName: "Muhammad Faizan",
  lastName: "Qureshi",
  handle: "@mfaizanq",
  email: "muhammadfaizan9222@gmail.com",
  phone: "+92 335 790 3070",
  phoneTel: "+923357903070",
  github: "https://github.com/muhammadfaizan9222",
  linkedin: "https://www.linkedin.com/in/muhammad-faizan-qureshi",
  oracleGenAiCert:
    "https://education.oracle.com/oracle-cloud-infrastructure-2025-certified-generative-ai-professional/trackp_OCI2025GAIOCP",
  availability: "Open to new opportunities",
  tagline:
  "Building AI systems from LLMs and RAG pipelines to real-world applications.",
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

/** Highlighted work — larger cards in the Projects section */
export const featuredProjects = [
  {
    icon: "layers" as const,
    title: "FlowRMS",
    tagline:
      "Full-stack AI platform for revenue and ops — smart workflows, analytics, and automation for property teams.",
    tags: ["Next.js", "NestJS", "AI", "Product"],
  },
  {
    icon: "globe" as const,
    title: "BookYOLO",
    tagline:
      "Listing intelligence across Airbnb, Agoda & Booking — quality scores and risk flags at scale.",
    href: "https://bookyolo.com/",
    tags: ["Python", "ML", "Scraping", "Live"],
  },
  {
    icon: "brain" as const,
    title: "PLM LLM fine-tuning",
    tagline:
      "LoRA on GPT OSS-20B over Oracle Agile — ~900 Q&A pairs for schema-aware prompt-to-SQL.",
    tags: ["LoRA", "Oracle", "LLMs", "OCI"],
  },
] as const;

/** Additional work — compact cards */
export const projects = [
  {
    icon: "eye" as const,
    title: "CadVision",
    description:
      "Highlights CAD revision diffs with CV so engineers validate designs faster, with fewer manual compares.",
    tags: ["PyTorch", "CAD", "CV"],
  },
  {
    icon: "bot" as const,
    title: "Oracle AI Agent Studio",
    description:
      "Enterprise agents with LLM routing, custom workflows, and secure hooks into line-of-business data.",
    tags: ["Agents", "OCI", "Enterprise"],
  },
  {
    icon: "layout" as const,
    title: "OTBI & BIP reporting",
    description:
      "Operational dashboards and BIP reports — heavy SQL, clean layouts, reliable stakeholder delivery.",
    tags: ["OTBI", "BIP", "SQL"],
  },
  {
    icon: "network" as const,
    title: "Physics-informed regression",
    description:
      "PyTorch multi-output models for 5D CFD with custom losses — tuned for simulation accuracy.",
    tags: ["PyTorch", "CFD", "Research"],
  },
  {
    icon: "scan" as const,
    title: "YOLOv11 football detection",
    description:
      "Custom YOLOv11 + OpenCV pipeline for real-time player and ball tracking on match footage.",
    tags: ["YOLOv11", "OpenCV", "CV"],
  },
  {
    icon: "sparkles" as const,
    title: "DreamBooth product imagery",
    description:
      "Brand-tuned Stable Diffusion v1.5 for consistent product shots and campaign-ready assets.",
    tags: ["SD", "DreamBooth", "Gen AI"],
  },
  {
    icon: "messages" as const,
    title: "Law firm RAG pipeline",
    description:
      "Local RAG with ChromaDB, LlamaIndex & Mistral — tracked embeddings for confidential legal search.",
    tags: ["RAG", "LlamaIndex", "Mistral"],
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
        href: site.oracleGenAiCert,
      },
      {
        text: "LLM fine-tuning (PLM migration) — GPT OSS-20B + LoRA on Oracle Agile PLM schemas; schema understanding, relationship mapping, prompt-to-SQL (~900 Q&A pairs).",
      },
      {
        text: "CadVision — AI system to detect and highlight differences between CAD revisions for automated design validation.",
      },
      {
        text: "Oracle AI Agent Studio — agents with LLM integration, custom workflows, and enterprise data connectivity.",
      },
      {
        text: "OTBI & BIP — dashboards and reports with complex SQL and optimized layouts.",
      },
      {
        text: "Data migration — Oracle Agile / legacy to Oracle Cloud with mapping, transformation, and validation.",
      },
    ],
    tags: ["OCI", "LLMs", "PL/SQL", "OTBI", "Agents", "Python"],
  },
  {
    company: "GSPEC Technologies",
    role: "AI and Data Engineer",
    range: "Dec 2024 — Aug 2025",
    highlights: [
      {
        text: "BookYOLO — AI listing scanner for Airbnb / Agoda / Booking.com; features and risk flags for stay quality.",
        href: "https://bookyolo.com/",
      },
      {
        text: "Physics-informed regression — PyTorch multi-output model for 5D CFD simulations with custom losses.",
      },
      {
        text: "YOLOv11 football detection — real-time player/ball detection with OpenCV and custom data.",
      },
      {
        text: "DreamBooth — fine-tuned Stable Diffusion v1.5 for brand-specific product images.",
      },
      {
        text: "Law firm RAG — ChromaDB, LlamaIndex, Mistral-7B with embeddings and document tracking.",
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
