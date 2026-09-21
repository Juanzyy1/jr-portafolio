import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio" className="min-h-screen flex items-center justify-center">
          <p className="text-(--color-muted)">[Sección Hero — la construimos siguiente]</p>
        </section>

        <section id="sobre-mi" className="min-h-screen flex items-center justify-center">
          <p className="text-(--color-muted)">[Sección Sobre mí]</p>
        </section>

        <section id="proyectos" className="min-h-screen flex items-center justify-center">
          <p className="text-(--color-muted)">[Sección Proyectos]</p>
        </section>

        <section id="contacto" className="min-h-screen flex items-center justify-center">
          <p className="text-(--color-muted)">[Sección Contacto]</p>
        </section>
      </main>
      <Footer />
    </>
  );
}