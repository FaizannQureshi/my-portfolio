"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Eye,
  Globe,
  LayoutDashboard,
  MessagesSquare,
  Network,
  ScanLine,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { projects } from "../content/portfolio";
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
} as const;

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6">
      <SectionHeading
        label="// PROJECTS"
        title="What I've Built"
        subtitle="AI-powered systems, from research-grade models to production integrations."
      />

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p, i) => {
          const Icon = iconMap[p.icon];
          return (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-cyan-500/25 hover:bg-white/[0.04] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="inline-flex p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Icon className="w-5 h-5" aria-hidden />
                </span>
                {"href" in p && p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-cyan-400 transition-colors p-1"
                    aria-label={`Open ${p.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : null}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white group-hover:text-cyan-100 transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
