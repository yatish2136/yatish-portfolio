import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

export default function App() {
  return (
    <main className="bg-[var(--background)] text-[var(--text)]">
      <Navbar />

      <Hero />

      <section id="about" className="min-h-screen" />
      <section id="experience" className="min-h-screen" />
      <section id="projects" className="min-h-screen" />
      <section id="skills" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  );
}