// Chat.tsx
import React, { useState } from "react";
import { Send, Bot, User } from "lucide-react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Olá! Sou o assistente virtual da InfoSmart. Como posso ajudar você hoje?"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "Posso ajudar você a escolher o agente de IA ideal para o seu negócio.",
        "Nossa plataforma permite criar agentes personalizados para diversos setores.",
        "Os agentes da InfoSmart podem ser integrados ao seu site ou aplicativo facilmente.",
        "Nossas soluções de IA aumentam a eficiência do atendimento ao cliente.",
        "Temos especialistas que podem personalizar totalmente a solução para sua empresa."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const botMessage = { role: "system", content: randomResponse };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "system" && (
                <div className="bg-blue-600 p-2 rounded-full">
                  <Bot size={20} className="text-white" />
                </div>
              )}
              
              <div 
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.role === "system" 
                    ? "bg-gray-800 text-white" 
                    : "bg-blue-600 text-white"
                }`}
              >
                {message.content}
              </div>
              
              {message.role === "user" && (
                <div className="bg-gray-700 p-2 rounded-full">
                  <User size={20} className="text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
