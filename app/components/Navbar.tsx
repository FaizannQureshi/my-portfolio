// app/components/Navbar.tsx
"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full bg-black/30 backdrop-blur-lg border-b border-white/10 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-cyan-400 font-bold text-lg">Faizan.dev</h1>
        <div className="space-x-6 text-sm">
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#experience" className="hover:text-cyan-400">Experience</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}