"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

const PROFILE_IMAGE = "/hero/you.JPG"; // cambia el nombre si tu archivo se llama distinto

export default function Hero() {
  return (  
    <section
      id="inicio"
      className="relative min-h-screen flex items-center px-6 md:px-12 py-32 overflow-hidden"
    >
      <HeroCarousel />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Columna de texto */}
        <div className="text-center md:text-left order-2 md:order-1">
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
            className="font-display text-[13vw] md:text-[5.5vw] leading-[0.9] tracking-wide"
          >
            Desarrollador
            <br />
            de Software
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-md mx-auto md:mx-0 text-(--color-muted) text-base md:text-lg"
          >
            Construyo productos digitales con atención al detalle,
            desde la idea hasta el despliegue.
          </motion.p>
        </div>

        {/* Columna de foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[320px] md:max-w-95 aspect-3/4">
            {/* Marco decorativo, esquinas tipo cine */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-(--color-accent)" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-(--color-accent)" />

            <div className="relative w-full h-full overflow-hidden border border-white/15">
              <Image
                src={PROFILE_IMAGE}
                alt="Foto de perfil"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                className="object-cover grayscale-30 contrast-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll, estilo cine */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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