# Printbag — Site institucional

Site da **Printbag**, fabricante de embalagens e sacolas, com páginas de apresentação da empresa, soluções (produtos e acabamentos), sustentabilidade, privacidade e contato.

## Stack

- Vite 5
- React 18 + TypeScript
- Tailwind CSS e shadcn/ui (Radix)
- React Router, Framer Motion, TanStack Query

## Desenvolvimento local

Requer Node.js (recomendado 18+).

```sh
npm install
npm run dev
```

O build usa **`base` relativo (`./`)** para o mesmo `dist` funcionar na **raiz do domínio** (`https://printbag.com.br/`) e em **`https://<user>.github.io/printbag-institucional/`**. Em desenvolvimento, use a URL raiz que o Vite mostrar (ex.: `http://localhost:5173/` ou `http://192.168.1.104:3017/`), não um subpath fixo.

## Build

```sh
npm run build
```

Gera a pasta `dist/` e copia `404.html` para fallback de SPA no GitHub Pages.

## Publicação (GitHub Pages)

O repositório publica o conteúdo de `dist/` na branch **`gh-pages`** (workflow em `.github/workflows/deploy-gh-pages.yml` ou deploy manual equivalente).

No GitHub: **Settings → Pages** — fonte **Deploy from a branch**, branch **`gh-pages`**, pasta **`/(root)`**.

Site público: `https://levoratoo.github.io/printbag-institucional/`

## Licença

Uso interno / conforme acordo do projeto.
