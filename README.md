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

## Formulário de contato (e-mail)

O envio usa **[Web3Forms](https://web3forms.com)** (gratuito, sem servidor): cada destino tem uma *Access Key* no painel.

1. Crie uma conta em [web3forms.com](https://web3forms.com) e adicione **4 formulários**, cada um com o e-mail de recebimento:
   - `marketing@printbag.com.br` → chave usada em `VITE_WEB3FORMS_MARKETING`
   - `rh@printbag.com.br` → `VITE_WEB3FORMS_RH`
   - `compras@printbag.com.br` → `VITE_WEB3FORMS_COMPRAS`
   - `sac@printbag.com.br` → `VITE_WEB3FORMS_SAC`
2. No painel, restrinja o domínio permitido (ex.: `printbag.com.br` e, se quiser testar, `github.io`).
3. Copie `.env.example` para `.env` e preencha as chaves. O Vite só lê variáveis no build (`VITE_*`).
4. **GitHub Actions:** em **Settings → Secrets and variables → Actions**, crie os mesmos nomes (`VITE_WEB3FORMS_MARKETING`, etc.) com os valores. O workflow de deploy já injeta essas variáveis no `npm run build`.

Roteamento por assunto no site:

| Assunto | E-mail |
|--------|--------|
| Fazer um orçamento | marketing |
| Falar com Marketing | marketing |
| Falar com Recursos Humanos | rh |
| Quero ser um Fornecedor | compras |
| Sugestão ou Reclamação | sac |
| Outros | marketing |

## UTM + webhook (CRM / automação)

- **`UtmCapture`** guarda na sessão (`sessionStorage`) parâmetros da URL em cada navegação: `utm_*`, `gclid`, `fbclid`, `msclkid`, etc. Ver lista em `src/lib/utmCapture.ts`.
- Ao **submeter** o formulário em `/contato`, o site faz até **dois POSTs JSON opcionais** para `VITE_CONTACT_WEBHOOK_URL` (n8n, Zapier, Make, API própria), com o mesmo `submission_id`:
  - **`webhook_phase`: `"lead"`** — disparado **antes** de tentar o e-mail (`email_delivery.pending`: true); captura o lead logo de imediato.
  - **`webhook_phase`: `"delivery"`** — disparado no fim (**sempre**, em `finally`), com o resultado real do e-mail (`email_delivery.ok`, `channel`, `error`).

Corpo típico (fase `delivery` após sucesso):

```json
{
  "event": "contact_form_submitted",
  "webhook_phase": "delivery",
  "submission_id": "uuid-da-submissão",
  "timestamp": "2026-01-01T12:00:00.000Z",
  "page_url": "https://printbag.com.br/contato",
  "referrer": "…",
  "recipient_email": "marketing@printbag.com.br",
  "email_delivery": {
    "ok": true,
    "channel": "web3forms",
    "error": null
  },
  "utm": { "utm_source": "google", "utm_medium": "cpc" },
  "form": { "nome": "…", "email": "…", "assunto": "…", … }
}
```

No n8n, use `submission_id` para correlacionar `lead` e `delivery`, e `email_delivery` na fase `delivery` para alertas ou retry se o e-mail falhar.

Configuração:

1. `.env`: `VITE_CONTACT_WEBHOOK_URL=https://…`
2. GitHub Actions: secret **`VITE_CONTACT_WEBHOOK_URL`** (o workflow já repassa para o build).

**CORS:** o browser só consegue enviar se o endpoint aceitar `Origin` do site (ex.: Zapier/Make costumam aceitar). Se falhar no browser, usa um proxy server-side.

**LGPD:** o webhook inclui dados pessoais — usa canal seguro e base legal alinhada à política de privacidade.

## Publicação (GitHub Pages)

O repositório publica o conteúdo de `dist/` na branch **`gh-pages`** (workflow em `.github/workflows/deploy-gh-pages.yml` ou deploy manual equivalente).

No GitHub: **Settings → Pages** — fonte **Deploy from a branch**, branch **`gh-pages`**, pasta **`/(root)`**.

Site público: `https://levoratoo.github.io/printbag-institucional/`

## Licença

Uso interno / conforme acordo do projeto.
