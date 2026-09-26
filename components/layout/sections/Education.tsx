"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, School } from "lucide-react";

type EducationItem = {
  title: string;
  institution: string;
  years: string;
  image: string | null;
  icon: typeof GraduationCap;
};

const EDUCATION: EducationItem[] = [
  {
    title: "Tecnología en Desarrollo de Software",
    institution: "Universidad del Valle",
    years: "2023 — 2026",
    image: "/education/Univalle.jpg",
    icon: GraduationCap,
  },
  {
    title: "Bachillerato",
    institution: "Institución Educativa Bolivariano",
    years: "2016 — 2022",
    image: "/education/Colegio.jpg",
    icon: School,
  },
];

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative overflow-hidden rounded-lg border border-white/10"
    >
      {item.image ? (
        <>
          <div className="relative h-48 md:h-64 w-full">
            <Image
              src={item.image}
              alt={item.institution}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/10" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 md:p-10 -mt-16 relative z-10">
            <div className="shrink-0 w-14 h-14 rounded-full border border-(--color-accent)/40 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <item.icon className="w-7 h-7 text-(--color-accent)" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl mb-1">{item.title}</h3>
              <p className="text-(--color-muted) text-base md:text-lg">
                {item.institution}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <span className="text-sm text-(--color-muted)">{item.years}</span>
              <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-green-500/30 text-green-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Graduado
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 md:p-10">
          <div className="shrink-0 w-14 h-14 rounded-full border border-(--color-accent)/40 flex items-center justify-center">
            <item.icon className="w-7 h-7 text-(--color-accent)" />
          </div>

          <div className="flex-1">
            <h3 className="font-display text-2xl md:text-3xl mb-1">{item.title}</h3>
            <p className="text-(--color-muted) text-base md:text-lg">{item.institution}</p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="text-sm text-(--color-muted)">{item.years}</span>
            <span className="flex items-center gap-1.5 text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-green-500/30 text-green-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Graduado
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Education() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-sm text-(--color-accent) mb-6 text-center"
        >
          Formación
        </motion.p>

        <div className="flex flex-col gap-6">
          {EDUCATION.map((item, i) => (
            <EducationCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}