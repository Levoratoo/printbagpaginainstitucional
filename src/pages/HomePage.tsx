import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Leaf, 
  Truck, 
  Award, 
  Users, 
  Factory,
  ArrowRight,
  Clock,
  Zap,
  Shield,
  Recycle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroFactory from "@/assets/hero-factory.jpg";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";
import productsCollection from "@/assets/products-collection.jpg";

const clients = [
  "Melissa",
  "Usaflex", 
  "Claro",
  "Milon",
  "Grendene",
  "Arezzo"
];

const pillars = [
  {
    icon: Clock,
    title: "Entrega JIT",
    description: "Sistema Just-in-Time que garante entregas precisas, reduzindo custos de estoque e otimizando sua cadeia de suprimentos."
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Processos ágeis e equipe especializada para atender demandas urgentes sem comprometer a qualidade."
  },
  {
    icon: Shield,
    title: "Qualidade Premium",
    description: "Controle rigoroso em todas as etapas de produção, garantindo excelência em cada embalagem."
  },
  {
    icon: Recycle,
    title: "Sustentabilidade",
    description: "Compromisso com o meio ambiente através de materiais reciclados e processos eco-friendly."
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Relacionamento próximo e consultivo para entender e superar as expectativas do seu negócio."
  }
];

const stats = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "500+", label: "Clientes Atendidos" },
  { value: "50M+", label: "Embalagens/Ano" },
  { value: "99%", label: "Taxa de Satisfação" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroFactory} 
            alt="Fábrica Printbag - Linha de produção moderna" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6 border border-secondary/30">
                Líder em Embalagens Sustentáveis
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
            >
              Embalagens que{" "}
              <span className="text-secondary">Transformam</span>{" "}
              sua Marca
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
            >
              Há mais de 10 anos desenvolvendo soluções personalizadas em sacolas e embalagens 
              para as maiores marcas do Brasil. Qualidade, sustentabilidade e entrega JIT.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="heroPrimary" size="xl" asChild>
                <Link to="/contato">
                  Solicite um Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/solucoes">Conheça Nossas Soluções</Link>
              </Button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Marcas que confiam na Printbag
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl md:text-3xl font-heading font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Pillars Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Nosso Diferencial
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Os 5 Pilares do Processo Comercial
            </h2>
            <p className="text-lg text-muted-foreground">
              Construímos parcerias duradouras baseadas em pilares sólidos que garantem 
              excelência em cada etapa do processo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <pillar.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium uppercase tracking-wider text-sm">
                Nosso Portfólio
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
                Soluções Completas em Embalagens
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Do design à entrega, oferecemos uma linha completa de sacolas e embalagens 
                personalizadas para atender às necessidades específicas da sua marca.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Sacolas de papel kraft e couché",
                  "Embalagens para varejo e e-commerce",
                  "Impressão offset e flexográfica",
                  "Acabamentos especiais e laminação"
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="cta" size="lg" asChild>
                <Link to="/solucoes">
                  Ver Todas as Soluções
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={productsCollection} 
                  alt="Coleção de sacolas e embalagens Printbag" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-glow-primary">
                <div className="text-3xl font-heading font-bold">100%</div>
                <div className="text-sm text-primary-foreground/80">Personalizável</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={sustainabilityHero} 
                  alt="Embalagens sustentáveis Printbag" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-glow-secondary">
                <Leaf className="w-8 h-8 mb-2" />
                <div className="text-sm font-semibold">Certificação FSC</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-secondary font-medium uppercase tracking-wider text-sm">
                Compromisso Ambiental
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
                Sustentabilidade em Cada Embalagem
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Acreditamos que é possível criar embalagens de alta qualidade com 
                responsabilidade ambiental. Nossa produção utiliza materiais reciclados 
                e processos que minimizam o impacto ao meio ambiente.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">80%</div>
                    <div className="text-sm text-muted-foreground">Material Reciclado</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">100%</div>
                    <div className="text-sm text-muted-foreground">Reciclável</div>
                  </div>
                </div>
              </div>

              <Button variant="sustainability" size="lg" asChild>
                <Link to="/sustentabilidade">
                  Saiba Mais
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Pronto para Transformar sua Marca?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Entre em contato com nossa equipe e descubra como podemos criar 
              a embalagem perfeita para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroPrimary" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contato">
                  Solicite um Orçamento
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/contato">Fale com um Consultor JIT</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
