export default function Footer() {
  return (
    <footer className="bg-[#111b21] text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-white font-bold text-lg tracking-tight">POTENTIA</span>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Clínica Potentia. Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}