import { ReactNode, useEffect } from "react";
import { PiXBold } from "react-icons/pi";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  // Fecha com ESC e trava o scroll do fundo enquanto o modal está aberto
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose} // clicar fora fecha
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-8 text-gray-800 shadow-xl"
        onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <PiXBold size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}