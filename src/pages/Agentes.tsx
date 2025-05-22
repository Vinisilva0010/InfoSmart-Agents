import { Link } from "react-router-dom";
import { 
  Bot, 
  DollarSign, 
  Headphones, 
  CalendarClock,
  Briefcase, 
  Users, 
  LineChart, 
  Scale, 
  UserPlus, 
  BarChart4,
  Search,
  PlusCircle
} from "lucide-react";

const agentesDestaque = [
  { 
    id: "atendimento",
    nome: "Agente de Atendimento", 
    descricao: "Responde dúvidas frequentes de clientes com linguagem natural.",
    icone: Headphones 
  },
  { 
    id: "suporte",
    nome: "Agente de Suporte Técnico", 
    descricao: "Diagnostica e ajuda a resolver problemas técnicos simples.",
    icone: Bot 
  },
  { 
    id: "vendas",
    nome: "Agente de Vendas", 
    descricao: "Recomenda produtos com base no perfil e histórico do cliente.",
    icone: DollarSign 
  },
];

const agentesCatalogo = [
  { nome: "Agente de Agendamento", descricao: "Organiza compromissos e acompanha tarefas automaticamente.", icone: CalendarClock },
  { nome: "Agente de Treinamento", descricao: "Ensina e capacita novos funcionários com IA adaptativa.", icone: Briefcase },
  { nome: "Agente de CRM", descricao: "Gerencia relacionamento com clientes de forma personalizada.", icone: Users },
  { nome: "Agente de Análise de Dados", descricao: "Analisa dados e entrega insights estratégicos para o negócio.", icone: LineChart },
  { nome: "Agente Jurídico", descricao: "Fornece orientações legais básicas e prepara documentos simples.", icone: Scale },
  { nome: "Agente de RH", descricao: "Auxilia em processos de seleção, onboarding e gestão de pessoas.", icone: UserPlus },
  { nome: "Agente de Finanças", descricao: "Faz análises e previsões financeiras para otimização de recursos.", icone: BarChart4 }
];

const faqItems = [
  {
    pergunta: "Como os agentes de IA são personalizados para minha empresa?",
    resposta: "Nossos agentes são treinados em um processo de três etapas: análise de necessidades, treinamento com dados específicos do seu negócio e ajustes contínuos após implementação. Isso garante que o agente entenda o contexto e vocabulário específicos do seu setor."
  },
  {
    pergunta: "Quanto tempo leva para implementar um agente?",
    resposta: "O tempo de implementação varia de 2 a 4 semanas, dependendo da complexidade e do volume de dados para treinamento. Agentes mais simples como atendimento básico podem ser implementados em menos tempo."
  },
  {
    pergunta: "Os agentes podem ser integrados aos nossos sistemas atuais?",
    resposta: "Sim! Nossos agentes são desenvolvidos para integração com as principais plataformas de comunicação, CRMs, ERPs e sistemas proprietários através de APIs. Trabalhamos para garantir uma transição suave com sua infraestrutura existente."
  },
  {
    pergunta: "Como é feita a manutenção e atualização dos agentes?",
    resposta: "Oferecemos planos de manutenção que incluem ajustes regulares, atualizações de modelo e expansão de capacidades. Também monitoramos o desempenho e fazemos melhorias contínuas com base em feedback e análise de interações."
  }
];

export default function Agentes() {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 z-0"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
            Agentes Inteligentes para Seu Negócio
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-10">
            Automatize processos, melhore o atendimento e aumente suas vendas com agentes de IA personalizados para as necessidades específicas da sua empresa.
          </p>
          
          <div className="flex justify-center">
            <Link
              to="/contato"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Solicite uma Demonstração
            </Link>
          </div>
        </div>
      </div>

      {/* Agentes em Destaque */}
      <div className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">
            Agentes em Destaque
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Conheça nossos agentes mais populares que já ajudaram centenas de empresas a transformar seus negócios com inteligência artificial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agentesDestaque.map((agente) => {
              const Icon = agente.icone;
              return (
                <Link
                  to={`/agente/${agente.id}`}
                  key={agente.id}
                  className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 group border border-gray-800 hover:border-blue-500/50"
                >
                  <div className="bg-blue-600/20 p-3 rounded-xl w-fit mb-4">
                    <Icon className="text-blue-400 h-8 w-8 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {agente.nome}
                  </h3>
                  <p className="text-gray-400 mt-2 mb-4">{agente.descricao}</p>
                  <span className="text-blue-400 text-sm font-medium flex items-center">
                    Ver detalhes <PlusCircle className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Catálogo Completo */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Catálogo Completo de Agentes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentesCatalogo.map((agente, idx) => {
              const Icon = agente.icone;
              return (
                <div
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-blue-400/30 hover:-translate-y-1 transition-all duration-300 group border border-gray-700/50"
                >
                  <div className="flex items-start">
                    <div className="bg-gray-700/50 p-2 rounded-lg mr-4">
                      <Icon className="text-blue-400 h-6 w-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {agente.nome}
                      </h3>
                      <p className="text-gray-400 mt-2 text-sm">{agente.descricao}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 shadow-md border border-blue-700/30 flex items-center justify-center">
              <Link to="/contato" className="text-center group">
                <Search className="text-blue-400 h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                  Precisa de um agente específico?
                </h3>
                <p className="text-gray-400 mt-2 text-sm mb-3">
                  Entre em contato para discutirmos suas necessidades.
                </p>
                <span className="text-blue-400 font-medium inline-block border border-blue-500 rounded-full px-4 py-2 text-sm group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  Solicitar Agente Personalizado
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 bg-gray-900/70">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.pergunta}</h3>
                <p className="text-gray-400">{item.resposta}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Tem mais perguntas? Estamos aqui para ajudar.
            </p>
            <Link
              to="/contato"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full inline-block transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
