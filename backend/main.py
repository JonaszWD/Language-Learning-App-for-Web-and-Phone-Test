from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers import words, stories

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten later
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(words.router)
app.include_router(stories.router)