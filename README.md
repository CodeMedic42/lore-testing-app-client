# @mythos/client

A small React contact form built from `@mythos/ui-library`.

`ContactForm` composes `Card`, `TextField` and `Button`, holds field state with
`useState`, and POSTs the enquiry to `/v1/enquiries`; `src/index.tsx` mounts it
with `createRoot`.

## Stack

TypeScript and Vite, linted with ESLint.

```bash
npm install          # needs access to the @mythos registry
npm run dev
npm run build        # vite build
npm run lint
npm run typecheck
```
