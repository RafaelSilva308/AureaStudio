// Números reais coletados no link-in-bio (beacons.ai/aureastudio_) do Instagram @aureastudiooficial
export const WHATSAPP_BEAUTY = "556196844929"; // Marina — cílios / sobrancelha
export const WHATSAPP_TATTOO = "556192588364"; // Adriele Rocha — tatuagem (parceria)

export function waLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];
