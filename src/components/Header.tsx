import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Menu, X, MessageCircle } from "lucide-react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openChatbot = () => {
    window.open("https://infosmart-demo.vercel.app/", "_blank", "noopener,noreferrer");
  };

  return (
    <header
      className="bg-transparent text-white py-4 shadow-xl sticky top-0 z-50"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-3xl font-extrabold text-blue-500 hover:text-blue-400 transition duration-300"
        >
          <Brain className="w-8 h-8" />
          <span>InfoSmart</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-md">
          <Link to="/" className="hover:text-blue-400 font-medium">Início</Link>
          <Link to="/sobre" className="hover:text-blue-400 font-medium">Sobre</Link>
          <Link to="/contato" className="hover:text-blue-400 font-medium">Contato</Link>
          <button 
            onClick={openChatbot} 
            className="hover:text-blue-400 font-medium flex items-center"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Chatbot Demo
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-gray-900 bg-opacity-90 space-y-4">
          <Link to="/" className="block hover:text-blue-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Início</Link>
          <Link to="/sobre" className="block hover:text-blue-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link>
          <Link to="/contato" className="block hover:text-blue-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              openChatbot();
            }} 
            className="block hover:text-blue-400 font-medium w-full text-left flex items-center"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Chatbot Demo
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
