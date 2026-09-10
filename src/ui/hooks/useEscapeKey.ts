import { useEffect, useRef } from "react";

/**
 * Executa `onEscape` quando o usuário pressiona ESC.
 *
 * Antes desta refatoração, Modal e Team tinham cada um a sua cópia deste
 * listener. O handler é guardado em ref para que o listener seja registrado
 * uma única vez, mesmo quando o callback é recriado a cada render.
 */
export function useEscapeKey(onEscape: () => void, enabled: boolean = true): void {
  const handlerRef = useRef(onEscape);

  useEffect(() => {
    handlerRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handlerRef.current();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled]);
}
