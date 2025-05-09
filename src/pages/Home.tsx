import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Link } from "react-router-dom";
import { Bot, User } from "lucide-react";
import ChatbotFlutuante from "../components/ChatbotFlutuante";


// 🔲 Componente de Demonstração Simulada
function SimulatedChat() {
  const conversation = [
    {
      sender: "user",
      text: "Quais são os horários de atendimento?",
    },
    {
      sender: "agent",
      text: "Nosso atendimento funciona de segunda a sexta, das 9h às 18h. Posso te ajudar com mais alguma coisa?",
    },
    {
      sender: "user",
      text: "Vocês têm suporte técnico?",
    },
    {
      sender: "agent",
      text: "Sim! Nosso suporte técnico está disponível para ajudar você a qualquer momento dentro do horário comercial.",
    },
  ];

  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [typing, setTyping] = useState(false);
  const [index, setIndex] = useState(0);

  const resetConversation = () => {
    setMessages([]);
    setIndex(0);
  };

  useEffect(() => {
    if (index < conversation.length) {
      const msg = conversation[index];
      if (msg.sender === "agent") {
        setTyping(true);
        setTimeout(() => {
          setMessages((prev) => [...prev, msg]);
          setTyping(false);
          setIndex((prev) => prev + 1);
        }, 2000);
      } else {
        setMessages((prev) => [...prev, msg]);
        setIndex((prev) => prev + 1);
      }
    }
  }, [index]);

  return (
    <div className="mt-20 w-full max-w-3xl px-6">
      <h3 className="text-3xl font-bold text-center text-white mb-6">
        Veja um Agente Inteligente em Ação
      </h3>
      <div className="bg-gray-800 bg-opacity-80 rounded-xl p-6 shadow-lg">
        <div className="space-y-4 text-sm font-mono">
          {messages.map((msg, i) => (
            <div key={i} className="flex items-start gap-2">
              {msg.sender === "user" ? (
                <User className="w-5 h-5 text-blue-400 mt-1" />
              ) : (
                <Bot className="w-5 h-5 text-green-400 mt-1" />
              )}
              <span className="text-gray-200">{msg.text}</span>
            </div>
          ))}
          {typing && (
            <div className="flex items-start gap-2 animate-pulse">
              <Bot className="w-5 h-5 text-green-400 mt-1" />
              <span className="text-gray-400">Digitando...</span>
            </div>
          )}
        </div>

        <button
          onClick={resetConversation}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          Recomeçar Demonstração
        </button>
      </div>
    </div>
  );
}

// 🔲 Página Principal
export default function Home() {
  const cards = [
    {
      title: "Agente de Atendimento",
      description: "Responde dúvidas frequentes de clientes com linguagem natural.",
      image: "/images/atendimento.jpg",
    },
    {
      title: "Agente de Suporte Técnico",
      description: "Diagnostica e ajuda a resolver problemas técnicos simples.",
      image: "/images/suporte.jpg",
    },
    {
      title: "Agente de Vendas",
      description: "Recomenda produtos com base no perfil e histórico do cliente.",
      image: "/images/vendas.jpg",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = (message: string) => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, isUser: true }]);
      setInputValue("");

      setTimeout(() => {
        setChatMessages((prev) => [...prev, { text: "Tire suas dúvidas", isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col items-center">
      {/* 🔲 Background com imagem e overlay escuro */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* 🔲 Conteúdo */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* 🔲 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 max-w-7xl mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-80 rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:shadow-blue-500/30 transition-transform transform hover:scale-105"
            >
              <div className="h-48 w-full bg-gray-800 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-blue-400">{card.title}</h2>
                <p className="text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-20">
          <Link
            to="/agentes"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Ver Todos os Agentes
          </Link>
        </div>

        {/* 🔲 Frase de impacto */}
        <div className="text-center mt-10 px-4">
          <h2 className="text-4xl font-extrabold text-blue-400 mb-4">
            Transforme o futuro da sua empresa com IA sob medida
          </h2>
          <p className="text-lg text-gray-300">
            Soluções inteligentes para atendimento, vendas e produtividade automatizada.
          </p>
        </div>

        {/* 🔲 Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto px-6">
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl text-center shadow-lg">
            <span className="text-4xl">🤖</span>
            <h3 className="text-xl font-bold text-blue-300 mt-2 mb-1">IA Personalizada</h3>
            <p className="text-gray-400 text-sm">Projetada para o seu negócio, sem modelos genéricos.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl text-center shadow-lg">
            <span className="text-4xl">⚡</span>
            <h3 className="text-xl font-bold text-blue-300 mt-2 mb-1">Respostas Instantâneas</h3>
            <p className="text-gray-400 text-sm">Seu cliente nunca mais ficará esperando.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl text-center shadow-lg">
            <span className="text-4xl">🔒</span>
            <h3 className="text-xl font-bold text-blue-300 mt-2 mb-1">Privacidade Garantida</h3>
            <p className="text-gray-400 text-sm">Tratamos seus dados com total segurança.</p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-6 rounded-xl text-center shadow-lg">
            <span className="text-4xl">🧠</span>
            <h3 className="text-xl font-bold text-blue-300 mt-2 mb-1">Tecnologia de Ponta</h3>
            <p className="text-gray-400 text-sm">Baseado nos melhores modelos do mercado.</p>
          </div>
        </div>

        {/* 🔲 Depoimentos */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Quem já usou, recomenda:</h3>
          <div className="grid md:grid-cols-3 gap-6 px-4">
            <div className="bg-gray-800 bg-opacity-70 p-4 rounded-xl shadow-lg">
              <p className="text-gray-300 italic">"Nosso atendimento ficou 4x mais rápido!"</p>
              <p className="text-blue-400 font-semibold mt-2">João Silva — Loja Conectada</p>
            </div>
            <div className="bg-gray-800 bg-opacity-70 p-4 rounded-xl shadow-lg">
              <p className="text-gray-300 italic">"O agente de vendas aumentou nossas conversões!"</p>
              <p className="text-blue-400 font-semibold mt-2">Maria Costa — TechMarket</p>
            </div>
            <div className="bg-gray-800 bg-opacity-70 p-4 rounded-xl shadow-lg">
              <p className="text-gray-300 italic">"Muito além de um chatbot comum!"</p>
              <p className="text-blue-400 font-semibold mt-2">Lucas Almeida — HelpNow</p>
            </div>
          </div>
        </div>

        {/* 🔲 Demonstração Simulada (usando o componente) */}
        <SimulatedChat />
      </div>

    </div>
  );
}
