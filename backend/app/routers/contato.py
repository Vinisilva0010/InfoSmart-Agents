from fastapi import APIRouter, HTTPException
from app.models.contato_model import Contato
from app.services.email_service import enviar_email
import logging

# Configurar logging
logger = logging.getLogger(__name__)

router = APIRouter()

@router.post("/api/contato", status_code=201)
async def enviar_contato(contato: Contato):
    try:
        # Log da mensagem recebida
        logger.info(f"Contato recebido de: {contato.email}")
        
        # Enviar e-mail
        await enviar_email(contato)
        
        return {
            "status": "success",
            "mensagem": "Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve."
        }
    except Exception as e:
        logger.error(f"Erro ao processar contato: {str(e)}")
        raise HTTPException(
            status_code=500, 
            detail="Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente mais tarde."
        )
