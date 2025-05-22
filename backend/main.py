from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pydantic import BaseModel
import os
import requests
from app.routers import contato
from typing import List, Dict, Optional
import logging
from app.services.mock_ai_service import smart_mock_response

# Configuração de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

app = FastAPI()

# Configuração CORS mais permissiva para desenvolvimento
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5000", "https://infosmart.com.br"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contato.router)

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    message: str
    chatHistory: Optional[List[ChatMessage]] = []

@app.get("/")
async def root():
    return {"message": "Bem-vindo à API da InfoSmart! A API está funcionando corretamente."}

@app.get("/api/check")
async def check_api():
    """Endpoint para verificar se a API está funcionando"""
    logger.info("Verificação de API realizada")
    return {
        "status": "online",
        "message": "API da InfoSmart está online e funcionando corretamente!"
    }

@app.post("/api/chat")
async def chat(chat_request: ChatRequest):
    if not chat_request.message:
        raise HTTPException(status_code=400, detail="Mensagem não enviada.")

    api_key = os.getenv('OPENROUTER_API_KEY')
    # Se a API Key não estiver disponível, usar o serviço mockado
    if not api_key or api_key == "your_openrouter_api_key_here":
        logger.warning("OPENROUTER_API_KEY não configurada. Usando serviço mockado.")
        mock_response = await smart_mock_response(chat_request.message)
        return {"response": mock_response}

    try:
        logger.info(f"Processando mensagem: {chat_request.message}")
        
        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://infosmart.com.br",
            "X-Title": "InfoSmart Chatbot"
        }

        # Construir a sequência de mensagens
        messages = [
            {
                "role": "system", 
                "content": """
                Você é um assistente virtual da InfoSmart, uma empresa especializada na criação de agentes de inteligência artificial personalizados para negócios.

                Seu papel é:
                - Atender visitantes do site com simpatia e clareza.
                - Explicar como funcionam os agentes de IA oferecidos pela InfoSmart.
                - Incentivar o visitante a solicitar a criação de um agente.
                - Focar nos benefícios dos agentes: automação, economia de tempo, atendimento 24/7, aumento de conversões e personalização.
                - Evitar respostas genéricas ou evasivas. Seja direto, útil e entusiasmado.
                - Se não souber algo específico, redirecione com educação para o formulário de contato.

                Linguagem: informal, amigável e profissional.
                """
            }
        ]

        # Adicionar histórico de conversa, se existir
        if chat_request.chatHistory:
            messages.extend(chat_request.chatHistory)
        
        # Adicionar a mensagem atual do usuário
        messages.append({
            "role": "user",
            "content": chat_request.message
        })

        payload = {
            "model": "openchat/openchat-3.5-0106",
            "messages": messages
        }

        logger.info(f"Enviando requisição para OpenRouter")
        
        try:
            response = requests.post(
                "https://openrouter.ai/api/v1/chat/completions", 
                headers=headers, 
                json=payload,
                timeout=30
            )
            
            if response.status_code != 200:
                error_detail = response.json().get("error", {}).get("message", "Erro desconhecido")
                logger.error(f"Erro da API OpenRouter: {error_detail}")
                
                # Em caso de erro de API, recorrer ao serviço mockado
                logger.info("Usando serviço mockado como fallback")
                mock_response = await smart_mock_response(chat_request.message)
                return {"response": mock_response}
                
            result = response.json()
            
            if "choices" not in result or not result["choices"]:
                logger.error("Resposta recebida sem 'choices'")
                
                # Em caso de resposta inválida, recorrer ao serviço mockado
                logger.info("Usando serviço mockado como fallback")
                mock_response = await smart_mock_response(chat_request.message)
                return {"response": mock_response}
            
            resposta = result["choices"][0]["message"]["content"]
            logger.info(f"Resposta obtida com sucesso: {resposta[:50]}...")
            return {"response": resposta}
            
        except requests.RequestException as e:
            logger.error(f"Erro na requisição HTTP: {str(e)}")
            
            # Em caso de erro de rede, recorrer ao serviço mockado
            logger.info("Usando serviço mockado como fallback")
            mock_response = await smart_mock_response(chat_request.message)
            return {"response": mock_response}
    
    except Exception as e:
        logger.error(f"Erro interno: {str(e)}")
        
        # Em caso de qualquer outro erro, recorrer ao serviço mockado
        logger.info("Usando serviço mockado como fallback final")
        try:
            mock_response = await smart_mock_response(chat_request.message)
            return {"response": mock_response}
        except:
            return {"response": "Desculpe, estamos enfrentando dificuldades técnicas. Por favor, tente novamente mais tarde ou entre em contato através do formulário."}
