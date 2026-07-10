from core.database import engine, Base
from models.models import User
Base.metadata.create_all(bind=engine)
print(Base.metadata.tables)
print("Tabelas criadas!")