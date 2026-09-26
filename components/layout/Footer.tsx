export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-sm text-(--color-muted) md:px-12 md:flex md:flex-row md:items-center md:justify-between md:gap-4">
      <p>© {new Date().getFullYear()} JR. Todos los derechos reservados.</p>

      <div className="mt-4 flex flex-wrap items-center gap-6 md:mt-0">
        <a
          href="https://github.com/Juanzyy1"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-(--color-fg)"
        >
          🐙 GitHub
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-(--color-fg)"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=prvalencia.021@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-(--color-fg)"
        >
          ✉️ Email
        </a>
      </div>
    </footer>
  );
}