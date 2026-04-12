// app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      
      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Muhammad Faizan Qureshi
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-400"
      >
        AI Developer | LLM Engineer | Full Stack Builder
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 flex gap-4"
      >
        <a href="#projects" className="bg-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-400">
          View Work
        </a>
        <a href="/resume.pdf" className="border border-white/20 px-6 py-2 rounded-lg">
          Resume
        </a>
      </motion.div>

    </section>
  );
}