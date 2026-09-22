import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/sections/Hero";
import Showcase from "@/components/layout/sections/Showcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />

        <section id="sobre-mi" className="min-h-screen scroll-mt-24 flex items-center justify-center">
          <p className="text-(--color-muted)">[Sección Sobre mí]</p>
        </section>

        <section id="proyectos" className="min-h-screen scroll-mt-24 flex items-center justify-center">
          <p className="text-(--color-muted)">[Sección Proyectos]</p>
        </section>

        <section id="contacto" className="min-h-screen scroll-mt-24 flex items-center justify-center">
          <p className="text-(--color-muted)">[Sección Contacto]</p>
        </section>
      </main>
      <Footer />
    </>
  );
}