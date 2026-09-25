import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/sections/Hero";
import Showcase from "@/components/layout/sections/Showcase";
import About from "@/components/layout/sections/About";
import Projects from "@/components/layout/sections/Projects";
import Contact from "@/components/layout/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}