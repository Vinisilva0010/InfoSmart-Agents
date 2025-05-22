import os
import logging
from email.message import EmailMessage
from aiosmtplib import send
from dotenv import load_dotenv

# Configurar logging
logger = logging.getLogger(__name__)

# Carregar variáveis de ambiente
load_dotenv()

async def enviar_email(contato):
    try:
        # Obter credenciais do ambiente
        email_from = os.getenv("EMAIL_FROM", "contato@infosmart.com.br")
        email_to = os.getenv("EMAIL_TO", "contato@infosmart.com.br")
        smtp_host = os.getenv("SMTP_HOST", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_user = os.getenv("SMTP_USER", email_from)
        smtp_password = os.getenv("SMTP_PASSWORD", "")
        
        if not smtp_password:
            logger.warning("Senha SMTP não configurada. Usando modo de simulação.")
            # Em modo de desenvolvimento, apenas simula o envio
            logger.info(f"Simulando envio de email de {contato.nome} ({contato.email})")
            return True
        
        # Criar a mensagem
        mensagem = EmailMessage()
        mensagem["From"] = email_from
        mensagem["To"] = email_to
        mensagem["Subject"] = f"[InfoSmart] Novo contato - Agente: {contato.agente}"

        # Criar corpo do email formatado
        empresa_info = f"Empresa: {contato.empresa}\n" if contato.empresa else ""
        
        corpo = f"""
        Dados do Contato:
        ----------------
        Nome: {contato.nome}
        Email: {contato.email}
        {empresa_info}
        Agente: {contato.agente}
        
        Mensagem:
        ----------------
        {contato.mensagem}
        
        ----------------
        Enviado através do site InfoSmart
        """

        mensagem.set_content(corpo)

        # Enviar email
        logger.info(f"Enviando email de {contato.nome} ({contato.email})")
        await send(
            mensagem,
            hostname=smtp_host,
            port=smtp_port,
            start_tls=True,
            username=smtp_user,
            password=smtp_password,
            timeout=30
        )
        
        logger.info("Email enviado com sucesso")
        return True
        
    except Exception as e:
        logger.error(f"Erro ao enviar email: {str(e)}")
        raise Exception(f"Falha ao enviar email: {str(e)}")
