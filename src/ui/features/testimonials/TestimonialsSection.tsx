import { PiStarFill } from 'react-icons/pi';
import { TESTIMONIALS } from '@/infrastructure/content/testimonials';

export default function TestimonialsSection() {
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
          {TESTIMONIALS.map((review) => (
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
                  <h4 className="font-bold text-potentia-dark text-sm">{review.authorName}</h4>
                  <span className="text-xs text-potentia-green font-medium">{review.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}