from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schema.login import UserLogin
from sqlalchemy import select
from fastapi import HTTPException
from schema.user import UserCreate,UserResponse
from models.models import User
from core.database import get_db
from core.security import gerar_hash, verificar_senha, criar_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


@router.post("/register")
def register(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    novo_usuario = User(
        email=user.email,
        senha_hash=gerar_hash(user.senha)
    )

    db.add(novo_usuario)
    db.commit()
    db.refresh(novo_usuario)

    return {
        "id": novo_usuario.id,
        "email": novo_usuario.email
    }
    
@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):
    stmt = select(User).where(User.email == user.email)

    usuario = db.execute(stmt).scalar_one_or_none()

    if usuario is None:
        raise HTTPException(
            status_code=401,
            detail="Email ou senha inválidos"
        )
    if not verificar_senha(user.senha, usuario.senha_hash):
        raise HTTPException(
            status_code=401,
            detail="Email ou senha inválidos"
        )
        
    token = criar_access_token(
        data={
            "sub":usuario.email
        }
    )
    return {
        "access_token":token,
        "token_type":"bearer"
    }
    
    
@router.get("/users",response_model=list[UserResponse])
def listar_usuarios(
    db: Session = Depends(get_db)
):
    stmt = select(User)
    usuario = db.execute(stmt).scalars().all()
    
    return usuario  

@router.get("/user/{id}",response_model=UserResponse)
def buscar_usuario(
    id:int,
    db: Session = Depends(get_db)
):
    stmt = select(User).where(User.id == id)
    usuario = db.execute(stmt).scalar_one_or_none()
    if not usuario:
        raise HTTPException(
            status_code=404,
            detail="Usuário não encontrado"
        )
    return usuario  