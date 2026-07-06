export default function Triage() {
  const steps = [
    {
      number: "01",
      title: "O Primeiro Contato",
      desc: "Basta enviar uma mensagem simples pelo WhatsApp. Você nos conta o seu momento de forma rápida, direta e sem burocracia.",
    },
    {
      number: "02",
      title: "Triagem Inteligente",
      desc: "Nosso sistema inteligente conduz um mapeamento dinâmico. Por meio de perguntas estratégicas, compreendemos o seu quadro, suas demandas e seus objetivos com precisão.",
    },
    {
      number: "03",
      title: "O Especialista Certo",
      desc: "Com base no seu relato, nossa equipe assume o atendimento e direciona você para o profissional mais adequado. Tudo desenhado com um único objetivo: fazer você alcançar o seu verdadeiro potencial.",
    }
  ];

  return (
    <section id="triage" className="bg-white py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-potentia-blue_main bg-potentia-blue_main/10 px-3 py-1 rounded-full">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-potentia-blue_deep mt-6 leading-tight">
            A sua saúde no caminho certo, desde o primeiro minuto.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center md:items-start md:text-left group">
                
                <div className="w-16 h-16 rounded-full bg-potentia-bg border-4 border-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-potentia-blue_main transition-colors duration-300">
                  <span className="text-xl font-bold text-potentia-blue_main group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Textos */}
                <h3 className="text-xl font-bold text-potentia-blue_deep mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>

              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => window.open("https://wa.me/5511940271099?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Potentia%20e%20gostaria%20de%20iniciar%20minha%20triagem.", "_blank")}
            className="bg-potentia-dark text-white px-8 py-4 rounded-full font-medium hover:bg-potentia-blue_main transition-all duration-300 flex items-center gap-2 shadow-md"
          >
            Começar a minha triagem agora
            
          </button>
        </div>

      </div>
    </section>
  );
}