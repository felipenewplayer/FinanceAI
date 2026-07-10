from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from schema.user import UserCreate
from models.models import User
from core.database import get_db


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
        senha_hash=user.senha
    )

    db.add(novo_usuario)
    db.commit()
    db.refresh(novo_usuario)

    return {
        "id": novo_usuario.id,
        "email": novo_usuario.email
    }