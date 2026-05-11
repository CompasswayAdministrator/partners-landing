# CreditUp Partners

Project bootstrapped with **Vite** using the **React + TypeScript** template.

## Requirements

- [Node.js](https://nodejs.org/) version 18+ (LTS recommended)
- npm (bundled with Node.js)

## Install dependencies

Before the first run, execute:

```bash
npm install
```

## Development mode

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Once started, Vite will print the local URL to the console — by default [http://localhost:5173](http://localhost:5173).

## Production build

Create an optimized build in the `dist/` directory:

```bash
npm run build
```

This script performs two steps:
1. `tsc -b` — TypeScript type checking
2. `vite build` — bundling static files into `dist/`

## Preview the build

Run a local server to inspect the production build:

```bash
npm run preview
```

## Linting

Check the code with ESLint:

```bash
npm run lint
```

## Project structure

```
.
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Resources (images, fonts, etc.)
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```
