from pydantic import BaseModel,Field
from typing import Optional
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate
    
    @classmethod
    def validate(cls,v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid ObjectID")
        return str(v)

#*Entidad Respuestas
class Rpts(BaseModel):
    p1: str
    p2: str
    p3: str
    p4: str
    p5: str
    p6: str
    p7: str
    p8: str
    
    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId:str}

#* Entidad User
class User(BaseModel):
#   id: Optional[PyObjectId] = Field(alias="_id")
    uid: str
    name: str
    email : str
    rptsDocument : Rpts
    
    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        json_encoders = {ObjectId:str}