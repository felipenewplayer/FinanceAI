from fastapi import FastAPI
from routers import auth


app = FastAPI(
    title="FinanceAI API",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "API está rodando ;)"
    }


app.include_router(auth.router)