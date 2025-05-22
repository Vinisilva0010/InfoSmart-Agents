import React, { useState } from "react";
import axios from "axios";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    agente: "",
    mensagem: "",
  });

  const [status, setStatus] = useState<"idle" | "enviando" | "sucesso" | "erro">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      await axios.post("http://localhost:8000/contato", formData);
      setStatus("sucesso");
      setFormData({
        nome: "",
        email: "",
        agente: "",
        mensagem: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("erro");
    }
  };

  return (
    <div
      className="text-white min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background-contato.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundPositionY: "30%",
      }}
    >
      <div className="backdrop-blur-sm bg-black/60 min-h-screen flex items-start pt-32 px-6 py-16">
        <div className="max-w-3xl mx-auto w-full bg-gray-900/80 backdrop-blur-md p-10 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-center text-blue-400 mb-4">Entre em Contato</h1>
          <p className="text-center text-gray-300 mb-8">
            Preencha o formulário abaixo e selecione o agente ideal para sua necessidade.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-800/70 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-800/70 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <select
              name="agente"
              value={formData.agente}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-800/70 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Escolha um agente</option>
              {[
                "Atendimento", "Financeiro", "Marketing", "Vendas", "RH",
                "Logística", "Saúde", "Jurídico", "Educação", "TI"
              ].map((agente) => (
                <option key={agente} value={agente}>{agente}</option>
              ))}
            </select>
            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-gray-800/70 text-white placeholder-white/70 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition duration-300"
              disabled={status === "enviando"}
            >
              {status === "enviando" ? "Enviando..." : "Enviar Mensagem"}
            </button>
            {status === "sucesso" && (
              <p className="text-green-400 text-center mt-4">Mensagem enviada com sucesso!</p>
            )}
            {status === "erro" && (
              <p className="text-red-500 text-center mt-4">Ocorreu um erro. Tente novamente.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contato;
