import { PiWhatsappLogoBold } from "react-icons/pi";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511940271099?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Potentia%20e%20gostaria%20de%20iniciar%20minha%20triagem."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar com a triagem no WhatsApp"
    >
      {/* Efeito de onda/pulso atrás do botão para chamar a atenção */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-0 transition-opacity"></span>

      {/* Ícone */}
      <PiWhatsappLogoBold className="text-3xl relative z-10" />
    </a>
  );
}
