import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111b21] font-sans selection:bg-[#1a5f6a] selection:text-white antialiased">
      {/* O wrapper principal garante que a página ocupe todo o ecrã e define a cor de fundo base */}
      {/* A nossa barra de navegação fica no topo */}
      <Navbar />

      {/* A tag <main> envolverá todas as secções da página */}
      <main>
        <Hero />
        
        {/* À medida que criarmos as próximas secções (TrustBar, Equipa, etc), elas serão importadas e colocadas exatamente aqui */}
      </main>
      
    </div>
  );
}