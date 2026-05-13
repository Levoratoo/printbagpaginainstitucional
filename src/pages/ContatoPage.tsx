import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { isSupabaseEnvConfigured, supabase } from "@/integrations/supabase/client";
import {
  Phone,
  Mail,
  Send,
  Building2,
  User,
  Package,
  MessageSquare,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { notifyContactFormWebhook, type EmailDeliveryMeta } from "@/lib/contactWebhook";
import {
  mergeMarketingParamsFromSearch,
  getContactFormUtmSnapshot,
  CONTACT_FORM_UTM_KEYS,
} from "@/lib/utmCapture";
import { submitContatoWeb3 } from "@/lib/submitContatoWeb3";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const volumeOptions = [
  "Até 1.000 unidades",
  "1.000 a 5.000 unidades",
  "5.000 a 10.000 unidades",
  "10.000 a 50.000 unidades",
  "Acima de 50.000 unidades",
];

/** Volume para «Fazer um orçamento» — sem faixa «Até 1.000 unidades». */
const volumeOptionsOrcamento = volumeOptions.filter((v) => v !== "Até 1.000 unidades");

const segmentOptions = [
  "Moda e Calçados",
  "Cosméticos e Beleza",
  "Jóias e Relógios",
  "Alimentos e Bebidas",
  "Tecnologias e Eletrônicos",
  "Outros",
];

const numeroLojasOptions = ["1", "2", "3", "4", "5 ou mais"];

const ondeConheceuOptions = [
  "Indicação",
  "Vi a marca em uma embalagem",
  "Já fui cliente",
  "Linkedin",
  "Google",
  "Instagram/Facebook",
  "Outro",
];

const assuntoOptions = [
  "Fazer um orçamento",
  "Falar com Marketing",
  "Falar com Recursos Humanos",
  "Quero ser um Fornecedor",
  "Sugestão ou Reclamação",
  "Outros",
];

const emptyFormState = {
  nome: "",
  empresa: "",
  assunto: "",
  email: "",
  telefone: "",
  tipoEmbalagem: "",
  segmento: "",
  numeroLojas: "",
  ondeConheceu: "",
  volume: "",
  mensagem: "",
};

const CD_ADDRESS = "BR-101, 9485 - Área D8 - Cidade Nova, Itajaí - SC, 88308-620";

type MapLocationKey = "fabrica" | "cd";

const MAP_LOCATIONS: Record<MapLocationKey, { address: string; embedSrc: string }> = {
  fabrica: {
    address: "Av. José Francisco Bernardes, 1751 - Areias, Camboriú - SC, 88345-200",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5!2d-48.6544!3d-27.0253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10b0b0b0b0b%3A0x0!2sAv.+Jos%C3%A9+Francisco+Bernardes%2C+1751+-+Areias%2C+Cambori%C3%BA+-+SC%2C+88345-200!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  },
  cd: {
    address: CD_ADDRESS,
    embedSrc: `https://maps.google.com/maps?q=${encodeURIComponent(CD_ADDRESS)}&hl=pt-BR&z=16&output=embed`,
  },
};

function getRecipientEmail(assunto: string): string {
  switch (assunto) {
    case "Falar com Recursos Humanos":
      return "rh@printbag.com.br";
    case "Quero ser um Fornecedor":
      return "compras@printbag.com.br";
    case "Sugestão ou Reclamação":
      return "sac@printbag.com.br";
    default:
      return "marketing@printbag.com.br";
  }
}

export default function ContatoPage() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [utmHidden, setUtmHidden] = useState(() => getContactFormUtmSnapshot());

  useEffect(() => {
    mergeMarketingParamsFromSearch(location.search || "");
    setUtmHidden(getContactFormUtmSnapshot());
  }, [location.search]);

  const [formData, setFormData] = useState(() => {
    const assuntoParam = searchParams.get("assunto");
    const mensagemParam = searchParams.get("mensagem");

    return {
      nome: "",
      empresa: "",
      assunto:
        assuntoParam && assuntoOptions.includes(assuntoParam) ? assuntoParam : "",
      email: "",
      telefone: "",
      tipoEmbalagem: "",
      segmento: "",
      numeroLojas: "",
      ondeConheceu: "",
      volume: "",
      mensagem: mensagemParam ? decodeURIComponent(mensagemParam) : "",
    };
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thanksOpen, setThanksOpen] = useState(false);
  const [mapLocation, setMapLocation] = useState<MapLocationKey>("fabrica");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    if (name === "assunto") {
      setFormData((prev) => {
        const next = { ...prev, assunto: value };
        if (value !== "Fazer um orçamento") {
          return {
            ...next,
            tipoEmbalagem: "",
            segmento: "",
            numeroLojas: "",
            ondeConheceu: "",
            volume: "",
          };
        }
        return { ...next, tipoEmbalagem: "", segmento: "", numeroLojas: "", ondeConheceu: "", volume: "" };
      });
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mergeMarketingParamsFromSearch(location.search || "");
    const utmPayload = getContactFormUtmSnapshot();
    setUtmHidden(utmPayload);

    setIsSubmitting(true);

    const resetForm = () => {
      setFormData({ ...emptyFormState });
    };

    /** Mesmo quando o e-mail falha, o lead já foi enviado (webhook/n8n/Pipedrive). */
    const acknowledgeLeadCaptured = () => {
      resetForm();
      setThanksOpen(true);
      toast.success("Dados enviados", {
        description: "Recebemos suas informações com sucesso.",
      });
    };

    const snapshot = { ...formData };
    const recipientEmail = getRecipientEmail(snapshot.assunto);
    const submissionId = crypto.randomUUID();
    const intendedChannel: "supabase" | "web3forms" = isSupabaseEnvConfigured()
      ? "supabase"
      : "web3forms";

    notifyContactFormWebhook({
      form: snapshot,
      recipientEmail,
      submissionId,
      webhookPhase: "lead",
      emailDelivery: {
        ok: false,
        channel: intendedChannel,
        error: null,
        pending: true,
      },
      utm: utmPayload,
    });

    let emailDelivery: EmailDeliveryMeta = {
      ok: false,
      channel: "none",
      error: null,
    };

    try {
      if (isSupabaseEnvConfigured()) {
        emailDelivery = { ...emailDelivery, channel: "supabase" };
        const id = crypto.randomUUID();

        const { error } = await supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "contact-form-notification",
            recipientEmail,
            idempotencyKey: `contact-${id}`,
            templateData: {
              nome: snapshot.nome,
              empresa: snapshot.empresa || undefined,
              assunto: snapshot.assunto,
              email: snapshot.email,
              telefone: snapshot.telefone,
              tipoEmbalagem:
                snapshot.assunto === "Fazer um orçamento"
                  ? snapshot.segmento || undefined
                  : snapshot.tipoEmbalagem || undefined,
              segmento: snapshot.segmento || undefined,
              numeroLojas: snapshot.numeroLojas || undefined,
              ondeConheceu: snapshot.ondeConheceu || undefined,
              volume: snapshot.volume || undefined,
              mensagem: snapshot.mensagem || undefined,
            },
          },
        });

        if (error) {
          emailDelivery = {
            ok: false,
            channel: "supabase",
            error: error.message || "Erro Supabase send-transactional-email",
          };
          acknowledgeLeadCaptured();
        } else {
          emailDelivery = { ok: true, channel: "supabase", error: null };
          resetForm();
          setThanksOpen(true);
        }
      } else {
        emailDelivery = { ...emailDelivery, channel: "web3forms" };
        const result = await submitContatoWeb3(snapshot);

        if (!result.ok) {
          emailDelivery = {
            ok: false,
            channel: "web3forms",
            error: result.message,
          };
          acknowledgeLeadCaptured();
        } else {
          emailDelivery = { ok: true, channel: "web3forms", error: null };
          resetForm();
          setThanksOpen(true);
        }
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Tente novamente mais tarde.";
      emailDelivery = {
        ok: false,
        channel: emailDelivery.channel,
        error: msg,
      };
      acknowledgeLeadCaptured();
    } finally {
      notifyContactFormWebhook({
        form: snapshot,
        recipientEmail,
        submissionId,
        webhookPhase: "delivery",
        emailDelivery,
        utm: utmPayload,
      });
      setIsSubmitting(false);
    }
  };

  const isOrcamento = formData.assunto === "Fazer um orçamento";

  return (
    <Layout>
      {/* Form Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Fale Conosco
              </h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo com suas informações e necessidades. Nossa equipe
                entrará em contato em até 24 horas úteis.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {CONTACT_FORM_UTM_KEYS.map((key) => (
                  <input key={key} type="hidden" name={key} value={utmHidden[key]} readOnly />
                ))}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nome Completo *
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Empresa
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Nome da empresa (opcional)"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Assunto *
                  </Label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecione...</option>
                    {assuntoOptions.map((assunto) => (
                      <option key={assunto} value={assunto}>
                        {assunto}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Telefone *
                    </Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>

                {isOrcamento && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="segmento" className="flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          Segmento
                        </Label>
                        <select
                          id="segmento"
                          name="segmento"
                          value={formData.segmento}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Selecione...</option>
                          {segmentOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="numeroLojas">Número de lojas</Label>
                        <select
                          id="numeroLojas"
                          name="numeroLojas"
                          value={formData.numeroLojas}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Selecione...</option>
                          {numeroLojasOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="volume">Volume Estimado</Label>
                        <select
                          id="volume"
                          name="volume"
                          value={formData.volume}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Selecione...</option>
                          {volumeOptionsOrcamento.map((vol) => (
                            <option key={vol} value={vol}>
                              {vol}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ondeConheceu">Por onde nos conheceu</Label>
                        <select
                          id="ondeConheceu"
                          name="ondeConheceu"
                          value={formData.ondeConheceu}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Selecione...</option>
                          {ondeConheceuOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Mensagem
                  </Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva suas necessidades, especificações ou dúvidas..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-muted rounded-2xl p-6">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                  Nossa Localização
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Button
                    type="button"
                    variant={mapLocation === "fabrica" ? "cta" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setMapLocation("fabrica")}
                  >
                    Fábrica
                  </Button>
                  <Button
                    type="button"
                    variant={mapLocation === "cd" ? "cta" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setMapLocation("cd")}
                  >
                    Centro de Distribuição
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {MAP_LOCATIONS[mapLocation].address}
                </p>
                <div className="aspect-video rounded-lg overflow-hidden bg-card border border-border">
                  <iframe
                    key={mapLocation}
                    title={
                      mapLocation === "fabrica"
                        ? "Mapa — Fábrica Printbag, Camboriú"
                        : "Mapa — Centro de Distribuição Printbag, Itajaí"
                    }
                    src={MAP_LOCATIONS[mapLocation].embedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={thanksOpen} onOpenChange={setThanksOpen}>
        <DialogContent className="sm:max-w-[440px] gap-0 overflow-hidden rounded-2xl border-primary/20 p-0 shadow-strong">
          <div className="relative bg-gradient-to-br from-primary/[0.12] via-primary/[0.06] to-transparent px-8 pb-8 pt-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-background shadow-medium ring-4 ring-primary/15 ring-offset-2 ring-offset-background">
              <CheckCircle2 className="h-10 w-10 text-primary" strokeWidth={2} />
            </div>
            <DialogHeader className="space-y-3 text-center sm:text-center">
              <DialogTitle className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-[1.65rem]">
                Obrigado!
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                Nossa equipe entrará em contato.
              </DialogDescription>
            </DialogHeader>
          </div>
          <DialogFooter className="border-t border-border/80 bg-muted/40 px-6 py-5 sm:justify-center">
            <Button
              type="button"
              variant="cta"
              className="min-w-[160px] rounded-full font-semibold shadow-glow-primary"
              onClick={() => setThanksOpen(false)}
            >
              Entendi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
