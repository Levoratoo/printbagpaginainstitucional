import { type ContactFormUtmPayload } from "@/lib/utmCapture";

export type ContactFormSnapshot = {
  nome: string;
  empresa: string;
  assunto: string;
  email: string;
  telefone: string;
  /** Legado (outros fluxos); em «Fazer um orçamento» usar segmento */
  tipoEmbalagem: string;
  segmento: string;
  numeroLojas: string;
  ondeConheceu: string;
  volume: string;
  mensagem: string;
};

export type EmailDeliveryMeta = {
  ok: boolean;
  channel: "supabase" | "web3forms" | "none";
  error: string | null;
};

/** Uma única fase por submissão — evita dois POSTs ao n8n/Pipedrive. */
export type ContactWebhookPhase = "submit";

/**
 * POST único para VITE_CONTACT_WEBHOOK_URL após tentativa de e-mail.
 * Inclui resultado em `email_delivery` para alertas ou retry no n8n.
 */
export function notifyContactFormWebhook(args: {
  form: ContactFormSnapshot;
  recipientEmail: string;
  submissionId: string;
  webhookPhase: ContactWebhookPhase;
  emailDelivery: EmailDeliveryMeta;
  utm: ContactFormUtmPayload;
}): void {
  const url = import.meta.env.VITE_CONTACT_WEBHOOK_URL?.trim();
  if (!url) return;

  const body = {
    event: "contact_form_submitted",
    webhook_phase: args.webhookPhase,
    submission_id: args.submissionId,
    timestamp: new Date().toISOString(),
    page_url: typeof window !== "undefined" ? window.location.href : "",
    referrer: typeof document !== "undefined" ? document.referrer || null : null,
    recipient_email: args.recipientEmail,
    email_delivery: args.emailDelivery,
    utm: args.utm,
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
