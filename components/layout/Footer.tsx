export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-(--color-muted)">
      <p>© {new Date().getFullYear()} JR. Todos los derechos reservados.</p>
      <div className="flex gap-6">
        <a href="https://github.com/Juanzyy1" className="hover:text-(--color-fg) transition-colors">
          GitHub
        </a>
        <a href="#" className="hover:text-(--color-fg) transition-colors">
          LinkedIn
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prvalencia.021@gmail.com" className="hover:text-(--color-fg) transition-colors">
          Email
        </a>
      </div>
    </footer>
  );
}