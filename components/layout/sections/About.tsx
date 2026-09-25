"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiJavascript,
  SiPostgresql,
  SiGit,
  SiDjango,
  SiFlask,
} from "react-icons/si";
import { Users, Brain, Clock, Headset, Monitor, Dumbbell, Gamepad2, Clapperboard, Music } from "lucide-react";

const TECHNOLOGIES = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#FFFFFF" },
  { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const APTITUDES = [
  { name: "Trabajo en equipo", icon: Users },
  { name: "Habilidad para aprender", icon: Brain },
  { name: "Puntualidad y responsabilidad", icon: Clock },
  { name: "Atención al cliente", icon: Headset },
  { name: "Uso de herramientas informáticas", icon: Monitor },
];

const PERSONAL_TAGS = [
  { name: "Deporte", icon: Dumbbell, color: "#F97316" },
  { name: "Creación de contenido", icon: Clapperboard, color: "#38BDF8" },
  { name: "Videojuegos", icon: Gamepad2, color: "#4ADE80" },
  { name: "Música", icon: Music, color: "#C084FC" },
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
          className="uppercase tracking-[0.3em] text-sm text-(--color-accent) mb-6 text-center"
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
          className="text-lg md:text-xl text-center text-(--color-fg)/90 leading-relaxed max-w-2xl mx-auto mb-16"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 max-w-2xl mx-auto"
        >
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-(--color-accent) mb-6">
              Tecnologías
            </p>
            <ul className="space-y-1">
              {TECHNOLOGIES.map((tech, i) => (
                <motion.li
                  key={tech.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 py-3 border-b border-white/5 group"
                >
                  <tech.icon
                    style={{ color: tech.color }}
                    className="w-5 h-5 shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  />
                  <span className="text-lg text-(--color-fg)/90">
                    {tech.name}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-(--color-accent) mb-6">
              Aptitudes
            </p>
            <ul className="space-y-1">
              {APTITUDES.map((apt, i) => (
                <motion.li
                  key={apt.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 py-3 border-b border-white/5 group"
                >
                  <apt.icon className="w-5 h-5 shrink-0 text-(--color-accent) opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <span className="text-lg text-(--color-fg)/90">
                    {apt.name}
                  </span>
                </motion.li>
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
          <p className="uppercase tracking-[0.3em] text-xs text-(--color-muted) mb-6">
            Fuera del código
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-(--color-fg)/90 mb-10">
            Soy consciente de que cada error es parte del proceso — lo asumo y
            sigo adelante. Fuera del trabajo, el deporte, los videojuegos y la
            creación de contenido ocupan buena parte de mi tiempo. Y la
            música nunca falta: es una parte fija de mi día a día.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {PERSONAL_TAGS.map((tag, i) => (
              <motion.div
                key={tag.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full cursor-default transition-colors hover:border-white/25"
              >
                <tag.icon
                  style={{ color: tag.color }}
                  className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="font-display text-xl md:text-2xl tracking-wide text-(--color-muted)/70 group-hover:text-(--color-fg) transition-colors">
                  {tag.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}