"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMapbox,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiPython,
  SiFlask,
} from "react-icons/si";
import { ArrowUpRight, Code2 } from "lucide-react";

type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  image: string | null;
  featured?: boolean;
};

const TECH_ICONS: Record<string, { icon: typeof SiNextdotjs; color: string }> = {
  "next.js 16": { icon: SiNextdotjs, color: "#FFFFFF" },
  "tailwind v4": { icon: SiTailwindcss, color: "#38BDF8" },
  "mapbox gl": { icon: SiMapbox, color: "#4264FB" },
  "node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  express: { icon: SiExpress, color: "#FFFFFF" },
  prisma: { icon: SiPrisma, color: "#FFFFFF" },
  "postgresql/postgis": { icon: SiPostgresql, color: "#4169E1" },
  python: { icon: SiPython, color: "#3776AB" },
  flask: { icon: SiFlask, color: "#FFFFFF" },
};

function TechIcon({ name }: { name: string }) {
  const match = TECH_ICONS[name.toLowerCase()];
  const Icon = match?.icon ?? Code2;
  const color = match?.color ?? "#9CA3AF";
  return <Icon style={{ color }} className="w-3.5 h-3.5 shrink-0" />;
}

const PROJECTS: Project[] = [
  {
    name: "Soy Conservación",
    description:
      "Desarrollo de un visor web interactivo que centraliza y visualiza datos de biodiversidad de la Fundación Soy Conservación, provenientes de archivos Excel en Google Drive y de iNaturalist mediante su API, sincronizados en PostgreSQL gestionado con Prisma ORM, para facilitar su consulta y análisis.",
    tech: [
      "Next.js 16",
      "Tailwind v4",
      "Mapbox GL",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL/PostGIS",
    ],
    github: null,
    demo: "https://soy-conservacion-frontend.vercel.app/es",
    image: "/projects/visor.jpeg",
    featured: true,
  },
  {
    name: "SuperMercado",
    description:
      "Aplicación web para la gestión integral de un supermercado: autenticación de usuarios y administradores, administración de productos y categorías, control de stock, carrito de compra con historial, y generación de recibos.",
    tech: ["Python", "Flask", "PostgreSQL", "psycopg2", "HTML/CSS/JS"],
    github: "https://github.com/Juanzyy1/SuperMercado",
    demo: null,
    image: "/projects/supermercado.jpeg",
  },
  {
  name: "SecureSign",
  description:
    "Sistema de firma digital de documentos (PDF, DOCX, TXT y más) mediante criptografía RSA y SHA-256. Genera y verifica firmas con clave privada/pública, y registra metadatos como firmante, fecha y hash del archivo, todo desde una interfaz web sencilla.",
  tech: ["Python", "Flask", "cryptography", "RSA", "SHA-256", "HTML/CSS/JS"],
  github: "https://github.com/Juanzyy1/SecureSign",
  demo: null,
  image: "/projects/securesign.jpeg",
},
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`group relative border border-white/10 overflow-hidden flex flex-col ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div
        className={`relative bg-white/5 overflow-hidden ${
          project.featured ? "aspect-16/10" : "aspect-4/3"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-(--color-muted) uppercase tracking-widest">
            Captura pendiente
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3
          className={`font-display leading-tight mb-3 ${
            project.featured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {project.name}
        </h3>

        <p className="text-(--color-muted) text-sm md:text-base leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="flex items-center gap-1.5 text-xs uppercase tracking-wide px-3 py-1.5 border border-white/10 rounded-full text-(--color-muted)"
            >
              <TechIcon name={t} />
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-6 text-sm uppercase tracking-wide">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full bg-(--color-accent) text-black text-sm font-medium uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Ver demo
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-medium uppercase tracking-wide hover:bg-white/5 hover:border-white/40 transition-colors"
            >
              <Code2 className="w-4 h-4" />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-sm text-(--color-accent) mb-4">
              Proyectos
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-none">
              Trabajo
              <br />
              real, en producción
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-xs text-(--color-muted) text-sm md:text-base"
          >
            Una selección de proyectos que resuelven problemas reales, desde
            la idea hasta el despliegue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}