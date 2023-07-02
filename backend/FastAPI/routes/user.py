from fastapi import APIRouter,HTTPException
from database.database import get_all_users,create_user,get_one_user_id,get_one_user
from models.user_model import User

user = APIRouter()

@user.get("/api/users")
async def get_users():
    users = await get_all_users()
    return users

@user.post("/api/users",response_model=User)
async def save_user(user : User):
    print(user)
    # taskFound = await get_one_user(user.uid)
    # if taskFound:
    #     raise HTTPException(409,"User already exists")
    res = await create_user(user.dict())
    if res:
        return res
    raise HTTPException(404,"Something went wrong")

@user.get("/api/users/{id}",response_model=User)
async def get_user(id:str):
    user = await get_one_user_id(id)
    if user:
        return user
    raise HTTPException(404, f"User with id {id} not found!")