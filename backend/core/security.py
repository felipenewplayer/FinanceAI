from passlib.context import CryptContext
from datetime import datetime, timedelta, timezone
from dotenv import load_dotenv
from jose import JWTError, jwt
import os
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM =os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))


pwd_context = CryptContext(
    schemes=['bcrypt'],
    deprecated='auto'
    )

def gerar_hash(senha:str):
    return pwd_context.hash(senha)

def verificar_senha(senha:str, senha_hash:str):
    return pwd_context.verify(senha, senha_hash)


def criar_access_token(data:dict):
    """
    Gera um JWT.
    data:informações que ficarão dentro do token.
    """
    payload = data.copy()
    
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    
    payload["exp"] = expire
    
    token = jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )
    
    return token


def validar_access_token(token:str):
    """
    Valida um JWT e devolve o payload
    """
    
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )
        
        return payload
    except JWTError:
        return None