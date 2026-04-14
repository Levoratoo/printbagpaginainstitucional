/**
 * Envio do formulário de contato via Web3Forms (https://web3forms.com) — gratuito, sem backend.
 * Cada chave no painel está associada ao e-mail de destino (marketing@, rh@, etc.).
 */

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type ContatoFormState = {
  nome: string;
  empresa: string;
  assunto: string;
  email: string;
  telefone: string;
  tipoEmbalagem: string;
  volume: string;
  mensagem: string;
};

function accessKeyForAssunto(assunto: string): string | undefined {
  const m = import.meta.env;
  const marketing = m.VITE_WEB3FORMS_MARKETING?.trim();
  const table: Record<string, string | undefined> = {
    "Fazer um orçamento": marketing,
    "Falar com Marketing": marketing,
    // Fallback para marketing se as outras chaves não estiverem configuradas
    "Falar com Recursos Humanos": m.VITE_WEB3FORMS_RH?.trim() || marketing,
    "Quero ser um Fornecedor": m.VITE_WEB3FORMS_COMPRAS?.trim() || marketing,
    "Sugestão ou Reclamação": m.VITE_WEB3FORMS_SAC?.trim() || marketing,
    Outros: marketing,
  };
  return table[assunto];
}

function buildMessageBody(data: ContatoFormState): string {
  const lines = [
    `Assunto selecionado: ${data.assunto}`,
    "",
    `Nome: ${data.nome}`,
    `Empresa: ${data.empresa || "(não informado)"}`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.telefone}`,
  ];
  if (data.tipoEmbalagem || data.volume) {
    lines.push(
      `Tipo de embalagem: ${data.tipoEmbalagem || "-"}`,
      `Volume estimado: ${data.volume || "-"}`
    );
  }
  lines.push("", "Mensagem:", data.mensagem || "(sem texto adicional)");
  return lines.join("\n");
}

export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function submitContatoWeb3(data: ContatoFormState): Promise<SubmitResult> {
  const access_key = accessKeyForAssunto(data.assunto);
  if (!access_key?.trim()) {
    return {
      ok: false,
      message:
        "Formulário ainda não configurado: defina as variáveis VITE_WEB3FORMS_* (veja README e .env.example).",
    };
  }

  const payload = {
    access_key: access_key.trim(),
    subject: `[Site Printbag] ${data.assunto}`,
    name: data.nome,
    from_name: `Site Printbag — ${data.nome}`,
    email: data.email,
    phone: data.telefone,
    message: buildMessageBody(data),
    replyto: data.email,
  };

  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = (await res.json()) as {
      success?: boolean;
      message?: string;
      body?: { message?: string };
    };

    const ok = json.success === true;
    if (res.ok && ok) {
      return { ok: true };
    }

    const errMsg =
      json.message || json.body?.message || `Erro ao enviar (${res.status}). Tente novamente.`;
    return { ok: false, message: errMsg };
  } catch {
    return { ok: false, message: "Falha de rede. Verifique sua conexão e tente de novo." };
  }
}
