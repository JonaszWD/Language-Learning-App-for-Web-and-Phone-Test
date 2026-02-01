from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

'''
Start server with:
uvicorn main:app --reload --host 0.0.0.0 --port 8000
'''
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # dev only
    allow_credentials=True,
    allow_methods=["*"],        # includes OPTIONS
    allow_headers=["*"],
)

@app.get("/make_story")
def make_story():
    return {"story": f"Once upon a time... (prompt was:"}