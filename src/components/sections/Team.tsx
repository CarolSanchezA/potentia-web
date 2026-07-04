import { useRef, useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold, PiXBold } from 'react-icons/pi';

// Se estiver usando Vite/Next, importe a imagem da Luana no topo. 
// Exemplo: import luanaImg from '@/assets/luana.jpg';

export default function Team() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // 1. Estado para controlar qual médico está selecionado no modal
  type Doctor = {
    name: string;
    role: string;
    initial: string;
    image?: string | null;
    bio?: string;
  };

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320; 
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // 2. Atualizamos o array para incluir 'bio' e 'image'
  const doctors: Doctor[] = [
    {
      name: "Luana",
      role: "Neuropsicóloga",
      initial: "LU",
      image: null, // Troque 'null' pela variável da imagem importada (ex: luanaImg)
      bio: "Neuropsicóloga com atuação consolidada no diagnóstico e reabilitação de transtornos do neurodesenvolvimento (TEA, TDAH e Altas Habilidades) e quadros clínicos complexos. Com experiência no setor hospitalar e de urgência psiquiátrica, alia a técnica da Terapia Cognitivo-Comportamental (TCC) a uma abordagem humanizada e baseada em evidências. Atende adolescentes, adultos e idosos, oferecendo suporte especializado em regulação emocional, manejo de estresse e planejamento de carreira.",
    },
    { name: "Dr. Carlos Mendes", role: "Diretor Clínico / Cardiologia", initial: "CM", bio: "" },
    { name: "Dra. Ana Rodrigues", role: "Pediatria Geral", initial: "AR", bio: "" },
    { name: "Dr. Ricardo Santos", role: "Ortopedia Desportiva", initial: "RS", bio: "" },
    { name: "Dra. Sofia Almeida", role: "Nutrição Clínica", initial: "SA", bio: "" },
    { name: "Dr. João Costa", role: "Fisioterapia e Reabilitação", initial: "JC", bio: "" },
    { name: "Dra. Mariana Silva", role: "Psicologia Clínica", initial: "MS", bio: "" },
    { name: "Dr. Pedro Oliveira", role: "Medicina Preventiva", initial: "PO", bio: "" },
  ];

  return (
    <section id="team" className="bg-potentia-bg py-20 md:py-28 overflow-hidden relative">
      
      {/* Cabeçalho da Secção */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-potentia-green bg-potentia-green/10 px-3 py-1 rounded-full">
              A Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-potentia-dark mt-6 leading-tight">
              Profissionais Altamente Qualificados
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-2">
            Médicos especialistas dedicados a oferecer um atendimento humanizado, ético e baseado em evidências científicas.
          </p>
        </div>
      </div>

      {/* Contentor Principal com 'group' para o hover das setas */}
      <div className="max-w-7xl mx-auto relative group">
        
        {/* Seta Esquerda */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-6 top-1/3 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-green opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
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
              // 3. Adicionado onClick e cursor-pointer no card
              onClick={() => setSelectedDoctor(doc)}
              className="snap-center min-w-[70vw] md:min-w-[280px] flex-shrink-0 group/card cursor-pointer"
            >
              {/* Foto (Formato Retrato 4:5) */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl flex items-center justify-center mb-5 overflow-hidden relative border border-gray-100 shadow-sm">
                
                {/* 4. Renderização condicional: Mostra a imagem real se existir, senão mostra a sigla */}
                {doc.image ? (
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" />
                ) : (
                  <span className="text-5xl font-bold text-gray-300 group-hover/card:scale-110 group-hover/card:text-potentia-green transition-all duration-500">
                    {doc.initial}
                  </span>
                )}
                
                <div className="absolute inset-0 bg-potentia-green/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-potentia-dark text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-4 group-hover/card:translate-y-0 shadow-md">
                    Ver perfil
                  </span>
                </div>
              </div>
              
              {/* Textos do Médico */}
              <h3 className="text-lg font-bold text-potentia-dark group-hover/card:text-potentia-green transition-colors">{doc.name}</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">{doc.role}</p>
            </div>
          ))}
        </div>

        {/* Seta Direita */}
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-6 top-1/3 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-green opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
          aria-label="Rolar para a direita"
        >
          <PiCaretRightBold className="text-2xl" />
        </button>

      </div>

      {/* 5. MODAL DE DETALHES DO PROFISSIONAL */}
      {selectedDoctor && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-potentia-dark/60 backdrop-blur-sm"
          onClick={() => setSelectedDoctor(null)} // Fecha ao clicar fora
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche ele
          >
            {/* Botão de Fechar */}
            <button 
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-500 hover:text-potentia-dark hover:bg-gray-100 transition-all"
            >
              <PiXBold className="text-xl" />
            </button>

            {/* Lado Esquerdo: Foto no Modal */}
            <div className="w-full md:w-2/5 aspect-square md:aspect-auto bg-gray-100 flex items-center justify-center relative">
              {selectedDoctor.image ? (
                <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-7xl font-bold text-gray-300">
                  {selectedDoctor.initial}
                </span>
              )}
            </div>

            {/* Lado Direito: Informações e Currículo */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-potentia-green mb-2 block">
                {selectedDoctor.role}
              </span>
              <h3 className="text-3xl font-serif text-potentia-dark mb-6">
                {selectedDoctor.name}
              </h3>
              
              <div className="prose prose-sm text-gray-600 leading-relaxed">
                {selectedDoctor.bio ? (
                  <p>{selectedDoctor.bio}</p>
                ) : (
                  <p className="italic text-gray-400">O mini-currículo deste profissional estará disponível em breve.</p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button 
                  onClick={() => {/* Lógica para agendar, ex: rolar até a triagem */}}
                  className="bg-potentia-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-potentia-green transition-colors w-full md:w-auto"
                >
                  Agendar Consulta
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}