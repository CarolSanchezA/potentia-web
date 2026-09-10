import type { Professional } from "@/domain/professional/Professional";
import { getInitials } from "@/domain/professional/Professional";

interface ProfessionalCardProps {
  professional: Professional;
  onSelect: (professional: Professional) => void;
}

/** Card do profissional dentro do carrossel da equipe. */
export default function ProfessionalCard({
  professional,
  onSelect,
}: ProfessionalCardProps) {
  return (
    <div
      onClick={() => onSelect(professional)}
      // Largura fixa (w-) em vez de min-w para o card não esticar.
      className="snap-center w-[75vw] md:w-[280px] flex-shrink-0 group/card cursor-pointer"
    >
      {/* Foto (caixa travada na proporção 4:5) */}
      <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl flex items-center justify-center mb-5 overflow-hidden relative border border-gray-100 shadow-sm w-full">
        {professional.photo ? (
          <img
            src={professional.photo}
            alt={professional.name}
            // 'absolute inset-0' obriga a imagem a respeitar a caixa.
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
          />
        ) : (
          <span className="text-5xl font-bold text-gray-300 group-hover/card:scale-110 group-hover/card:text-potentia-blue_main transition-all duration-500">
            {getInitials(professional)}
          </span>
        )}

        <div className="absolute inset-0 bg-potentia-blue_main/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white text-potentia-dark text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-300 translate-y-4 group-hover/card:translate-y-0 shadow-md">
            Ver perfil
          </span>
        </div>
      </div>

      {/* Nome e especialidade */}
      <h3 className="text-lg font-bold text-potentia-dark group-hover/card:text-potentia-blue_main transition-colors">
        {professional.name}
      </h3>
      <p className="text-sm text-gray-500 font-medium mt-1 line-clamp-2">
        {professional.role}
      </p>
    </div>
  );
}
