import { getStoredMarketingParams } from "@/lib/utmCapture";

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
  /** true no primeiro webhook, antes de tentar enviar o e-mail */
  pending?: boolean;
};

export type ContactWebhookPhase = "lead" | "delivery";

/**
 * POST para VITE_CONTACT_WEBHOOK_URL.
 * - phase `lead`: disparado logo ao submeter (antes do e-mail).
 * - phase `delivery`: disparado no finally com o resultado do e-mail.
 * Use `submission_id` no n8n para agrupar os dois eventos.
 */
export function notifyContactFormWebhook(args: {
  form: ContactFormSnapshot;
  recipientEmail: string;
  submissionId: string;
  webhookPhase: ContactWebhookPhase;
  emailDelivery: EmailDeliveryMeta;
}): void {
  const url = import.meta.env.VITE_CONTACT_WEBHOOK_URL?.trim();
  if (!url) return;

  const utm = getStoredMarketingParams();
  const body = {
    event: "contact_form_submitted",
    webhook_phase: args.webhookPhase,
    submission_id: args.submissionId,
    timestamp: new Date().toISOString(),
    page_url: typeof window !== "undefined" ? window.location.href : "",
    referrer: typeof document !== "undefined" ? document.referrer || null : null,
    recipient_email: args.recipientEmail,
    email_delivery: args.emailDelivery,
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
