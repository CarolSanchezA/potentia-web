import { PiStarFill } from 'react-icons/pi';

export default function Reviews() {
  const reviews = [
    { 
      id: 1, 
      initials: "M. S.", 
      text: "Acolhimento excepcional desde o primeiro contato. Senti-me seguro para falar sobre as minhas ansiedades sem qualquer julgamento. A equipa é fantástica.", 
      tag: "Paciente Verificado" 
    },
    { 
      id: 2, 
      initials: "J. R.", 
      text: "A facilidade da triagem inicial ajudou-me a dar o primeiro passo, que era o mais difícil. O plano de tratamento mudou a minha qualidade de vida.", 
      tag: "Paciente Verificado" 
    },
    { 
      id: 3, 
      initials: "A. C.", 
      text: "Profissionais de altíssimo nível. A comunicação fluida entre o psiquiatra e o psicólogo no mesmo espaço fez toda a diferença no meu diagnóstico.", 
      tag: "Paciente Verificado" 
    }
  ];

  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-potentia-green bg-potentia-green/10 px-3 py-1 rounded-full">
            Feedbacks
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-potentia-dark mt-6 leading-tight">
            Histórias de quem já transformou a sua vida
          </h2>
        </div>

        {/* Grelha de Feedbacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-potentia-bg/50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Estrelas */}
                <div className="flex gap-1 mb-6 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <PiStarFill key={i} className="text-lg" />
                  ))}
                </div>
                
                {/* Texto da Avaliação */}
                <p className="text-gray-600 text-sm leading-relaxed italic mb-8">
                  "{review.text}"
                </p>
              </div>

              {/* Rodapé do Card (Iniciais e Tag) */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-potentia-green text-white flex items-center justify-center font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-potentia-dark text-sm">{review.initials}</h4>
                  <span className="text-xs text-potentia-green font-medium">{review.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}