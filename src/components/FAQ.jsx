const faqs = [
  {
    q: "Quanto custa a extensão de cílios, a sobrancelha ou a tatuagem?",
    a: "O valor varia conforme a técnica, o tamanho e a complexidade do trabalho. Manda uma mensagem no WhatsApp que a gente monta um orçamento certinho pra você.",
  },
  {
    q: "Preciso agendar com antecedência?",
    a: "Sim, os atendimentos são feitos com hora marcada. Assim garantimos tempo e atenção total pra cada cliente.",
  },
  {
    q: "Quanto tempo dura o procedimento?",
    a: "Depende do serviço: extensão de cílios e design de sobrancelha costumam levar de 1 a 2 horas; tatuagens variam conforme o tamanho e o traço combinado com a artista.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Trabalhamos com as formas de pagamento mais comuns. Confirma a que for melhor pra você direto na hora do agendamento.",
  },
  {
    q: "Preciso de algum cuidado depois do procedimento?",
    a: "Sim — passamos todas as orientações de manutenção e cuidado logo após o atendimento, pra o resultado durar bem mais tempo.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Perguntas frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-neutral">
            Tirando suas dúvidas
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="reveal group rounded-xl border border-neutral/10 bg-white/40 px-6 py-4"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-medium text-neutral">
                {item.q}
                <span className="text-accent text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral/70 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
