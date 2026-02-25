import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { 
  CheckCircle2, 
  Leaf, 
  ArrowRight,
  Recycle,
  ShoppingBag,
  Sparkles,
  Utensils,
  Pill,
  Store,
  Package,
  TreePine,
  Shirt,
  Footprints,
  Gem,
  Cookie,
  Zap,
  Award,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroFactory from "@/assets/hero-factory.jpg";
import sustainabilityHero from "@/assets/sustainability-hero.jpg";
import cardPrintmoda from "@/assets/card-printmoda.jpg";
import cardPrintfood from "@/assets/card-printfood.jpg";
import sectorFarmacias from "@/assets/sector-farmacias.jpg";
import sectorSupermercados from "@/assets/sector-supermercados.jpg";
import sectorFood from "@/assets/sector-food.jpg";

// Client logos - Alphabetical order
import logoAramis from "@/assets/clients/aramis.png";

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
import logoRiachuelo from "@/assets/clients/riachuelo.png";
import logoSubway from "@/assets/clients/subway.png";
import logoUsaflex from "@/assets/clients/usaflex.png";
import logoVivo from "@/assets/clients/vivo.png";

const clients = [
  { name: "Aramis", logo: logoAramis },
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
  { name: "Riachuelo", logo: logoRiachuelo, className: "!h-5 md:!h-8" },
  { name: "Subway", logo: logoSubway },
  { name: "Usaflex", logo: logoUsaflex },
  { name: "Vivo", logo: logoVivo, className: "!h-4 md:!h-7" },
];

const stats = [
  { value: "40+", label: "Anos de Experiência" },
  { value: "500+", label: "Clientes Atendidos" },
  { value: "+10 mil", label: "Pontos de Venda Atendidos" },
  { value: "+100M", label: "Embalagens/Ano" },
];

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/bcQ1I1dLc_U?autoplay=1&mute=1&loop=1&playlist=bcQ1I1dLc_U&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=12"
              title="Printbag Video Background"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full pointer-events-none"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
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
                Referência Nacional em Sustentabilidade
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
              Há mais de 40 anos desenvolvendo soluções personalizadas em sacolas e embalagens 
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
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className={`h-10 md:h-14 w-auto object-contain ${client.className || ""}`}
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
              Setores que Atendemos
            </h2>
            <p className="text-lg text-muted-foreground">
              Do design à entrega, oferecemos uma linha completa de sacolas e embalagens 
              personalizadas para atender às necessidades específicas da sua marca. 
              Trabalhamos com diversos segmentos:
            </p>
          </motion.div>

          {/* Sector Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vestuário */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-primary/10 flex items-center justify-center">
                <Shirt className="w-16 h-16 text-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Vestuário</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Caixas", "Envelopes", "Papel de Seda", "Etiquetas", "Tags"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="cta" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Calçados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-secondary/10 flex items-center justify-center">
                <Footprints className="w-16 h-16 text-secondary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Calçados</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Caixas", "Papel de Seda", "Etiquetas", "Tags"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="sustainability" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Cosméticos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Cosméticos</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Caixas", "Envelopes", "Papel de Seda", "Etiquetas", "Tags"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="cta" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Jóias / Acessórios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-secondary/10 flex items-center justify-center">
                <Gem className="w-16 h-16 text-secondary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Jóias / Acessórios</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Caixas", "Envelopes"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="sustainability" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Alimentos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-primary/10 flex items-center justify-center">
                <Cookie className="w-16 h-16 text-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Alimentos</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Caixas", "Sacos", "Papel Barreira", "Etiquetas"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="cta" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Food Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorFood} alt="Embalagens Food Service" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Food Service</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Sacos", "Caixas", "Guardanapos", "Papel Barreira"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="sustainability" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Farmácias */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorFarmacias} alt="Embalagens Farmácias" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Farmácias</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Caixas", "Sacos"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="cta" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Supermercados/Conveniência */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={sectorSupermercados} alt="Embalagens Supermercados e Conveniência" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Supermercados/Conveniência</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Sacos", "Caixas"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="sustainability" size="default" asChild className="w-full mt-auto">
                  <Link to="/solucoes">
                    Ver Produtos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Atacado/Distribuidores */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-card rounded-2xl shadow-medium overflow-hidden border border-border hover:shadow-strong transition-shadow duration-300 group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-primary/10 flex items-center justify-center">
                <Package className="w-16 h-16 text-primary/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-xl font-heading font-bold text-white">Atacado/Distribuidores</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="space-y-2 mb-5 flex-grow">
                  {["Sacolas", "Sacos", "Caixas", "Itens adicionais"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="cta" size="default" asChild className="w-full mt-auto">
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

      {/* Certifications Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Compromisso Ambiental
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-4 mb-6">
              Certificações e Conquistas
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossa dedicação à qualidade e sustentabilidade é reconhecida por certificações 
              e prêmios que validam nosso compromisso com a excelência.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Selo FSC */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <TreePine className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                Selo FSC
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Utilizamos matéria-prima certificada e originária de madeira de reflorestamento.
              </p>
            </motion.div>

            {/* Selo Energia Renovável */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                Selo Energia Renovável
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Reduzimos nossa emissão de gases de efeito estufa a partir da geração de energia renovável.
              </p>
            </motion.div>

            {/* Certificado ABVTEX */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                Certificado ABVTEX
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Buscamos ações de boas práticas socioambientais e de governança no ambiente corporativo.
              </p>
            </motion.div>

            {/* Certificado de Excelência Gráfica */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl p-6 shadow-medium border border-border hover:shadow-strong transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                Excelência Gráfica
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Excelência reconhecida com múltiplos títulos no Prêmio Fernando Pini.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <Button variant="sustainability" size="lg" asChild>
              <Link to="/sustentabilidade">
                Saiba Mais sobre Sustentabilidade
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
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
            <div className="flex justify-center">
              <Button variant="heroPrimary" size="xl" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contato">
                  Fale com um Consultor
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
