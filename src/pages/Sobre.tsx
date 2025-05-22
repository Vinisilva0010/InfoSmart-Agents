import React from "react";

export default function Sobre() {
  return (
    <div
      className="text-white min-h-screen bg-cover bg-no-repeat bg-gray-950"
      style={{
        backgroundImage: "url('/images/background-sobre.jpg.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundPositionY: "30%", // ajusta a imagem mais para baixo
      }}
    >
      <div className="backdrop-blur-sm bg-black/60 min-h-screen flex items-start pt-32 px-8">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-4xl font-bold mb-6 text-blue-400 text-center">
            Sobre a InfoSmart
          </h1>

          <p className="text-lg text-gray-300 mb-8 text-center">
            A InfoSmart é uma empresa especializada na criação de agentes de inteligência artificial personalizados
            para negócios modernos. Nossa missão é automatizar tarefas e impulsionar a eficiência com tecnologia de ponta.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-400/30 transition">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Missão</h3>
              <p className="text-gray-400">
                Ajudar empresas a crescer com agentes de IA que aprendem, se adaptam e resolvem problemas reais.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-400/30 transition">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Visão</h3>
              <p className="text-gray-400">
                Ser referência global em soluções automatizadas baseadas em inteligência artificial conversacional.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-400/30 transition">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Valores</h3>
              <p className="text-gray-400">
                Inovação, ética, eficiência e compromisso com resultados concretos para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
