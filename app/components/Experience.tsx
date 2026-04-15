"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../content/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 sm:px-6">
      <SectionHeading
        label="// EXPERIENCE"
        title="Where I've Worked"
        subtitle="Selected roles — focused bullets, alternating layout for quick scanning."
      />

      <div className="max-w-6xl mx-auto relative">
        {/* desktop center line */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/15 to-transparent"
          aria-hidden
        />

        {/* mobile left line */}
        <div
          className="md:hidden absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent"
          aria-hidden
        />

        <ul className="space-y-12 md:space-y-16">
          {experiences.map((job, i) => {
            const isLeft = i % 2 === 0;
            return (
              <li
                key={`${job.company}-${job.range}`}
                className="relative md:grid md:grid-cols-2 md:gap-12 items-start"
              >
                {/* timeline dot */}
                <div
                  className="md:hidden absolute left-[11px] top-8 w-3 h-3 rounded-full bg-cyan-400 border-4 border-[#050508] shadow-[0_0_12px_rgba(34,211,238,0.45)]"
                  aria-hidden
                />
                <div
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10 w-3 h-3 rounded-full bg-cyan-400 border-4 border-[#050508] shadow-[0_0_12px_rgba(34,211,238,0.45)]"
                  aria-hidden
                />

                {/* mobile: single column */}
                <div className="pl-12 md:hidden">
                  <ExperienceCard job={job} index={i} align="left" />
                </div>

                {/* desktop: alternating cards */}
                <div className="hidden md:block">
                  {isLeft ? (
                    <ExperienceCard job={job} index={i} align="right" />
                  ) : null}
                </div>
                <div className="hidden md:block">
                  {!isLeft ? (
                    <ExperienceCard job={job} index={i} align="left" />
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

type Highlight = { text: string; href?: string };
type ExperienceItem = {
  company: string;
  role: string;
  range: string;
  highlights: readonly Highlight[];
  tags: readonly string[];
};

function ExperienceCard({
  job,
  index,
  align,
}: {
  job: ExperienceItem;
  index: number;
  align: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`rounded-2xl border border-white/[0.08] bg-zinc-900/35 p-6 md:p-8 hover:border-cyan-500/20 transition-colors ${
        align === "right" ? "md:text-right" : "md:text-left"
      }`}
    >
      <div
        className={`flex items-center gap-2 text-cyan-400 text-sm font-mono mb-3 ${
          align === "right" ? "md:justify-end" : ""
        }`}
      >
        <Briefcase className="w-4 h-4 shrink-0" />
        {job.range}
      </div>
      <h3 className="text-xl font-bold text-white">{job.company}</h3>
      <p className="text-zinc-400 mt-1">{job.role}</p>
      <ul
        className={`mt-5 space-y-3 text-sm text-zinc-300 leading-relaxed ${
          align === "right" ? "md:ml-auto" : ""
        }`}
      >
        {job.highlights.map((h, hi) => (
          <li
            key={hi}
            className={`flex gap-2 ${align === "right" ? "md:flex-row-reverse" : ""}`}
          >
            <span className="text-cyan-500/80 mt-1.5 shrink-0">●</span>
            <span>
              {h.href ? (
                <a
                  href={h.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300/90 hover:underline underline-offset-2"
                >
                  {h.text}
                </a>
              ) : (
                h.text
              )}
            </span>
          </li>
        ))}
      </ul>
      <div
        className={`mt-6 flex flex-wrap gap-2 ${align === "right" ? "md:justify-end" : ""}`}
      >
        {job.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

