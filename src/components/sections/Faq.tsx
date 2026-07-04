import { useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Deixamos a primeira aberta por padrão

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
     {
      question: "Quais especialidades compõem a Potentia?",
      answer: "Para garantir um cuidado integrado e completo, contamos com profissionais altamente capacitados. Nossas especialidades incluem Psicologia, Neuropsicologia, Nutrição, Fonoaudiologia, Serviço Social e Terapias Integrativas."
    },
    {
      question: "Como funciona o primeiro contato e o agendamento?",
      answer: "Nosso primeiro contato é realizado de forma ágil via WhatsApp. Inicialmente, um sistema automatizado inteligente realiza uma triagem dinâmica para mapear suas necessidades e objetivos. Em seguida, um de nossos representantes assume o contato humano para finalizar o agendamento, garantindo o direcionamento preciso para o profissional mais indicado para sua necessidade."
    },
    {
      question: "Como saberei se estou evoluindo no acompanhamento?",
      answer: "Na Potentia, trabalhamos com métricas e dados concretos, eliminando suposições. Realizamos o acompanhamento gráfico contínuo da sua evolução clínica e do seu desempenho, permitindo que você visualize seus resultados de maneira transparente e objetiva ao longo do tempo."
    },
    {
      question: "Quais metodologias embasam os atendimentos?",
      answer: "Todas as nossas intervenções utilizam exclusivamente abordagens cientificamente comprovadas. Trabalhamos com métodos fundamentados em evidências rigorosas para garantir que o seu tratamento e o desenvolvimento da sua performance sejam seguros, mensuráveis e altamente eficazes."
    },
    {
      question: "Posso realizar apenas uma consulta pontual com outra especialidade?",
      answer: "Sim. Para isso, desenvolvemos o Potentia Sync. Trata-se de uma sessão única, de valor acessível, focada em destravamento de resultados. Se você já faz acompanhamento nutricional, por exemplo, mas sente que questões comportamentais estão limitando sua evolução, o Sync permite um mapeamento estratégico e direto com o profissional de Psicologia. Em apenas um encontro, alinhamos suas metas e entregamos um plano de ação claro."
    },
    {
      question: "Qual é o perfil dos profissionais?",
      answer: "Você será atendido por especialistas com sólida vivência prática em diferentes ambientes e níveis de complexidade. Nossa expertise abrange desde o contexto clínico até a alta complexidade do ambiente hospitalar, garantindo segurança e excelência técnica em todas as áreas de atuação."
    },
    {
      question: "Qual é o principal objetivo da Potentia?",
      answer: "Nosso propósito é fornecer as ferramentas e o acompanhamento necessários para que você alcance o seu máximo potencial. Entregamos um atendimento totalmente personalizado, respeitando a sua singularidade e desenhando estratégias que funcionam especificamente para você."
    },
    {
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Para sua comodidade e segurança, disponibilizamos as seguintes opções de pagamento: PIX, cartão de crédito e cartão de débito."
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
            Clareza e acolhimento para o seu cuidado
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            É natural ter receios ou dúvidas antes de dar o primeiro passo. Por isso, reunimos as perguntas mais comuns para oferecer a você total transparência e tranquilidade sobre o nosso modelo de atendimento.
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