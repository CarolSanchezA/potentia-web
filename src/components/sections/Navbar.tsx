import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {WHATSAPP_LINK, CTA_LABEL } from '../../data/content';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logótipo */}
        <a href="#" className="flex items-center gap-2">
          {/* Se não tiver a imagem da logo ainda, isto funciona como fallback */}
          <div className="w-10 h-10 bg-[#1a5f6a] rounded-xl flex items-center justify-center text-white font-serif italic text-xl">
            P
          </div>
          <span className="font-serif italic text-[26px] tracking-tight text-[#111b21]">
            Potentia
          </span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
          <a href="#como-funciona" className="hover:text-[#1a5f6a] transition-colors">Como funciona</a>
          <a href="#equipa" className="hover:text-[#1a5f6a] transition-colors">Especialidades</a>
          <a href="#duvidas" className="hover:text-[#1a5f6a] transition-colors">Dúvidas</a>
        </div>

        {/* Botão Desktop */}
        <a 
          href={WHATSAPP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center px-6 py-2.5 bg-[#1a5f6a] text-white rounded-full font-semibold text-[15px] hover:bg-[#134851] transition-colors"
        >
          {CTA_LABEL}
        </a>

        {/* Toggle Menu Mobile */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg absolute w-full">
          <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 py-2 border-b border-gray-50">Como funciona</a>
          <a href="#equipa" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 py-2 border-b border-gray-50">Especialidades</a>
          <a href="#duvidas" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 py-2 border-b border-gray-50">Dúvidas</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-2 text-center py-3 bg-[#1a5f6a] text-white rounded-xl font-semibold">
            {CTA_LABEL}
          </a>
        </div>
      )}
    </nav>
  );
}