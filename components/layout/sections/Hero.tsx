"use client";

import { motion } from "framer-motion";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <HeroCarousel />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="uppercase tracking-[0.3em] text-sm text-(--color-accent) mb-6"
      >
        Portafolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-display text-[14vw] md:text-[8vw] leading-[0.9] tracking-wide"
      >
        Desarrollador
        <br />
        de Software
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 max-w-md text-(--color-muted) text-base md:text-lg"
      >
        Construyo productos digitales con atención al detalle,
        desde la idea hasta el despliegue.
      </motion.p>

      {/* Indicador de scroll, estilo cine */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-(--color-muted)">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-(--color-muted)"
        />
      </motion.div>
    </section>
  );
}