# Ryan Thai's portfolio

A responsive, static portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

Use Node.js 20.9 or later (Node.js 24 LTS recommended) and pnpm 11:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:3000.

## Build and preview

```sh
pnpm typecheck
pnpm build
pnpm start
```

The production site is exported to `out/`. The preview server binds only to your computer. No accounts, environment variables, external fonts, or backend are required.

## Edit the content

Update `src/content/portfolio.ts` for your biography, projects, skills, experience, and links. Replace `public/Ryan_Thai_Resume.pdf` to update the download. Visual styling lives in `src/app/globals.css`.

Project panels are original typographic artwork, not screenshots. CarSearch is described as an individual project; INSTEA is explicitly in planning/prototyping. Project descriptions are based on the supplied notes and résumé. Source links are omitted for private repositories.

## Publish later

Upload `out/` to a static host, or connect the source to Vercel with its Next.js preset. No deployment has been created. Set a canonical URL and absolute social metadata once a public domain has been selected.
