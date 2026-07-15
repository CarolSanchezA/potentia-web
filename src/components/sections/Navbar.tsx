import logo from "@/assets/logo.png"; // Exemplo de ícone de árvore

export default function Navbar() {
  return (
    <nav className="w-full py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo da Clínica Potentia"
            className="h-20 w-auto object-contain"
          />
          <span className="font-serif text-2xl tracking-widest text-potentia-blue_main uppercase">
            Potentia
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#team" className="hover:text-potentia-blue_main transition-colors">Equipe</a>
          <a href="#triage" className="hover:text-potentia-blue_main transition-colors">Triagem</a>
          <a href="#reviews" className="hover:text-potentia-blue_main transition-colors">Feedback</a>
          <a href="#faq" className="hover:text-potentia-blue_main transition-colors">FAQ</a>
        </div>

       
        <button
          onClick={() => window.open("https://wa.me/5511913020039?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Potentia%20e%20gostaria%20de%20iniciar%20minha%20triagem.", "_blank")}
          className="bg-potentia-blue_main text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          Fazer minha triagem
        </button>
      </div>
    </nav>
  );
}
