import type { Professional } from "@/domain/professional/Professional";
import LuanaImg from "@/assets/luana.jpeg";
import ElaineImg from "@/assets/elaine.jpeg";
import VanessaImg from "@/assets/vanessa.jpeg";
import DeboraImg from "@/assets/debora.jpeg";
import IsisImg from "@/assets/isis.jpeg";
import EsterImg from "@/assets/ester.jpeg";
import RenanImg from "@/assets/renan.jpeg";

/**
 * Equipe da Potentia.
 *
 * Hoje é uma lista estática compilada no bundle. Se um dia esse conteúdo passar
 * a vir de um CMS ou API, só este arquivo muda — a UI consome `Professional`,
 * não a origem do dado.
 *
 * A ordem do array é a ordem de exibição no carrossel.
 */
export const PROFESSIONALS: readonly Professional[] = [
  {
    id: "luana",
    name: "Luana",
    role: "Neuropsicóloga",
    photo: LuanaImg,
    bio: `Sou mestranda em Neurociência, Psicologia e Comportamento Humano, neuropsicóloga e psicóloga, com experiência clínica no atendimento de adolescentes, adultos e idosos.
Atuo com avaliação neuropsicológica, reabilitação cognitiva e psicoterapia baseada na Terapia Cognitivo-Comportamental (TCC), oferecendo suporte a pessoas com depressão, ansiedade, transtornos do neurodesenvolvimento (como TEA e TDAH) e outras demandas relacionadas à saúde mental.
Tenho experiência no setor hospitalar e na urgência psiquiátrica.
Meu compromisso é caminhar ao seu lado, compreendendo sua história e suas necessidades, para desenvolver estratégias que o ajudem a alcançar seus objetivos e desenvolver todo o seu potencial.
Modalidade: Presencial e Online.`,
  },
  {
    id: "elaine-fontes",
    name: "Elaine Fontes",
    role: "Assistente Social.",
    photo: ElaineImg,
    registrationCode: "CRESS 60.868",
    bio: `Assessoria para Benefícios: Orientação e organização de documentos para concessão do BP/LOAS, aposentadorias ou auxílios.
     Laudos e Periciais Sociais
     Atuação como perita particular. Perícia social em processos judiciais de guarda, inventários ou interdição/curatela.
     Experiência com pacientes e famílias com transtornos mentais e neurodivergências.
     Palestras e treinamentos.
     Serviços voltados para empresas privadas sobre responsabilidade social, saúde mental e inclusão.
     NR1`,
  },
  {
    id: "vanessa",
    name: "Vanessa",
    role: "Fonoaudióloga com atuação em Linguagem infantil",
    photo: VanessaImg,
    bio: `Atuação em pacientes com doenças neurológicas (Parkinson, AVC, Alzheimer e Demência) voltadas à área de linguagem. Orientação Parental para desenvolvimento de fala/linguagem. Reabilitação de Transtornos no Neurodesenvolvimento (TEA, TDAH). Acompanhamento de escolares com dificuldades de Leitura/Escrita.
Realização de PCA (Programa de Controle Auditivo) em empresas com funcionários expostos a ruídos ocupacionais.
Modalidade presencial e on-line.`,
  },
  {
    id: "debora-palu",
    name: "Debora Palu",
    role: "Fisioterapeuta e Terapeuta Integrativa, com atuação em Acupuntura, Auriculoterapia, Moxaterapia, Ventosaterapia, Aromaterapia, Florais de Bach e Laserterapia.",
    photo: DeboraImg,
    bio: ` Atendendo bebês, crianças, adolescentes, adultos e idosos, oferecendo um cuidado integrativo para o tratamento da dor, ansiedade, distúrbios do sono, desequilíbrios emocionais e promoção da saúde.

Tenho foco em Pediatria Integrativa e no suporte a crianças neurodivergentes, acolhendo também toda a família em sua jornada de saúde e bem-estar.

Atendimento presencial e online.
`,
  },
  {
    id: "isis-gomes-vieira",
    name: "Isis Gomes Vieira",
    role: "Psicóloga Clínica e Neuropsicóloga",
    photo: IsisImg,
    bio: `Psicóloga clínica com 21 anos de experiência, ofereço atendimento psicológico on-line para adolescentes, adultos e idosos, em um espaço de escuta acolhedora, ética e segura.
Atuo no atendimento de pessoas que enfrentam ansiedade, estresse, burnout, depressão, dificuldades emocionais, conflitos nos relacionamentos e outros desafios que impactam a saúde mental.
Sou especialista em Neuropsicologia, o que amplia minha compreensão dos aspectos cognitivos, emocionais e comportamentais, possibilitando um atendimento ainda mais individualizado e fundamentado.
`,
  },
  {
    id: "ester",
    name: "Ester",
    role: "Shiatsu e massagem relaxante",
    photo: EsterImg,
    bio: `Engenheira agrônoma por formação, encontrou no cuidado com o corpo e a mente uma nova vocação. Possui formação em Shiatsu e massagem relaxante, oferecendo atendimentos voltados ao bem-estar, relaxamento e equilíbrio físico e emocional.
As terapias auxiliam na redução do estresse e na promoção de mais qualidade de vida. Os atendimentos são indicados para pessoas de todas as idades que buscam relaxamento, autocuidado e mais leveza para a rotina do dia a dia.
Modalidade de atendimento: presencial.
`,
  },
  {
    id: "renan",
    name: "Renan",
    role: "Acompanhamento em Nutrição Clínica, Comportamental e esportivo",
    photo: RenanImg,
    bio: `Nutricionista Clínico, Esportivo e Comportamental com atuação no tratamento da obesidade e suas comorbidades. Focado em transformar a relação do paciente com a comida sem terrorismo nutricional, aliando ciência a um planejamento prático para a rotina e otimização de performance física. Com expertise no manejo do comer emocional e na mudança dos hábitos, atendo o público adulto (acima dos 18 anos), ofereço suporte para a quebra do ciclo de dietas restritivas, resgate da autonomia alimentar e construção de um estilo de vida sustentável e com saúde.
Modalidades de atendimento: Online e Presencial
`,
  },
];
