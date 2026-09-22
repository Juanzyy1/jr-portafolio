"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Cuando tengas fotos, agrégalas a /public/showcase/ y complétalas aquí.
// Puedes usar entre 3 y 5 imágenes. Cada una necesita su propia inclinación.
const IMAGES: { src: string; rotate: number }[] = [
  // { src: "/showcase/proyecto-1.jpg", rotate: -6 },
  // { src: "/showcase/personal-1.jpg", rotate: 4 },
  // { src: "/showcase/proyecto-2.jpg", rotate: -3 },
  // { src: "/showcase/proyecto-3.jpg", rotate: 6 },
];

export default function Showcase() {
  return (
    <section className="relative py-32 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-display text-center text-[13vw] md:text-[8vw] leading-none select-none text-white/90 px-4"
      >
        {/* Edita este texto por el tuyo: tu nombre, o una frase corta */}
        JUAN RODRÍGUEZ
      </motion.h2>

      <div className="flex justify-center items-center gap-4 md:gap-6 -mt-[10vw] md:-mt-[5vw] px-6 relative z-10 flex-wrap">
        {IMAGES.length === 0 ? (
          // Placeholders mientras no hay fotos reales
          [0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (4 + i)}deg)` }}
              className="w-32 md:w-52 aspect-[3/4] bg-white/5 border border-white/10 rounded-sm shadow-2xl flex items-center justify-center text-xs text-[var(--color-muted)]"
            >
              foto {i + 1}
            </div>
          ))
        ) : (
          IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{ transform: `rotate(${img.rotate}deg)` }}
              className="relative w-32 md:w-52 aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border border-white/10"
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          ))
        )}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center max-w-xl mx-auto mt-14 px-6 text-[var(--color-muted)] uppercase tracking-wide text-sm md:text-base"
      >
        {/* Edita esta descripción también */}
        Desarrollo software con atención al detalle, combinando código limpio con una visión de diseño cuidada.
      </motion.p>
    </section>
  );
}