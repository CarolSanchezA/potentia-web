import { PiCaretLeftBold, PiCaretRightBold, PiXBold } from "react-icons/pi";
import type { Professional } from "@/domain/professional/Professional";
import { getInitials } from "@/domain/professional/Professional";
import { openTriageChannel } from "@/infrastructure/triage/whatsAppChannel";

interface ProfessionalModalProps {
  professional: Professional;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

/**
 * Detalhe do profissional: foto, mini-currículo e CTA de agendamento.
 *
 * Tem layout próprio (foto lateral e setas flutuantes) e por isso não reusa o
 * Modal genérico de `components/sections/Modal.tsx`. O que os dois compartilham
 * — fechar no ESC — está no hook `useEscapeKey`.
 */
export default function ProfessionalModal({
  professional,
  onClose,
  onNext,
  onPrevious,
}: ProfessionalModalProps) {
  const handleSchedule = () => {
    document.getElementById("triage")?.scrollIntoView({ behavior: "smooth" });
    openTriageChannel();
    onClose();
  };

  // As setas ficam sobre o backdrop, que fecha no clique: sem o stopPropagation
  // navegar entre perfis fecharia o modal.
  const withoutClosing = (action: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    action();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-potentia-dark/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={withoutClosing(onPrevious)}
        aria-label="Ver profissional anterior"
        className="hidden md:flex absolute left-8 z-50 w-14 h-14 bg-white/10 hover:bg-white text-white hover:text-potentia-dark rounded-full items-center justify-center backdrop-blur-md transition-all"
      >
        <PiCaretLeftBold className="text-2xl" />
      </button>

      <div
        // max-h-[90vh] trava a altura e overflow-hidden evita sobra de rodapé.
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row relative animate-fade-in-up overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-500 hover:text-potentia-dark hover:bg-gray-100 transition-all shadow-sm"
        >
          <PiXBold className="text-xl" />
        </button>

        {/* Foto, travada para acompanhar a altura do texto */}
        <div className="w-full md:w-2/5 h-64 md:h-auto bg-gray-100 relative shrink-0">
          {professional.photo ? (
            <img
              src={professional.photo}
              alt={professional.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-bold text-gray-300">
                {getInitials(professional)}
              </span>
            </div>
          )}
        </div>

        {/* Informações e currículo (área que rola) */}
        <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col overflow-y-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-potentia-blue_main mb-2 block">
            {professional.role}
          </span>
          <h3 className="text-3xl font-serif text-potentia-dark mb-6">
            {professional.name}
          </h3>

          <div className="prose prose-sm text-gray-600 leading-relaxed">
            {professional.bio ? (
              <p className="whitespace-pre-line">{professional.bio}</p>
            ) : (
              <p className="italic text-gray-400">
                O mini-currículo deste profissional estará disponível em breve.
              </p>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 shrink-0">
            <button
              onClick={handleSchedule}
              className="bg-potentia-dark text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-potentia-blue_main transition-colors w-full md:w-auto"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={withoutClosing(onNext)}
        aria-label="Ver próximo profissional"
        className="hidden md:flex absolute right-8 z-50 w-14 h-14 bg-white/10 hover:bg-white text-white hover:text-potentia-dark rounded-full items-center justify-center backdrop-blur-md transition-all"
      >
        <PiCaretRightBold className="text-2xl" />
      </button>
    </div>
  );
}
