"""Backend API tests for Epsilon Executive Education landing page."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://curriculum-landing.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Health -----
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        assert "message" in r.json()


# ----- Applications -----
class TestApplications:
    def test_create_application_success(self, client):
        payload = {
            "full_name": "TEST_Alice Founder",
            "email": "test_alice@example.com",
            "phone": "+91 9999911111",
            "current_role": "Senior PM",
            "years_experience": "5-10",
            "motivation": "Sharpen judgement",
        }
        r = client.post(f"{API}/applications", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data
        assert "_id" not in data
        assert data["email"] == payload["email"]
        assert data["full_name"] == payload["full_name"]
        assert data["years_experience"] == "5-10"
        assert "created_at" in data

        # verify persistence via list
        lst = client.get(f"{API}/applications").json()
        assert any(it["id"] == data["id"] for it in lst)

    def test_create_application_bad_email(self, client):
        payload = {
            "full_name": "TEST_Bad Email",
            "email": "not-an-email",
            "phone": "+91 9999911112",
            "current_role": "PM",
            "years_experience": "3-5",
        }
        r = client.post(f"{API}/applications", json=payload)
        assert r.status_code == 422

    def test_create_application_missing_required(self, client):
        r = client.post(f"{API}/applications", json={"full_name": "x"})
        assert r.status_code == 422

    def test_list_applications_sorted(self, client):
        r = client.get(f"{API}/applications")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        for it in items:
            assert "_id" not in it
            assert "id" in it
        # check sorted desc by created_at
        ts = [it.get("created_at") for it in items if it.get("created_at")]
        assert ts == sorted(ts, reverse=True)


# ----- Contacts -----
class TestContacts:
    def test_create_contact_success(self, client):
        payload = {
            "full_name": "TEST_Bob Advisor",
            "email": "test_bob@example.com",
            "phone": "+91 9999922222",
            "preferred_time": "evening",
            "message": "Walk me through fit",
        }
        r = client.post(f"{API}/contacts", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data
        assert "_id" not in data
        assert data["email"] == payload["email"]
        assert data["preferred_time"] == "evening"

        lst = client.get(f"{API}/contacts").json()
        assert any(it["id"] == data["id"] for it in lst)

    def test_create_contact_bad_email(self, client):
        r = client.post(f"{API}/contacts", json={
            "full_name": "TEST_x",
            "email": "bad-email",
            "phone": "+91 9999922223",
        })
        assert r.status_code == 422

    def test_create_contact_missing_required(self, client):
        r = client.post(f"{API}/contacts", json={"full_name": "x"})
        assert r.status_code == 422

    def test_list_contacts_sorted(self, client):
        r = client.get(f"{API}/contacts")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        for it in items:
            assert "_id" not in it
        ts = [it.get("created_at") for it in items if it.get("created_at")]
        assert ts == sorted(ts, reverse=True)


# ----- Brochure Leads -----
class TestBrochureLeads:
    def test_create_brochure_lead_success(self, client):
        payload = {
            "full_name": "TEST_Chitra Brochure",
            "email": "test_chitra@example.com",
            "phone": "+91 9999933333",
            "current_role": "Director, Product",
        }
        r = client.post(f"{API}/brochure-leads", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data
        assert "_id" not in data
        assert data["email"] == payload["email"]
        assert data["full_name"] == payload["full_name"]
        assert data["current_role"] == payload["current_role"]
        assert "created_at" in data

        # verify persistence via list
        lst = client.get(f"{API}/brochure-leads").json()
        assert any(it["id"] == data["id"] for it in lst)

    def test_create_brochure_lead_without_role(self, client):
        # current_role is optional
        payload = {
            "full_name": "TEST_NoRole",
            "email": "test_norole@example.com",
            "phone": "+91 9999944444",
        }
        r = client.post(f"{API}/brochure-leads", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["current_role"] in ("", None)

    def test_create_brochure_lead_bad_email(self, client):
        r = client.post(f"{API}/brochure-leads", json={
            "full_name": "TEST_x",
            "email": "bad-email",
            "phone": "+91 9999955555",
        })
        assert r.status_code == 422

    def test_create_brochure_lead_missing_required(self, client):
        r = client.post(f"{API}/brochure-leads", json={"full_name": "x"})
        assert r.status_code == 422

    def test_list_brochure_leads_sorted(self, client):
        r = client.get(f"{API}/brochure-leads")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        for it in items:
            assert "_id" not in it
            assert "id" in it
        ts = [it.get("created_at") for it in items if it.get("created_at")]
        assert ts == sorted(ts, reverse=True)


# ----- Static brochure PDF -----
class TestStaticBrochure:
    def test_brochure_pdf_served(self, client):
        r = client.get(f"{BASE_URL}/brochure.pdf", timeout=30)
        assert r.status_code == 200, f"Expected 200, got {r.status_code}"
        content_len = len(r.content)
        # > 1MB as per spec
        assert content_len > 1_000_000, f"Brochure too small: {content_len} bytes"
        # quick sanity: PDF magic bytes
        assert r.content[:4] == b"%PDF", "Not a valid PDF file"
