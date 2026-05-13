import { getStoredMarketingParams } from "@/lib/utmCapture";

export type ContactFormSnapshot = {
  nome: string;
  empresa: string;
  assunto: string;
  email: string;
  telefone: string;
  tipoEmbalagem: string;
  volume: string;
  mensagem: string;
};

/**
 * POST opcional após envio bem-sucedido do formulário de contato.
 * URL: VITE_CONTACT_WEBHOOK_URL (Zapier, Make, n8n, endpoint próprio com CORS, etc.).
 * Falhas são ignoradas para não bloquear o utilizador.
 */
export function notifyContactFormWebhook(args: {
  form: ContactFormSnapshot;
  recipientEmail: string;
}): void {
  const url = import.meta.env.VITE_CONTACT_WEBHOOK_URL?.trim();
  if (!url) return;

  const utm = getStoredMarketingParams();
  const body = {
    event: "contact_form_submitted",
    timestamp: new Date().toISOString(),
    page_url: typeof window !== "undefined" ? window.location.href : "",
    referrer: typeof document !== "undefined" ? document.referrer || null : null,
    recipient_email: args.recipientEmail,
    utm,
    form: args.form,
  };

  const payload = JSON.stringify(body);

  try {
    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      mode: "cors",
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* ignore */
  }
}
