import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, XCircle, Loader2, MailX } from "lucide-react";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

export default function UnsubscribePage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }

    const validate = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const res = await fetch(
          `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: anonKey } }
        );
        const data = await res.json();
        if (res.ok && data.valid === true) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        setStatus("invalid");
      }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    setProcessing(true);
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (data?.success) setStatus("success");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 max-w-lg text-center">
          {status === "loading" && (
            <div className="space-y-4">
              <Loader2 className="w-12 h-12 mx-auto text-primary animate-spin" />
              <p className="text-muted-foreground">Verificando...</p>
            </div>
          )}
          {status === "valid" && (
            <div className="space-y-6">
              <MailX className="w-16 h-16 mx-auto text-muted-foreground" />
              <h1 className="text-2xl font-heading font-bold text-foreground">
                Cancelar Inscrição
              </h1>
              <p className="text-muted-foreground">
                Ao confirmar, você deixará de receber e-mails do nosso sistema.
              </p>
              <Button
                variant="cta"
                size="lg"
                onClick={handleUnsubscribe}
                disabled={processing}
              >
                {processing ? "Processando..." : "Confirmar Cancelamento"}
              </Button>
            </div>
          )}
          {status === "success" && (
            <div className="space-y-4">
              <CheckCircle2 className="w-16 h-16 mx-auto text-primary" />
              <h1 className="text-2xl font-heading font-bold text-foreground">
                Inscrição Cancelada
              </h1>
              <p className="text-muted-foreground">
                Você não receberá mais e-mails do nosso sistema.
              </p>
            </div>
          )}
          {status === "already" && (
            <div className="space-y-4">
              <CheckCircle2 className="w-16 h-16 mx-auto text-muted-foreground" />
              <h1 className="text-2xl font-heading font-bold text-foreground">
                Já Cancelado
              </h1>
              <p className="text-muted-foreground">
                Esta inscrição já foi cancelada anteriormente.
              </p>
            </div>
          )}
          {(status === "invalid" || status === "error") && (
            <div className="space-y-4">
              <XCircle className="w-16 h-16 mx-auto text-destructive" />
              <h1 className="text-2xl font-heading font-bold text-foreground">
                Link Inválido
              </h1>
              <p className="text-muted-foreground">
                Este link de cancelamento é inválido ou expirou.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
