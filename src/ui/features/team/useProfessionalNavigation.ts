import { useCallback, useState } from "react";
import type { Professional } from "@/domain/professional/Professional";
import { useEscapeKey } from "@/ui/hooks/useEscapeKey";

/**
 * Estado de qual profissional está aberto no detalhe, e navegação circular
 * entre eles.
 *
 * Separado do componente para que TeamSection cuide apenas de composição: a
 * regra de "qual é o próximo" não depende de nada visual e pode ser testada
 * sem renderizar React.
 */
export function useProfessionalNavigation(
  professionals: readonly Professional[],
) {
  const [selected, setSelected] = useState<Professional | null>(null);

  const select = useCallback((professional: Professional) => {
    setSelected(professional);
  }, []);

  const close = useCallback(() => setSelected(null), []);

  const step = useCallback(
    (delta: number) => {
      setSelected((current) => {
        if (!current || professionals.length === 0) return current;

        const index = professionals.findIndex((p) => p.id === current.id);
        if (index === -1) return current;

        const target =
          (index + delta + professionals.length) % professionals.length;
        return professionals[target];
      });
    },
    [professionals],
  );

  const next = useCallback(() => step(1), [step]);
  const previous = useCallback(() => step(-1), [step]);

  // ESC só precisa escutar enquanto há alguém aberto.
  useEscapeKey(close, selected !== null);

  return { selected, select, close, next, previous };
}
