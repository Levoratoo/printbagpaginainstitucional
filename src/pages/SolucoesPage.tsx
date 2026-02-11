import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  CheckCircle2,
  Package,
  Sparkles,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ProductSelector } from "@/components/solucoes/ProductSelector";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import solucoesHero from "@/assets/solucoes-hero.jpg";

const finishes = [
  {
    title: "Hot Stamping",
    description: "Acabamento metalizado aplicado a quente, disponível em ouro, prata e cores especiais."
  },
  {
    title: "Laminação Fosca",
    description: "Camada protetora com toque aveludado e acabamento elegante."
  },
  {
    title: "Laminação Brilhante",
    description: "Acabamento com brilho intenso que realça cores e contrastes."
  },
  {
    title: "Laminação Soft Touch",
    description: "Laminação premium com toque macio e sensorial."
  },
  {
    title: "Impressão Offset",
    description: "Impressão de alta definição com fidelidade de cores e riqueza de detalhes."
  },
  {
    title: "Relevo Seco",
    description: "Acabamento em alto ou baixo relevo sem uso de tinta."
  },
  {
    title: "Relevo Combinado",
    description: "Combinação de relevo com impressão ou hot stamping."
  },
  {
    title: "Verniz Localizado",
    description: "Aplicação de verniz em áreas específicas da embalagem."
  },
  {
    title: "Verniz Total",
    description: "Camada de verniz aplicada em toda a superfície."
  },
  {
    title: "Corte Especial",
    description: "Formato personalizado além do padrão tradicional."
  },
  {
    title: "Alças Especiais",
    description: "Variedade de opções como algodão, gorgurão, papel torcido, cetim e alças personalizadas."
  }
];

const quickLinks = [
  { id: "produtos", label: "Produtos", icon: Package, href: "#produtos" },
  { id: "acabamentos", label: "Acabamentos", icon: Sparkles, href: "#acabamentos" },
  { id: "vantagens", label: "Vantagens Printbag", icon: Award, href: "#vantagens" }
];

const advantages = [
  "Mínimo de 5000 unidades por formato",
  "Prova de cor digital ou física",
  "Equipe de especialista para auxiliar no desenvolvimento",
  "Entrega em todo o Brasil",
  "Sistema JIT para reposições rápidas",
  "Certificação FSC disponível"
];

export default function SolucoesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={solucoesHero} alt="Embalagens Printbag" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm"
              >
                Nossas Soluções
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mt-4 mb-6"
              >
                Embalagens que{" "}
                <span className="text-gradient-primary">Encantam</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-primary-foreground/80 mb-8"
              >
                Do conceito à entrega, oferecemos uma linha completa de soluções 
                em embalagens personalizadas para transformar a experiência do seu cliente.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {quickLinks.map((link, index) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="flex items-center gap-2 px-5 py-3 bg-white/10 border border-white/20 rounded-xl hover:border-primary hover:bg-primary/20 transition-all duration-300 group"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-primary-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </a>
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Selection Section */}
      <section id="produtos">
        <ProductSelector />
      </section>

      {/* Finishes Section */}
      <section id="acabamentos" className="py-20 md:py-28 bg-muted">
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
              Diferenciais que transformam a embalagem em experiência de marca
            </p>
          </motion.div>

          <div className="px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {finishes.map((finish, index) => (
                  <CarouselItem key={finish.title} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="border-border hover:border-primary/50 transition-colors group h-full">
                        <CardContent className="p-0">
                          {/* Image placeholder */}
                          <div className="aspect-[4/3] bg-muted-foreground/10 rounded-t-lg flex items-center justify-center">
                            <Sparkles className="w-12 h-12 text-muted-foreground/30" />
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                              {finish.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {finish.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="vantagens" className="py-20 md:py-28">
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
