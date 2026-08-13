import { WHATSAPP_BEAUTY, WHATSAPP_TATTOO, waLink } from "../siteData";

const featured = [
  {
    n: "01",
    name: "Extensão de Cílios",
    description:
      "Fio a fio pensado pro formato do seu olho, com técnica que preserva a saúde do cílio natural.",
    href: waLink(WHATSAPP_BEAUTY, "Olá! Tenho interesse em extensão de cílios."),
  },
  {
    n: "02",
    name: "Design de Sobrancelha",
    href: waLink(WHATSAPP_BEAUTY, "Olá! Tenho interesse em design de sobrancelha."),
  },
  {
    n: "03",
    name: "Tatuagem",
    href: waLink(WHATSAPP_TATTOO, "Olá, gostaria de fazer um orçamento de tatuagem."),
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-neutral pt-28 pb-20 sm:pt-32 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 leopard-texture opacity-[0.04]" />
        <div className="float-y absolute -top-24 -right-16 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-10 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none font-display text-[18vw] leading-none text-bg/[0.03] blur-sm">
          Áurea
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="reveal lg:col-span-6">
            <span className="text-accent font-semibold text-xs sm:text-sm tracking-widest uppercase">
              Valparaíso de Goiás — GO
            </span>
            <h1 className="font-display font-semibold uppercase leading-[0.95] mt-4 text-bg text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Sua beleza,
              <br />
              nossa arte
            </h1>
            <p className="mt-5 text-base md:text-lg text-bg/60 max-w-md">
              Extensão de cílios, design de sobrancelha e tatuagem em Valparaíso-GO,
              com cuidado técnico e olhar artístico em cada detalhe.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={waLink(WHATSAPP_BEAUTY, "Olá! Vim pelo site e gostaria de saber mais.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-accent text-white font-semibold px-7 py-3.5 hover:scale-105 hover:shadow-lg active:scale-95 transition-transform w-full sm:w-auto justify-center"
              >
                Agendar horário
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 text-bg font-medium hover:text-accent hover:gap-3 transition-all"
              >
                Ver serviços <span aria-hidden="true">→</span>
              </a>
            </div>

            <ol className="mt-12 space-y-5 max-w-sm border-l border-bg/15 pl-6">
              {featured.map((item, i) => (
                <li
                  key={item.n}
                  className={i === 0 ? "" : "opacity-45 hover:opacity-80 transition-opacity"}
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-4"
                  >
                    <span className="font-display text-bg/60 text-sm tracking-widest">{item.n}</span>
                    <span className="font-display text-bg text-lg group-hover:text-accent transition-colors">
                      {item.name}
                    </span>
                  </a>
                  {item.description && (
                    <p className="mt-2 text-sm text-bg/50 leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal lg:col-span-6">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-bg/5 border border-bg/10 flex items-center justify-center text-center p-8 shadow-2xl">
                <div className="absolute inset-0 leopard-texture opacity-10" aria-hidden="true"></div>
                <span
                  className="relative text-bg/40 text-sm leading-relaxed"
                  role="img"
                  aria-label="Foto do estúdio Áurea Studio"
                >
                  [IMAGEM: foto vertical do espaço do estúdio ou closeup de um atendimento de
                  cílios/sobrancelha, com boa iluminação e paleta bronze/preta]
                </span>

                <div className="absolute left-5 right-5 bottom-5 rounded-3xl bg-bg/10 backdrop-blur-md border border-bg/15 p-5 text-left">
                  <h3 className="font-display text-bg text-lg uppercase tracking-wide">
                    Cuidado artesanal
                  </h3>
                  <p className="mt-2 text-xs text-bg/60 leading-relaxed">
                    Ambiente pensado para o seu conforto, com atendimento sempre com hora marcada.
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex flex-col gap-4 absolute top-6 -right-6 lg:-right-10">
                <div className="rounded-3xl bg-bg/5 backdrop-blur-md border border-bg/10 px-6 py-5 w-36">
                  <span className="font-display text-bg text-3xl tracking-tight">03</span>
                  <p className="mt-1 text-xs text-bg/50">Especialidades</p>
                </div>
                <div className="rounded-3xl bg-bg/5 backdrop-blur-md border border-bg/10 px-6 py-5 w-36">
                  <span className="font-display text-bg text-3xl tracking-tight">
                    100<span className="text-base text-bg/40">%</span>
                  </span>
                  <p className="mt-1 text-xs text-bg/50">Hora marcada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#servicos"
          aria-label="Rolar para ver os serviços"
          className="hidden md:flex mt-16 items-center justify-center mx-auto size-14 rounded-full border border-bg/20 text-bg/60 hover:text-accent hover:border-accent/50 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
