import logging
from typing import Any

from fastapi import Depends, FastAPI, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from .config import settings
from .database import init_db, insert_lead, list_leads

logging.basicConfig(level=settings.log_level)
logger = logging.getLogger("bervinov-portfolio-api")

ALLOWED_SITES = {
    "portfolio",
    "severny-kofe",
    "vkus-ogon",
    "denta-lux",
    "fitzone",
    "lingua-pro",
}


class LeadCreate(BaseModel):
    site: str = Field(min_length=2, max_length=64)
    form: str = Field(min_length=2, max_length=64)
    payload: dict[str, Any] = Field(default_factory=dict)


app = FastAPI(title="Bervinov Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    init_db()
    logger.info("SQLite ready at %s", settings.database_path)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/leads")
def create_lead(body: LeadCreate, request: Request) -> dict[str, int | str]:
    if body.site not in ALLOWED_SITES:
        raise HTTPException(status_code=400, detail=f"Unknown site: {body.site}")

    if not body.payload:
        raise HTTPException(status_code=400, detail="Payload is empty")

    lead_id = insert_lead(
        site=body.site,
        form_type=body.form,
        payload=body.payload,
        ip=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent"),
    )
    logger.info("Lead #%s saved: site=%s form=%s", lead_id, body.site, body.form)
    return {"id": lead_id, "status": "saved"}


def require_admin(x_api_key: str | None = Header(default=None)) -> None:
    if not x_api_key or x_api_key != settings.admin_api_key:
        raise HTTPException(status_code=401, detail="Invalid API key")


@app.get("/api/leads")
def get_leads(
    site: str | None = None,
    limit: int = 100,
    _: None = Depends(require_admin),
) -> dict[str, Any]:
    if limit < 1 or limit > 500:
        raise HTTPException(status_code=400, detail="limit must be 1..500")
    return {"items": list_leads(site=site, limit=limit)}
