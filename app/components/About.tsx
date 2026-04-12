"use client";

import { motion } from "framer-motion";
import { site, stats } from "../content/portfolio";
import SectionHeading from "./SectionHeading";

const lines = [
  "-- Oracle Agile PLM · prompt-to-SQL context",
  "SELECT av.item_number, av.description",
  "FROM agile_item av",
  "JOIN agile_rev ar ON av.id = ar.item",
  "WHERE av.subclass = :cls",
  "  AND ar.rev_number = (",
  "    SELECT MAX(rev_number) FROM agile_rev WHERE item = av.id",
  "  );",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6">
      <SectionHeading
        label="// ABOUT"
        title={site.aboutHeadline}
        subtitle={site.aboutSub}
      />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative [perspective:1200px]"
        >
          <div className="rounded-2xl border border-white/10 bg-zinc-900/80 shadow-2xl shadow-black/50 overflow-hidden rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5 bg-zinc-950/80">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[10px] text-zinc-500 font-mono truncate">
                plm_schema.sql — workspace
              </span>
            </div>
            <pre className="p-4 text-[11px] sm:text-xs leading-relaxed font-mono text-left overflow-x-auto text-zinc-300">
              {lines.map((line, i) => (
                <span key={i} className="block">
                  <span className="text-zinc-600 select-none mr-3 tabular-nums inline-block w-6">
                    {i + 1}
                  </span>
                  {i === 0 ? (
                    <span className="text-cyan-400/90">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </pre>
          </div>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-zinc-400 leading-relaxed"
        >
          {site.aboutBio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="grid grid-cols-2 gap-3 pt-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 hover:border-cyan-500/20 transition-colors"
              >
                <p className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                  {s.value}
                </p>
                <p className="text-xs text-zinc-500 mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
