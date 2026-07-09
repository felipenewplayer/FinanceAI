from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def get_hello():
    return {"API está rodando ;)"}

@app.get("/signup")
def signup():
    return {"Tela onde ira ser feito o sign up"}