"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Eye,
  FileText,
  Globe,
  LayoutDashboard,
  Layers,
  MessagesSquare,
  Network,
  ScanLine,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { featuredProjects, projects } from "../content/portfolio";
import SectionHeading from "./SectionHeading";

const iconMap = {
  brain: Brain,
  eye: Eye,
  bot: Bot,
  layout: LayoutDashboard,
  globe: Globe,
  network: Network,
  scan: ScanLine,
  sparkles: Sparkles,
  messages: MessagesSquare,
  layers: Layers,
  "file-text": FileText,
} as const;

type IconKey = keyof typeof iconMap;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 28 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6">
      <SectionHeading
        label="// PROJECTS"
        title="What I've Built"
        subtitle="Flagship work first — then a broader set of shipped systems and experiments."
      />

      <div className="max-w-6xl mx-auto">
        {/* Featured */}
        <div className="mb-4 md:mb-6">
          <p className="font-mono text-xs text-cyan-400/90 tracking-widest uppercase">
            Featured
          </p>
          <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white tracking-tight">
            Featured projects
          </h3>
          <p className="mt-2 text-sm text-zinc-500 max-w-2xl leading-relaxed">
            Larger-impact work — production deploys, proprietary models, and
            products live in the wild.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {featuredProjects.map((p) => {
            const Icon = iconMap[p.icon as IconKey] ?? Brain;
            return (
              <motion.article
                key={p.title}
                variants={item}
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 26 }}
                className="group relative flex flex-col"
              >
                <div
                  className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/25 via-transparent to-violet-500/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  aria-hidden
                />
                <div
                  className="relative flex h-full flex-col rounded-2xl border border-white/[0.07] bg-[#070709]/95 p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md transition-[border-color,box-shadow] duration-300 group-hover:border-cyan-500/25 group-hover:shadow-[0_8px_50px_-16px_rgba(34,211,238,0.18)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex rounded-xl border border-cyan-500/15 bg-cyan-500/[0.07] p-3 text-cyan-400 shadow-inner shadow-cyan-500/5">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </span>
                    {"href" in p && p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-cyan-400"
                        aria-label={`Open ${p.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>

                  <h4 className="mt-6 text-xl md:text-2xl font-bold tracking-tight text-white">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-2">
                    {p.tagline}
                  </p>

                  <div className="mt-auto pt-8 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/[0.06] bg-black/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* More projects */}
        <div className="mt-20 md:mt-28 pt-12 border-t border-white/[0.06]">
          <div className="mb-8 md:mb-10">
            <p className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
              More work
            </p>
            <h3 className="mt-2 text-lg md:text-xl font-semibold text-zinc-200 tracking-tight">
              Additional projects
            </h3>
            <p className="mt-2 text-sm text-zinc-500 max-w-2xl">
              Shorter summaries — same rigor, scoped for a quick scan.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {projects.map((p) => {
              const Icon = iconMap[p.icon as IconKey] ?? Brain;
              return (
                <motion.article
                  key={p.title}
                  variants={item}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[#060608] p-7 md:p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-white/[0.12] hover:shadow-[0_12px_40px_-20px_rgba(34,211,238,0.12)]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex rounded-lg border border-white/[0.06] bg-white/[0.03] p-2 text-cyan-400/90">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                  </div>

                  <h4 className="mt-5 text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-zinc-50 transition-colors">
                    {p.title}
                  </h4>
                  <p className="mt-3 text-sm leading-[1.65] text-zinc-400 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/[0.05] bg-zinc-950/80 px-2 py-0.5 text-[10px] text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
