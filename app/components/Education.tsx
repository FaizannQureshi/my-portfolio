"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../content/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-4 sm:px-6">
      <SectionHeading
        label="// EDUCATION"
        title="Academic Background"
        subtitle="Foundations in computer science from NUST and secondary qualifications."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {education.map((ed, i) => (
          <motion.div
            key={ed.school + ed.degree}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-cyan-500/20 transition-colors"
          >
            <div className="shrink-0 p-3 h-fit rounded-xl bg-cyan-500/10 text-cyan-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">{ed.school}</h3>
              <p className="text-zinc-500 text-sm mt-0.5">{ed.location}</p>
              <p className="text-zinc-300 mt-2">{ed.degree}</p>
              <p className="text-zinc-500 text-sm mt-1">{ed.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
