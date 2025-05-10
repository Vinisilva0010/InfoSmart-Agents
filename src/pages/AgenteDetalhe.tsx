import { useParams } from "react-router-dom";

const agentes = {
  atendimento: {
    title: "Agente de Atendimento",
    description: `Transforme a experiência do seu cliente em algo memorável. Nosso Agente de Atendimento é treinado com inteligência artificial de última geração para responder dúvidas frequentes com rapidez, precisão e empatia. Ele simula uma conversa natural, reduz o tempo de espera, está disponível 24h e oferece suporte com a mesma qualidade de um humano — mas sem interrupções ou falhas.

✅ Redução de custos com equipe de suporte  
✅ Aumento da satisfação do cliente  
✅ Respostas imediatas, personalizadas e consistentes  
✅ Fácil integração com seu site ou sistema atual`,
    image: "/images/atendimento.jpg",
  },
  suporte: {
    title: "Agente de Suporte Técnico",
    description: `Chega de filas e frustrações no suporte. Nosso Agente Técnico identifica rapidamente os problemas mais comuns enfrentados por seus usuários e entrega soluções instantâneas com linguagem simples e acessível. Ele aprende continuamente com os atendimentos e está sempre pronto para resolver.

✅ Diagnóstico automatizado e eficiente  
✅ Disponível 24/7 para ajudar seu cliente  
✅ Redução de tickets repetitivos  
✅ Melhora a reputação e confiança na sua marca`,
    image: "/images/suporte.jpg",
  },
  vendas: {
    title: "Agente de Vendas",
    description: `Aumente suas conversões com inteligência estratégica. O Agente de Vendas analisa o perfil do cliente em tempo real e recomenda produtos ou serviços com alto potencial de aceitação. Ele atua como um consultor personalizado, sempre pronto para fechar negócio.

✅ Recomendação inteligente com base em dados  
✅ Conversas persuasivas e contextualizadas  
✅ Redução no tempo de decisão do cliente  
✅ Integração com CRMs e funis de vendas`,
    image: "/images/vendas.jpg",
  },
};

export default function AgenteDetalhe() {
  const { id } = useParams();
  const agente = agentes[id as keyof typeof agentes];

  if (!agente) {
    return <div className="text-center text-white py-10">Agente não encontrado.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-white">
      <img
        src={agente.image}
        alt={agente.title}
        className="rounded-xl w-full h-64 object-cover mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4 text-blue-400">{agente.title}</h1>
      <p className="text-lg mb-8 text-gray-300 whitespace-pre-line">{agente.description}</p>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg mb-8"
      >
        Falar no WhatsApp
      </a>

      {/* Formulário de Contato */}
      <form className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-blue-400 mb-2">Solicite esse agente</h2>
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        />
        <textarea
          placeholder="Mensagem"
          rows={4}
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
