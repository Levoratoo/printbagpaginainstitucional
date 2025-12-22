import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Package, 
  ShoppingBag, 
  Palette, 
  Printer,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Box
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import productsCollection from "@/assets/products-collection.jpg";

const categories = [
  {
    id: "sacolas",
    icon: ShoppingBag,
    title: "Sacolas de Papel",
    description: "Sacolas personalizadas em papel kraft, couché ou reciclado, com diversas opções de acabamento.",
    features: [
      "Papel kraft branco ou pardo",
      "Papel couché fosco ou brilho",
      "Alças de papel, cordão ou fita",
      "Diversos tamanhos disponíveis"
    ]
  },
  {
    id: "embalagens",
    icon: Package,
    title: "Embalagens",
    description: "Caixas e embalagens para varejo, e-commerce e presenteáveis com máxima qualidade.",
    features: [
      "Caixas rígidas premium",
      "Embalagens para e-commerce",
      "Caixas presenteáveis",
      "Embalagens promocionais"
    ]
  },
  {
    id: "personalizacao",
    icon: Palette,
    title: "Personalização",
    description: "Impressão de alta qualidade e acabamentos especiais que valorizam sua marca.",
    features: [
      "Impressão offset até 6 cores",
      "Hot stamping ouro e prata",
      "Laminação fosca e brilho",
      "Verniz localizado"
    ]
  }
];

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
                  <Link to="/contato">
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

      {/* Categories Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Categorias
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Linha Completa de Produtos
            </h2>
            <p className="text-lg text-muted-foreground">
              Soluções para cada necessidade do seu negócio, com qualidade premium 
              e personalização total.
            </p>
          </motion.div>

          <div className="space-y-20">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="cta" size="lg" asChild>
                    <Link to="/contato">
                      Solicitar Orçamento
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={`bg-muted rounded-2xl p-8 md:p-12 aspect-square flex items-center justify-center ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <category.icon className="w-32 h-32 text-primary/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Acabamentos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Detalhes que Fazem a Diferença
            </h2>
            <p className="text-lg text-muted-foreground">
              Acabamentos premium que elevam a percepção de valor da sua marca.
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
                className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <finish.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {finish.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
                Por que Escolher a Printbag
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
                Vantagens Exclusivas
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Oferecemos muito mais do que embalagens. Entregamos uma experiência 
                completa de parceria e suporte para o sucesso da sua marca.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={advantage}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
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
              <h3 className="text-2xl font-heading font-bold mb-6">
                Processo Simplificado
              </h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Briefing", desc: "Entendemos suas necessidades e objetivos" },
                  { step: "02", title: "Desenvolvimento", desc: "Criamos o projeto e enviamos aprovação" },
                  { step: "03", title: "Produção", desc: "Fabricação com controle de qualidade rigoroso" },
                  { step: "04", title: "Entrega", desc: "Logística eficiente em todo o Brasil" }
                ].map((item, index) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-heading font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Pronto para Criar sua Embalagem?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato e receba um orçamento personalizado para o seu projeto.
            </p>
            <Button variant="heroPrimary" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contato">
                Solicite um Orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
