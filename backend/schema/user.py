from pydantic import BaseModel, EmailStr

#Aqui define o que entra e o que sai da api 

class UserCreate(BaseModel):
    email:EmailStr
    senha:str
    
class UserResponse(BaseModel):
    id: int
    email:EmailStr

    class Config:
        from_attributes = True

class UserLogin(BaseModel):
    email: EmailStr
    senha: str
    
