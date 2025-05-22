import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ícones para abrir/fechar menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-white font-bold text-2xl">InfoSmart</Link>

        {/* Ícone do menu para telas pequenas */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Menu de navegação (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/agentes"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            Agentes
          </Link>
          <Link
            to="/contato"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            Contato
          </Link>
          <Link
            to="/contato"
            className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-4 space-y-4 md:hidden">
            <Link
              to="/agentes"
              onClick={closeMenu}
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              Agentes
            </Link>
            <Link
              to="/contato"
              onClick={closeMenu}
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              Contato
            </Link>
            <Link 
              to="/contato"
              onClick={closeMenu}
              className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-600 transition-colors duration-300"
            >
              Fale Conosco
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
