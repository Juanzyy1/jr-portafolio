"use client";

import { motion } from "framer-motion";

const TECHNOLOGIES = [
  "HTML",
  "CSS",
  "Tailwind",
  "React",
  "Next.js",
  "Python",
  "JavaScript",
  "PostgreSQL",
  "Git",
];

const APTITUDES = [
  "Trabajo en equipo",
  "Habilidad para aprender",
  "Puntualidad y responsabilidad",
  "Atención al cliente",
  "Uso de herramientas informáticas",
];

const PERSONAL_TAGS = [
  "Deporte",
  "Creación de contenido",
  "Videojuegos",
  "Música",
];

export default function About() {
  return (
    <section id="sobre-mi" className="relative py-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-sm text-[var(--color-accent)] mb-6 text-center"
        >
          Filosofía
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-center leading-tight mb-14"
        >
          Tecnología con propósito,
          <br />
          aprendizaje sin pausa.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-[var(--color-fg)]/90 leading-relaxed max-w-2xl mx-auto mb-16"
        >
          Trabajo en Tecnología en Desarrollo de Software con una capacidad
          fuerte de adaptación y aprendizaje continuo. Me muevo bien en equipo,
          con buenas relaciones interpersonales, y me caracterizo por analizar
          antes de actuar — con responsabilidad y una lectura clara de cómo
          encaja cada decisión dentro de un proyecto más grande.
        </motion.p>

        {/* Tecnologías y aptitudes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 max-w-2xl mx-auto"
        >
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[var(--color-accent)] mb-6">
              Tecnologías
            </p>
            <ul className="space-y-3">
              {TECHNOLOGIES.map((tech) => (
                <li
                  key={tech}
                  className="text-lg text-[var(--color-fg)]/90 border-b border-white/5 pb-3"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[var(--color-accent)] mb-6">
              Aptitudes
            </p>
            <ul className="space-y-3">
              {APTITUDES.map((apt) => (
                <li
                  key={apt}
                  className="text-lg text-[var(--color-fg)]/90 border-b border-white/5 pb-3"
                >
                  {apt}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Lado personal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-white/10 pt-16 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--color-muted)] mb-6">
            Fuera del código
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-[var(--color-fg)]/90 mb-10">
            Soy consciente de que cada error es parte del proceso — lo asumo y
            sigo adelante. Fuera del trabajo, el deporte, los videojuegos y la
            creación de contenido ocupan buena parte de mi tiempo. Y la
            música nunca falta: es una parte fija de mi día a día.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {PERSONAL_TAGS.map((tag) => (
              <span
                key={tag}
                className="font-display text-2xl md:text-3xl text-[var(--color-muted)]/60 hover:text-[var(--color-fg)] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}