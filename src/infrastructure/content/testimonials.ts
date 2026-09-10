import type { Testimonial } from "@/domain/testimonial/Testimonial";

/**
 * Depoimentos de pacientes.
 *
 * Conteúdo sensível: veja a nota de LGPD em `domain/testimonial/Testimonial.ts`
 * antes de adicionar, editar ou remover qualquer item desta lista.
 */
export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "maria-cristina",
    authorName: "Maria Cristina",
    badge: "Paciente Verificado",
    text: `Faço acompanhamento com a Luana a alguns anos e sou muito grata por ser acompanhada por alguém tão acolhedora e assertiva.
Com certeza grande parte do meu progresso deve ser evidenciado pelo tratamento que recebo e consigo recomendar com muita segurança para que se abram a terapia com essa profissional ❤.`,
  },
  {
    id: "lais-lanzieri",
    authorName: "Laís Lanzieri",
    badge: "Paciente Verificado",
    text: `A Débora sempre atende minha filha com muito amor, acolhimento e paciência. Isso faz toda diferença para quem tem bebê! Já fizemos tratamento com acupuntura e sessões de laser, e ajudou muito na melhora de sintomas associados a nascimento de dentes e também na época em que teve mão, pé e boca.`,
  },
  {
    id: "rebecca-requena",
    authorName: "Rebecca Requena",
    badge: "Paciente Verificado",
    text: "Estou com a Ísis desde Agosto de 2024, e eu falo que não vivo mais sem minha sessão de terapia. Ela é uma pessoa que você pode falar e ser exatamente do jeito que é, pode mostrar sem filtro tudo o que pensa, ela te dá esse conforto na sessão sem julgamentos. Eu sou outra pessoa desde que comecei com ela, desmistifiquei coisas, mudei opiniões, e ela fez eu me entender e me conhecer melhor, saber o por que faço o que faço, olhar as coisas com outros olhos, analisar situações, e ser uma pessoa consequentemente muito mais tranquila. Eu AMO essa mulher, e falo que não largo ela por nada nesse mundo!",
  },
];
