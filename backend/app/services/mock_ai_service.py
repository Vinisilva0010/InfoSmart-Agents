import random
import asyncio
import logging

logger = logging.getLogger(__name__)

# Respostas pré-definidas para simular o assistente
MOCK_RESPONSES = [
    "Olá! Sou o assistente virtual da InfoSmart. Como posso ajudar você hoje? Temos diversos agentes de IA personalizados que podem ajudar sua empresa a automatizar processos e melhorar o atendimento.",
    
    "A InfoSmart é especializada em criar agentes de IA personalizados para negócios como o seu. Nossos agentes podem automatizar atendimento, vendas, suporte técnico e muito mais.",
    
    "Os agentes da InfoSmart são treinados especificamente para o seu negócio, com conhecimento do seu setor e das necessidades específicas da sua empresa.",
    
    "Você pode solicitar uma demonstração gratuita através do nosso formulário de contato. Assim você poderá ver como nossos agentes funcionam na prática.",
    
    "A implementação de um agente geralmente leva de 2 a 4 semanas, dependendo da complexidade. Começamos com uma análise das suas necessidades e depois personalizamos o modelo para seu negócio.",
    
    "Sim, nossos agentes podem ser integrados com praticamente qualquer sistema ou plataforma que você já utilize, como WhatsApp, Telegram, seu site, CRM, ERP e muito mais.",
    
    "O investimento depende do tipo de agente e da complexidade da implementação, mas temos opções a partir de R$ 1.500/mês. Por que não agendar uma conversa com nossa equipe comercial para uma proposta personalizada?",
    
    "Além do atendimento ao cliente, nossos agentes podem ajudar com vendas, suporte técnico, RH, finanças, marketing e praticamente qualquer área que precise de automação inteligente.",
]

async def mock_ai_response(message: str) -> str:
    """
    Simula uma resposta de IA para quando a API real não está disponível
    """
    # Simula o tempo de resposta da API
    await asyncio.sleep(random.uniform(1.0, 2.5))
    
    # Escolhe uma resposta aleatória
    response = random.choice(MOCK_RESPONSES)
    
    logger.info(f"Gerando resposta mockada para: '{message[:30]}...'")
    return response

# Função que extrai palavras-chave da mensagem e tenta dar uma resposta mais contextualizada
async def smart_mock_response(message: str) -> str:
    """
    Tenta dar uma resposta mais contextualizada com base em palavras-chave
    """
    message = message.lower()
    
    # Simula o tempo de resposta da API
    await asyncio.sleep(random.uniform(1.0, 2.0))
    
    # Mapeia palavras-chave para respostas específicas
    if any(word in message for word in ["preço", "custo", "valor", "investimento"]):
        return "O investimento em nossos agentes de IA depende do tipo e da complexidade. Temos planos a partir de R$ 1.500/mês, com suporte e atualizações incluídos. Podemos preparar uma proposta personalizada para sua empresa, basta entrar em contato!"
    
    elif any(word in message for word in ["implementação", "integração", "instalar"]):
        return "A implementação dos nossos agentes é simples e rápida. Integramos com as principais plataformas de comunicação e sistemas empresariais. Todo o processo leva de 2 a 4 semanas, incluindo personalização, treinamento e ajustes finais."
    
    elif any(word in message for word in ["atendimento", "suporte", "cliente"]):
        return "Nosso Agente de Atendimento ao Cliente automatiza até 80% das interações, está disponível 24/7, e aprende continuamente. Ele pode reduzir o tempo de resposta para segundos e aumentar significativamente a satisfação do cliente."
    
    elif any(word in message for word in ["vendas", "vender", "conversão"]):
        return "O Agente de Vendas analisa o perfil do cliente em tempo real e faz recomendações personalizadas, aumentando a taxa de conversão em média 35%. É como ter um consultor de vendas trabalhando 24 horas por dia."
    
    # Resposta padrão se nenhuma palavra-chave for encontrada
    return random.choice(MOCK_RESPONSES) 