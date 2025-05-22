import { Link } from "react-router-dom";

const cards = [
  {
    id: "atendimento",
    title: "Agente de Atendimento",
    description: "Responde dúvidas frequentes de clientes com linguagem natural.",
    image: "/images/atendimento.jpg",
  },
  {
    id: "suporte",
    title: "Agente de Suporte Técnico",
    description: "Diagnostica e ajuda a resolver problemas técnicos simples.",
    image: "/images/suporte.jpg",
  },
  {
    id: "vendas",
    title: "Agente de Vendas",
    description: "Recomenda produtos com base no perfil e histórico do cliente.",
    image: "/images/vendas.jpg",
  },
];

export default function AgenteCardList() {
  return (
    <div className="grid md:grid-cols-3 gap-10 py-12 px-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
        >
          <img
            src={card.image}
            alt={card.title}
            className="h-52 w-full object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-white mb-3">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {card.description}
            </p>
            <Link
              to={`/agente/${card.id}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2 rounded-full shadow-md transition duration-200"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
