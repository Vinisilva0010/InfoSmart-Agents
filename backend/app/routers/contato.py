from fastapi import APIRouter
from app.models.contato_model import Contato
from app.services.email_service import enviar_email  # Novo import

router = APIRouter()

@router.post("/contato")
async def enviar_contato(contato: Contato):
    await enviar_email(contato)
    return {"mensagem": "Mensagem enviada com sucesso!"}
