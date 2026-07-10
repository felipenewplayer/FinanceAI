from fastapi import APIRouter


router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)


@router.get("/signup")
def signup():
    return {
        "message": "Tela onde será feito o signup"
    }