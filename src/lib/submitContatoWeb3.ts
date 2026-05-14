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
  segmento: string;
  numeroLojas: string;
  perfilLead: string;
  ondeConheceu: string;
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
  if (data.assunto === "Fazer um orçamento") {
    lines.push(
      `Qual o seu perfil: ${data.perfilLead || "-"}`,
      `Segmento: ${data.segmento || "-"}`,
      `Número de lojas: ${data.numeroLojas || "-"}`,
      `Volume estimado: ${data.volume || "-"}`,
      `Por onde nos conheceu: ${data.ondeConheceu || "-"}`,
    );
  } else if (data.tipoEmbalagem || data.volume) {
    lines.push(
      `Tipo de embalagem: ${data.tipoEmbalagem || "-"}`,
      `Volume estimado: ${data.volume || "-"}`,
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

    const text = await res.text();
    let json: { success?: boolean; message?: string; body?: { message?: string } } = {};
    if (text.trim()) {
      try {
        json = JSON.parse(text) as typeof json;
      } catch {
        return {
          ok: false,
          message: res.ok
            ? "Resposta inválida do serviço de formulários. Tente mais tarde."
            : `Erro ao enviar (HTTP ${res.status}). Tente novamente.`,
        };
      }
    }

    const ok = json.success === true;
    if (res.ok && ok) {
      return { ok: true };
    }

    const errMsg =
      json.message || json.body?.message || `Erro ao enviar (${res.status}). Tente novamente.`;
    return { ok: false, message: errMsg };
  } catch (err) {
    const failedFetch =
      err instanceof TypeError ||
      (err instanceof Error && /failed to fetch|networkerror|load failed/i.test(err.message));

    if (failedFetch) {
      return {
        ok: false,
        message:
          "O browser não conseguiu contactar o Web3Forms (bloqueio de rede, VPN, firewall ou extensão). " +
          "Se funciona em localhost e falha no domínio público, o Web3Forms pode pedir aprovação do domínio — contacte o suporte deles com printbag.com.br. " +
          "Teste sem bloqueadores ou noutra rede.",
      };
    }

    return { ok: false, message: "Falha de rede. Verifique sua conexão e tente de novo." };
  }
}
