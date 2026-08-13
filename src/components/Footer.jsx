import { NAV_LINKS } from "../siteData";

export default function Footer() {
  return (
    <footer className="bg-neutral text-bg/70">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <span className="font-display text-xl text-white">
            Áurea <span className="text-accent">Studio</span>
          </span>
          <p className="mt-3 text-sm max-w-xs">
            Onde arte e estética se encontram — cílios, sobrancelha e tatuagem
            em Valparaíso-GO.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-widest">
            Contato
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Valparaíso de Goiás — GO</li>
            <li>
              <a
                href="https://www.instagram.com/aureastudiooficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                @aureastudiooficial
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 text-xs text-bg/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Áurea Studio. Todos os direitos reservados.</span>
          <span>Site desenvolvido com cuidado.</span>
        </div>
      </div>
    </footer>
  );
}
