import potentiaLogo from "@/assets/potentiaLogo.png"; // Exemplo de ícone de árvore

export default function Navbar() {
  return (
    <nav className="w-full py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={potentiaLogo}
            alt="Logo da Clínica Potentia"
            className="h-20 w-auto object-contain"
          />
          <span className="font-serif text-2xl tracking-widest text-potentia-dark uppercase">
            Potentia
          </span>
        </div>

        {/* Links (Escondidos no telemóvel) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-potentia-green transition-colors">
            Equipe
          </a>
          <a href="#" className="hover:text-potentia-green transition-colors">
            Triagem
          </a>
          <a href="#" className="hover:text-potentia-green transition-colors">
            Conversas
          </a>
          <a href="#" className="hover:text-potentia-green transition-colors">
            FAQ
          </a>
        </div>

        {/* Botão */}
        <button className="bg-potentia-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all flex items-center gap-2">
          Fazer minha triagem
        </button>
      </div>
    </nav>
  );
}
