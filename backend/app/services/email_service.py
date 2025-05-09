from email.message import EmailMessage
from aiosmtplib import send

async def enviar_email(contato):
    mensagem = EmailMessage()
    mensagem["From"] = "vns.pontual77@gmail.com"  # Substitua pelo seu email
    mensagem["To"] = "vns.pontual77@gmail.com"    # Pode ser o mesmo email ou outro destino
    mensagem["Subject"] = f"Nova mensagem de {contato.nome}"

    corpo = f"""
    Nome: {contato.nome}
    Email: {contato.email}
    Mensagem:
    {contato.mensagem}
    """

    mensagem.set_content(corpo)

    await send(
        mensagem,
        hostname="smtp.gmail.com",
        port=587,
        start_tls=True,
        username="vns.pontual77@gmail.com",       # Substitua pelo seu email
        password="swzg scdz hpjc fxrl",        # ⚠️ Coloque sua senha de app aqui
    )
