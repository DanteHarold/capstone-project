from motor.motor_asyncio import AsyncIOMotorClient
from models.user_model import User
from bson import ObjectId

client = AsyncIOMotorClient("mongodb+srv://novianrelay:VHEfsAOufnNdJNeL@cluster0.mb1kmzx.mongodb.net/")
database = client.usersdatabase
collection = database.users

async def get_one_user_id(id:str):
    user = await  collection.find_one({"_id":ObjectId(id)})
    return user

async def get_one_user(uid):
    user = await  collection.find_one({"uid":uid})
    return user

async def get_all_users():
    users = []
    cursor = collection.find({})
    async for document in cursor:
        users.append(User(**document))
    return users

async def create_user(user):
    new_user = await  collection.insert_one(user)
    created_user = await collection.find_one({"_id":new_user.inserted_id})
    return created_user

