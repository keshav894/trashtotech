# Trash n' Tech

Small frontend project (Vite + React + Tailwind) that demonstrates smart waste segregation and community features.

## Prerequisites

- Node.js >= 16
- npm (or yarn / pnpm)
- Git

## Install

Open a terminal in the project root (`/Users/keshavmatrey/Desktop/AI project`):

```bash
npm install
# or
# yarn
# pnpm install
```

## Development

Run the dev server (Vite):

```bash
npm run dev
# then open the URL shown (usually http://localhost:5173)
```

## Build / Preview

```bash
npm run build
npm run preview
```

## Common tasks

- Add a new image and use it in React components:
  1. Place the image in `src/images/` (e.g. `src/images/smart.jpg`).
  2. Import in your component:
     ```jsx
     import smartImg from "../../images/smart.jpg";
     ```
  3. Use `smartImg` as the src prop or image source.

- If you see CSS errors like `Unknown at rule @tailwind`:
  - Ensure `tailwindcss`, `postcss`, and `autoprefixer` are installed:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```
  - Ensure `postcss.config.js` contains:
    ```js
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
    ```
  - Ensure your main CSS includes:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Git

- To push changes to an existing repo (from project root):
  ```bash
  git add .
  git commit -m "Describe changes"
  git push origin HEAD
  ```

## Notes

- Do not commit `node_modules/`; `.gitignore` is provided.
- Keep `package-lock.json` or `yarn.lock` committed so installs are reproducible.

If you want, I can add scripts or CI config (GitHub Actions) — tell me what you