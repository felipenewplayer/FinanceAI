from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy import String
from datetime import datetime, timezone
from core.database import Base

class User(Base):
    __tablename__ = "users"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    
    email: Mapped[str] = mapped_column(
        String(255), 
        unique=True, index=True, nullable=False)
    
    senha_hash: Mapped[str] = mapped_column(
        String(255), 
        nullable=False)
    
    criado_em: Mapped[datetime] = mapped_column(
        default=lambda:datetime.now(timezone.utc),
        nullable=False)
    
    
