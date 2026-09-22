import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/sections/Hero";
import Showcase from "@/components/layout/sections/Showcase";
import About from "@/components/layout/sections/About";
import Projects from "@/components/layout/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <About />
        <Projects />

        <section id="contacto" className="min-h-screen scroll-mt-24 flex items-center justify-center">
          <p className="text-(--color-muted)">[Sección Contacto]</p>
        </section>
      </main>
      <Footer />
    </>
  );
}