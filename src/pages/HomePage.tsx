import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { 
  CheckCircle2, 
  Leaf, 
  ArrowRight,
  Recycle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroFactory from "@/assets/hero-factory.jpg";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";
import cardPrintmoda from "@/assets/card-printmoda.jpg";
import cardPrintfood from "@/assets/card-printfood.jpg";

// Client logos - Alphabetical order
import logoAramis from "@/assets/clients/aramis.png";
import logoArezzo from "@/assets/clients/arezzo.png";
import logoCarolinaHerrera from "@/assets/clients/carolina-herrera.png";
import logoClaro from "@/assets/clients/claro.png";
import logoConstance from "@/assets/clients/constance.png";
import logoDemocrata from "@/assets/clients/democrata.png";
import logoGrendene from "@/assets/clients/grendene.png";
import logoLacoste from "@/assets/clients/lacoste.png";
import logoMadero from "@/assets/clients/madero.png";
import logoMaryKay from "@/assets/clients/mary-kay.png";
import logoMelissa from "@/assets/clients/melissa.png";
import logoMilon from "@/assets/clients/milon.png";
import logoRaiaDrogasil from "@/assets/clients/raiadrogasil.png";
import logoSubway from "@/assets/clients/subway.png";
import logoUsaflex from "@/assets/clients/usaflex.png";

const clients = [
  { name: "Aramis", logo: logoAramis },
  { name: "Arezzo", logo: logoArezzo },
  { name: "Carolina Herrera", logo: logoCarolinaHerrera },
  { name: "Claro", logo: logoClaro },
  { name: "Constance", logo: logoConstance },
  { name: "Democrata", logo: logoDemocrata },
  { name: "Grendene", logo: logoGrendene },
  { name: "Lacoste", logo: logoLacoste },
  { name: "Madero", logo: logoMadero },
  { name: "Mary Kay", logo: logoMaryKay },
  { name: "Melissa", logo: logoMelissa },
  { name: "Milon", logo: logoMilon },
  { name: "RaiaDrogasil", logo: logoRaiaDrogasil },
  { name: "Subway", logo: logoSubway },
  { name: "Usaflex", logo: logoUsaflex },
];

const stats = [
  { value: "25+", label: "Anos de Experiência" },
  { value: "500+", label: "Clientes Atendidos" },
  { value: "50M+", label: "Embalagens/Ano" },
  { value: "99%", label: "Taxa de Satisfação" },
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
          <div className="absolute inset-0 bg-primary/20" />
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
              <span className="text-secondary" style={{ color: '#0a8a52' }}>Transformam</span>{" "}
              sua Marca
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground mb-8 max-w-2xl"
            >
              Há mais de 25 anos desenvolvendo soluções personalizadas em sacolas e embalagens 
              para as maiores marcas do Brasil. Qualidade, sustentabilidade e tecnologia.
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
      <section className="py-10 bg-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Marcas que confiam na Printbag
            </p>
          </motion.div>
        </div>
        
        {/* Infinite Scroll Carousel */}
        <div className="relative">
          <div className="flex animate-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Nosso Portfólio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Soluções Completas em Embalagens
            </h2>
            <p className="text-lg text-muted-foreground">
              Do design à entrega, oferecemos uma linha completa de sacolas e embalagens 
              personalizadas para atender às necessidades específicas da sua marca.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Printmoda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={cardPrintmoda} 
                  alt="Linha Printmoda - Sacolas e embalagens para moda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-heading font-bold text-white">Linha Printmoda</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Soluções elegantes para o mercado da moda e varejo.
                </p>
                <div className="space-y-3">
                  {[
                    "Sacolas de papel kraft e couché",
                    "Caixas personalizadas",
                    "Envelopes e tags",
                    "Etiquetas e papel de seda"
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="cta" size="lg" asChild className="w-full mt-6">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Card PrintFood */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={cardPrintfood} 
                  alt="Linha PrintFood - Embalagens para alimentos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-heading font-bold text-white">Linha PrintFood</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  Embalagens seguras e práticas para o setor alimentício.
                </p>
                <div className="space-y-3">
                  {[
                    "Sacolas e sacos para delivery",
                    "Caixas para alimentos",
                    "Guardanapos personalizados",
                    "Papel de seda e papel barreira"
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="sustainability" size="lg" asChild className="w-full mt-6">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
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
