# CreditUp Partners

Landing page for the CreditUp Partner Program. The submit form sends a partnership application to **partners@creditup.ua** through the shared CreditUp email backend (`POST /users/send-consultation-email/`).

Built with **Vite + React 19 + TypeScript + SCSS Modules**.

## Tech Stack

| Layer | Library |
| --- | --- |
| Build tool | Vite 8 |
| Framework | React 19 + TypeScript 6 |
| Styling | SCSS Modules + CSS custom properties |
| Forms | `react-hook-form` |
| Phone validation | `google-libphonenumber` |
| HTTP | `axios` with `camelcase-keys` / `decamelize-keys` interceptors |
| Notifications | `react-toastify` |
| Icons | `lucide-react` |
| Fonts | Google Fonts — Unbounded (headings) + Manrope (body) |

## Requirements

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (bundled with Node.js)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy environment variables and adjust as needed:
   ```bash
   cp .env.example .env
   ```

## Environment variables

Defined in `.env` (see `.env.example`). All Vite envs must be prefixed with `VITE_`.

| Variable | Default | Description |
| --- | --- | --- |
| `VITE_APP_ENV` | `prod` | App environment: `dev` or `prod`. |
| `VITE_BASE_API_URL` | `https://cab.groshi247.com/api` | Base URL of the CreditUp email backend. Override for staging. |

The recipient email itself is hard-coded in `src/config/env.ts` as `PARTNERS_EMAIL = "partners@creditup.ua"` — change it there if the address needs to be updated.

## Development

Run the dev server with hot module replacement:

```bash
npm run dev
```

Vite prints the local URL (default [http://localhost:5173](http://localhost:5173); the next free port if 5173 is busy).

## Production build

Build the optimized bundle into `dist/`:

```bash
npm run build
```

The script performs two steps:
1. `tsc -b` — TypeScript type-check (`--noEmit`)
2. `vite build` — bundle + minify into `dist/`

## Preview build

Serve the production bundle locally:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Project structure

```
.
├── public/                     # Static assets
├── src/
│   ├── api/
│   │   └── client.ts           # Axios instance + camelize/decamelize interceptors
│   ├── components/
│   │   ├── About/              # "About program" section
│   │   ├── Benefits/           # 5 benefit cards
│   │   ├── Contact/            # Contacts + embedded PartnersForm
│   │   ├── Faq/                # Accordion FAQ
│   │   ├── Footer/             # Footer
│   │   ├── Hero/               # Hero with stats
│   │   ├── HowToJoin/          # 4-step join flow with scroll reveal
│   │   ├── Logo/               # CreditUp text logo
│   │   ├── ManagerWidget/      # Floating button + manager modal
│   │   ├── Mission/            # Mission pillars
│   │   ├── Nav/                # Sticky navigation
│   │   ├── PartnersForm/       # Application form (react-hook-form)
│   │   ├── Types/              # 4 partner-type cards
│   │   └── ui/                 # Reusable primitives: Button, Checkbox, Field, PhoneField
│   ├── config/
│   │   └── env.ts              # Env vars + PARTNERS_EMAIL recipient
│   ├── services/
│   │   └── email.ts            # emailService.sendPartnersForm()
│   ├── styles/
│   │   ├── _variables.scss     # Design tokens (colors)
│   │   └── global.scss         # Resets, fonts, keyframes
│   ├── utils/
│   │   └── regex.ts            # Email + name regexes
│   ├── App.tsx                 # Page composition
│   └── main.tsx                # Entry point
├── index.html                  # HTML shell (Google Fonts, meta)
├── vite.config.ts              # Vite config (path aliases)
├── tsconfig.app.json           # TS config with `@` aliases
└── package.json
```

## Email backend

The form posts JSON to `${VITE_BASE_API_URL}/users/send-consultation-email/`:

```json
{
  "subject": "[Заявка партнерської програми CreditUp]",
  "to": "partners@creditup.ua",
  "body": "<html>…HTML message…</html>"
}
```

The endpoint is shared with the [`student-loan-landing`](https://github.com/) project. Backend logic lives outside this repository.

## Path aliases

Configured in both `vite.config.ts` and `tsconfig.app.json`:

| Alias | Resolves to |
| --- | --- |
| `@/*` | `src/*` |
| `@api/*` | `src/api/*` |
| `@components/*` | `src/components/*` |
| `@config/*` | `src/config/*` |
| `@services/*` | `src/services/*` |
| `@styles/*` | `src/styles/*` |
| `@utils/*` | `src/utils/*` |
