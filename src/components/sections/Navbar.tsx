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

       {/* Links (O link Triagem continua com o #triagem para rolar a página) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#team" className="hover:text-potentia-green transition-colors">Equipe</a>
          {/* ESTE desce para a secção explicativa: */}
          <a href="#triage" className="hover:text-potentia-green transition-colors">Triagem</a>
          <a href="#" className="hover:text-potentia-green transition-colors">Conversas</a>
          <a href="#faq" className="hover:text-potentia-green transition-colors">FAQ</a>
        </div>

        {/* Botão de Ação Principal - Voltamos a usar a tag <button> */}
        {/* Já deixamos um onClick preparado para receber a chamada da API do WhatsApp */}
        <button 
          onClick={() => console.log('Chamar API do WhatsApp aqui')}
          className="bg-potentia-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          Fazer minha triagem
        </button>
      </div>
    </nav>
  );
}
