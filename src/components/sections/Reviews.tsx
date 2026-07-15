import { PiStarFill } from 'react-icons/pi';

export default function Reviews() {
  const reviews = [
    { 
      id: 1, 
      initials: "Maria Cristina", 
      text: `Faço acompanhamento com a Luana a alguns anos e sou muito grata por ser acompanhada por alguém tão acolhedora e assertiva.
Com certeza grande parte do meu progresso deve ser evidenciado pelo tratamento que recebo e consigo recomendar com muita segurança para que se abram a terapia com essa profissional ❤.`, 
      tag: "Paciente Verificado" 
    },
    { 
      id: 2, 
      initials: "Laís Lanzieri", 
      text: `A Débora sempre atende minha filha com muito amor, acolhimento e paciência. Isso faz toda diferença para quem tem bebê! Já fizemos tratamento com acupuntura e sessões de laser, e ajudou muito na melhora de sintomas associados a nascimento de dentes e também na época em que teve mão, pé e boca.`, 
      tag: "Paciente Verificado" 
    },
    { 
      
      initials: "Rebecca Requena", 
      text: "Estou com a Ísis desde Agosto de 2024, e eu falo que não vivo mais sem minha sessão de terapia. Ela é uma pessoa que você pode falar e ser exatamente do jeito que é, pode mostrar sem filtro tudo o que pensa, ela te dá esse conforto na sessão sem julgamentos. Eu sou outra pessoa desde que comecei com ela, desmistifiquei coisas, mudei opiniões, e ela fez eu me entender e me conhecer melhor, saber o por que faço o que faço, olhar as coisas com outros olhos, analisar situações, e ser uma pessoa consequentemente muito mais tranquila. Eu AMO essa mulher, e falo que não largo ela por nada nesse mundo!", 
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