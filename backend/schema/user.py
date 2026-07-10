from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email:EmailStr
    senha:str
    
class UserResponse(BaseModel):
    id: int
    email:EmailStr

    class Config:
        from_attributes = True

#Aqui define o que entra e o que sai da api 