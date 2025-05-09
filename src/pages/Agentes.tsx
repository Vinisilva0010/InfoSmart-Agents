import { LucideBot, LucideBriefcase, LucideCalendarClock, LucideHeadphones, LucideDollarSign, LucideUsers } from "lucide-react";

const agentes = [
  { nome: "Agente de Vendas", descricao: "Recomenda produtos com base no perfil do cliente.", icone: LucideDollarSign },
  { nome: "Agente de Suporte", descricao: "Ajuda a resolver problemas técnicos.", icone: LucideHeadphones },
  { nome: "Agente de Marketing", descricao: "Cria campanhas e sugestões criativas.", icone: LucideBot },
  { nome: "Agente de Agendamento", descricao: "Organiza compromissos automaticamente.", icone: LucideCalendarClock },
  { nome: "Agente de Treinamento", descricao: "Ensina com IA conteúdos internos.", icone: LucideBriefcase },
  { nome: "Agente de CRM", descricao: "Gerencia relacionamento com clientes.", icone: LucideUsers },
  { nome: "Agente de Dados", descricao: "Analisa dados e entrega insights.", icone: LucideBot },
  { nome: "Agente Jurídico", descricao: "Fornece orientações legais básicas.", icone: LucideBriefcase },
  { nome: "Agente de RH", descricao: "Auxilia em processos de seleção e onboarding.", icone: LucideUsers },
  { nome: "Agente de Finanças", descricao: "Faz análises e previsões financeiras.", icone: LucideDollarSign }
];

export default function Agentes() {
  return (
    <div className="bg-gray-950 min-h-screen text-white pt-8">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
          Nossos Agentes de IA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {agentes.map((agente, idx) => {
            const Icon = agente.icone;
            return (
              <div
                key={idx}
                className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-blue-400/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <Icon className="text-blue-400 h-8 w-8 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold text-white">{agente.nome}</h3>
                <p className="text-gray-400 mt-2">{agente.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
