from pythoncom import DATADIR_GET
from fastapi import HTTPException
import httpx
async def buscar_acao_brapi(ticker:str):
    url = f"https://brapi.dev/api/quote/{ticker}"

    async with httpx.AsyncClient(timeout=10) as client:
        response = await client.get(url)

    if response.status_code!=200:
        raise HTTPException(
            status_code=400,
            detail="Ação não encontrada"
        )
    dados = response.json()

    if not dados.get("results"):
        raise HTTPException(
            status_code=400,
            detail="Ação não encontrada"
        )

    acao = dados["results"][0]

    return {
        "ticker": acao.get("symbol"),
        "nome": acao.get("longName"),
        "preco": acao.get("regularMarketPrice"),
        "variacao": acao.get("regularMarketChangePercent"),
        "moeda": acao.get("currency")
    }
