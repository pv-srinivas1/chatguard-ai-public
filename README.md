# ChatGuard AI

A public, sanitized version of the ChatGuard AI project for hackathon submission.

## What this repo contains
- Next.js landing page and dashboard UI
- Chrome extension scaffold
- FastAPI service skeleton
- Python inference service scaffold
- Docker setup for local development

## Tech stack
- Next.js 14
- React
- FastAPI
- Python
- Docker

## Getting started

### Frontend
```bash
cd apps/web
npm install
npm run dev
```

### API
```bash
cd services/api
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Inference service
```bash
cd services/inference
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8001
```

## Security note
This repository is intentionally sanitized and excludes local environment variables, private credentials, tokens, and secret files.

## License
MIT
