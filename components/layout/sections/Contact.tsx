"use client";

import { useActionState, useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };
const MESSAGE_LIMIT = 2000;

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const [messageLength, setMessageLength] = useState(0);

  return (
    <section id="contacto" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-(--color-accent) mb-6">
            Contacto
          </p>
          <h2 className="font-display text-6xl md:text-7xl leading-none">
            Hablemos
            <br />
            de tu idea
          </h2>
        </motion.div>

        <motion.form
          action={formAction}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col gap-8"
        >
          {/* Honeypot: oculto para humanos, visible para bots */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="border-b border-white/15 focus-within:border-(--color-accent) transition-colors pb-2">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
              className="w-full bg-transparent outline-none text-lg placeholder:text-(--color-muted)"
            />
          </div>

          <div className="border-b border-white/15 focus-within:border-(--color-accent) transition-colors pb-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-transparent outline-none text-lg placeholder:text-(--color-muted)"
            />
          </div>

          <div className="border-b border-white/15 focus-within:border-(--color-accent) transition-colors pb-2">
            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              required
              maxLength={150}
              className="w-full bg-transparent outline-none text-lg placeholder:text-(--color-muted)"
            />
          </div>

          <div className="border-b border-white/15 focus-within:border-(--color-accent) transition-colors pb-2">
            <textarea
              name="message"
              placeholder="Mensaje"
              required
              rows={3}
              maxLength={MESSAGE_LIMIT}
              onChange={(e) => setMessageLength(e.target.value.length)}
              className="w-full bg-transparent outline-none text-lg placeholder:text-(--color-muted) resize-none"
            />
            <p className="text-right text-xs text-(--color-muted) mt-1">
              {messageLength}/{MESSAGE_LIMIT} caracteres
            </p>
          </div>

          {state.message && (
            <p
              className={`text-sm ${
                state.success ? "text-green-400" : "text-red-400"
              }`}
            >
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="mt-4 self-start px-10 py-4 rounded-full bg-(--color-fg) text-black uppercase tracking-wide text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isPending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}