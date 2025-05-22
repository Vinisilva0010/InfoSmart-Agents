import React, { useState } from "react";
import axios from "axios";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    agente: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "enviando" | "sucesso" | "erro">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    
    if (!formData.agente) {
      newErrors.agente = "Selecione um tipo de agente";
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Remove o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus("enviando");

    try {
      // Usando caminho relativo para a API
      await axios.post("/api/contato", formData);
      setStatus("sucesso");
      setFormData({
        nome: "",
        email: "",
        empresa: "",
        agente: "",
        mensagem: "",
      });
      
      // Resetar o status após 5 segundos
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err) {
      console.error(err);
      setStatus("erro");
    }
  };

  const agentes = [
    "Atendimento ao Cliente", 
    "Suporte Técnico",
    "Vendas e Marketing", 
    "Financeiro", 
    "Recursos Humanos",
    "Logística", 
    "Saúde", 
    "Jurídico", 
    "Educação", 
    "TI e Desenvolvimento"
  ];

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
          
          {status === "sucesso" ? (
            <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Mensagem enviada com sucesso!</h3>
              <p className="text-gray-300 mb-4">
                Obrigado por entrar em contato. Nossa equipe responderá em breve.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg bg-gray-800/70 text-white placeholder-white/70 focus:outline-none focus:ring-2 ${
                    errors.nome ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.nome && <p className="mt-1 text-red-500 text-sm">{errors.nome}</p>}
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg bg-gray-800/70 text-white placeholder-white/70 focus:outline-none focus:ring-2 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
              </div>
              
              <div>
                <input
                  type="text"
                  name="empresa"
                  placeholder="Sua empresa (opcional)"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-gray-800/70 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <select
                  name="agente"
                  value={formData.agente}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg bg-gray-800/70 text-white focus:outline-none focus:ring-2 ${
                    errors.agente ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                >
                  <option value="" disabled>Escolha um agente</option>
                  {agentes.map((agente) => (
                    <option key={agente} value={agente}>{agente}</option>
                  ))}
                </select>
                {errors.agente && <p className="mt-1 text-red-500 text-sm">{errors.agente}</p>}
              </div>
              
              <div>
                <textarea
                  name="mensagem"
                  placeholder="Descreva sua necessidade"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className={`w-full p-4 rounded-lg bg-gray-800/70 text-white placeholder-white/70 h-32 focus:outline-none focus:ring-2 ${
                    errors.mensagem ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                  }`}
                />
                {errors.mensagem && <p className="mt-1 text-red-500 text-sm">{errors.mensagem}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition duration-300 flex items-center justify-center"
                disabled={status === "enviando"}
              >
                {status === "enviando" ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2 h-5 w-5 border-t-2 border-white rounded-full"></span>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Enviar Mensagem
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
              
              {status === "erro" && (
                <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <p className="text-red-400">Ocorreu um erro. Por favor, tente novamente.</p>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contato;
