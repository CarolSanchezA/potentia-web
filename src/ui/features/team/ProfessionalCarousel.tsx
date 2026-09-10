import { useRef, type ReactNode } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

/** Distância percorrida por clique nas setas, em pixels. */
const SCROLL_STEP = 320;

interface ProfessionalCarouselProps {
  children: ReactNode;
}

/**
 * Faixa horizontal com scroll por snap e setas laterais.
 *
 * Não sabe o que está rolando dentro dele — recebe `children`. Isso mantém a
 * mecânica de scroll separada do conteúdo e permite reaproveitá-la.
 */
export default function ProfessionalCarousel({
  children,
}: ProfessionalCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "left" ? -SCROLL_STEP : SCROLL_STEP,
      behavior: "smooth",
    });
  };

  return (
    // 'group' aqui é o que revela as setas no hover.
    <div className="max-w-7xl mx-auto relative group">
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute -left-6 top-1/3 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-blue_main opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
        aria-label="Rolar para a esquerda"
      >
        <PiCaretLeftBold className="text-2xl" />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-2 py-4 hide-scrollbar"
      >
        {children}
      </div>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute -right-6 top-1/3 -translate-y-1/2 z-10 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-potentia-dark hover:text-potentia-blue_main opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
        aria-label="Rolar para a direita"
      >
        <PiCaretRightBold className="text-2xl" />
      </button>
    </div>
  );
}
