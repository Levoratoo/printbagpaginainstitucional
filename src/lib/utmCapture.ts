/**
 * Persiste parâmetros de campanha da URL na sessão (SPA não recarrega a página).
 * Ao navegar sem query string, mantemos o último valor capturado no mesmo tab.
 */
const STORAGE_KEY = "printbag_marketing_params";

/** UTMs + identificadores comuns de anúncio — pode acrescentar chaves aqui. */
const TRACKED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "fbclid",
  "msclkid",
  "twclid",
  "li_fat_id",
] as const;

function parseStored(): Record<string, string> {
  if (typeof sessionStorage === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as Record<string, string>;
  } catch {
    return {};
  }
}

/** Mescla query atual sobre o objeto guardado (valores novos na URL sobrescrevem a mesma chave). */
export function mergeMarketingParamsFromSearch(search: string): void {
  if (typeof sessionStorage === "undefined") return;
  const qs = search.startsWith("?") ? search.slice(1) : search;
  const params = new URLSearchParams(qs);
  const prev = parseStored();
  let changed = false;
  for (const key of TRACKED_KEYS) {
    const v = params.get(key);
    if (v?.trim()) {
      prev[key] = v.trim();
      changed = true;
    }
  }
  if (changed) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
  }
}

/** Snapshot atual para enviar ao webhook / CRM (objeto vazio se nunca houve params). */
export function getStoredMarketingParams(): Record<string, string> {
  return parseStored();
}
