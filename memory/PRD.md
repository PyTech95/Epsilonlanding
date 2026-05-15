# Epsilon Executive Education — Landing Page

## Problem statement
Build a landing page modelled on the reference URL provided by the user, with similar structure and content for an executive AI/ML programme. Static landing + working Apply & Schedule-a-call forms saved to MongoDB.

## Architecture
- Backend: FastAPI + MongoDB. Endpoints: `/api/applications` (POST/GET), `/api/contacts` (POST/GET).
- Frontend: React + shadcn UI + Tailwind. Single page with smooth-scroll sections, two dialog forms.
- Typography: Fraunces (serif headings), Inter (body), JetBrains Mono (eyebrow labels).
- Palette: cream (#FAF6EE), navy (#0E1525), gold (#B8945A).

## Implemented (2026-05-15)
- Sticky nav with section anchors
- Hero with metric strip + Epsilon Promise card
- Faculty logo strip, dark Stats section (91%/69%)
- Overview, Audience (6 roles), Outcome card
- Programme details, Experience grid (7 cells)
- Curriculum (4 modules)
- Capstone, Tools marquee
- Faculty (1 lead + 4 guest lecturers)
- Certificate mockup
- Final CTA
- FAQ accordion (6 items)
- Footer
- Apply form (full_name, email, phone, current_role, years_experience, motivation)
- Schedule-a-call form (full_name, email, phone, preferred_time, message)
- Sonner toasts for form feedback

## Next Action Items
- Hook up admin view to inspect applications/contacts
- Add reCAPTCHA / rate limiting to forms
- Email notifications to admissions on new submission
