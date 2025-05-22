import { useParams, Link, useNavigate } from "react-router-dom";
import { CheckCircle, MessageCircle, ArrowLeft, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const agentes = {
  atendimento: {
    title: "Agente de Atendimento",
    description: `Transforme a experiência do seu cliente em algo memorável. Nosso Agente de Atendimento é treinado com inteligência artificial de última geração para responder dúvidas frequentes com rapidez, precisão e empatia. Ele simula uma conversa natural, reduz o tempo de espera, está disponível 24h e oferece suporte com a mesma qualidade de um humano — mas sem interrupções ou falhas.

✅ Redução de custos com equipe de suporte  
✅ Aumento da satisfação do cliente  
✅ Respostas imediatas, personalizadas e consistentes  
✅ Fácil integração com seu site ou sistema atual`,
    image: "/images/atendimento.jpg",
    beneficios: [
      "Atendimento 24/7 sem interrupções",
      "Redução de até 60% em custos operacionais",
      "Tempo médio de resposta menor que 3 segundos",
      "Resolução imediata de até 80% das dúvidas frequentes"
    ]
  },
  suporte: {
    title: "Agente de Suporte Técnico",
    description: `Chega de filas e frustrações no suporte. Nosso Agente Técnico identifica rapidamente os problemas mais comuns enfrentados por seus usuários e entrega soluções instantâneas com linguagem simples e acessível. Ele aprende continuamente com os atendimentos e está sempre pronto para resolver.

✅ Diagnóstico automatizado e eficiente  
✅ Disponível 24/7 para ajudar seu cliente  
✅ Redução de tickets repetitivos  
✅ Melhora a reputação e confiança na sua marca`,
    image: "/images/suporte.jpg",
    beneficios: [
      "Resolução de problemas técnicos comuns em segundos",
      "Base de conhecimento que evolui com cada interação",
      "Diagnóstico passo a passo guiado por IA",
      "Redução de até 70% em tickets de suporte L1"
    ]
  },
  vendas: {
    title: "Agente de Vendas",
    description: `Aumente suas conversões com inteligência estratégica. O Agente de Vendas analisa o perfil do cliente em tempo real e recomenda produtos ou serviços com alto potencial de aceitação. Ele atua como um consultor personalizado, sempre pronto para fechar negócio.

✅ Recomendação inteligente com base em dados  
✅ Conversas persuasivas e contextualizadas  
✅ Redução no tempo de decisão do cliente  
✅ Integração com CRMs e funis de vendas`,
    image: "/images/vendas.jpg",
    beneficios: [
      "Aumento médio de 35% na taxa de conversão",
      "Personalização em tempo real baseada no perfil do cliente",
      "Recomendações de produtos com alta precisão",
      "Atendimento simultâneo ilimitado de clientes potenciais"
    ]
  },
};

export default function AgenteDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const agente = agentes[id as keyof typeof agentes];
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    mensagem: "",
    isSubmitting: false,
    isSuccess: false,
    error: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.nome || !formState.email || !formState.mensagem) {
      setFormState({
        ...formState,
        error: "Por favor, preencha todos os campos."
      });
      return;
    }
    
    setFormState({
      ...formState,
      isSubmitting: true,
      error: ""
    });
    
    try {
      await axios.post("/api/contato", {
        nome: formState.nome,
        email: formState.email,
        agente: agente.title,
        mensagem: `Interesse no ${agente.title}: ${formState.mensagem}`
      });
      
      setFormState({
        ...formState,
        isSubmitting: false,
        isSuccess: true
      });
      
      // Redirecionar após 3 segundos
      setTimeout(() => {
        navigate("/contato?success=true");
      }, 3000);
      
    } catch (error) {
      setFormState({
        ...formState,
        isSubmitting: false,
        error: "Ocorreu um erro ao enviar. Tente novamente."
      });
    }
  };

  if (!agente) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Agente não encontrado</h2>
        <p className="text-gray-400 mb-6">O agente que você está procurando não existe em nosso catálogo.</p>
        <Link 
          to="/agentes" 
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white flex items-center"
        >
          <ArrowLeft className="mr-2" /> Voltar para Agentes
        </Link>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen py-32 px-4 text-white"
      style={{
        background: "linear-gradient(to bottom, #0f172a, #1e293b)",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/agentes" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para lista de agentes
        </Link>
        
        <div className="bg-gray-800/80 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm mb-10">
          <img
            src={agente.image}
            alt={agente.title}
            className="w-full h-80 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-blue-400">{agente.title}</h1>
            
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-300 whitespace-pre-line">{agente.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Benefícios principais</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {agente.beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20agente%20de%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </a>
              
              <Link
                to="/contato"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Entre em Contato
              </Link>
            </div>
          </div>
        </div>
        
        {/* Formulário de Contato */}
        <div className="bg-gray-800/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">Solicite esse agente agora</h2>
          
          {formState.isSuccess ? (
            <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Solicitação enviada!</h3>
              <p className="text-gray-300 mb-4">
                Obrigado pelo seu interesse. Entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={formState.nome}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <textarea
                  name="mensagem"
                  placeholder="Como podemos ajudar sua empresa com este agente?"
                  rows={4}
                  value={formState.mensagem}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700/80 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              {formState.error && (
                <div className="text-red-500 bg-red-900/20 p-3 rounded-lg border border-red-800">
                  {formState.error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={formState.isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center w-full transition-colors duration-300"
              >
                {formState.isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2 h-5 w-5 border-t-2 border-white rounded-full"></span>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Solicitar Demonstração
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
