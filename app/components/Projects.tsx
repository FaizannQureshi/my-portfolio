// app/components/Projects.tsx
"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "FindMyStay",
    desc: "Off-campus housing app with chatbot integration",
  },
  {
    title: "RAG Pipeline",
    desc: "Document-based AI assistant using ChromaDB",
  },
  {
    title: "YOLO Detection",
    desc: "Real-time football detection system",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/5 rounded-xl border border-white/10"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}