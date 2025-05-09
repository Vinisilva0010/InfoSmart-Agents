import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir e fechar o chat
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]); // Armazena as mensagens
  const [inputValue, setInputValue] = useState(""); // Valor do campo de entrada

  // Função para abrir e fechar o chatbot
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Função para enviar mensagens
  const sendMessage = (message: string) => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isUser: true }]);
      setInputValue(""); // Limpar o campo de entrada após enviar a mensagem

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Tire suas dúvidas", isUser: false }, // Resposta do bot
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      {/* Ponto flutuante */}
      <div
        className={`fixed bottom-5 right-5 w-72 bg-blue-500 text-white shadow-lg rounded-xl p-4 ${isOpen ? "h-96" : "h-16"}`}
        style={{ transition: "height 0.3s", zIndex: 999 }}
      >
        {isOpen ? (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              {/* Exibe as mensagens */}
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg ${
                      msg.isUser ? "bg-blue-600 text-white" : "bg-gray-700 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                value={inputValue} // Valor do campo de entrada
                onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado com o valor digitado
                placeholder="Escreva uma mensagem..."
                className="flex-1 p-2 rounded-l-lg border-none"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    sendMessage(inputValue); // Envia a mensagem ao pressionar Enter
                  }
                }}
              />
              <button
                onClick={() => sendMessage(inputValue)} // Envia a mensagem ao clicar no botão
                className="p-2 bg-blue-600 text-white rounded-r-lg"
              >
                Enviar
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <span>Tire suas dúvidas</span>
          </div>
        )}
      </div>

      {/* Botão para abrir e fechar o chat */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
        style={{ zIndex: 1000 }}
      >
        {isOpen ? "Fechar" : "Abrir"}
      </button>
    </div>
  );
};

export default Chatbot;
