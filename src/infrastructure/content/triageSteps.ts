import type { TriageStep } from "@/domain/triage/TriageStep";

/** Os passos da triagem, como explicados na seção "Como Funciona". */
export const TRIAGE_STEPS: readonly TriageStep[] = [
  {
    id: "primeiro-contato",
    number: "01",
    title: "O Primeiro Contato",
    description:
      "Basta enviar uma mensagem simples pelo WhatsApp. Você nos conta o seu momento de forma rápida, direta e sem burocracia.",
  },
  {
    id: "triagem-inteligente",
    number: "02",
    title: "Triagem Inteligente",
    description:
      "Nosso sistema inteligente conduz um mapeamento dinâmico. Por meio de perguntas estratégicas, compreendemos o seu quadro, suas demandas e seus objetivos com precisão.",
  },
  {
    id: "especialista-certo",
    number: "03",
    title: "O Especialista Certo",
    description:
      "Com base no seu relato, nossa equipe assume o atendimento e direciona você para o profissional mais adequado. Tudo desenhado com um único objetivo: fazer você alcançar o seu verdadeiro potencial.",
  },
];
