"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Database } from "lucide-react";
import { skillGroups } from "../content/portfolio";
import SectionHeading from "./SectionHeading";

const groupIcons = {
  "AI / Machine Learning": Brain,
  "Engineering & Web": Code2,
  "Data & Platforms": Database,
} as const;

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 sm:px-6">
      <SectionHeading
        label="// SKILLS"
        title="Tech Stack"
        subtitle="The tools and technologies I use to ship end-to-end AI and data products."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:items-stretch">
        {skillGroups.map((group, gi) => {
          const Icon =
            groupIcons[group.title as keyof typeof groupIcons] ?? Brain;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="h-full flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7"
            >
              <div className="flex items-center gap-3 mb-6 shrink-0">
                <span className="inline-flex p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-white text-lg">{group.title}</h3>
              </div>
              <ul className="space-y-4 flex-1">
                {group.skills.map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-zinc-300">{s.name}</span>
                      <span className="text-zinc-500 tabular-nums">{s.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
