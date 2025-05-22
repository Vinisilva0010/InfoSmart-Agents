import React from "react";
import { MessageCircle } from "lucide-react";

export default function ChatbotFlutuante() {
  const redirectToChatbot = () => {
    window.open("/chat", "_self");
  };

  return (
    <div
      className="fixed bottom-5 right-5 w-60"
      style={{ zIndex: 999 }}
    >
      <button
        onClick={redirectToChatbot}
        className="w-full py-3 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition rounded-full shadow-2xl"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        <span className="text-sm font-medium">Acessar Chatbot</span>
      </button>
    </div>
  );
}
