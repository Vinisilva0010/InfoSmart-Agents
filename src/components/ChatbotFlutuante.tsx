import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react"; // ícones modernos

export default function ChatbotFlutuante() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: "Olá! Como posso ajudar?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = (message: string) => {
    if (!message.trim()) return;
    setChatMessages((prev) => [...prev, { text: message, isUser: true }]);
    setInputValue("");
    // Simula resposta
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { text: "Entendi! Em breve entraremos em contato.", isUser: false },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* 🔲 Chatbot Container */}
      <div
        className={`fixed bottom-5 right-5 w-80 bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
          isOpen ? "h-[500px]" : "h-16"
        }`}
        style={{ zIndex: 999 }}
      >
        {isOpen ? (
          <div className="flex flex-col h-full">
            {/* Top Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white">
              <span className="font-semibold">Atendente Virtual</span>
              <button onClick={toggleChat}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-2 overflow-y-auto bg-gray-100">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                    msg.isUser
                      ? "ml-auto bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex p-2 border-t border-gray-200 bg-white">
              <input
                type="text"
                className="flex-1 px-4 py-2 rounded-l-xl outline-none text-sm text-gray-800"
                placeholder="Digite sua mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage(inputValue);
                }}
              />
              <button
                onClick={() => sendMessage(inputValue)}
                className="bg-blue-500 text-white px-4 rounded-r-xl hover:bg-blue-600 transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={toggleChat}
            className="w-full h-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white transition"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Fale com a gente</span>
          </button>
        )}
      </div>
    </>
  );
}
