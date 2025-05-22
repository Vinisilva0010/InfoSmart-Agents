from pydantic import BaseModel, EmailStr
from typing import Optional

class Contato(BaseModel):
    nome: str
    email: EmailStr
    empresa: Optional[str] = None
    agente: str
    mensagem: str
