from pydantic import BaseModel, EmailStr

class Contato(BaseModel):
    nome: str
    email: EmailStr
    agente: str
    mensagem: str
