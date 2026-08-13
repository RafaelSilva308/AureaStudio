import { WHATSAPP_BEAUTY, waLink } from "../siteData";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Valparaíso de Goiás — GO
          </span>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mt-4 text-neutral">
            Onde sua beleza vira uma obra de arte
          </h1>
          <p className="mt-5 text-base md:text-lg text-neutral/70 max-w-md">
            Extensão de cílios, design de sobrancelha e tatuagem em Valparaíso-GO,
            com cuidado técnico e olhar artístico em cada detalhe.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink(WHATSAPP_BEAUTY, "Olá! Vim pelo site e gostaria de saber mais.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-accent text-white font-semibold px-7 py-3.5 hover:scale-105 hover:shadow-lg transition-transform"
            >
              Agendar horário
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-neutral font-medium hover:text-accent transition-colors"
            >
              Ver serviços <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="reveal">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral flex items-center justify-center text-center p-8">
            <div className="absolute inset-0 leopard-texture opacity-20" aria-hidden="true"></div>
            <span className="relative text-bg/70 text-sm leading-relaxed" role="img" aria-label="Foto do estúdio Áurea Studio">
              [IMAGEM: foto vertical do espaço do estúdio ou closeup de um atendimento de cílios/sobrancelha, com boa iluminação e paleta bronze/preta]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
