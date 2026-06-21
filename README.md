# Rohit Jadhav Portfolio

Next.js portfolio — easy to edit. Change content in `data/`, not in page files.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Folder Structure

```
Rohit-Portfolio/
├── data/                  ← EDIT CONTENT HERE
│   ├── site.ts            ← name, email, phone, navbar, social links
│   ├── home.ts            ← About page (text, skills, stats, journey)
│   ├── projects.ts        ← Projects page cards
│   ├── products.ts        ← Products page cards
│   ├── experience.ts      ← Experience timeline
│   ├── certificates.ts    ← Certificates, hackathons, events
│   └── index.ts           ← exports all data files
│
├── components/            ← UI shell (rarely need to edit)
│   ├── PortfolioShell.tsx ← sidebar + navbar
│   ├── Article.tsx
│   ├── PaginationLink.tsx
│   ├── BookingModal.tsx
│   └── BookingProvider.tsx
│
├── app/                   ← pages (routes)
│   ├── page.tsx           ← About (home)
│   ├── projects/
│   ├── products/
│   ├── experience/
│   ├── certificates/
│   ├── contact/
│   └── api/book-meeting/  ← email booking
│
└── public/assets/         ← images
    ├── profile/           ← your photo
    ├── projects/          ← project screenshots
    ├── certifications/    ← hackathon / event photos
    ├── certificates/      ← achievement photos (e.g. Google Gemini)
    ├── home/journey/      ← journey carousel images
    └── skills/            ← skill icons
```

## What to Edit

| Want to change… | Edit this file |
|-----------------|----------------|
| Name, email, phone, location, motto | `data/site.ts` |
| Navbar menu items | `data/site.ts` |
| Social links (GitHub, LinkedIn…) | `data/site.ts` |
| About text, skills, stats | `data/home.ts` |
| Projects list | `data/projects.ts` |
| Products list | `data/products.ts` |
| Work experience | `data/experience.ts` |
| Certificates & hackathons | `data/certificates.ts` |
| Profile photo | `public/assets/profile/` |
| Project images | `public/assets/projects/` |

## Email Booking (optional)

Copy `.env.example` to `.env.local` and add your Gmail app password.

## Build

```bash
npm run typecheck
npm run build
```
