import { useRef } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

export default function Team() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320; 
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const doctors = [
    { name: "Dr. Carlos Mendes", role: "Diretor Clínico / Cardiologia", initial: "CM" },
    { name: "Dra. Ana Rodrigues", role: "Pediatria Geral", initial: "AR" },
    { name: "Dr. Ricardo Santos", role: "Ortopedia Desportiva", initial: "RS" },
    { name: "Dra. Sofia Almeida", role: "Nutrição Clínica", initial: "SA" },
    { name: "Dr. João Costa", role: "Fisioterapia e Reabilitação", initial: "JC" },
    { name: "Dra. Mariana Silva", role: "Psicologia Clínica", initial: "MS" },
    { name: "Dr. Pedro Oliveira", role: "Medicina Preventiva", initial: "PO" },
  ];

  return (
    <section id="team" className="bg-white py-20 md:py-28 overflow-hidden">
      
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
              
              className="snap-center min-w-[70vw] md:min-w-[280px] flex-shrink-0 group/card"
            >
              {/* Foto (Formato Retrato 4:5) */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl flex items-center justify-center mb-5 overflow-hidden relative border border-gray-100 shadow-sm">
                <span className="text-5xl font-bold text-gray-300 group-hover/card:scale-110 group-hover/card:text-potentia-green transition-all duration-500">
                  {doc.initial}
                </span>
                <div className="absolute inset-0 bg-potentia-green/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Textos do Médico */}
              <h3 className="text-lg font-bold text-potentia-dark">{doc.name}</h3>
              <p className="text-sm text-potentia-green font-medium mt-1">{doc.role}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-6 top-1/3 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-green opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
          aria-label="Rolar para a direita"
        >
          <PiCaretRightBold className="text-2xl" />
        </button>

      </div>
    </section>
  );
}