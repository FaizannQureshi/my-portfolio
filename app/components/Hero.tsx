"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "../content/portfolio";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          {site.availability}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          <span>{site.firstName}</span>{" "}
          <span className="text-gradient">{site.lastName}</span>
        </h1>

        <p className="mt-4 font-mono text-sm text-zinc-500">{site.handle}</p>

        <p className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-300 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white hover:border-cyan-400/40 hover:bg-white/[0.06] transition-colors backdrop-blur-sm"
          >
            Get in Touch
          </a>
          <div className="flex items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400/30 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400/30 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500 text-xs font-mono hover:text-cyan-400/80 transition-colors"
      >
        scroll
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
