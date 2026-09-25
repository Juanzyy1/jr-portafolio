"use server";

import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (formData.get("website")) {
    return { success: true, message: "¡Mensaje enviado! Te responderé pronto." };
  }

  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const subject = formData.get("subject")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !subject || !message) {
    return { success: false, message: "Por favor completa todos los campos." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, message: "Ingresa un correo electrónico válido." };
  }

  if (subject.length > 150) {
    return { success: false, message: "El asunto es demasiado largo (máx. 150 caracteres)." };
  }

  if (message.length > 2000) {
    return { success: false, message: "El mensaje es demasiado largo (máx. 2000 caracteres)." };
  }

  try {
    await prisma.contactMessage.create({
      data: { name, email, subject, message },
    });
  } catch (error) {
    console.error("Error al guardar mensaje de contacto:", error);
    return {
      success: false,
      message: "Hubo un error al enviar el mensaje. Intenta de nuevo en unos minutos.",
    };
  }

  // El email es un "extra" — si falla, no queremos que el usuario vea un error,
  // porque el mensaje YA quedó guardado correctamente en la base de datos.
  try {
    await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>",
      to: "vmrodriguez.1209@gmail.com", // <-- cambia esto por tu correo real
      subject: `Nuevo mensaje: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch (error) {
    console.error("Error al enviar notificación por email:", error);
    // No retornamos error aquí a propósito.
  }

  return { success: true, message: "¡Mensaje enviado! Te responderé pronto." };
}