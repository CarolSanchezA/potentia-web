import { useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Deixamos a primeira aberta por padrão

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como sei se é o momento de procurar ajuda psiquiátrica?",
      answer: "Se está a sentir sintomas que impactam a sua rotina, como tristeza profunda, ansiedade constante, alterações extremas de humor, insónia ou dificuldade de concentração que não passam. Não precisa de estar 'no limite' para pedir ajuda; a prevenção é o melhor caminho."
    },
    {
      question: "Qual a diferença entre o psiquiatra e o psicólogo?",
      answer: "O psiquiatra é um médico especializado na biologia e química do cérebro, sendo o único que pode diagnosticar transtornos e prescrever medicação. O psicólogo foca-se na psicoterapia e no comportamento. Na Potentia, ambos trabalham em equipa para o seu bem-estar."
    },
    {
      question: "Os medicamentos psiquiátricos causam dependência?",
      answer: "Este é um mito muito comum. A grande maioria dos medicamentos modernos (como os antidepressivos) não causa dependência. Os poucos que têm esse potencial são prescritos com rigoroso controlo e apenas por curtos períodos. O nosso foco é sempre o tratamento seguro."
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta é uma conversa de acolhimento. O médico fará perguntas sobre o seu histórico de saúde, estilo de vida e o que o(a) trouxe até nós. É um ambiente seguro, sem julgamentos e 100% confidencial, para construirmos juntos um plano de cuidado."
    },
    {
      question: "As minhas informações são mantidas em sigilo?",
      answer: "Absolutamente. Seguimos rigorosamente o sigilo médico e as leis de proteção de dados. Tudo o que é conversado em consultório é estritamente confidencial e não é partilhado sem o seu consentimento explícito."
    }
  ];

  return (
    <section id="faq" className="bg-potentia-bg py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-potentia-green bg-potentia-green/10 px-3 py-1 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-potentia-dark mt-6 leading-tight">
            Desmistificando a Saúde Mental
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            É normal ter receios antes de dar o primeiro passo. Reunimos as perguntas mais comuns dos nossos pacientes para lhe dar clareza e tranquilidade.
          </p>
        </div>

        {/* Lista de Perguntas*/}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                
                className={`border-2 rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-white border-potentia-green shadow-md' 
                    : 'bg-transparent border-gray-300 hover:border-potentia-green'
                }`}
              >
                {/* Botão da Pergunta */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className={`font-bold transition-colors duration-300 ${isOpen ? 'text-potentia-green' : 'text-potentia-dark'}`}>
                    {faq.question}
                  </h3>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-potentia-green/10 text-potentia-green' : 'bg-gray-200 text-gray-600'}`}>
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