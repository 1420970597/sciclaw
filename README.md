# SciClaw Public Replica

A production-oriented Next.js 16 project for a high-fidelity public-facing recreation of **sciclaw.ai**.

## Stack

- Next.js App Router
- React 19 + TypeScript
- Tailwind CSS v4
- Vitest + Testing Library
- Docker multi-stage build
- Docker Compose for local container execution

## Scripts

```bash
npm run dev
npm run lint
npm run test
npm run build
npm run start
npm run format
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3001.

## Test and build verification

```bash
npm run lint
npm run test
npm run build
docker compose config
docker compose up -d --build
```

## Docker

Build and run with Docker Compose:

```bash
docker compose up --build
```

App will be exposed on `http://localhost:3001`.

## Project structure

- `src/app/` - App Router entrypoint, layout, route modules, styles, and tests
- `src/components/` - landing page and future shared UI components
- `Dockerfile` - production container image
- `docker-compose.yml` - local container orchestration
- `vitest.config.ts` / `vitest.setup.ts` - test configuration

## Current milestone status

- The repository now contains a runnable, tested, Dockerized public surface plus a first protected product slice.
- Public routes currently cover the landing page, `/chat`, `/privacy`, and a structured help center with `/help/*` routes including billing and FAQ.
- Protected routes now include `/login`, `/register`, `/workspace`, a cookie-backed `/api/workspace` payload, repo-local file persistence, and a seeded admin account (`admin@sciclaw.local` / `Admin123!`).
- The persistence layer is still a conservative file-backed baseline (`.data/app-state.json` in the runtime environment), so the next highest-priority gaps remain a real database, richer role/task/session/foundry flows, and broader backend contracts for the full-site replica.
- `next.config.ts` uses standalone output to support leaner deployment packaging in follow-up refinements.
