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
    "AI and Data Engineer building intelligent systems — from LLM fine-tuning and RAG pipelines to computer vision and enterprise data solutions.",
  aboutHeadline: "Engineering Generative AI for the Enterprise",
  aboutSub:
    "Production-focused ML systems that connect research to real business outcomes.",
  aboutBio: [
    "I am an AI and Data Engineer based in Pakistan, focused on end-to-end intelligent systems — from model training and retrieval pipelines to dashboards and cloud delivery.",
    "At GoSaaS I work on Oracle Cloud–native AI: LLM fine-tuning on enterprise schemas, computer vision for CAD workflows, AI agents, and large-scale reporting with OTBI and BIP.",
    "Previously at GSPEC I shipped applied CV and generative projects — from YOLO detection to Stable Diffusion fine-tuning and legal-domain RAG — always with an eye on measurable impact.",
  ],
} as const;

export const stats = [
  { value: "2025", label: "Oracle GenAI Certified" },
  { value: "900+", label: "Q&A pairs for LLM fine-tuning" },
  { value: "3.23", label: "BSCS CGPA (NUST)" },
  { value: "10+", label: "AI tools & frameworks" },
] as const;

export const projects = [
  {
    icon: "brain" as const,
    title: "PLM LLM fine-tuning",
    description:
      "Fine-tuned GPT OSS-20B with LoRA on Oracle Agile PLM schemas for schema understanding, relationship mapping, and prompt-to-SQL generation — ~900 curated Q&A pairs.",
    tags: ["Python", "LoRA", "Oracle Agile", "SQL", "OCI"],
  },
  {
    icon: "eye" as const,
    title: "CadVision",
    description:
      "AI system to detect and highlight differences between CAD revisions for automated design validation and faster engineering review.",
    tags: ["Computer Vision", "PyTorch", "CAD", "Automation"],
  },
  {
    icon: "bot" as const,
    title: "Oracle AI Agent Studio",
    description:
      "Enterprise AI agents with LLM integration, custom workflows, and secure connectivity to business data sources.",
    tags: ["LLMs", "Agents", "OCI", "Enterprise"],
  },
  {
    icon: "layout" as const,
    title: "OTBI & BIP reporting",
    description:
      "Dashboards and operational reports with complex SQL, optimized layouts, and reliable delivery for stakeholders.",
    tags: ["OTBI", "BIP", "SQL", "Analytics"],
  },
  {
    icon: "globe" as const,
    title: "BookYOLO",
    description:
      "AI listing scanner for Airbnb, Agoda, and Booking.com — feature extraction and risk flags to assess stay quality.",
    href: "https://bookyolo.com/",
    tags: ["Python", "Scraping", "ML", "Product"],
  },
  {
    icon: "network" as const,
    title: "Physics-informed regression",
    description:
      "PyTorch multi-output model for 5D CFD simulations with custom loss functions and careful hyperparameter tuning.",
    tags: ["PyTorch", "CFD", "Research", "Multi-output"],
  },
  {
    icon: "scan" as const,
    title: "YOLOv11 football detection",
    description:
      "Fine-tuned YOLOv11 for real-time player and ball detection with OpenCV and a custom dataset.",
    tags: ["YOLOv11", "OpenCV", "Ultralytics", "CV"],
  },
  {
    icon: "sparkles" as const,
    title: "DreamBooth product imagery",
    description:
      "Fine-tuned Stable Diffusion v1.5 for brand-specific product image generation and marketing assets.",
    tags: ["Stable Diffusion", "DreamBooth", "Generative AI"],
  },
  {
    icon: "messages" as const,
    title: "Law firm RAG pipeline",
    description:
      "Local RAG with ChromaDB, LlamaIndex, and Mistral-7B — embeddings, retrieval, and document tracking for legal workflows.",
    tags: ["RAG", "ChromaDB", "LlamaIndex", "Mistral"],
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
      { name: "JavaScript / React", pct: 86 },
      { name: "FastAPI & Node.js", pct: 84 },
      { name: "Java & C++", pct: 78 },
      { name: "React Native (Meta certified)", pct: 80 },
    ],
  },
  {
    title: "Data & Platforms",
    icon: "database" as const,
    skills: [
      { name: "SQL, OTBI & BIP", pct: 88 },
      { name: "MongoDB / MySQL / Firebase", pct: 82 },
      { name: "Supabase", pct: 78 },
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
