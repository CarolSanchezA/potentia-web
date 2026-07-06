import { useRef, useState, useEffect } from "react";
import { PiCaretLeftBold, PiCaretRightBold, PiXBold } from "react-icons/pi";
import LuanaImg from "@/assets/luana.jpeg";
import DeboraImg from "@/assets/debora.jpeg";
import VanessaImg from "@/assets/vanessa.jpeg";
import IsisImg from "@/assets/isis.jpeg";
import EsterImg from "@/assets/ester.jpeg";
import RenanImg from "@/assets/renan.jpeg";
import ElaineImg from "@/assets/elaine.jpeg";

export default function Team() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // 1. Estado para controlar qual médico está selecionado no modal HOOK ////////////
  type Doctor = {
    name: string;
    role: string;
    initial: string;
    image?: string | null;
    bio?: string;
  };

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Lógica para fechar com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDoctor(null);
      }
    };
    if (selectedDoctor) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedDoctor]);

  // Funções para passar de profissional
  const handleNextDoctor = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que o clique feche o modal
    if (!selectedDoctor) return;
    const currentIndex = doctors.findIndex(
      (d) => d.name === selectedDoctor.name,
    );
    const nextIndex = (currentIndex + 1) % doctors.length;
    setSelectedDoctor(doctors[nextIndex]);
  };

  const handlePrevDoctor = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedDoctor) return;
    const currentIndex = doctors.findIndex(
      (d) => d.name === selectedDoctor.name,
    );
    const prevIndex = (currentIndex - 1 + doctors.length) % doctors.length;
    setSelectedDoctor(doctors[prevIndex]);
  };
///////////////---------FINAL HOOKS-----------///////////////

//////////////////-----DATA--------/////////////////
  // 2. Atualizamos o array para incluir 'bio' e 'image'
  const doctors: Doctor[] = [
    {
      name: "Luana",
      role: "Neuropsicóloga",
      initial: "LU",
      image: LuanaImg,
      bio: "Neuropsicóloga com atuação consolidada no diagnóstico e reabilitação de transtornos do neurodesenvolvimento (TEA, TDAH e Altas Habilidades) e quadros clínicos complexos. Com experiência no setor hospitalar e de urgência psiquiátrica, alia a técnica da Terapia Cognitivo-Comportamental (TCC) a uma abordagem humanizada e baseada em evidências. Atende adolescentes, adultos e idosos, oferecendo suporte especializado em regulação emocional, manejo de estresse e planejamento de carreira.",
    },
    {
      name: "Elaine Fontes",
      role: "Assistente Social.",
      initial: "CRESS 60.868",
      image: ElaineImg,
      bio: `Assessoria para Benefícios: Orientação e organização de documentos para concessão do BP/LOAS, aposentadorias ou auxílios.
     Laudos e Periciais Sociais
     Atuação como perita particular. Perícia social em processos judiciais de guarda, inventários ou interdição/curatela.
     Experiência com pacientes e famílias com transtornos mentais e neurodivergências.
     Palestras e treinamentos.
     Serviços voltados para empresas privadas sobre responsabilidade social, saúde mental e inclusão.
     NR1`,
    },
    {
      name: "Vanessa",
      role: "Fonoaudióloga com atuação em Linguagem infantil",
      initial: "AR",
      image: VanessaImg,
      bio: `Atuação em pacientes com doenças neurológicas (Parkinson, AVC, Alzheimer e Demência) voltadas à área de linguagem. Orientação Parental para desenvolvimento de fala/linguagem. Reabilitação de Transtornos no Neurodesenvolvimento (TEA, TDAH). Acompanhamento de escolares com dificuldades de Leitura/Escrita.
Realização de PCA (Programa de Controle Auditivo) em empresas com funcionários expostos a ruídos ocupacionais.
Modalidade presencial e on-line.`,
    },
    {
      name: "Debora Palu",
      role: "Fisioterapeuta e Terapeuta Integrativa, com atuação em Acupuntura, Auriculoterapia, Moxaterapia, Ventosaterapia, Aromaterapia, Florais de Bach e Laserterapia.",
      initial: "RS",
      image: DeboraImg,
      bio: ` Atendendo bebês, crianças, adolescentes, adultos e idosos, oferecendo um cuidado integrativo para o tratamento da dor, ansiedade, distúrbios do sono, desequilíbrios emocionais e promoção da saúde.

Tenho foco em Pediatria Integrativa e no suporte a crianças neurodivergentes, acolhendo também toda a família em sua jornada de saúde e bem-estar.

Atendimento presencial e online.
`,
    },
    {
      name: "Isis Gomes Vieira",
      role: "Psicóloga Clínica e Neuropsicóloga",
      initial: "SA",
      image: IsisImg,
      bio: `Psicóloga clínica com 21 anos de experiência, ofereço atendimento psicológico on-line para adolescentes, adultos e idosos, em um espaço de escuta acolhedora, ética e segura.
Atuo no atendimento de pessoas que enfrentam ansiedade, estresse, burnout, depressão, dificuldades emocionais, conflitos nos relacionamentos e outros desafios que impactam a saúde mental.
Sou especialista em Neuropsicologia, o que amplia minha compreensão dos aspectos cognitivos, emocionais e comportamentais, possibilitando um atendimento ainda mais individualizado e fundamentado.
`,
    },
    {
      name: "Ester",
      role: "Shiatsu e massagem relaxante",
      initial: "JC",
      image: EsterImg,
      bio: `Engenheira agrônoma por formação, encontrou no cuidado com o corpo e a mente uma nova vocação. Possui formação em Shiatsu e massagem relaxante, oferecendo atendimentos voltados ao bem-estar, relaxamento e equilíbrio físico e emocional.
As terapias auxiliam na redução do estresse e na promoção de mais qualidade de vida. Os atendimentos são indicados para pessoas de todas as idades que buscam relaxamento, autocuidado e mais leveza para a rotina do dia a dia.
Modalidade de atendimento: presencial.
`,
    },
    {
      name: "Renan",
      role: "Acompanhamento em Nutrição Clínica, Comportamental e esportivo",
      initial: "MS",
      image: RenanImg,
      bio: `Nutricionista Clínico, Esportivo e Comportamental com atuação no tratamento da obesidade e suas comorbidades. Focado em transformar a relação do paciente com a comida sem terrorismo nutricional, aliando ciência a um planejamento prático para a rotina e otimização de performance física. Com expertise no manejo do comer emocional e na mudança dos hábitos, atendo o público adulto (acima dos 18 anos), ofereço suporte para a quebra do ciclo de dietas restritivas, resgate da autonomia alimentar e construção de um estilo de vida sustentável e com saúde.
Modalidades de atendimento: Online e Presencial
`,
    },
  ];

  /////////////---------FINAL DATA--------/////////////

  ////////////////---------RENDER---------////////////

  return (
    <section
      id="team"
      className="bg-white py-20 md:py-28 overflow-hidden relative"
    >
      {/* Cabeçalho da Secção */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-potentia-blue_main bg-potentia-blue_deep/10 px-3 py-1 rounded-full">
              A Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-potentia-blue_deep mt-6 leading-tight">
              Profissionais Altamente Qualificados
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-2">
            Médicos especialistas dedicados a oferecer um atendimento
            humanizado, ético e baseado em evidências científicas.
          </p>
        </div>
      </div>

      {/* Contentor Principal com 'group' para o hover das setas */}
      <div className="max-w-7xl mx-auto relative group">
        {/* Seta Esquerda */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-6 top-1/3 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-blue_main opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
          aria-label="Rolar para a esquerda"
        >
          <PiCaretLeftBold className="text-2xl" />
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-2 py-4 hide-scrollbar"
        >
          {doctors.map((doc, index) => (
            <div
              key={index}
              onClick={() => setSelectedDoctor(doc)}
              // 1. CORREÇÃO: Trocamos min-w por w- (largura fixa) para o card não esticar
              className="snap-center w-[75vw] md:w-[280px] flex-shrink-0 group/card cursor-pointer"
            >
              {/* Foto (Caixa travada na proporção 4:5) */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl flex items-center justify-center mb-5 overflow-hidden relative border border-gray-100 shadow-sm w-full">
                {doc.image ? (
                  <img
                    src={doc.image}
                    alt={doc.name}
                    // 2. CORREÇÃO: 'absolute inset-0' obriga a imagem a respeitar a caixa
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                  />
                ) : (
                  <span className="text-5xl font-bold text-gray-300 group-hover/card:scale-110 group-hover/card:text-potentia-blue_main transition-all duration-500">
                    {doc.initial}
                  </span>
                )}

                <div className="absolute inset-0 bg-potentia-blue_main/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-potentia-dark text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-4 group-hover/card:translate-y-0 shadow-md">
                    Ver perfil
                  </span>
                </div>
              </div>

              {/* Textos do Médico */}
              <h3 className="text-lg font-bold text-potentia-dark group-hover/card:text-potentia-blue_main transition-colors">
                {doc.name}
              </h3>
              <p className="text-sm text-gray-500 font-medium mt-1 line-clamp-2">
                {doc.role}
              </p>
            </div>
          ))}
        </div>

        {/* Seta Direita */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-6 top-1/3 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-blue_main opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
          aria-label="Rolar para a direita"
        >
          <PiCaretRightBold className="text-2xl" />
        </button>
      </div>



      {/* 5. MODAL DE DETALHES DO PROFISSIONAL */}
      {selectedDoctor && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-potentia-dark/80 backdrop-blur-sm"
          onClick={() => setSelectedDoctor(null)}
        >
          {/* Seta Esquerda (Flutuante) */}
          <button
            onClick={handlePrevDoctor}
            className="hidden md:flex absolute left-8 z-50 w-14 h-14 bg-white/10 hover:bg-white text-white hover:text-potentia-dark rounded-full items-center justify-center backdrop-blur-md transition-all"
          >
            <PiCaretLeftBold className="text-2xl" />
          </button>

          <div
            // Ajuste aqui: max-h-[90vh] trava a altura máxima e overflow-hidden não deixa sobrar rodapé
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative animate-fade-in-up overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-500 hover:text-potentia-dark hover:bg-gray-100 transition-all shadow-sm"
            >
              <PiXBold className="text-xl" />
            </button>

            {/* Lado Esquerdo: Foto (Travada para acompanhar a altura do texto) */}
            <div className="w-full md:w-2/5 h-64 md:h-auto bg-gray-100 relative shrink-0">
              {selectedDoctor.image ? (
                <img
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-bold text-gray-300">
                    {selectedDoctor.initial}
                  </span>
                </div>
              )}
            </div>

            {/* Lado Direito: Informações e Currículo (Onde ocorre o scroll) */}
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col overflow-y-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-potentia-blue_main mb-2 block">
                {selectedDoctor.role}
              </span>
              <h3 className="text-3xl font-serif text-potentia-dark mb-6">
                {selectedDoctor.name}
              </h3>

              <div className="prose prose-sm text-gray-600 leading-relaxed">
                {selectedDoctor.bio ? (
                  <p className="whitespace-pre-line">{selectedDoctor.bio}</p>
                ) : (
                  <p className="italic text-gray-400">
                    O mini-currículo deste profissional estará disponível em
                    breve.
                  </p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 shrink-0">
                <button
                  onClick={() => {
                    document
                      .getElementById("triage")
                      ?.scrollIntoView({ behavior: "smooth" });
                    window.open(
                      "https://wa.me/5511940271099?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Potentia%20e%20gostaria%20de%20iniciar%20minha%20triagem.",
                      "_blank",
                    );
                    setSelectedDoctor(null);
                  }}
                  className="bg-potentia-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-potentia-blue_main transition-colors w-full md:w-auto"
                >
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>

          {/* Seta Direita (Flutuante) */}
          <button
            onClick={handleNextDoctor}
            className="hidden md:flex absolute right-8 z-50 w-14 h-14 bg-white/10 hover:bg-white text-white hover:text-potentia-dark rounded-full items-center justify-center backdrop-blur-md transition-all"
          >
            <PiCaretRightBold className="text-2xl" />
          </button>
        </div>
      )}
    </section>
  );
}
