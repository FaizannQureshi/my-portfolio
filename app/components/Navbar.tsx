"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-black/40 backdrop-blur-xl"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-14 md:h-16">
        <a
          href="#"
          className="font-mono text-cyan-400 text-sm md:text-base font-medium tracking-tight hover:text-cyan-300 transition-colors"
        >
          mfaizanq
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-zinc-400">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden p-2 text-zinc-300 rounded-lg hover:bg-white/5"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="lg:hidden border-t border-white/[0.06] bg-black/80 backdrop-blur-xl">
          <ul className="px-4 py-4 flex flex-col gap-3 text-sm text-zinc-300">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 hover:text-cyan-400"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </motion.header>
  );
}
