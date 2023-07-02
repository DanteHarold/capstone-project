from fastapi import FastAPI
from routes.user import user
from fastapi.middleware.cors import CORSMiddleware
from decouple import Config

app = FastAPI()

#* Urls permitidas
# origins = [
#     Config("FRONTEND_URL")
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def welcome ():
    return {"message":"Welcome"}

app.include_router(user)

#* Inicia el Server : unicorn main:app --reload

#* Doc : /docs y /redoc