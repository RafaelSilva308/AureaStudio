const badges = [
  "Atendimento com hora marcada",
  "Profissionais especializadas por área",
  "Ambiente pensado para o seu conforto",
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-neutral/[0.03]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal order-2 md:order-1">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral flex items-center justify-center text-center p-8">
            <span className="text-bg/70 text-sm leading-relaxed">
              [IMAGEM: foto do interior do estúdio — cadeira de atendimento, decoração em tons de bronze e preto]
            </span>
          </div>
        </div>

        <div className="reveal order-1 md:order-2">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Quem somos
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-neutral">
            Por que clientes confiam no Áurea Studio
          </h2>
          <div className="mt-5 space-y-4 text-neutral/70 leading-relaxed">
            <p>
              O Áurea Studio nasceu da união entre arte e estética: um espaço em
              Valparaíso-GO dedicado a cuidar de cílios, sobrancelhas e peles com
              a mesma atenção ao detalhe de um trabalho autoral.
            </p>
            <p>
              Cada área é conduzida por uma profissional especializada — da
              extensão de cílios ao design de sobrancelha, passando pela
              tatuagem em parceria com uma artista dedicada exclusivamente a isso.
            </p>
            <p>
              O resultado é um atendimento próximo, com hora marcada, pensado
              pra você sair se sentindo cuidada do início ao fim.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div
                key={badge}
                className="rounded-lg border border-neutral/10 px-4 py-3 text-sm font-medium text-neutral/80 text-center"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
