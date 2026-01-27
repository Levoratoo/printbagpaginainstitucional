import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Box,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ProductSelector } from "@/components/solucoes/ProductSelector";
import productsCollection from "@/assets/products-collection.jpg";

const finishes = [
  {
    icon: Sparkles,
    title: "Hot Stamping",
    description: "Acabamento metalizado em ouro, prata ou cores especiais"
  },
  {
    icon: Layers,
    title: "Laminação",
    description: "Proteção extra com acabamento fosco ou brilhante"
  },
  {
    icon: Printer,
    title: "Impressão Offset",
    description: "Alta definição com até 6 cores e tons especiais"
  },
  {
    icon: Box,
    title: "Relevo Seco",
    description: "Textura sofisticada que destaca elementos da marca"
  }
];

const advantages = [
  "Mínimo de 500 unidades por pedido",
  "Prova de cor digital ou física",
  "Equipe de design para auxiliar no desenvolvimento",
  "Entrega em todo o Brasil",
  "Sistema JIT para reposições rápidas",
  "Certificação FSC disponível"
];

export default function SolucoesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-muted" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary font-medium uppercase tracking-wider text-sm"
              >
                Nossas Soluções
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mt-4 mb-6"
              >
                Embalagens que{" "}
                <span className="text-gradient-primary">Encantam</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8"
              >
                Do conceito à entrega, oferecemos uma linha completa de soluções 
                em embalagens personalizadas para transformar a experiência do seu cliente.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="cta" size="xl" asChild>
                  <Link to="/contato?assunto=Fazer um orçamento">
                    Solicite um Orçamento
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={productsCollection} 
                  alt="Coleção de sacolas e embalagens Printbag" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Selection Section */}
      <ProductSelector />

      {/* Finishes Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Acabamentos Premium
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Diferenciais que Encantam
            </h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos diversos tipos de acabamentos para tornar sua embalagem única e memorável.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {finishes.map((finish, index) => (
              <motion.div
                key={finish.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <finish.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {finish.title}
                </h3>
                <p className="text-muted-foreground">
                  {finish.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Por que Printbag?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-8">
                Vantagens de Trabalhar Conosco
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{advantage}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                Pronto para Transformar sua Marca?
              </h3>
              <p className="text-primary-foreground/80 mb-8">
                Nossa equipe está pronta para desenvolver a embalagem perfeita para o seu negócio. 
                Entre em contato e receba um orçamento personalizado.
              </p>
              <Button variant="secondary" size="xl" asChild className="w-full md:w-auto">
                <Link to="/contato?assunto=Fazer um orçamento">
                  Fale com um Especialista
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
