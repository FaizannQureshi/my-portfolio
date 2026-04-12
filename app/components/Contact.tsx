"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { site } from "../content/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6">
      <SectionHeading
        label="// CONTACT"
        title="Let's Build Something"
        subtitle="Have a project in mind? I'm always open to discussing new opportunities."
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 md:p-10 text-center"
      >
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 text-lg font-medium break-all"
        >
          <Mail className="w-5 h-5 shrink-0" />
          {site.email}
        </a>
        <a
          href={`tel:${site.phoneTel}`}
          className="mt-4 flex items-center justify-center gap-2 text-zinc-400 hover:text-zinc-300 text-sm"
        >
          <Phone className="w-4 h-4" />
          {site.phone}
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 hover:border-cyan-400/40 hover:bg-white/[0.04] transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-zinc-200 hover:border-cyan-400/40 hover:bg-white/[0.04] transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
