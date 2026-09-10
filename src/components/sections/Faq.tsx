import { useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';
import { FAQ_ENTRIES } from '@/infrastructure/content/faqEntries';

export default function Faq() {
  // Primeira pergunta aberta por padrão.
  const [openId, setOpenId] = useState<string | null>(FAQ_ENTRIES[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };


  return (
    <section id="faq" className="bg-transparent py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-potentia-blue_main bg-potentia-blue_main/10 px-3 py-1 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-potentia-blue_deep mt-6 leading-tight">
            Clareza e acolhimento para o seu cuidado
          </h2>
          <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
            É natural ter receios ou dúvidas antes de dar o primeiro passo. Por isso, reunimos as perguntas mais comuns para oferecer a você total transparência e tranquilidade sobre o nosso modelo de atendimento.
          </p>
        </div>

        {/* Lista de Perguntas*/}
        <div className="space-y-4">
          {FAQ_ENTRIES.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}

                className={`border-2 rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white border-potentia-blue_main shadow-md' 
                    : 'bg-transparent border-gray-300 hover:border-potentia-blue_main shadow-sm'
                }`}
              >
                {/* Botão da Pergunta */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className={`font-bold transition-colors duration-300 ${isOpen ? 'text-potentia-blue_main' : 'text-potentia-dark'}`}>
                    {faq.question}
                  </h3>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-potentia-blue_main/10 text-potentia-blue_main' : 'bg-gray-200 text-gray-600'}`}>
                    <PiCaretDownBold />
                  </div>
                </button>

                {/* Resposta */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mb-5' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 text-sm text-gray-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}