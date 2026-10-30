from fastapi import FastAPI

app = FastAPI(title="ChatGuard Inference")

@app.get("/health")
async def health() -> dict:
    return {"status": "ok"}

@app.get("/ready")
async def ready() -> dict:
    return {"status": "ready"}
