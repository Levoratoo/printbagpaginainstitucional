/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_MARKETING?: string;
  readonly VITE_WEB3FORMS_RH?: string;
  readonly VITE_WEB3FORMS_COMPRAS?: string;
  readonly VITE_WEB3FORMS_SAC?: string;
  /** POST JSON após contacto OK (Zapier / Make / n8n — ver CORS). */
  readonly VITE_CONTACT_WEBHOOK_URL?: string;
}
