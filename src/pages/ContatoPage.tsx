import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Send,
  Building2,
  User,
  Package,
  MessageSquare,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { toast } from "sonner";

const volumeOptions = [
  "Até 1.000 unidades",
  "1.000 a 5.000 unidades",
  "5.000 a 10.000 unidades",
  "10.000 a 50.000 unidades",
  "Acima de 50.000 unidades"
];

const productTypes = [
  "Sacolas de Papel",
  "Embalagens para Varejo",
  "Embalagens para E-commerce",
  "Caixas Presenteáveis",
  "Outro"
];

const assuntoOptions = [
  "Fazer um orçamento",
  "Falar com Marketing",
  "Falar com Recursos Humanos",
  "Quero ser um Fornecedor",
  "Sugestão ou Reclamação",
  "Outros"
];

export default function ContatoPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    assunto: "",
    email: "",
    telefone: "",
    tipoEmbalagem: "",
    volume: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const assuntoParam = searchParams.get("assunto");
    const mensagemParam = searchParams.get("mensagem");
    
    if (assuntoParam && assuntoOptions.includes(assuntoParam)) {
      setFormData(prev => ({ 
        ...prev, 
        assunto: assuntoParam,
        mensagem: mensagemParam ? decodeURIComponent(mensagemParam) : prev.mensagem
      }));
    } else if (mensagemParam) {
      setFormData(prev => ({ ...prev, mensagem: decodeURIComponent(mensagemParam) }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Mensagem enviada com sucesso!", {
      description: "Nossa equipe entrará em contato em breve."
    });

    setFormData({
      nome: "",
      empresa: "",
      assunto: "",
      email: "",
      telefone: "",
      tipoEmbalagem: "",
      volume: "",
      mensagem: ""
    });
    setIsSubmitting(false);
  };

  const isOrcamento = formData.assunto === "Fazer um orçamento";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-muted" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium uppercase tracking-wider text-sm"
            >
              Fale Conosco
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Entre em contato com nossa equipe e descubra como podemos 
              transformar suas ideias em embalagens extraordinárias.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28">
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
                Preencha o formulário abaixo com suas informações e necessidades. 
                Nossa equipe entrará em contato em até 24 horas úteis.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    {assuntoOptions.map(assunto => (
                      <option key={assunto} value={assunto}>{assunto}</option>
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
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="tipoEmbalagem" className="flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Tipo de Embalagem
                      </Label>
                      <select
                        id="tipoEmbalagem"
                        name="tipoEmbalagem"
                        value={formData.tipoEmbalagem}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Selecione...</option>
                        {productTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
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
                        {volumeOptions.map(vol => (
                          <option key={vol} value={vol}>{vol}</option>
                        ))}
                      </select>
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
                <div className="aspect-video rounded-lg overflow-hidden bg-card border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5!2d-48.6544!3d-27.0253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b10b0b0b0b0b%3A0x0!2sAv.+Jos%C3%A9+Francisco+Bernardes%2C+1751+-+Areias%2C+Cambori%C3%BA+-+SC%2C+88345-200!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
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
    </Layout>
  );
}
