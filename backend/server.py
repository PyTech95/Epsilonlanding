from fastapi import FastAPI, APIRouter, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '').strip()
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev').strip()
ADMISSIONS_EMAIL = os.environ.get('ADMISSIONS_EMAIL', '').strip()

if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI()
api_router = APIRouter(prefix="/api")
logger = logging.getLogger(__name__)


# ----- Models -----
class ApplicationCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    current_role: str
    years_experience: str
    motivation: Optional[str] = ""


class Application(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: EmailStr
    phone: str
    current_role: str
    years_experience: str
    motivation: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    preferred_time: Optional[str] = ""
    message: Optional[str] = ""


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: EmailStr
    phone: str
    preferred_time: Optional[str] = ""
    message: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class BrochureLeadCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    current_role: Optional[str] = ""


class BrochureLead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: EmailStr
    phone: str
    current_role: Optional[str] = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ----- Email helper -----
def _row(label: str, value: str) -> str:
    return (
        f"<tr><td style='padding:6px 14px;background:#F1ECDF;font-family:monospace;"
        f"font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#0E1525;"
        f"width:160px;'>{label}</td>"
        f"<td style='padding:6px 14px;font-family:Arial,sans-serif;font-size:14px;"
        f"color:#0E1525;'>{value or '—'}</td></tr>"
    )


def _email_html(title: str, subtitle: str, rows: List[tuple]) -> str:
    body_rows = "".join(_row(k, v) for k, v in rows)
    return f"""
<!doctype html>
<html><body style='margin:0;background:#FAF6EE;padding:40px 0;font-family:Arial,sans-serif;'>
  <table align='center' width='560' cellpadding='0' cellspacing='0'
    style='background:#FFF;border:1px solid rgba(14,21,37,0.1);'>
    <tr><td style='background:#0E1525;color:#FAF6EE;padding:28px 32px;'>
      <p style='margin:0;font-family:monospace;font-size:11px;letter-spacing:0.2em;color:#B8945A;text-transform:uppercase;'>Epsilon · Admissions</p>
      <h1 style='margin:6px 0 4px;font-family:Georgia,serif;font-weight:300;font-size:26px;color:#FAF6EE;'>{title}</h1>
      <p style='margin:0;font-size:14px;color:rgba(250,246,238,0.7);'>{subtitle}</p>
    </td></tr>
    <tr><td style='padding:24px 32px;'>
      <table width='100%' cellpadding='0' cellspacing='0' style='border-collapse:collapse;'>
        {body_rows}
      </table>
    </td></tr>
    <tr><td style='padding:18px 32px;background:#F1ECDF;font-family:monospace;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#0E1525;'>
      Sent automatically from epsilonexec.com
    </td></tr>
  </table>
</body></html>"""


async def send_admissions_email(subject: str, html: str) -> None:
    if not RESEND_API_KEY or not ADMISSIONS_EMAIL:
        logger.info("Skipping email send: RESEND_API_KEY or ADMISSIONS_EMAIL not configured.")
        return
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [ADMISSIONS_EMAIL],
            "subject": subject,
            "html": html,
        }
        await asyncio.to_thread(resend.Emails.send, params)
    except Exception as exc:
        logger.error("Email send failed: %s", exc)


# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "Epsilon Executive Education API"}


@api_router.post("/applications", response_model=Application)
async def create_application(payload: ApplicationCreate, background: BackgroundTasks):
    obj = Application(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.applications.insert_one(doc)

    html = _email_html(
        title="New cohort application",
        subtitle="A candidate has submitted their application.",
        rows=[
            ("Name", obj.full_name),
            ("Email", obj.email),
            ("Phone", obj.phone),
            ("Current role", obj.current_role),
            ("Experience", obj.years_experience),
            ("Motivation", obj.motivation or ""),
        ],
    )
    background.add_task(
        asyncio.run, send_admissions_email(f"New application · {obj.full_name}", html)
    )
    return obj


@api_router.get("/applications", response_model=List[Application])
async def list_applications():
    items = await db.applications.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


@api_router.post("/contacts", response_model=Contact)
async def create_contact(payload: ContactCreate, background: BackgroundTasks):
    obj = Contact(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contacts.insert_one(doc)

    html = _email_html(
        title="Advisor call requested",
        subtitle="A prospect has asked an advisor to reach out.",
        rows=[
            ("Name", obj.full_name),
            ("Email", obj.email),
            ("Phone", obj.phone),
            ("Preferred time", obj.preferred_time or ""),
            ("Message", obj.message or ""),
        ],
    )
    background.add_task(
        asyncio.run, send_admissions_email(f"Call request · {obj.full_name}", html)
    )
    return obj


@api_router.get("/contacts", response_model=List[Contact])
async def list_contacts():
    items = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


@api_router.post("/brochure-leads", response_model=BrochureLead)
async def create_brochure_lead(payload: BrochureLeadCreate, background: BackgroundTasks):
    obj = BrochureLead(**payload.model_dump())
    doc = obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.brochure_leads.insert_one(doc)

    html = _email_html(
        title="Brochure download lead",
        subtitle="A prospect has requested the programme brochure.",
        rows=[
            ("Name", obj.full_name),
            ("Email", obj.email),
            ("Phone", obj.phone),
            ("Current role", obj.current_role or ""),
        ],
    )
    background.add_task(
        asyncio.run, send_admissions_email(f"Brochure download · {obj.full_name}", html)
    )
    return obj


@api_router.get("/brochure-leads", response_model=List[BrochureLead])
async def list_brochure_leads():
    items = await db.brochure_leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
