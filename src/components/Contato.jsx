import { WHATSAPP_BEAUTY, waLink } from "../siteData";

export default function Contato() {
  return (
    <section id="contato">
      <div className="bg-accent">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 md:py-20 text-center reveal">
          <h2 className="font-display text-3xl md:text-4xl text-white">
            Vamos agendar seu horário?
          </h2>
          <p className="mt-3 text-white/85 max-w-md mx-auto">
            Chama a gente no WhatsApp e escolhe o dia que funciona melhor pra você.
          </p>
          <a
            href={waLink(WHATSAPP_BEAUTY, "Olá, vamos conversar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white text-accent font-semibold px-8 py-4 hover:scale-105 hover:shadow-lg transition-transform"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2.05 22l5.36-1.4a9.9 9.9 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.12a16.6 16.6 0 0 1-1.65-.61c-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.7-.17 1.38Z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 grid sm:grid-cols-3 gap-8">
        <div className="reveal">
          <h3 className="font-display text-lg text-neutral">Endereço</h3>
          <p className="mt-2 text-sm text-neutral/70">
            Valparaíso de Goiás — GO
            <br />
            [ENDEREÇO: trocar pelo real — rua e bairro]
          </p>
        </div>
        <div className="reveal">
          <h3 className="font-display text-lg text-neutral">Horário</h3>
          <p className="mt-2 text-sm text-neutral/70">
            Terça a sábado, 9h às 19h
            <br />
            Atendimento sob hora marcada
          </p>
        </div>
        <div className="reveal">
          <h3 className="font-display text-lg text-neutral">Redes</h3>
          <p className="mt-2 text-sm text-neutral/70">
            <a
              href="https://www.instagram.com/aureastudiooficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              @aureastudiooficial
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-16 reveal">
        <div className="rounded-xl border border-neutral/10 bg-neutral/[0.03] aspect-[21/9] flex items-center justify-center text-center p-8">
          <span className="text-sm text-neutral/60">
            [MAPA: incorporar Google Maps via iframe com o endereço real do estúdio]
          </span>
        </div>
      </div>
    </section>
  );
}
