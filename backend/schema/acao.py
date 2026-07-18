from pydantic import BaseModel

class AcaoResponse(BaseModel):
    ticker: str
    nome: str
    preco: float
    moeda: str
    variacao: float

    class Config:
        from_attributes = True
