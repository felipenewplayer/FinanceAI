import os
from dotenv import load_dotenv
from fastapi import HTTPException
import httpx

load_dotenv()

async def buscar_acao_brapi(ticker:str):
    token = os.getenv("API_BARPI") or os.getenv("API_BRAPI")
    url = f"https://brapi.dev/api/quote/{ticker}"
    params = {}
    if token:
        params["token"] = token

    async with httpx.AsyncClient(timeout=10) as client:
        response = await client.get(url, params=params)

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
