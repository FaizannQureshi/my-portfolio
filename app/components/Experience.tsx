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
        subtitle="From applied computer vision and RAG to enterprise Oracle Cloud AI."
      />

      <div className="max-w-3xl mx-auto relative pl-2">
        <div
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent"
          aria-hidden
        />

        <ul className="space-y-12">
          {experiences.map((job, i) => (
            <li key={job.company} className="relative pl-12">
              <div
                className="absolute left-[11px] top-3 w-3 h-3 rounded-full bg-cyan-400 border-4 border-[#050508] shadow-[0_0_12px_rgba(34,211,238,0.45)]"
                aria-hidden
              />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 md:p-8 hover:border-cyan-500/20 transition-colors"
              >
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono mb-3">
                  <Briefcase className="w-4 h-4 shrink-0" />
                  {job.range}
                </div>
                <h3 className="text-xl font-bold text-white">{job.company}</h3>
                <p className="text-zinc-400 mt-1">{job.role}</p>
                <ul className="mt-5 space-y-3 text-sm text-zinc-300 leading-relaxed">
                  {job.highlights.map((h, hi) => (
                    <li key={hi} className="flex gap-2">
                      <span className="text-cyan-500/80 mt-1.5 shrink-0">●</span>
                      <span>
                        {"href" in h && h.href ? (
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
                <div className="mt-6 flex flex-wrap gap-2">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
