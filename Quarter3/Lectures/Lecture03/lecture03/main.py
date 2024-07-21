from fastapi import FastAPI

app = FastAPI(
    servers=[
    {
        "url": "http://localhost:8000", # ADD NGROK URL Here Before Creating GPT Action
        "description": "Development Server"
    }
    ])

@app.get("/")
def read_root():
    return {"Hello": "World"}