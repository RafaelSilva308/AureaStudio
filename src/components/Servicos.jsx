import { WHATSAPP_BEAUTY, WHATSAPP_TATTOO, waLink } from "../siteData";

const services = [
  {
    icon: "👁️",
    name: "Extensão de Cílios",
    description:
      "Fio a fio pensado pro formato do seu olho, com técnica que preserva a saúde do cílio natural.",
    cta: {
      label: "Saber mais",
      href: waLink(WHATSAPP_BEAUTY, "Olá! Tenho interesse em extensão de cílios."),
    },
  },
  {
    icon: "✨",
    name: "Design de Sobrancelha",
    description:
      "Simetria e formato desenhados pro seu rosto, com acabamento natural que dura no dia a dia.",
    cta: {
      label: "Saber mais",
      href: waLink(WHATSAPP_BEAUTY, "Olá! Tenho interesse em design de sobrancelha."),
    },
  },
  {
    icon: "🖋️",
    name: "Tatuagem",
    description:
      "Trabalho autoral em parceria com a tatuadora Adriele Rocha, do traço fino ao blackwork.",
    cta: {
      label: "Ver portfólio e orçar",
      href: waLink(WHATSAPP_TATTOO, "Olá, gostaria de fazer um orçamento de tatuagem."),
    },
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-neutral">
            Arte e técnica em cada atendimento
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="reveal group rounded-xl border border-neutral/10 bg-white/40 p-7 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div
                className="text-3xl inline-block transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="font-display text-xl mt-4 text-neutral">{service.name}</h3>
              <p className="mt-2 text-sm text-neutral/70 leading-relaxed">{service.description}</p>
              <a
                href={service.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-accent hover:gap-2 transition-all"
              >
                {service.cta.label} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
        {/* INFERIDO: revisar com cliente — confirmar se "Nail Design" (citado em 1 post do Instagram, fora da bio) deve virar um 4º card */}
      </div>
    </section>
  );
}
