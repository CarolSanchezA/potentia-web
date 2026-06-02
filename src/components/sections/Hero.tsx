import { FiArrowRight, FiShield, FiClock } from 'react-icons/fi';
import { WHATSAPP_LINK, CTA_LABEL } from '../../data/content';
import Bubble from '../ui/Bubble';
import Reveal from '../ui/Reveal';
import Eyebrow from '../ui/Eyebrow';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#f8fcfb] to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Coluna da Esquerda: Textos e Call to Action */}
        <Reveal>
          <div className="max-w-xl">
            <Eyebrow text="Acesso Simplificado à Saúde" />
            
            <h1 className="text-[44px] md:text-[56px] leading-[1.1] font-bold text-[#111b21] tracking-tight mb-6 font-sans">
              O seu cuidado ideal começa com um <span className="text-[#1a5f6a]">simples Olá.</span>
            </h1>
            
            <p className="text-[18px] md:text-[20px] text-gray-600 mb-10 leading-relaxed">
              Não perca tempo a adivinhar qual o especialista que precisa. Converse com a nossa triagem e nós encaminhamos o seu caso para o profissional certo da nossa equipa multidisciplinar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#25d366] text-white rounded-full font-bold text-[17px] hover:bg-[#20bd5a] hover:scale-[1.02] transition-all shadow-[0_8px_20px_rgba(37,211,102,0.3)]"
              >
                {CTA_LABEL}
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-[14px] text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e8f5f3] text-[#1a5f6a] flex items-center justify-center"><FiShield className="w-4 h-4" /></div>
                <span>Triagem 100% gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#e8f5f3] text-[#1a5f6a] flex items-center justify-center"><FiClock className="w-4 h-4" /></div>
                <span>Resposta em ~15 min</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Coluna da Direita: Mockup do Telemóve(WhatsApp */}
        <Reveal delay={200}>
          <div className="relative mx-auto max-w-[340px] lg:ml-auto perspective-1000">
            {/* Elemento de fundo para dar brilho */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#25d366]/20 to-[#1a5f6a]/20 blur-2xl rounded-full"></div>
            
            <div className="relative bg-[#efeae2] rounded-[40px] shadow-2xl border-[8px] border-white overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-700">
              {/* Header do Mockup */}
              <div className="bg-[#075e54] text-white px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-serif italic text-lg">P</div>
                <div>
                  <div className="font-semibold text-[15px]">Triagem Potentia</div>
                  <div className="text-[12px] text-white/80">Online agora</div>
                </div>
              </div>

              {/* Corpo do Chat */}
              <div className="p-5 flex flex-col gap-4 bg-[url('https://i.imgur.com/3q1y4i1.png')] bg-cover bg-center h-[380px]">
                <Bubble type="out" text="Olá! Gostaria de fazer a minha triagem." time="10:02" />
                <Bubble type="in" text="Olá! Seja bem-vindo(a) à Potentia. Sou o assistente de triagem." time="10:02" />
                <Bubble type="in" text="Para começarmos, poderia descrever brevemente o que tem sentido nas últimas semanas?" time="10:03" />
                <Bubble type="out" text="Tenho tido muitas dores de cabeça e tensão no pescoço..." time="10:05" />
              </div>

              {/* Input Falso do Mockup */}
              <div className="bg-[#f0f0f0] p-3 flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full h-10 px-4 text-gray-400 text-sm flex items-center">
                  Mensagem...
                </div>
                <div className="w-10 h-10 bg-[#00a884] rounded-full flex items-center justify-center text-white">
                  <FiArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}