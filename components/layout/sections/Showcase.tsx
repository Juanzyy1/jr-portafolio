"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const IMAGES: { src: string; rotate: number }[] = [
  { src: "/showcase/aire.jpeg", rotate: -3 },
  { src: "/showcase/desarrollo.jpeg", rotate: 2 },
  { src: "/showcase/yo.jpeg", rotate: -2 },
  { src: "/showcase/paraiso.jpeg", rotate: 3 },
  { src: "/showcase/mario.jpeg", rotate: -1 },
];

// Duplicado varias veces para llenar bien el ancho y que el loop sea largo.
const TRACK_IMAGES = [...IMAGES, ...IMAGES, ...IMAGES];

const CARD_WIDTH = 220; // px, fijo — clave para que el loop no salte

export default function Showcase() {
  return (
    <section className="relative overflow-hidden bg-[#040404] py-8 md:py-12">
      <div className="mx-auto max-w-[1800px] px-2 md:px-5">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-center leading-[0.8] tracking-[-0.08em] select-none text-white/90 text-[14vw] md:text-[9vw]"
        >
          JUAN RODRÍGUEZ
        </motion.h2>

        <div className="relative mt-2 md:mt-1">
          <div className="overflow-hidden px-1 md:px-3">
            <div className="marquee-track flex w-max items-end gap-3 md:gap-5">
              {TRACK_IMAGES.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  style={{
                    transform: `rotate(${item.rotate}deg)`,
                    width: CARD_WIDTH,
                  }}
                  className="relative aspect-3/4 shrink-0 overflow-hidden rounded-sm border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.4)]"
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                  {/* Unifica el tono de todas las fotos, disimula fondos claros */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-black/30" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ maxWidth: "860px" }}
          className="mx-auto mt-12 px-4 text-center text-(--color-muted) uppercase tracking-[0.02em] text-sm md:text-base leading-relaxed"
        >
          Desarrollo software con atención al detalle, combinando código limpio con una visión de diseño cuidada.
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .marquee-track {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}