import { PROFESSIONALS } from "@/infrastructure/content/professionals";
import ProfessionalCard from "./ProfessionalCard";
import ProfessionalCarousel from "./ProfessionalCarousel";
import ProfessionalModal from "./ProfessionalModal";
import { useProfessionalNavigation } from "./useProfessionalNavigation";

/**
 * Seção "A Nossa Equipe".
 *
 * Responsabilidade única: compor cabeçalho, carrossel e detalhe. Os dados vêm
 * da infraestrutura, a navegação vem do hook e o desenho de cada peça vive no
 * seu próprio componente.
 */
export default function TeamSection() {
  const { selected, select, close, next, previous } =
    useProfessionalNavigation(PROFESSIONALS);

  return (
    <section id="team" className="bg-white py-20 md:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-potentia-blue_main bg-potentia-blue_deep/10 px-3 py-1 rounded-full">
              A Nossa Equipe
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-potentia-blue_deep mt-6 leading-tight">
              Profissionais Altamente Qualificados
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-2">
            Especialistas dedicados a oferecer um atendimento
            humanizado, ético e baseado em evidências científicas.
          </p>
        </div>
      </div>

      <ProfessionalCarousel>
        {PROFESSIONALS.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            professional={professional}
            onSelect={select}
          />
        ))}
      </ProfessionalCarousel>

      {selected && (
        <ProfessionalModal
          professional={selected}
          onClose={close}
          onNext={next}
          onPrevious={previous}
        />
      )}
    </section>
  );
}
