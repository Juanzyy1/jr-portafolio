"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// Cuando tengas fotos, agrégalas a /public/hero/ y agrega su ruta aquí.
// Ejemplo: "/hero/proyecto-1.jpg"
const SLIDES: string[] = [
  // "/hero/proyecto-1.jpg",
  // "/hero/personal-1.jpg",
];

const SLIDE_DURATION = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {SLIDES.length === 0 ? (
        // Placeholder mientras no hay fotos
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1512]" />
      ) : (
        <AnimatePresence mode="sync">
          <motion.div
            key={SLIDES[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[current]}
              alt=""
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Oscurece la imagen para que el texto siempre se lea bien */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
    </div>
  );
}