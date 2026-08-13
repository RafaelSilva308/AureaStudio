import { useState } from "react";
import { NAV_LINKS, WHATSAPP_BEAUTY, waLink } from "../siteData";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-neutral/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl tracking-wide text-neutral">
          Áurea <span className="text-accent">Studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral/80 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(WHATSAPP_BEAUTY, "Olá! Vim pelo site e gostaria de saber mais.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-lg bg-accent text-white text-sm font-semibold px-5 py-2.5 hover:scale-105 hover:shadow-lg transition-transform"
        >
          Falar no WhatsApp
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          className="md:hidden p-2 text-neutral"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t border-neutral/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-neutral/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink(WHATSAPP_BEAUTY, "Olá! Vim pelo site e gostaria de saber mais.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center rounded-lg bg-accent text-white text-sm font-semibold px-5 py-3"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
