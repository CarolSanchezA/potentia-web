import { useRef } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'; 

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260; 
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const services = [
    { id: "01", title: "Clínica Médica", desc: "Acompanhamento preventivo e visão global da sua saúde." },
    { id: "02", title: "Cardiologia", desc: "Cuidado especializado para a saúde e longevidade do seu coração." },
    { id: "03", title: "Ortopedia", desc: "Prevenção e tratamento de lesões ósseas e musculares." },
    { id: "04", title: "Pediatria", desc: "Atenção integral ao desenvolvimento saudável do seu filho." },
    { id: "05", title: "Nutrição", desc: "Reeducação alimentar focada nos seus objetivos e bem-estar." },
    { id: "06", title: "Psicologia", desc: "Acolhimento e suporte especializado para a sua saúde mental." },
    { id: "07", title: "Fisioterapia", desc: "Reabilitação de movimentos, alívio de dores e ergonomia." },
  ];

  return (
    <section className="bg-potentia-bg py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-potentia-green bg-potentia-green/10 px-3 py-1 rounded-full">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-potentia-dark mt-6 leading-tight">
            Cuidados Médicos Completos Para Toda a Família
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative group">
        
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-green opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
          aria-label="Rolar para a esquerda"
        >
          <PiCaretLeftBold className="text-xl" />
        </button>

        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 md:px-2 py-4 hide-scrollbar"
        >
          {services.map((svc) => (
            <div 
              key={svc.id} 
              
              className="snap-center aspect-square min-w-[65vw] md:min-w-[200px] bg-white p-6 rounded-2xl border-2 border-gray-300 shadow-sm hover:shadow-md hover:border-potentia-green transition-all duration-300 flex flex-col justify-center flex-shrink-0 group/card"
            >
              <div className="w-10 h-10 rounded-xl bg-potentia-green/10 flex items-center justify-center mb-4 group-hover/card:bg-potentia-green transition-colors duration-300">
                <span className="text-lg font-bold text-potentia-green group-hover/card:text-white transition-colors duration-300">{svc.id}</span>
              </div>
              <h3 className="text-base font-bold text-potentia-dark mb-2">{svc.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">{svc.desc}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-green opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
          aria-label="Rolar para a direita"
        >
          <PiCaretRightBold className="text-xl" />
        </button>

      </div>
    </section>
  );
}