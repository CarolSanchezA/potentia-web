export default function Team() {
  const doctors = [
    { name: "Dr. Carlos Mendes", role: "Diretor Clínico / Cardiologia", initial: "CM" },
    { name: "Dra. Ana Rodrigues", role: "Pediatria Geral", initial: "AR" },
    { name: "Dr. Ricardo Santos", role: "Ortopedia Desportiva", initial: "RS" },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a5f6a]">
              A Nossa Equipa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111b21] mt-2 tracking-tight">
              Profissionais Altamente Qualificados
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Médicos especialistas dedicados a oferecer um atendimento humanizado, ético e baseado em evidências científicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4 overflow-hidden relative border border-gray-100">
                <span className="text-5xl font-bold text-gray-400 group-hover:scale-110 transition-transform duration-300">
                  {doc.initial}
                </span>
                <div className="absolute inset-0 bg-[#1a5f6a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#111b21]">{doc.name}</h3>
              <p className="text-sm text-[#1a5f6a] font-medium mt-0.5">{doc.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}