# Rohit Jadhav Portfolio

Next.js portfolio for Rohit Jadhav, Full Stack Developer and AI SaaS Builder from Mumbai, India.

## Tech Stack

- Next.js App Router
- TypeScript
- React
- CSS migrated from the original portfolio design
- Local structured data files for easy future updates

## Folder Structure

- `app/` - Next.js routes and pages
- `components/` - reusable layout, home, project, certificate, contact, and GitHub components
- `data/` - editable portfolio content
- `public/assets/profile/` - profile image
- `public/assets/home/journey/` - Journey section assets
- `public/assets/projects/` - project page assets
- `public/assets/certificates/` - certificate and achievement page assets
- `public/assets/sideworks/` - sidework page assets
- `public/assets/skills/` - development skill icons
- `public/assets/shared/` - shared icons and badges

## Edit Content

Most future updates can be made in these files:

- `data/profile.ts`
- `data/home.ts`
- `data/projects.ts`
- `data/certificates.ts`
- `data/sideworks.ts`
- `data/skills.ts`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run typecheck
npm run build
```
