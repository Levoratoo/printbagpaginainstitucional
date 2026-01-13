import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Package, 
  ShoppingBag, 
  Printer,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Box,
  FileText,
  Tag,
  Scissors,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import productsCollection from "@/assets/products-collection.jpg";

// Product types for the first selection
const productTypes = [
  { id: "sacolas", label: "Sacolas", icon: ShoppingBag },
  { id: "saco", label: "Saco", icon: Package },
  { id: "caixa", label: "Caixa", icon: Box },
  { id: "envelope", label: "Envelope", icon: FileText },
  { id: "etiqueta", label: "Etiqueta", icon: Tag },
  { id: "papel-seda", label: "Papel de Seda", icon: Scissors },
  { id: "tag", label: "Tag", icon: Tag },
  { id: "papel-barreira", label: "Papel Barreira", icon: Layers },
  { id: "outro", label: "Outro", icon: Package }
];

// Sub-options for each product type
const productSubOptions: Record<string, { id: string; label: string; description: string }[]> = {
  sacolas: [
    { id: "sem-enobrecimento", label: "Sacolas sem enobrecimentos", description: "Sacolas simples, funcionais e econômicas" },
    { id: "enobrecidas", label: "Sacolas enobrecidas", description: "Sacolas com acabamentos premium como hot stamping, relevo e laminação" }
  ],
  saco: [
    { id: "sem-enobrecimento", label: "Sacos sem enobrecimentos", description: "Sacos funcionais para diversas aplicações" },
    { id: "enobrecidos", label: "Sacos enobrecidos", description: "Sacos com acabamentos especiais" }
  ],
  caixa: [
    { id: "sem-enobrecimento", label: "Caixas sem enobrecimentos", description: "Caixas funcionais e resistentes" },
    { id: "enobrecidas", label: "Caixas enobrecidas", description: "Caixas com acabamentos premium" }
  ],
  envelope: [
    { id: "sem-enobrecimento", label: "Envelopes sem enobrecimentos", description: "Envelopes práticos e funcionais" },
    { id: "enobrecidos", label: "Envelopes enobrecidos", description: "Envelopes com acabamentos especiais" }
  ],
  etiqueta: [
    { id: "adesiva", label: "Etiquetas adesivas", description: "Etiquetas com adesivo de alta qualidade" },
    { id: "tag", label: "Etiquetas tipo tag", description: "Etiquetas para pendurar em produtos" }
  ],
  "papel-seda": [
    { id: "impresso", label: "Papel de seda impresso", description: "Papel de seda personalizado com sua marca" },
    { id: "liso", label: "Papel de seda liso", description: "Papel de seda em cores sólidas" }
  ],
  tag: [
    { id: "simples", label: "Tags simples", description: "Tags funcionais para identificação" },
    { id: "enobrecidas", label: "Tags enobrecidas", description: "Tags com acabamentos premium" }
  ],
  "papel-barreira": [
    { id: "alimentos", label: "Para alimentos", description: "Papel barreira para uso alimentício" },
    { id: "outros", label: "Outras aplicações", description: "Papel barreira para diversas aplicações" }
  ],
  outro: [
    { id: "personalizado", label: "Produto personalizado", description: "Conte-nos o que você precisa" }
  ]
};

// Example products (placeholder for now)
const exampleProducts: Record<string, { title: string; description: string }[]> = {
  "sacolas-sem-enobrecimento": [
    { title: "Sacola Kraft Natural", description: "Sacola em papel kraft com alça torcida" },
    { title: "Sacola Branca Lisa", description: "Sacola em papel branco com impressão simples" },
    { title: "Sacola Reciclada", description: "Sacola em papel reciclado com design clean" }
  ],
  "sacolas-enobrecidas": [
    { title: "Sacola Premium Hot Stamping", description: "Sacola com hot stamping dourado e laminação fosca" },
    { title: "Sacola Luxo Relevo", description: "Sacola com relevo seco e verniz localizado" },
    { title: "Sacola Boutique", description: "Sacola com acabamento especial para marcas premium" }
  ]
};

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
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null);

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
    setSelectedSubOption(null);
  };

  const handleSubOptionSelect = (subOptionId: string) => {
    setSelectedSubOption(subOptionId);
  };

  const handleReset = () => {
    setSelectedProduct(null);
    setSelectedSubOption(null);
  };

  const currentSubOptions = selectedProduct ? productSubOptions[selectedProduct] || [] : [];
  const currentExamples = selectedProduct && selectedSubOption 
    ? exampleProducts[`${selectedProduct}-${selectedSubOption}`] || []
    : [];

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

      {/* Product Selection Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Monte seu Orçamento
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Qual Produto Você Procura?
            </h2>
            <p className="text-lg text-muted-foreground">
              Selecione o tipo de produto desejado e explore nossas opções.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Selection Area */}
            <div className="space-y-8">
              {/* Breadcrumb / Reset */}
              <AnimatePresence>
                {selectedProduct && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <button 
                      onClick={handleReset}
                      className="text-primary hover:underline"
                    >
                      Produtos
                    </button>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">
                      {productTypes.find(p => p.id === selectedProduct)?.label}
                    </span>
                    {selectedSubOption && (
                      <>
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground font-medium">
                          {currentSubOptions.find(s => s.id === selectedSubOption)?.label}
                        </span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 1: Product Type Selection */}
              <AnimatePresence mode="wait">
                {!selectedProduct && (
                  <motion.div
                    key="products"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Selecione o tipo de produto:
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {productTypes.map((product, index) => (
                        <motion.button
                          key={product.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => handleProductSelect(product.id)}
                          className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <product.icon className="w-6 h-6 text-primary" />
                          </div>
                          <span className="font-medium text-foreground text-center">
                            {product.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Sub-option Selection */}
                {selectedProduct && !selectedSubOption && currentSubOptions.length > 0 && (
                  <motion.div
                    key="suboptions"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      O que você procura?
                    </h3>
                    <div className="space-y-4">
                      {currentSubOptions.map((option, index) => (
                        <motion.button
                          key={option.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleSubOptionSelect(option.id)}
                          className="w-full text-left p-6 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {option.label}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                {option.description}
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Examples */}
                {selectedProduct && selectedSubOption && (
                  <motion.div
                    key="examples"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Exemplos de produtos:
                    </h3>
                    {currentExamples.length > 0 ? (
                      <div className="space-y-4">
                        {currentExamples.map((example, index) => (
                          <motion.div
                            key={example.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-xl border border-border bg-card"
                          >
                            <h4 className="font-semibold text-foreground">{example.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{example.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 rounded-xl border border-border bg-card text-center">
                        <p className="text-muted-foreground">
                          Exemplos em breve. Entre em contato para saber mais!
                        </p>
                      </div>
                    )}
                    
                    <Button variant="cta" size="lg" asChild className="w-full">
                      <Link to="/contato">
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Image Placeholder Area */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-muted rounded-2xl p-8 md:p-12 aspect-square flex items-center justify-center sticky top-32"
            >
              <AnimatePresence mode="wait">
                {selectedProduct ? (
                  <motion.div
                    key={selectedProduct}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center"
                  >
                    {(() => {
                      const ProductIcon = productTypes.find(p => p.id === selectedProduct)?.icon || Package;
                      return <ProductIcon className="w-32 h-32 text-primary/30 mx-auto mb-4" />;
                    })()}
                    <p className="text-muted-foreground">
                      Imagem do produto em breve
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center"
                  >
                    <Package className="w-32 h-32 text-primary/20 mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Selecione um produto para ver exemplos
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
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
