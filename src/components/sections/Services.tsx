export default function Services() {
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
    <section className="bg-potentia-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-potentia-green bg-potentia-green/10 px-3 py-1 rounded-full">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-potentia-dark mt-6 leading-tight">
            Cuidados Médicos Completos Para Toda a Família
          </h2>
        </div>
      </div>

      {/* Contentor do Scroll Horizontal */}
      {/* Adicionamos margens laterais no mobile para o scroll não cortar abruptamente */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar">
        {services.map((svc) => (
          <div 
            key={svc.id} 
            // O snap-center garante que o card para exatamente no meio do ecrã no telemóvel
            // O min-w define larguras específicas para telemóvel vs desktop
            className="snap-center min-w-[85vw] md:min-w-[320px] bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-potentia-green/30 transition-all duration-300 group flex-shrink-0"
          >
            <div className="w-12 h-12 rounded-xl bg-potentia-green/10 flex items-center justify-center mb-6 group-hover:bg-potentia-green transition-colors duration-300">
              <span className="text-xl font-bold text-potentia-green group-hover:text-white">
                {svc.id}
              </span>
            </div>
            <h3 className="text-lg font-bold text-potentia-dark mb-3">{svc.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}