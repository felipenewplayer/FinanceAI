from fastapi import APIRouter, HTTPException
from schema.acao import AcaoResponse
from services.brapi_service import buscar_acao_brapi
from core.logger import get_logger

logger = get_logger(__name__)

router = APIRouter(
    prefix="/acoes",
    tags=["Acoes"]
)

@router.get("/{ticker}", response_model=AcaoResponse)
async def buscar_acao(ticker: str):
    ticker = ticker.upper()

    try:
        acao = await buscar_acao_brapi(ticker)
        return acao
    
    except HTTPException as e:
        raise e
    
    except Exception:
        logger.exception(f"Erro ao buscar ação {ticker}")
        raise HTTPException(
            status_code=500,
            detail="Erro interno do servidor"
        )
