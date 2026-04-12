// app/page.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="bg-[#0B0F19] text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
    </main>
  );
}