import logo from "@/assets/logo.jpeg"; // Exemplo de ícone de árvore

export default function Navbar() {
  return (
    // Reduzi um pouco o py-6 para py-4 no mobile
    <nav className="w-full py-4 md:py-6">
      {/* Adicionei 'gap-4' para garantir que os elementos nunca se encostem */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        
        {/* Logo e Nome */}
        {/* shrink-0 impede que o container da logo seja esmagado */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Logo da Clínica Potentia"
            // Reduzimos para h-12 no mobile e mantemos h-20 em telas médias/grandes
            className="h-12 md:h-20 w-auto object-contain"
          />
          <span className="font-serif text-base md:text-2xl tracking-wider md:tracking-widest text-potentia-blue_main uppercase">
            Potentia
          </span>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#team" className="hover:text-potentia-blue_main transition-colors">Equipe</a>
          <a href="#triage" className="hover:text-potentia-blue_main transition-colors">Triagem</a>
          <a href="#reviews" className="hover:text-potentia-blue_main transition-colors">Feedback</a>
          <a href="#faq" className="hover:text-potentia-blue_main transition-colors">FAQ</a>
        </div>

        {/* Botão */}
        <button
          onClick={() => window.open("https://wa.me/5511913020039?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Potentia%20e%20gostaria%20de%20iniciar%20minha%20triagem.", "_blank")}
          // Padding (px/py) e fonte (text-xs) reduzidos no mobile para caber perfeitamente
          className="bg-potentia-blue_main text-white px-3 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0 text-center"
        >
          Fazer minha triagem
        </button>
      </div>
    </nav>
  );
}