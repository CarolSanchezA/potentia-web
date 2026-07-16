export default function Hero() {
  return (
    // 1. O Outer Wrapper (Capa Externa): 
    // Controla apenas a cor de fundo e garante que estica de ponta a ponta (w-full).
    <section className="bg-white w-full">
      
      {/* 2. O Inner Wrapper (Contentor Interno): 
          Segura o conteúdo no meio da tela (max-w-7xl mx-auto) e faz o Flexbox. */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-28 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        
        {/* Coluna da Esquerda (Texto) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <span className="bg-[#E4F1EE] text-potentia-blue_main text-xs font-bold px-4 py-1.5 rounded-full mb-6">
            Triagem via WhatsApp · gratuita
          </span>

          <h1 className="text-5xl md:text-7xl font-serif text-potentia-dark leading-tight mb-6">
            Sua triagem <br />
            começa numa <br />
            <span className="italic text-potentia-blue_main">conversa.</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
            Sem formulários longos. Só uma mensagem. A Potentia ouve o seu momento
            e indica o profissional certo da nossa equipe multidisciplinar.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.open("https://wa.me/5511913020039?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Potentia%20e%20gostaria%20de%20iniciar%20minha%20triagem.", "_blank")}
              className="bg-potentia-blue_deep text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Fazer minha triagem
            </button>

            <a href="#team" className="border border-potentia-blue_main text-potentia-blue_main px-8 py-4 rounded-full font-medium hover:bg-potentia-blue_main hover:text-white transition-all">
              Ver a equipe
            </a>
          </div>
          <p className="text-xs text-black-400 mt-4">
            resposta em até 15min · sem compromisso
          </p>
        </div>

        {/* Coluna da Direita (Mockup do Celular) */}
        <div className="w-full lg:w-1/2 relative flex justify-center">
          <div className="absolute -top-4 right-8 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-medium text-gray-600 z-10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-potentia-blue_deep"></span>
            assim que vai ser
          </div>

          {/* O "Celular" */}
          <div className="w-full max-w-md bg-potentia-chat rounded-[2rem] shadow-xl overflow-hidden border-8 border-white relative">
            
            {/* Header do WhatsApp */}
            <div className="bg-potentia-blue_main px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-potentia-blue_main font-serif font-bold text-xl">
                  P
                </span>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Potentia</h3>
                <p className="text-white/80 text-xs">online agora</p>
              </div>
            </div>

            {/* Área das Mensagens */}
            <div className="p-6 flex flex-col gap-4">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-700">
                  Oi! 👋 Que bom ter você aqui.
                </p>
              </div>
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-700">
                  Me conta um pouco do que você está buscando?
                </p>
              </div>

              <div className="bg-potentia-bubble p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] self-end">
                <p className="text-sm text-gray-800">
                  Tenho sentido dores no ombro há semanas, queria entender o que
                  pode ser.
                </p>
              </div>

              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[90%]">
                <p className="text-sm text-gray-700">
                  Entendi. Posso te conectar com a fisio — ela tem horário
                  ainda essa semana.
                </p>
              </div>

              <div className="bg-potentia-bubble p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[60%] self-end">
                <p className="text-sm text-gray-800">Pode ser! 🙏</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}